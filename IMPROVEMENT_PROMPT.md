# Bodo Research Memorial - Website Improvement Prompt

## Project Overview

**Project Name:** Bodo Research Memorial - Digital Heritage Repository  
**Project Type:** Institutional Website / Digital Archive  
**Tech Stack:** Next.js 15, React 19, Tailwind CSS, MongoDB, Framer Motion  
**Current Status:** Foundation Built, Content Population Needed  
**Mission:** To preserve and showcase Bodo history, culture, religion, leaders, and scholarly research for future generations

---

## Current State Analysis

### ✅ What We Have

#### 1. Technical Infrastructure
- **Framework:** Next.js 15.1.6 with App Router
- **Styling:** Tailwind CSS 3.4.17 with custom design system
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** NextAuth.js v5 with JWT
- **Animations:** Framer Motion for complex animations
- **Icons:** Lucide React icon library
- **Forms:** React Hook Form with Zod validation
- **PDF Generation:** @react-pdf/renderer, jsPDF, html2canvas

#### 2. Pages & Features

| Page | Features |
|------|----------|
| Home (`/`) | Hero section, featured leaders, quick navigation, stats display |
| About (`/about`) | Mission statement, institutional information |
| Culture (`/culture`) | Bodo culture documentation, articles |
| Religion (`/religion`) | Religious practices and traditions |
| History (`/history`) | Historical timeline and events |
| Leaders (`/leaders`) | Leader listings with filtering, search |
| Leader Detail (`/leaders/[id]`) | Individual leader profiles with biography, quotes, timeline |
| Research (`/research`) | Research papers repository |
| Research Papers (`/research/papers`) | Academic papers listing |
| Submit Research (`/research/submit`) | Research submission form |
| Timeline (`/timeline`) | Interactive Bodo movement timeline |
| Tribute (`/tribute`) | Tribute submission system |
| Contact (`/contact`) | Contact form with validation |
| Admin (`/admin`) | Admin dashboard with authentication |

#### 3. Components Built
- Header (responsive navigation)
- Footer (comprehensive links)
- Hero (multiple variants with animations)
- LeaderCard (leader display cards)
- Timeline (interactive timeline)
- TributeForm (user tribute submissions)
- FilterBar (filtering system)
- SearchBar (search functionality)
- RemoteImage (image handling)
- CitationModal (citation generation)
- UI Components: Button, Card, Input, Badge

#### 4. API Routes
- `/api/auth/login` - User authentication
- `/api/auth/register` - User registration
- `/api/contact` - Contact form submissions
- `/api/leaders` - Leader CRUD operations

#### 5. Design System
- **Primary Color:** #0F3D2E (Deep Forest Green)
- **Secondary Color:** #C9A227 (Warm Gold)
- **Background:** #EFF2F7 (Light Blue-Gray)
- **Typography:** Playfair Display (headings), Inter (body), Cormorant Garamond (serif)
- **Custom utilities:** Multiple custom CSS classes for institutional design

#### 6. Data Models
- User (authentication, admin roles)
- Leader (leader profiles)
- Article (content articles)
- Category (content categorization)

---

## ❌ Issues & Improvements Needed

### 1. Critical Issues

#### A. Tailwind CSS Version Mismatch
**Problem:** Package.json shows conflicting dependencies:
- `"tailwindcss": "^3.4.17"` (Tailwind v3)
- `"@tailwindcss/postcss": "^4.2.1"` (Tailwind v4 package)

Tailwind v4 has a completely different configuration system and is not compatible with the current `tailwind.config.ts` setup.

**Required Action:**
- [ ] Choose either Tailwind v3 or v4
- [ ] If v4: Remove `tailwind.config.ts`, use CSS-based config
- [ ] If v3: Remove `@tailwindcss/postcss`, keep current config

#### B. Missing OG Image
**Problem:** `src/app/page.tsx` references `/og-image.jpg` in OpenGraph metadata, but this file does not exist in the project.

**Required Action:**
- [ ] Create `public/og-image.jpg` (recommended: 1200x630px)
- [ ] Or update metadata to remove the reference

#### C. CSS Linting Errors (FIXED)
**Problem:** VS Code was showing "Unknown at rule @tailwind" and "Unknown at rule @apply" errors in `globals.css`.

**Status:** ✅ Fixed by creating `.vscode/settings.json` and `.vscode/tailwindcss.json`

---

### 2. Content & Data Issues

#### A. No Real Content Population
**Problem:** The site has the framework but lacks substantial content.
- Leaders data in `/src/data/leaders.ts` has sample entries
- No actual research papers loaded
- Culture/Religion pages likely need content

**Required Action:**
- [ ] Populate leaders database with real historical figures
- [ ] Add research papers and documents
- [ ] Write comprehensive content for Culture, Religion, History pages
- [ ] Add images for leaders and historical events
- [ ] Populate timeline with actual Bodo movement events

#### B. Missing Static Assets
**Problem:** Several referenced assets don't exist:
- `/og-image.jpg` - OpenGraph image
- Potentially missing images for leaders
- No favicon properly configured

