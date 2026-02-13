# 📍 ANURANET WEBSITE COMPLETE MAP
## Your Guide to Finding and Editing Everything

**Repository:** ElBatrasio/AnuraNet.github.io  
**Last Updated:** February 9, 2026  
**Purpose:** Quick reference for locating and editing website content

---

## TABLE OF CONTENTS

1. [Home Page](#home-page)
2. [About: Our Network Page](#about-our-network-page)
3. [About: Team Page](#about-team-page)
4. [Contact: Contact Us Page](#contact-contact-us-page)
5. [Contact: Membership Page](#contact-membership-page)
6. [News Page](#news-page)
7. [Global Components](#global-components)
8. [Images Directory](#images-directory)
9. [Configuration Files](#configuration-files)
10. [Quick Reference Guide](#quick-reference-guide)

---

## 🏠 HOME PAGE

**Live URL:** `https://elbatrasio.github.io/AnuraNet.github.io/`

### What You See → File to Edit

| Element | File Path | Line/Notes |
|---------|-----------|------------|
| **Hero background image (frog)** | `src/images/frogs/Hylorinas.jpeg` | Replace entire image file |
| **Main title** ("Forging Ahead Anuran Conservation...") | `src/pages/index.astro` | Lines 37-39 |
| **Description paragraph** | `src/pages/index.astro` | Lines 41-43 |
| **"Become a Member" button** | `src/pages/index.astro` | Lines 46-52 |
| **Dark overlay opacity** | `src/pages/index.astro` | Line 31 (`bg-black/60`) |
| **Navigation bar** | `src/components/Navigation.astro` | Global component |
| **Footer** | `src/components/Footer.astro` | Global component |

### Key Code Sections

**Hero Title (Lines 37-39):**
```astro
<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg animate-fade-in">
  Forging Ahead Anuran Conservation Through Artificial Intelligence
</h1>
```

**Hero Image Import (Line 9):**
```astro
import heroImage from "@/images/frogs/Hylorinas.jpeg";
```

---

## 📖 ABOUT: OUR NETWORK PAGE

**Live URL:** `/about/mission`  
**Page File:** `src/pages/about/mission.astro`

### Content Files (All in `src/content/about/`)

| Section | Content File | What It Contains |
|---------|--------------|------------------|
| **Our Mission** | `mission.md` | Mission statement text |
| **Our Vision** | `vision.md` | Vision statement text |
| **Our Objectives** | `objectives.md` | Three main objectives |
| **Working Principles** | `principles.md` | Diversity, Fair Collaboration, Open-science |

### Images & Photo Credits

| Element | File Path | Referenced In |
|---------|-----------|---------------|
| **First image** (Mission section) | `src/images/bats/R.darwinii.jpg` | `mission.astro` line 11 |
| **First photo credit** | N/A | `mission.astro` lines 32-34 |
| **Second image** (Vision section) | `src/images/bats/B.taeniata.jpg` | `mission.astro` line 12 |
| **Second photo credit** | N/A | `mission.astro` lines 55-57 |

### Photo Credit Code

**First Image (Lines 32-34):**
```astro
<p class="mt-2 text-xs text-gray-500 italic">
  Photo by Gabriel Bidart
</p>
```

**Second Image (Lines 55-57):**
```astro
<p class="mt-2 text-xs text-gray-500 italic">
  Photo by Gabriel Bidart
</p>
```

---

## 👥 ABOUT: TEAM PAGE

**Live URL:** `/about/team`  
**Page File:** `src/pages/about/team.astro`  
**Component:** `src/components/Team.astro`

### Team Member Files (in `src/content/team/`)

| Team Member | File Name | Photo Location |
|-------------|-----------|----------------|
| Gabriel Bidart Enriquez | `gabriel_bidart_enriquez.md` | `src/images/members/gb2.jpeg` |
| Juan Sebastian Cañas Silva | `juan_canas_silva.md` | `src/images/members/juan_canas.png` |
| Maria Paula Toro | `maria_paula_toro.md` | `src/images/members/mp.jpeg` |

### Team Member File Format

```markdown
---
name: Full Name
institution: Institution Name
role: admin
image: src/images/members/photo.jpg
---
```

### Adding a New Team Member

1. Create new `.md` file in `src/content/team/` (e.g., `new_member.md`)
2. Add photo to `src/images/members/`
3. Use the format above
4. File will automatically appear on the team page

---

## 📞 CONTACT: CONTACT US PAGE

**Live URL:** `/about/contact`  
**Page File:** `src/pages/about/contact.astro`  
**Content File:** `src/content/about/contact.md`

### Editable Elements

| Element | File | Line | Current Value |
|---------|------|------|---------------|
| **Page title** | `contact.md` | 1 | "Get in touch" |
| **Email address** | `contact.md` | 5 | gbidarten@gmail.com |
| **Mailing list description** | `contact.md` | 9-10 | Full paragraph |
| **"Become a member" link** | `contact.md` | 12 | `/AnuraNet.github.io/contact/membership` |
| **Follow-up text** | `contact.md` | 13 | "You'll receive invitations..." |

### Important Links

**Become a Member Link (Line 12):**
```markdown
To join these spaces, please [become a member](/AnuraNet.github.io/contact/membership) first.
```

---

## 💜 CONTACT: MEMBERSHIP PAGE

**Live URL:** `/contact/membership`  
**Page File:** `src/pages/contact/membership.astro`  
**Content File:** `src/content/about/membership.md`

### Editable Elements

| Element | File | Lines | Notes |
|---------|------|-------|-------|
| **Page title** | `membership.md` | 4 | "Become a member" |
| **Introduction text** | `membership.md` | 6-8 | Three paragraphs |
| **Form link text** | `membership.md` | 13 | "Membership Form" |
| **Google Form URL** | `membership.md` | 13 | https://forms.gle/Ngkvq9WgGZuobtQb6 |

### Purple Membership Form Link

**File:** `src/content/about/membership.md`  
**Lines:** 12-14

```html
<h2>
  <a href="https://forms.gle/Ngkvq9WgGZuobtQb6" 
     style="color: #673AB7; text-decoration: underline; font-size: 1.5em; font-weight: bold">
    Membership Form
  </a>
</h2>
```

**Current Styling:**
- **Color:** `#673AB7` (Google Forms purple)
- **Font size:** `1.5em` (larger heading size)
- **Font weight:** `bold`
- **Text decoration:** `underline`

**To Change Color:**
Edit the `color:` value in line 13. Popular alternatives:
- Emerald green (site color): `#059669`
- Blue: `#3b82f6`
- Dark purple: `#5E35B1`

---

## 📰 NEWS PAGE

**Live URL:** `/news`  
**Index Page:** `src/pages/news/index.astro`  
**Component:** `src/components/News.astro`  
**Individual Posts:** `src/content/news/` (individual `.md` files)  
**Post Template:** `src/pages/news/[...id].astro`

### Adding a News Post

1. Create new `.md` file in `src/content/news/`
2. Add frontmatter with title, date, description
3. Write content in markdown
4. Post automatically appears on news page

---

## 🧩 GLOBAL COMPONENTS

### Navigation Bar (appears on all pages)

**File:** `src/components/Navigation.astro`

**Contains:**
- Site logo/name (top-left)
- Main menu items (About, Team, Contact, News)
- Mobile hamburger menu
- Theme toggle (if applicable)

### Footer (appears on all pages)

**File:** `src/components/Footer.astro`

**Contains:**
- Copyright text
- Social media links (if any)
- Additional footer links

---

## 🎨 IMAGES DIRECTORY

### Directory Structure

```
src/images/
├── frogs/
│   └── Hylorinas.jpeg          ← Hero background image
├── bats/
│   ├── R.darwinii.jpg          ← Mission page, first image
│   └── B.taeniata.jpg          ← Mission page, second image
└── members/
    ├── gb2.jpeg                ← Gabriel Bidart's photo
    ├── juan_canas.png          ← Juan Cañas photo
    └── mp.jpeg                 ← Maria Paula Toro photo
```

### Image Guidelines

- **Hero images:** 1920x1080px or larger, landscape
- **Mission/Vision images:** 800x600px recommended
- **Team photos:** 400x400px square, headshot style
- **Formats:** `.jpg`, `.jpeg`, `.png` all supported

### Replacing Images

**Method 1: Same filename**
- Replace the file with same name in same location
- No code changes needed

**Method 2: Different filename**
- Add new image to appropriate folder
- Update the import in the `.astro` file
- Example: Change line 11 in `mission.astro`:
  ```astro
  import batImage from "@/images/bats/NewImage.jpg";
  ```

---

## ⚙️ CONFIGURATION FILES

| Purpose | File Path | What It Controls |
|---------|-----------|------------------|
| **Site metadata** (title, description) | `src/siteConfig.ts` or `src/config.ts` | Site-wide settings |
| **Base URL** for GitHub Pages | `astro.config.mjs` | `/AnuraNet.github.io/` prefix |
| **Global CSS styles** | `src/styles/global.css` | Site-wide styling |
| **Tailwind config** | `tailwind.config.mjs` | Utility classes, colors |
| **SEO settings** | `src/components/SeoPage.astro` | Meta tags, Open Graph |

### Important Configuration Notes

**Base URL (astro.config.mjs):**
```javascript
export default defineConfig({
  base: '/AnuraNet.github.io/',
  // ...
});
```

This prefix is required for all internal links on GitHub Pages.

---

## 🎯 QUICK REFERENCE GUIDE

### "I want to change..."

| What You Want to Change | Where to Go | Specific Location |
|-------------------------|-------------|-------------------|
| Hero background image | `src/images/frogs/` | Replace `Hylorinas.jpeg` |
| Homepage title | `src/pages/index.astro` | Lines 37-39 |
| Homepage description | `src/pages/index.astro` | Lines 41-43 |
| Mission statement | `src/content/about/mission.md` | Entire file |
| Vision statement | `src/content/about/vision.md` | Entire file |
| Objectives | `src/content/about/objectives.md` | Entire file |
| Working Principles | `src/content/about/principles.md` | Entire file |
| Contact email | `src/content/about/contact.md` | Line 5 |
| Membership form link | `src/content/about/membership.md` | Line 13 |
| **Purple form link color** | `src/content/about/membership.md` | Line 13 (`#673AB7`) |
| Team member info | `src/content/team/{name}.md` | Entire file |
| Team member photo | `src/images/members/` | Replace image |
| Mission page photos | `src/images/bats/` | `R.darwinii.jpg` & `B.taeniata.jpg` |
| Photo credits | `src/pages/about/mission.astro` | Lines 32-34, 55-57 |
| Navigation menu | `src/components/Navigation.astro` | Entire file |
| Footer | `src/components/Footer.astro` | Entire file |

---

## 📋 FILE TYPES EXPLAINED

### `.astro` Files (Page Structure)
- Contain HTML, CSS, and JavaScript
- Define page layout and structure
- Import content from `.md` files
- Usually in `src/pages/` or `src/components/`

### `.md` Files (Content)
- Written in Markdown (simple text formatting)
- Contain the actual text content
- Easy to edit, no coding required
- Usually in `src/content/`

### Image Files
- `.jpg`, `.jpeg`, `.png`
- Stored in `src/images/`
- Referenced by `.astro` files

---

## 🔍 COMMON PATTERNS

### URL to File Pattern

```
Website URL: /about/mission
         ↓
Page Layout: src/pages/about/mission.astro
         ↓
Content Files: src/content/about/mission.md
               src/content/about/vision.md
               src/content/about/objectives.md
               src/content/about/principles.md
         ↓
Images: src/images/bats/R.darwinii.jpg
        src/images/bats/B.taeniata.jpg
```

### Content Import Pattern

In `.astro` files:
```astro
import { Content } from "@/content/about/filename.md";
```

Then use in HTML:
```astro
<Content />
```

---

## 💡 PRO TIPS

1. **Always edit `.md` files for text content** - they're simpler and safer
2. **Edit `.astro` files only for layout/structure changes**
3. **Keep image filenames simple** - no spaces, use hyphens or underscores
4. **Test locally before pushing** - run `npm run dev` to preview changes
5. **Use version control** - commit changes with clear messages
6. **Back up images** - keep originals before editing

---

## ⚠️ IMPORTANT NOTES

### Known Issues & Solutions

**Issue:** Back button doesn't work after clicking links  
**Cause:** BASE_URL configuration  
**Solution:** Use absolute paths with `/AnuraNet.github.io/` prefix

**Issue:** Image watermark visible  
**Resolution:** Replaced `Hylorina.jpg` with `R.darwinii.jpg`

**Issue:** Membership link color not changing  
**Solution:** Use inline styles in the `.md` file (currently implemented)

### Special Customizations

1. **Purple Membership Link**
   - Color: `#673AB7` (Google Forms purple)
   - Styled with inline CSS for maximum compatibility
   - Location: `src/content/about/membership.md` line 13

2. **Hero Page Styling**
   - Custom transparent navigation
   - White footer text
   - Dark overlay at 60% opacity

---

## 📞 NEED HELP?

### File Locations Summary

```
src/
├── pages/              ← Page layouts (.astro files)
│   ├── index.astro    ← Home page
│   ├── about/
│   │   ├── mission.astro
│   │   └── team.astro
│   └── contact/
│       └── membership.astro
│
├── content/           ← Editable text content (.md files)
│   ├── about/
│   │   ├── mission.md
│   │   ├── vision.md
│   │   ├── objectives.md
│   │   ├── principles.md
│   │   ├── contact.md
│   │   └── membership.md
│   ├── team/          ← Team member files
│   └── news/          ← News posts
│
├── images/            ← All photos and images
│   ├── frogs/
│   ├── bats/
│   └── members/
│
└── components/        ← Reusable pieces
    ├── Navigation.astro
    └── Footer.astro
```

---

## 📝 EDITING CHECKLIST

Before making changes:
- [ ] Locate the correct file using this guide
- [ ] Make a backup copy if editing images
- [ ] Test changes locally with `npm run dev`
- [ ] Check all links still work
- [ ] Verify images display correctly
- [ ] Test on mobile view
- [ ] Commit changes with descriptive message
- [ ] Push to GitHub and verify live site

---

**Document Version:** 1.0  
**Created:** February 9, 2026  
**For:** AnuraNet Website (ElBatrasio/AnuraNet.github.io)  

---

*This map was created to help you navigate and edit the AnuraNet website with confidence. Keep it handy for quick reference!* 🐸✨