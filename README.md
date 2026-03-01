# Bodo Research Archive

A production-ready digital encyclopedia for Bodo civilization, culture, religion, leaders, language, and history.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
cd bodo-memorial

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local with your MongoDB URI
# MONGODB_URI=mongodb+srv://...

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Architecture

### Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | Custom ShadCN-style components |
| Database | MongoDB with Mongoose ODM |
| Authentication | JWT-based auth with bcrypt |
| API | RESTful Next.js API Routes |

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   └── leaders/      # Leader CRUD endpoints
│   ├── admin/            # Admin dashboard
│   ├── culture/          # Culture section
│   ├── leaders/          # Leaders section
│   ├── religion/         # Religion section
│   ├── research/         # Research submission
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/              # Reusable UI components
│   └── layout/          # Layout components
├── lib/
│   ├── db.ts            # MongoDB connection
│   ├── auth.ts          # Authentication utilities
│   └── utils.ts         # Utility functions
└── models/              # Mongoose models
    ├── User.ts
    ├── Leader.ts
    ├── Article.ts
    └── Category.ts
```

## 📦 Database Schema

### User Model
- `name`: String (required)
- `email`: String (unique, required)
- `password`: String (hashed, required)
- `role`: Enum ['admin', 'editor', 'public']
- `avatar`: String (optional)
- `isActive`: Boolean
- `timestamps`: createdAt, updatedAt

### Leader Model
- `name`: String (required)
- `slug`: String (unique, auto-generated)
- `photo`: String (URL)
- `birthDate`, `deathDate`: Date
- `region`: Enum ['assam', 'north-bengal', 'darjeeling', 'bhutan', 'other']
- `biography`: String (required)
- `contributions`: Array of strings
- `timeline`: Array of {year, title, description}
- `references`: Array of citation objects
- `tags`: Array of strings
- `status`: Enum ['draft', 'review', 'published', 'archived']
- `featured`: Boolean

### Article Model
- `title`: String (required)
- `slug`: String (unique, auto-generated)
- `content`: String (rich text)
- `category`: Reference to Category
- `status`: Enum ['draft', 'review', 'published', 'archived']
- `references`, `tags`: Arrays
- `readingTime`: Number (auto-calculated)

### Category Model
- `name`: String (required)
- `slug`: String (unique)
- `description`: String
- `icon`: String (Lucide icon name)
- `color`: String (hex)
- `order`: Number

## 🔐 Authentication

### Roles
- **Admin**: Full system access, can approve/reject content, manage users
- **Editor**: Can create and edit content
- **Public**: Read-only access

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/leaders` | List leaders (public) |
| POST | `/api/leaders` | Create leader (auth) |
| GET | `/api/leaders/[slug]` | Get leader details |
| PUT | `/api/leaders/[id]` | Update leader |
| DELETE | `/api/leaders/[id]` | Delete leader |

## 🎨 Design System

### Colors
- Primary: Amber (#b45309)
- Secondary: Indigo (#1e3a5f)
- Background: Stone (#fafaf9)
- Success: Green (#16a34a)
- Warning: Yellow (#ca8a04)
- Danger: Red (#dc2626)

### Typography
- Headings: Inter Bold
- Body: Inter Regular
- Article Content: Merriweather (serif)

## 📱 Features

### Homepage
- Hero section with stats
- Category cards
- Featured leaders
- Call-to-action sections

### Leaders Section
- Grid/list view with filtering
- Search functionality
- Region filtering
- Individual leader pages with timeline

### Culture & Religion
- Category-based organization
- Featured articles
- Cultural regions map

### Research Portal
- Article submission form
- Draft → Review → Published workflow
- Admin approval system

### Admin Dashboard
- Statistics overview
- Pending submissions
- Recent activity feed
- User management

## 🔧 Configuration

### Environment Variables

```env
# Database
MONGODB_URI=mongodb+srv://...

# Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
JWT_SECRET=your-jwt-secret

# App
NEXT_PUBLIC_APP_NAME=Bodo Research Archive
```

## 🚢 Deployment

### Vercel (Frontend)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### MongoDB Atlas (Database)
1. Create account at mongodb.com
2. Create cluster (free tier)
3. Create database user
4. Get connection string
5. Add to .env.local

## 🔮 Future Scalability

- Elasticsearch integration for advanced search
- PDF generation for article downloads
- User profiles and bookmarks
- Comments and discussions
- Multi-language support
- API rate limiting
- Image optimization with CDN

## 📄 License

MIT License

---

Built with ❤️ for the Bodo community
