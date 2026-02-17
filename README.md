# Sven Sonnborn - Portfolio

A modern, editorial-style portfolio built with Next.js 16, featuring smooth scroll animations and a premium design aesthetic.

## 🎨 Design Concept: "Editorial/Magazine"

- **Asymmetric layouts** with intentional whitespace
- **Premium typography** using Inter and JetBrains Mono
- **Adaptive light/dark mode** based on system preference
- **Smooth scroll** with Lenis and GSAP animations

## 🛠 Tech Stack

- **Framework:** Next.js 16.1+ (App Router)
- **Styling:** Tailwind CSS 4.0+
- **Animations:** GSAP + ScrollTrigger + Lenis
- **Icons:** Lucide React
- **Language:** TypeScript

## 📁 Project Structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── Navigation.tsx      # Fixed navigation with blur effect
│   ├── SmoothScroll.tsx    # Lenis smooth scroll provider
│   └── sections/
│       ├── Hero.tsx        # Hero section with stagger animations
│       ├── About.tsx       # About section with tech stack
│       ├── Experience.tsx  # Timeline-style experience
│       ├── Projects.tsx    # Bento grid projects showcase
│       ├── Contact.tsx     # Contact section
│       └── Footer.tsx      # Footer
├── public/
│   └── images/             # Placeholder for profile photos
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd my-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg: #fafafa;
  --text: #171717;
  --muted: #737373;
  --accent: #0ea5e9;
  /* ... */
}

.dark {
  --bg: #0a0a0a;
  --text: #e5e5e5;
  /* ... */
}
```

### Content

Update content in the respective section files:

- **Hero:** `components/sections/Hero.tsx`
- **About:** `components/sections/About.tsx`
- **Experience:** `components/sections/Experience.tsx`
- **Projects:** `components/sections/Projects.tsx`
- **Contact:** `components/sections/Contact.tsx`

### Images

Replace placeholder images in `public/images/`:

1. **Profile Photo:** Add your profile image and update the Hero section
2. **About Photo:** Add a portrait or workspace image

## 🎭 Animations

Animations are powered by GSAP with ScrollTrigger:

1. **Hero:** Staggered fade-in for text elements
2. **Sections:** Fade-in on scroll
3. **Project Cards:** Scale + border glow on hover
4. **Navigation:** Blur background on scroll

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (single column, hamburger menu)
- **Tablet:** 768px - 1024px (2 columns where applicable)
- **Desktop:** > 1024px (full layout)

## 📄 Resume

Place your resume PDF at `public/resume.pdf` for the download button to work.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
```

Connect your GitHub repository to Vercel for automatic deployments.

### Static Export

For static hosting, update `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
}
export default nextConfig
```

Then build:

```bash
npm run build
```

## 📦 Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎯 SEO

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Sven Sonnborn | Frontend Developer",
  description: "Your custom description here",
};
```

## 📄 License

MIT License - Feel free to use this template for your own portfolio.

---

Built with ❤️ by Sven Sonnborn
