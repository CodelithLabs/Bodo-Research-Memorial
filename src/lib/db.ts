/**
 * ============================================
 * Database Connection - MongoDB/Mongoose
 * ============================================
 * This module provides a singleton connection to MongoDB
 * using Mongoose. It handles connection pooling, error handling,
 * and automatic reconnection.
 * 
 * Architecture Decision:
 * - Using Mongoose for schema validation and modeling
 * - Singleton pattern to prevent multiple connections
 * - Global caching for development hot reloading
 */

import mongoose, { type Mongoose } from 'mongoose';

declare global {
    // Allow global reference to prevent connection issues in development
    var mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
    } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable\n' +
        'Add this to your .env.local file:\n' +
        'MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bodo-archive'
    );
}

/**
 * Cached connection reference for hot reloading in development
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB with connection pooling and retry logic
 */
async function connectDB(): Promise<typeof mongoose> {
    // Return cached connection if available
    if (cached!.conn) {
        console.log('📦 Using existing MongoDB connection');
        return cached!.conn;
    }

    // Create new connection if not already in progress
    if (!cached!.promise) {
        const opts = {
            bufferCommands: false, // Disable mongoose buffering
            maxPoolSize: 10, // Maximum number of connections in pool
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
            socketTimeoutMS: 45000, // Socket timeout
        };

        console.log('🔄 Establishing new MongoDB connection...');
        console.log(`📡 URI: ${MONGODB_URI?.replace(/\/\/.*:.*@/, '//[credentials hidden]@')}`);

        cached!.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose: Mongoose) => {
            console.log('✅ MongoDB connected successfully');

            // Set up connection event listeners
            mongoose.connection.on('error', (err: Error) => {
                console.error('❌ MongoDB connection error:', err);
            });

            mongoose.connection.on('disconnected', () => {
                console.warn('⚠️ MongoDB disconnected - attempting reconnection...');
            });

            mongoose.connection.on('reconnected', () => {
                console.log('🔄 MongoDB reconnected');
            });

            return mongoose;
        });
    } else {
        console.log('⏳ Waiting for existing connection promise...');
    }

    try {
        cached!.conn = await cached!.promise;
    } catch (e) {
        cached!.promise = null;
        throw e;
    }

    return cached!.conn;
}

/**
 * Disconnect from MongoDB
 * Useful for cleanup in testing or serverless environments
 */
async function disconnectDB(): Promise<void> {
    if (cached!.conn) {
        await mongoose.disconnect();
        cached!.conn = null;
        cached!.promise = null;
        console.log('🔌 MongoDB disconnected');
    }
}

/**
 * Get the current connection status
 */
function getConnectionStatus(): string {
    const state = mongoose.connection.readyState;
    const states = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting',
    };
    return states[state as keyof typeof states] || 'unknown';
}

export { connectDB, disconnectDB, getConnectionStatus };
export default connectDB;
