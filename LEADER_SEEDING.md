# Leader Data Integration Guide

This guide provides step-by-step instructions for seeding Bodo leader data into MongoDB and verifying it appears on the `/leaders` page.

## 📋 Overview

The Bodo Research Memorial project includes:
- **46 Bodo leaders** spanning early visionaries, modern leaders, and regional figures
- **Complete seed data** in `src/data/leaders-seed.json`
- **Automated seed script** in `scripts/seedLeaders.ts`
- **Upsert functionality** to prevent duplicate entries

## 🚀 Quick Start

### 1. Prerequisites

Ensure you have:
- Node.js 22.x or higher
- MongoDB connection (Atlas or local)
- `.env.local` file with `MONGODB_URI`

### 2. Set Up Environment Variables

Create or update `.env.local`:

```bash
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bodo-archive

# Optional: other environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Getting your MongoDB URI:**
- **MongoDB Atlas (Cloud)**: Go to Cluster → Connect → Drivers → Copy the connection string
- **Local MongoDB**: `mongodb://localhost:27017/bodo-archive`

### 3. Run the Seed Script

From the project root:

```bash
# Standard seed (upsert by slug - idempotent)
npm run seed:leaders

# Force reseed (delete all, then create)
npm run seed:leaders:force
```

**Output example:**
```
╔════════════════════════════════════════════════════╗
║         Bodo Research - Leader Seed Script         ║
╚════════════════════════════════════════════════════╝

Mode: Standard seed (upsert by slug)

📦 Connecting to MongoDB...
   URI: mongodb+srv://[credentials hidden]@cluster.mongodb.net/bodo-archive
✅ Connected to MongoDB

📖 Loaded 46 leaders from seed file

🌱 Seeding 46 leaders...

✨ created   Gurudev Kalicharan Brahma
✨ created   Joy Bhadra Hagjer
... (40 more)
🔄 updated   Supen Chandra Brahma

==================================================
📊 Seed Summary:
   ✨ Created: 45
   🔄 Updated: 1
   ❌ Errors:  0
==================================================

🔌 Disconnected from MongoDB
```

### 4. Verify Data in MongoDB

Use MongoDB Compass or Atlas UI:

```javascript
// MongoDB shell query
db.leaders.countDocuments()          // Should return 46
db.leaders.findOne({ slug: "upendra-nath-brahma" })  // Sample leader
db.leaders.find({ featured: true })  // Find featured leaders
```

### 5. Verify Data on the Web Page

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the leaders page:**
   - Navigate to `http://localhost:3000/leaders`
   - You should see:
     - ✅ Full list of 46 leaders
     - ✅ Search functionality (powered by full-text search)
     - ✅ Filter by region (assam, north-bengal, darjeeling, etc.)
     - ✅ Tags displayed on each card (political leader, militant, government official, etc.)
     - ✅ Click on a leader to view full profile

3. **Test search:**
   - Search for "Upendra Nath Brahma" → Should find "Bodofa"
   - Search for "militant" → Should find leaders with that tag
   - Search for "BLT" → Should find related leaders

4. **Individual leader profile:**
   - Click any leader card to see:
     - ✅ Full biography
     - ✅ Timeline of events (if available)
     - ✅ Contributions list
     - ✅ Related tags
     - ✅ Status badge (Published)

## 📊 Seed Data Structure

Each leader entry includes:

```json
{
  "name": "Upendra Nath Brahma",
  "slug": "upendra-nath-brahma",                    // Auto-generated, unique
  "photo": null,                                     // To be added later
  "birthDate": null,                                 // ISO 8601 date or null
  "deathDate": null,
  "region": "assam",                                 // assam | north-bengal | darjeeling | bhutan | other
  "shortBio": "Bodofa who launched the Bodoland movement in 1987.",
  "biography": "Full biography text...",
  "contributions": [                                 // Key achievements
    "Led ABSU as President",
    "Launched the separate Bodoland state movement in 1987"
  ],
  "timeline": [                                      // Major milestones
    {
      "year": 1987,
      "title": "Bodoland movement launched",
      "description": "As ABSU President, initiated the movement..."
    }
  ],
  "references": [                                    // Source citations
    { "title": "News reports, Wikipedia" }
  ],
  "tags": ["movement leader", "political leader"],  // Categories for filtering
  "status": "published",                             // draft | review | published | archived
  "featured": false                                  // Highlight on homepage
}
```

## 🖼️ Adding Leader Photos

### Current Status
All photos are set to `null`. Here's how to add them:

### Option 1: From Online URLs

Use the Admin Panel to update leaders:
1. Go to `/admin/leaders`
2. Click "Edit" on any leader
3. Upload photo URL:
   - **News portals**: Search "Hagrama Mohilary" on news.google.com
   - **Government archives**: Assam Legislative Assembly official website
   - **Cultural institutions**: Bodo Sahitya Sabha website

**Recommended sources:**
- Assam Legislative Assembly archives: `assamla.gov.in`
- News portals: Times of India, Assam Tribune, Northeast Chronicle
- Government of Assam official pages

### Option 2: From Bodoland Martyrs' Cemetery

For martyrs (Jwhwlao Swmbla Basumatary, Subungthini Thandwi, etc.):
1. **Visit on-site** or request photos from:
   - Bodoland Martyrs' Cemetery Management
   - Bodo Cultural Association
   - Local historian contacts

2. **Once you have photos**, upload to:
   - AWS S3 bucket or your image CDN
   - Copy the URL and add to the leader record

### Option 3: Using the Admin Panel

```bash
# 1. Start the development server
npm run dev

# 2. Go to Admin Panel
# Navigate to http://localhost:3000/admin/leaders

# 3. Bulk Update (CSV Import)
# Prepare CSV: slug, photoUrl
# Use the "Import Photos" feature

# 4. Single Update
# Click edit on any leader card
# Paste image URL in the "Photo" field
# Click "Save"
```

