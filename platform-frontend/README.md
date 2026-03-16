# Fathm - The Ultimate Marketplace for Games, Mods & Assets

<p align="center">
  <img src="/public/images/logo.png" alt="FATHM Logo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/your-repo/jigmi-frontend">
    <img src="https://img.shields.io/github/stars/your-repo/jigmi-frontend?style=social" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/your-repo/jigmi-frontend/issues">
    <img src="https://img.shields.io/github/issues/your-repo/jigmi-frontend" alt="GitHub Issues" />
  </a>
  <img src="https://img.shields.io/github/license/your-repo/jigmi-frontend" alt="License" />
  <img src="https://img.shields.io/github/last-commit/your-repo/jigmi-frontend" alt="Last Commit" />
</p>

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Features Overview](#features-overview)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Core Features Detailed](#core-features-detailed)
   - [User Authentication](#user-authentication)
   - [Project Discovery](#project-discovery)
   - [Project Details & Display](#project-details--display)
   - [User Profiles](#user-profiles)
   - [Creator Dashboard](#creator-dashboard)
   - [User Dashboard](#user-dashboard)
   - [Project Upload System](#project-upload-system)
   - [Review & Rating System](#review--rating-system)
   - [Comments & Discussion](#comments--discussion)
   - [Checkout & Payments](#checkout--payments)
   - [Notifications System](#notifications-system)
   - [Search & Filtering](#search--filtering)
   - [Categories & Subjects](#categories--subjects)
7. [UI Components](#ui-components)
8. [Type Definitions](#type-definitions)
9. [Services & API](#services--api)
10. [Context Providers](#context-providers)
11. [Styling & Theming](#styling--theming)
12. [Pages Overview](#pages-overview)
13. [Future Enhancements](#future-enhancements)
14. [Contributing](#contributing)
15. [License](#license)

---

## 🌟 Introduction

**JIGMI** is a comprehensive digital marketplace platform designed for the gaming and creative community. It serves as a hub where developers, artists, and creators can share and discover:

- 🎮 **Games** - Complete playable games
- 🔧 **Mods** - Game modifications and extensions
- 📦 **Assets** - Game development resources (audio, models, textures, UI kits)
- 🎨 **Digital Art** - Concept art, 3D art, and illustrations

The platform enables creators to monetize their work while providing consumers with easy access to high-quality game content.

---

## 🚀 Features Overview

### Platform Features
- **Multi-type Content Support**: Games, mods, assets, and digital art marketplace
- **User Authentication**: Complete auth system with login, registration, and password recovery
- **Project Discovery**: Browse, search, filter, and explore thousands of projects
- **Project Details**: Rich media galleries, descriptions, reviews, and comments
- **User Profiles**: Creator profiles with stats, projects, and social links
- **Creator Tools**: Dashboard, analytics, revenue tracking, and project management
- **User Library**: Track purchased/downloaded projects
- **Wishlist**: Save projects for later
- **Review System**: Rate and review projects with star ratings
- **Comments**: Discussion threads on projects
- **Checkout**: Secure payment processing
- **Notifications**: Real-time notification system
- **Categories**: Organized subject browsing (Games, Mods, Assets, Digital Art)

### Technical Features
- **Modern Stack**: Next.js 14 with React 18 and TypeScript
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Dark Theme**: Immersive gaming-focused dark UI
- **State Management**: React Context API and Zustand
- **Type Safety**: Comprehensive TypeScript definitions
- **Component Library**: Reusable UI components

---

## 💻 Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14.2.3 |
| **Language** | TypeScript 5.4.5 |
| **UI Library** | React 18.3.1 |
| **Styling** | Tailwind CSS 3.4.3 |
| **State Management** | Zustand 4.5.2 |
| **Icons** | Lucide React 0.378.0 |
| **Utilities** | clsx 2.1.1 |
| **Build Tools** | PostCSS, Autoprefixer |

---

## 📂 Project Structure

```
jigmi-frontend/
├── public/                     # Static assets
│   ├── ads/                     # Advertisement banners
│   ├── icons/                   # SVG icons
│   └── images/                  # Static images
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── auth/               # Authentication pages
│   │   │   ├── login/          # Login page
│   │   │   ├── register/       # Registration page
│   │   │   └── forgot-password/# Password recovery
│   │   ├── categories/         # Categories browsing
│   │   ├── checkout/           # Payment checkout
│   │   ├── creator/            # Creator tools
│   │   │   ├── analytics/      # Analytics dashboard
│   │   │   ├── dashboard/      # Creator main dashboard
│   │   │   ├── projects/       # Project management
│   │   │   ├── revenue/       # Revenue tracking
│   │   │   └── upload/        # Project upload
│   │   ├── explore/            # Project exploration
│   │   ├── profile/           # User profiles
│   │   ├── project/           # Project details
│   │   ├── subjects/          # Subject categories
│   │   ├── user/              # User dashboard
│   │   │   ├── dashboard/     # User main dashboard
│   │   │   ├── downloads/      # Download history
│   │   │   ├── library/       # Owned projects
│   │   │   ├── settings/      # User settings
│   │   │   └── wishlist/      # Saved projects
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ads/               # Advertisement components
│   │   ├── creator/           # Creator-specific components
│   │   ├── dashboard/         # Dashboard components
│   │   ├── layout/            # Layout components (Navbar, Footer, Sidebar)
│   │   ├── project/           # Project-related components
│   │   ├── review/            # Review & comment components
│   │   └── ui/                # Reusable UI components
│   ├── context/               # React Context providers
│   │   ├── AuthContext.tsx    # Authentication context
│   │   ├── NotificationContext.tsx # Notifications context
│   │   └── ThemeContext.tsx   # Theme context
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.ts         # Authentication hook
│   │   ├── useLibrary.ts      # Library hook
│   │   ├── useNotifications.ts # Notifications hook
│   │   └── useProjects.ts     # Projects hook
│   ├── services/              # API service layers
│   │   ├── apiClient.ts       # HTTP client configuration
│   │   ├── authService.ts     # Authentication API
│   │   ├── notificationService.ts # Notifications API
│   │   ├── paymentService.ts  # Payment API
│   │   ├── projectService.ts  # Projects API
│   │   └── reviewService.ts    # Reviews API
│   ├── styles/                # Global styles
│   │   ├── components.css    # Component styles
│   │   ├── globals.css        # Global styles
│   │   └── variables.css      # CSS variables
│   ├── types/                 # TypeScript type definitions
│   │   ├── Notification.ts    # Notification types
│   │   ├── Project.ts         # Project types
│   │   ├── Review.ts          # Review types
│   │   └── User.ts            # User types
│   └── utils/                 # Utility functions
│       ├── calculateRating.ts # Rating calculations
│       ├── formatDate.ts      # Date formatting
│       ├── formatPrice.ts     # Price formatting
│       └── truncateText.ts    # Text truncation
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/jigmi-frontend.git
   cd jigmi-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

---

## 🔍 Core Features Detailed

### User Authentication

The authentication system provides a complete user identity management solution:

- **Login Page** (`/auth/login`)
  - Email/password authentication
  - "Remember me" functionality
  - Forgot password link
  - Redirect to registration for new users
  
- **Registration Page** (`/auth/register`)
  - Username selection
  - Display name input
  - Email registration
  - Password creation
  - Terms acceptance

- **Password Recovery** (`/auth/forgot-password`)
  - Email-based recovery flow

**Technical Implementation:**
- [`AuthContext.tsx`](src/context/AuthContext.tsx) - React Context for auth state management
- [`useAuth.ts`](src/hooks/useAuth.ts) - Custom hook for authentication
- User roles: `user`, `creator`, `admin`, `moderator`
- User status: `active`, `suspended`, `banned`

---

### Project Discovery

Users can discover projects through multiple pathways:

**Homepage Features:**
- Hero section with platform stats (50K+ projects, 100K+ users)
- Category browsing cards (Games, Mods, Assets, Digital Art)
- Featured projects showcase
- Trending projects section
- Top developers spotlight
- Latest uploads grid
- Call-to-action for creators

**Explore Page** (`/explore`)
- Full project browsing with infinite scroll
- Search functionality
- Type filtering (All, Games, Mods, Assets, Digital Art)
- Sorting options (Trending, Most Downloaded, Top Rated, Newest)
- Grid/List view toggle

**Technical Implementation:**
- [`ProjectCard.tsx`](src/components/project/ProjectCard.tsx) - Project display cards
- [`projectService.ts`](src/services/projectService.ts) - Project data fetching
- Multiple service methods:
  - `getFeaturedProjects()` - Featured items
  - `getTrendingProjects()` - Trending items
  - `getLatestProjects()` - Recent uploads
  - `getProjects(filter)` - Filtered search

---

### Project Details & Display

The project detail page provides comprehensive information:

**Page Components:**
- **Project Gallery**: Image/video carousel with thumbnails
- **Project Info**: Title, developer, ratings, pricing
- **Download Button**: Purchase/download actions
- **Tabs System**:
  - Description tab
  - Reviews tab
  - Comments tab

**Project Information Displayed:**
- Title and short/long description
- Developer profile link
- Thumbnail and media gallery
- Pricing (Free, Paid, Donation)
- Version information
- Release date and last updated
- Download/view/like statistics
- Rating stars
- Tags
- System requirements

**Technical Implementation:**
- [`ProjectGallery.tsx`](src/components/project/ProjectGallery.tsx) - Media gallery
- [`ProjectInfo.tsx`](src/components/project/ProjectInfo.tsx) - Project details
- [`DownloadButton.tsx`](src/components/project/DownloadButton.tsx) - Download/purchase
- [`Tabs.tsx`](src/components/ui/Tabs.tsx) - Tab navigation

---

### User Profiles

Public profile pages showcase creators:

**Profile Features:**
- Banner image
- Avatar display
- Verified badge
- Bio and location
- Website link
- Social links (Twitter, GitHub, Twitch, Discord)
- Join date
- Stats (Projects, Downloads, Followers, Following, Rating)

**Profile Sections:**
- Projects tab with grid display
- About tab with bio and social links

**Technical Implementation:**
- [`profile/[username]/page.tsx`](src/app/profile/[username]/page.tsx) - Dynamic profile routing
- Profile stats include:
  - `totalDownloads`
  - `totalProjects`
  - `followers` / `following`
  - `averageRating`

---

### Creator Dashboard

The creator dashboard provides business analytics:

**Dashboard Features** (`/creator/dashboard`)
- Revenue tracking with chart visualization
- Download statistics
- View analytics
- Active projects count
- Revenue change indicators (positive/negative)
- Quick actions panel
- Projects table with:
  - Download counts
  - Revenue generated
  - View counts
  - Ratings
  - Status badges

**Additional Creator Pages:**
- `/creator/analytics` - Detailed analytics
- `/creator/projects` - Project management
- `/creator/revenue` - Revenue tracking and payouts
- `/creator/upload` - Project upload

**Technical Implementation:**
- [`AnalyticsChart.tsx`](src/components/creator/AnalyticsChart.tsx) - Revenue visualization
- [`ProjectManager.tsx`](src/components/creator/ProjectManager.tsx) - Project CRUD
- Revenue data with monthly breakdowns

---

### User Dashboard

Personal user dashboard for consumers:

**Dashboard Features** (`/user/dashboard`)
- Welcome message with username
- Statistics overview:
  - Total downloads
  - Projects owned
  - Wishlist items
  - Hours engaged
- Recent downloads list with quick re-download
- Latest updates/notifications feed
- Wishlist preview

**Additional User Pages:**
- `/user/downloads` - Download history
- `/user/library` - Purchased projects
- `/user/settings` - Account settings
- `/user/wishlist` - Saved projects

**Technical Implementation:**
- [`DownloadItem.tsx`](src/components/dashboard/DownloadItem.tsx) - Download entries
- [`LibraryItem.tsx`](src/components/dashboard/LibraryItem.tsx) - Library entries
- [`WishlistItem.tsx`](src/components/dashboard/WishlistItem.tsx) - Wishlist entries

---

### Project Upload System

Comprehensive project submission form:

**Upload Form Features:**
- **Basic Information**
  - Project title input
  - Short description (200 char limit)
  - Full description textarea
  
- **Category & Tags**
  - Project type selection (Game, Mod, Asset, Digital Art)
  - Category dropdown (dynamic based on type)
  - Tag management (add/remove tags)
  
- **Media Upload**
  - Thumbnail upload with drag-and-drop
  - Screenshot gallery (up to 8 images)
  - Preview functionality
  
- **Pricing**
  - Free option
  - Paid option with price input
  - Donation option
  
- **File Upload**
  - Project file drag-and-drop
  - Format validation (ZIP, RAR, EXE)
  - Size limit (2GB)
  
- **Version Management**
  - Semantic versioning input
  
- **Submission Options**
  - Publish immediately
  - Save as draft

**Technical Implementation:**
- [`UploadForm.tsx`](src/components/creator/UploadForm.tsx) - Upload form component
- [`page.tsx`](src/app/creator/upload/page.tsx) - Upload page route
- Dynamic category filtering based on project type

---

### Review & Rating System

Community feedback mechanism:

**Review Features:**
- 5-star rating system
- Review title and content
- Helpful/not helpful voting
- Developer response capability
- Sort by: Most Helpful, Newest, Oldest

**Rating Features:**
- Visual star display
- Average rating calculation
- Rating distribution (1-5 stars)

**Technical Implementation:**
- [`CommentSection.tsx`](src/components/review/CommentSection.tsx) - Reviews list
- [`RatingStars.tsx`](src/components/review/RatingStars.tsx) - Star rating display
- [`CommentItem.tsx`](src/components/review/CommentItem.tsx) - Individual review
- [`calculateRating.ts`](src/utils/calculateRating.ts) - Rating utilities

---

### Comments & Discussion

Project discussion threads:

**Comment Features:**
- Threaded replies
- Like functionality
- Reply to comments
- Developer badges
- Timestamp display

**Technical Implementation:**
- Uses same [`CommentSection.tsx`](src/components/review/CommentSection.tsx)
- Parent/child comment relationships
- Nested reply support

---

### Checkout & Payments

Purchase flow implementation:

**Checkout Features:**
- Order summary display
- Payment method selection
- Secure payment indicators
- Price calculation
- Back navigation

**Technical Implementation:**
- [`checkout/page.tsx`](src/app/checkout/page.tsx) - Checkout page
- Payment service integration
- Secure transaction UI elements

---

### Notifications System

Real-time user notifications:

**Notification Types:**
- `project_update` - Project updates
- `new_comment` - New comments
- `comment_reply` - Comment replies
- `review_received` - New reviews
- `follow` - New followers
- `purchase` - Purchase notifications
- `wishlist` - Wishlist updates
- `announcement` - Platform announcements
- `payment` - Payment notifications
- `payout` - Creator payouts

**Notification Features:**
- Unread/read status
- Notification preferences
- Mark as read
- Mark all as read
- Remove notifications

**Technical Implementation:**
- [`NotificationContext.tsx`](src/context/NotificationContext.tsx) - Context provider
- [`useNotifications.ts`](src/hooks/useNotifications.ts) - Custom hook
- Navbar notification dropdown

---

### Search & Filtering

Project discovery tools:

**Search Features:**
- Full-text search
- Search by title and description
- URL-based search params

**Filter Options:**
- Project type (game, mod, asset, digital_art)
- Category
- Price range
- Tags

**Sort Options:**
- Trending
- Most Downloaded
- Top Rated
- Newest
- Price: Low to High
- Price: High to Low

**Technical Implementation:**
- [`projectService.ts`](src/services/projectService.ts) - Filter logic
- Explore page with URL params integration

---

### Categories & Subjects

Organized content browsing:

**Main Categories:**
- **Games** (`/subjects/games`)
  - Action
  - Adventure
  - RPG
  - Strategy
  - Simulation
  - Sports
  - Puzzle
  - Horror
  - Multiplayer
  
- **Mods** (`/subjects/mods`)
  - Minecraft
  - GTA
  - Skyrim
  - Other
  
- **Assets** (`/subjects/assets`)
  - Audio
  - Models
  - Textures
  - UI Kits
  
- **Digital Art** (`/subjects/digital-arts`)
  - Illustrations
  - 3D Art
  - Concept Art

**Technical Implementation:**
- Dynamic category pages with consistent layout
- [`categories/page.tsx`](src/app/categories/page.tsx) - Category overview

---

## 🎨 UI Components

The platform includes a comprehensive reusable component library:

| Component | File | Description |
|-----------|------|-------------|
| **Button** | [`Button.tsx`](src/components/ui/Button.tsx) | Versatile button with variants (primary, outline, ghost, danger, success), sizes, icons, and loading states |
| **Input** | [`Input.tsx`](src/components/ui/Input.tsx) | Form input with labels, icons, error states |
| **Card** | [`Card.tsx`](src/components/ui/Card.tsx) | Container card with header, content sections |
| **Modal** | [`Modal.tsx`](src/components/ui/Modal.tsx) | Dialog overlay for confirmations and forms |
| **Badge** | [`Badge.tsx`](src/components/ui/Badge.tsx) | Status indicators (primary, success, warning, danger, neutral) |
| **Tabs** | [`Tabs.tsx`](src/components/ui/Tabs.tsx) | Tab navigation with list, trigger, and content |
| **Loader** | [`Loader.tsx`](src/components/ui/Loader.tsx) | Loading spinners and page loaders |

**Layout Components:**
| Component | File | Description |
|-----------|------|-------------|
| **Navbar** | [`Navbar.tsx`](src/components/layout/Navbar.tsx) | Main navigation with search, notifications, profile dropdown, mobile menu |
| **Footer** | [`Footer.tsx`](src/components/layout/Footer.tsx) | Site footer with links, social icons |
| **Sidebar** | [`Sidebar.tsx`](src/components/layout/Sidebar.tsx) | Navigation sidebar |

**Project Components:**
| Component | File | Description |
|-----------|------|-------------|
| **ProjectCard** | [`ProjectCard.tsx`](src/components/project/ProjectCard.tsx) | Project display card with thumbnail, title, developer, price, stats |
| **ProjectGallery** | [`ProjectGallery.tsx`](src/components/project/ProjectGallery.tsx) | Media gallery with main image and thumbnails |
| **ProjectInfo** | [`ProjectInfo.tsx`](src/components/project/ProjectInfo.tsx) | Project details sidebar |
| **DownloadButton** | [`DownloadButton.tsx`](src/components/project/DownloadButton.tsx) | Download/purchase action button |

---

## 📝 Type Definitions

Comprehensive TypeScript definitions for type safety:

### User Types ([`User.ts`](src/types/User.ts))
```typescript
- UserRole: 'user' | 'creator' | 'admin' | 'moderator'
- UserStatus: 'active' | 'suspended' | 'banned'
- SocialLink: platform, url
- UserProfile: username, displayName, avatar, banner, bio, location, website, socialLinks, joinedAt, verified
- UserStats: totalDownloads, totalProjects, totalSales, totalEarnings, followers, following, totalReviews, averageRating
- User: id, username, displayName, avatar, email, role, status, profile, stats, isFollowing, createdAt, updatedAt
- CreatorProfile: extends User with payoutInfo and revenue
- UserLibraryItem, UserWishlistItem, UserDownload
```

### Project Types ([`Project.ts`](src/types/Project.ts))
```typescript
- ProjectType: 'game' | 'mod' | 'asset' | 'digital_art'
- ProjectStatus: 'draft' | 'pending' | 'published' | 'rejected' | 'archived'
- ProjectCategory: 25+ categories
- ProjectFile: id, name, size, format, downloadUrl
- ProjectMedia: id, type, url, thumbnail, alt, isPrimary
- ProjectPricing: type, price, currency, discountPrice, discountEnds
- ProjectStats: downloads, likes, views, reviews, comments
- ProjectRequirements: os, processor, memory, graphics, storage
- Project: complete project with all fields
- ProjectSummary: simplified project for lists
- ProjectFilter: filter criteria
- PaginatedProjects: paginated results
```

### Review Types ([`Review.ts`](src/types/Review.ts))
```typescript
- Review: id, user, projectId, rating, title, content, helpful, notHelpful, isDeveloperResponse, developerResponse, createdAt, updatedAt
- ReviewSummary: averageRating, totalReviews, ratingDistribution
- CreateReviewInput, UpdateReviewInput
- ReviewFilter: projectId, sortBy, rating, page, pageSize
- Comment: threaded comments with parent/child relationships
```

### Notification Types ([`Notification.ts`](src/types/Notification.ts))
```typescript
- NotificationType: project_update, new_comment, comment_reply, review_received, follow, purchase, wishlist, announcement, payment, payout
- NotificationStatus: 'unread' | 'read' | 'archived'
- Notification: id, type, status, title, message, link, sender, project, createdAt, readAt
- NotificationPreferences: email and push settings
```

---

## 🔌 Services & API

Service layer for API communication:

| Service | File | Description |
|---------|------|-------------|
| **projectService** | [`projectService.ts`](src/services/projectService.ts) | Project CRUD, search, filtering |
| **authService** | [`authService.ts`](src/services/authService.ts) | Authentication endpoints |
| **notificationService** | [`notificationService.ts`](src/services/notificationService.ts) | Notification management |
| **paymentService** | [`paymentService.ts`](src/services/paymentService.ts) | Payment processing |
| **reviewService** | [`reviewService.ts`](src/services/reviewService.ts) | Review and rating management |
| **apiClient** | [`apiClient.ts`](src/services/apiClient.ts) | HTTP client configuration |

---

## 🎭 Context Providers

React Context for global state:

| Context | File | Description |
|---------|------|-------------|
| **AuthContext** | [`AuthContext.tsx`](src/context/AuthContext.tsx) | User authentication state |
| **NotificationContext** | [`NotificationContext.tsx`](src/context/NotificationContext.tsx) | Notification management |
| **ThemeContext** | [`ThemeContext.tsx`](src/context/ThemeContext.tsx) | UI theme preferences |

---

## 🎨 Styling & Theming

### Tailwind Configuration

Custom theme with gaming-focused aesthetics:

**Color Palette:**
- **Primary**: Blue scale (50-900) for main actions and highlights
- **Surface**: Dark scale (50-950) for backgrounds and cards
- **Accent**: Yellow scale (50-900) for special elements

**Customizations:**
- Custom fonts: Inter (body), Space Grotesk (display)
- Custom shadows: glow, card, card-hover
- Custom animations: fade-in, slide-up, pulse-slow

### Global Styles

CSS utilities and component classes:
- `.container-app` - Responsive container
- `.btn`, `.btn-primary`, `.btn-secondary` - Button styles
- `.input` - Form input styles
- `.card` - Card container
- `.badge` - Status badges
- `.gradient-text` - Gradient text effect
- `.glass` - Glassmorphism effect

---

## 📄 Pages Overview

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, categories, featured/trending/latest projects |
| `/explore` | Explore | Full project browsing with filters and search |
| `/categories` | Categories | Category overview |
| `/subjects/games` | Games | Games by subcategory |
| `/subjects/mods` | Mods | Mods by game |
| `/subjects/assets` | Assets | Asset types |
| `/subjects/digital-arts` | Digital Arts | Digital art category |
| `/project/[projectId]` | Project Detail | Full project information |
| `/profile/[username]` | User Profile | Public creator profile |
| `/auth/login` | Login | User login |
| `/auth/register` | Register | User registration |
| `/auth/forgot-password` | Forgot Password | Password recovery |
| `/user/dashboard` | User Dashboard | Personal dashboard |
| `/user/library` | Library | Purchased projects |
| `/user/downloads` | Downloads | Download history |
| `/user/wishlist` | Wishlist | Saved projects |
| `/user/settings` | Settings | Account settings |
| `/creator/dashboard` | Creator Dashboard | Analytics overview |
| `/creator/projects` | My Projects | Project management |
| `/creator/upload` | Upload | Submit new project |
| `/creator/analytics` | Analytics | Detailed stats |
| `/creator/revenue` | Revenue | Earnings and payouts |
| `/checkout` | Checkout | Purchase flow |

---

## 🔮 Future Enhancements

Planned features and improvements:

### User Features
- [ ] Social features (followers, following)
- [ ] Private messaging
- [ ] Activity feed
- [ ] Collections/folders for projects
- [ ] Project ratings aggregation

### Creator Features
- [ ] Advanced analytics dashboard
- [ ] Project versioning
- [ ] Early access/beta testing
- [ ] Crowdfunding support
- [ ] Bundle creation
- [ ] Affiliate program

### Platform Features
- [ ] Multi-language support
- [ ] Advanced search with AI
- [ ] Personalized recommendations
- [ ] Forums/community
- [ ] Blog
- [ ] API access for developers

### Technical
- [ ] Progressive Web App (PWA)
- [ ] Real-time updates (WebSocket)
- [ ] Offline support
- [ ] Performance optimization
- [ ] SEO optimization

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Coding Standards
- Use TypeScript for all new code
- Follow existing code style
- Add comments for complex logic
- Write meaningful commit messages
- Test your changes

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [DiceBear](https://www.dicebear.com/) - Avatar generation
- [Picsum Photos](https://picsum.photos/) - Placeholder images

---

<p align="center">
  Made with ❤️ by the JIGMI Team
</p>
