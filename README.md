# Bodo Research Memorial v2

A comprehensive digital archive preserving the history, culture, religion, language, and leadership of the Bodo people.

## ✨ Overview

Bodo Research Memorial v2 is a production-ready digital encyclopedia dedicated to documenting and preserving the rich heritage of the Bodo people. This platform serves as a central repository for historical leaders, cultural traditions, religious practices, and scholarly research.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Database | MongoDB with Mongoose ODM |
| Authentication | JWT-based auth with bcrypt |

## 🎨 Design System

### Heritage Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Heritage Green | #0F3D2E | Primary brand color, headers |
| Maroon | #800000 | Accents, highlights |
| Gold | #FFD700 | Premium elements, awards |
| Ivory | #FFFFF0 | Background, cards |
| Parrot Green | #44CC44 | Success states, CTAs |

### Typography

| Element | Font Family |
|---------|--------------|
| Headings | Merriweather (serif) |
| Body Text | Inter (sans-serif) |
| Article Content | Source Serif Pro (serif) |

## 📱 Features

- **Leaders Profiles** - Comprehensive biographical data on historical and contemporary Bodo leaders
- **Culture Articles** - In-depth articles on Bodo traditions, festivals, language, and customs
- **Religion Articles** - Documentation of religious practices, beliefs, and spiritual traditions
- **Interactive Timeline** - Chronological journey through Bodo history with key events
- **Research Papers** - Academic submissions and scholarly publications
- **Tribute System** - Community members can pay respects to historical figures
- **Digital Archive** - Repository of historical documents, images, and artifacts
- **Advanced Search** - Full-text search across all content types
- **Google Knowledge Graph Integration** - Real verified data about Bodo leaders

## 📊 Content Data

| Category | Count |
|----------|-------|
| Verified Historical Leaders | 10 |
| Cultural Articles | 8 |
| Religious Articles | 5 |
| Timeline Events | 20 |
| Research Papers | 10 |

## 🗂️ Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured content, and category cards |
| `/leaders` | Leaders directory with search and filters |
| `/leaders/[slug]` | Individual leader profile pages |
| `/culture` | Cultural articles listing |
| `/culture/[slug]` | Individual culture article pages |
| `/religion` | Religious articles listing |
| `/religion/[slug]` | Individual religion article pages |
| `/history` | Historical overview and context |
| `/timeline` | Interactive timeline of Bodo history |
| `/research` | Research hub main page |
| `/research/papers` | Research papers listing |
| `/research/submit` | Submit research paper form |
| `/about` | About the project and mission |
| `/tribute` | Pay tribute to historical figures |
| `/contact` | Contact form and information |
| `/archive` | Digital archive browser |
| `/search` | Advanced search interface |
| `/movements` | Historical movements |
| `/organizations` | Organizations page |
| `/knowledge-graph` | Knowledge graph visualization |
| `/admin` | Admin dashboard |
| `/admin/login` | Admin authentication |

**Build Status**: 35 pages generated successfully

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
cd "Bodo-Research-Memorial v2"

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

## 🔍 Google Knowledge Graph API

This project integrates with Google's Knowledge Graph API to fetch real, verified information about Bodo leaders.

### Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable **Knowledge Graph API** from the API Library
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Add the key to `.env.local`:

```env
GOOGLE_KNOWLEDGE_GRAPH_API_KEY=your_api_key_here
```

### API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/leaders/google?query=Name` | Search for a leader by name |
| `/api/leaders/google?leaderId=id` | Get Google data for a specific leader |
| `/api/leaders/google?all=true` | Get Google data for all leaders |

## 🏗️ Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── leaders/       # Leader CRUD endpoints
│   │   ├── archive/       # Archive endpoints
│   │   ├── events/        # Historical events
│   │   ├── movements/     # Movements data
│   │   ├── organizations/ # Organizations data
│   │   └── search/        # Search functionality
│   ├── admin/             # Admin dashboard
│   ├── culture/           # Culture section
│   ├── leaders/           # Leaders section
│   ├── religion/          # Religion section
│   ├── research/          # Research submission
│   ├── timeline/          # Timeline page
│   ├── archive/           # Digital archive
│   ├── tribute/           # Tribute system
│   ├── contact/           # Contact page
│   ├── about/             # About page
│   ├── history/           # History page
│   ├── search/            # Search page
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── dashboard/         # Admin dashboard components
│   └── creator/           # Content creation components
├── lib/
│   ├── db.ts              # MongoDB connection
│   ├── auth.ts            # Authentication utilities
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # App constants
├── models/                # Mongoose models
│   ├── User.ts
│   ├── Leader.ts
│   ├── Article.ts
│   ├── Category.ts
│   ├── Movement.ts
│   ├── Organization.ts
│   ├── HistoricalEvent.ts
│   └── ArchiveItem.ts
├── data/                  # Static data files
│   ├── leaders.ts
│   ├── culture.ts
│   ├── religion.ts
│   ├── timeline.ts
│   ├── research.ts
│   ├── events.ts
│   ├── movements.ts
│   ├── organizations.ts
│   └── archive.ts
├── hooks/                 # Custom React hooks
│   ├── useDebounce.ts
│   └── useFuzzySearch.ts
├── services/              # External services
│   └── googleKnowledgeGraph.ts
└── types/                 # TypeScript types
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

## 🔧 Configuration

### Environment Variables

```env
# Database
MONGODB_URI=mongodb+srv://...

# Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
JWT_SECRET=your-jwt-secret

# Google Knowledge Graph
GOOGLE_KNOWLEDGE_GRAPH_API_KEY=your_api_key_here

# App
NEXT_PUBLIC_APP_NAME=Bodo Research Memorial v2
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