### Example Photo URLs to Add

Once you source photos, update them in MongoDB:

```javascript
// MongoDB shell
db.leaders.updateOne(
  { slug: "hagrama-mohilary" },
  {
    $set: {
      photo: "https://your-cdn.com/images/hagrama-mohilary.jpg"
    }
  }
);

// Or via Admin Panel UI
// Navigate to /admin/leaders and click "Edit"
```

## 🔒 Securing the Admin Panel

The admin panel at `/admin` should be secured. Here's how:

### 1. Authentication Setup

The project uses NextAuth.js. Admin routes are protected in `src/app/admin/middleware.ts`:

```typescript
// src/app/admin/middleware.ts
export async function middleware(request: NextRequest) {
  const session = await getSession({ req: request });

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check if user has admin role
  if (session.user.role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}
```

### 2. Create Admin Users

Use the authentication system to create admin accounts:

```bash
# 1. Register a new user
# Go to http://localhost:3000/auth/register

# 2. Update user role in MongoDB
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
);

# 3. Verify
db.users.findOne({ email: "admin@example.com" });
```

### 3. Environment Variables

Ensure NextAuth is configured in `.env.local`:

```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-here-generate-with-openssl-rand-hex-32
NEXTAUTH_URL=http://localhost:3000

# MongoDB for NextAuth
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bodo-archive
```

Generate a secret:
```bash
openssl rand -hex 32
```

### 4. Database Access Control

For production MongoDB:
1. Enable authentication in MongoDB Atlas
2. Create separate read/write users
3. Restrict API keys by IP address
4. Enable audit logging

## 🔍 Troubleshooting

### Issue: "MONGODB_URI is not set"

**Solution:**
```bash
# 1. Check .env.local exists
ls -la .env.local

# 2. Add the variable
echo "MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/bodo-archive" >> .env.local

# 3. Restart the seed script
npm run seed:leaders
```

### Issue: "Connection timeout"

**Solution:**
```bash
# 1. Test MongoDB connection
mongosh "mongodb+srv://user:pass@cluster.mongodb.net/" --eval "db.version()"

# 2. Check firewall rules (if using MongoDB Atlas):
#    - Add your IP to Network Access
#    - Or add 0.0.0.0/0 (not recommended for production)

# 3. Check credentials in .env.local are correct
```

### Issue: "Duplicate key error: E11000"

**Solution:**
```bash
# The slug already exists. Use force reseed:
npm run seed:leaders:force

# Or manually delete duplicates:
# db.leaders.deleteOne({ slug: "duplicate-slug" })
```

### Issue: Leaders don't appear on `/leaders` page

**Solution:**
1. Verify seed completed without errors: `npm run seed:leaders`
2. Check MongoDB contains data: 
   ```javascript
   db.leaders.countDocuments({ status: "published" })
   ```
3. Clear Next.js cache and rebuild:
   ```bash
   rm -rf .next
   npm run build
   npm run dev
   ```
4. Check browser console for errors (F12 → Console tab)
5. Check server logs for API errors

### Issue: "Module not found" when running seed

**Solution:**
```bash
# 1. Ensure you're in the project root
cd /path/to/Bodo-Research-Memorial

# 2. Install dependencies
npm install

# 3. Run the seed
npm run seed:leaders
```

## 📈 Checking Seed Results

### Via MongoDB Shell

```javascript
// Count total leaders
db.leaders.countDocuments()
// Output: 46

// Count by status
db.leaders.countDocuments({ status: "published" })
// Output: 46

// Count by region
db.leaders.countDocuments({ region: "assam" })
// Output: 45 (most are from Assam)

// Find leaders with photos
db.leaders.countDocuments({ photo: { $ne: null } })
// Output: 0 (until photos are added)

// List all tags in use
db.leaders.distinct("tags")
// Output: ["movement leader", "political leader", "militant", ...]

// Find featured leaders
db.leaders.find({ featured: true })
// Output: [] (none featured by default)
```

### Via Admin API

```bash
# Get all leaders
curl http://localhost:3000/api/leaders

# Get single leader
curl http://localhost:3000/api/leaders/upendra-nath-brahma

# Search leaders
curl "http://localhost:3000/api/leaders?search=Brahma"

# Filter by region
curl "http://localhost:3000/api/leaders?region=assam"
```

## 🎯 Next Steps

1. ✅ **Seed leaders** - Run `npm run seed:leaders`
2. ✅ **Verify on page** - Visit `/leaders` and check all 46 appear
3. 🔄 **Add photos** - Use Admin Panel or MongoDB to add image URLs
4. 🔄 **Update featured** - Mark important leaders as `featured: true`
5. 🔄 **Add related links** - Connect leaders to articles and movements
6. 🔐 **Secure admin** - Set up authentication and admin roles
7. 🚀 **Deploy** - Push to production with secured MongoDB

## 📝 Seed Script Reference

### Standard Seed (Idempotent)
```bash
npm run seed:leaders
```
- ✅ Safe to run multiple times
- ✅ Updates existing leaders by slug
- ✅ Skips if data already exists
- ✅ Recommended for production

### Force Reseed (Destructive)
```bash
npm run seed:leaders:force
```
- ⚠️ **Deletes all leaders** first
- ⚠️ Creates fresh entries
- ⚠️ Use only for development/testing
- ⚠️ **Do NOT use in production**

### Seed All Data (Everything)
```bash
npm run seed
```
- Seeds leaders, articles, timeline events, categories
- Uses comprehensive seed data

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [NextAuth.js Documentation](https://next-auth.js.org/)

---

**Questions?** Check the logs output by the seed script for detailed error messages.