**Required Action:**
- [ ] Create OG image (1200x630)
- [ ] Create/verify favicon
- [ ] Add placeholder images for leaders without photos

---

### 3. Code Quality Improvements

#### A. File Size & Organization
**Problem:** Some files are excessively large:
- `src/app/leaders/[id]/page.tsx` - ~17KB
- `src/app/admin/page.tsx` - ~10KB
- `src/app/research/submit/page.tsx` - ~15KB

**Required Action:**
- [ ] Break large page components into smaller, reusable components
- [ ] Extract complex logic into custom hooks
- [ ] Create a components folder structure for page-specific components

#### B. TypeScript Improvements
**Problem:** Some areas could benefit from stricter typing
- Some `any` types may exist in older code
- Error handling could be more robust

**Required Action:**
- [ ] Audit for `any` types and replace with proper types
- [ ] Add error boundaries
- [ ] Implement consistent error handling

#### C. Performance Optimization
**Potential Improvements:**
- [ ] Implement image optimization with Next.js Image component
- [ ] Add lazy loading for heavy components
- [ ] Implement pagination for leader/research listings
- [ ] Add caching strategies for API routes
- [ ] Consider ISR (Incremental Static Regeneration) for content pages

---

### 4. Feature Gaps

#### A. Search Functionality
**Current State:** SearchBar component exists but search logic may not be fully implemented

**Required Action:**
- [ ] Implement Fuse.js for fuzzy search (already installed)
- [ ] Connect search to leaders, research papers, and articles

#### B. Filtering System
**Current State:** FilterBar component exists

**Required Action:**
- [ ] Implement filtering logic for leaders and research
- [ ] Add category-based filtering

#### C. User Contributions
**Current State:** Tribute and Research submission forms exist

**Required Action:**
- [ ] Implement moderation workflow for user submissions
- [ ] Add email notifications for submissions
- [ ] Create admin approval workflow

#### D. Admin Panel
**Current State:** Admin page exists (~10KB)

**Required Action:**
- [ ] Complete admin CRUD operations for all content types
- [ ] Add content management features
- [ ] Implement user management

---

### 5. SEO & Metadata

#### A. Incomplete SEO Setup
**Problem:** While metadata exists, many pages may lack proper SEO

**Required Action:**
- [ ] Add Metadata exports to all pages
- [ ] Implement sitemap.xml
- [ ] Add robots.txt
- [ ] Implement structured data (JSON-LD) for rich snippets
- [ ] Add canonical URLs

#### B. Performance Metrics
**Required Action:**
- [ ] Run Lighthouse audit
- [ ] Optimize Core Web Vitals
- [ ] Implement proper meta descriptions for all pages

---

### 6. Security & Deployment

#### A. Environment Variables
**Current State:** `.env.local` exists but may not have all required variables documented

**Required Action:**
- [ ] Document all required environment variables
- [ ] Create `.env.example` file
- [ ] Ensure no secrets are committed to git

#### B. Security Improvements
**Potential Improvements:**
- [ ] Implement rate limiting on API routes
- [ ] Add CSRF protection
- [ ] Implement proper input sanitization
- [ ] Add security headers (CSP, X-Frame-Options, etc.)

#### C. Deployment Readiness
**Required Action:**
- [ ] Create production build and verify
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure proper logging
- [ ] Set up CI/CD pipeline

---

## Recommended Priority Order

### Phase 1: Critical Fixes (Week 1)
1. Fix Tailwind version mismatch
2. Add missing OG image
3. Verify build passes without errors

### Phase 2: Content Population (Weeks 2-4)
1. Add real leader profiles with images
2. Populate timeline with historical events
3. Write comprehensive content for all pages
4. Add research papers and documents

### Phase 3: Feature Completion (Weeks 4-6)
1. Implement full search functionality
2. Complete filtering system
3. Build out admin panel CRUD operations
4. Implement user contribution workflows

### Phase 4: Polish & Optimization (Weeks 6-8)
1. SEO optimization
2. Performance improvements
3. Mobile responsiveness testing
4. Browser compatibility testing

### Phase 5: Launch Preparation (Week 9)
1. Security audit
2. Documentation
3. Deployment setup
4. Launch

---

## Technical Debt to Address

1. **Duplicate code patterns** - Extract common patterns into reusable hooks/components
2. **Hardcoded values** - Move to constants/config files
3. **Missing error handling** - Add comprehensive error states
4. **Inconsistent component APIs** - Standardize props interfaces
5. **Missing loading states** - Add skeleton loaders
6. **Accessibility issues** - Audit and fix a11y problems

---

## Conclusion

This is a **well-structured foundation** for a digital heritage archive with a clear mission to preserve Bodo culture and history. The technical implementation demonstrates good practices with modern tools. The primary focus moving forward should be:

1. **Fix critical version conflicts** (Tailwind)
2. **Populate real content** (the most important task)
3. **Complete incomplete features** (search, admin panel)
4. **Optimize for performance and SEO**

The project has significant potential to become a valuable resource for the Bodo community and researchers interested in Bodo history and culture.

---

*Generated for Bodo Research Memorial Project*  
*Current as of: March 2026*