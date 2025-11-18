# Jason Brutus - Portfolio Website

A modern, responsive, and bilingual portfolio website showcasing my work as a full-stack developer. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🌐 **Bilingual Support** - Full English and French translations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Built with Next.js 15 App Router and Turbopack
- 🎨 **Modern UI/UX** - Smooth animations and transitions
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔍 **SEO Optimized** - Open Graph tags, meta descriptions, and structured data
- 🎯 **Type-Safe** - Full TypeScript implementation
- 🚀 **Production Ready** - Optimized images, fonts, and assets

## 🛠️ Tech Stack

### Core Technologies

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Language**: [TypeScript 5.9.2](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)

### Key Libraries

- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Internationalization**: Custom i18n implementation with locale detection
- **Font**: [Poppins](https://fonts.google.com/specimen/Poppins) via Next.js font optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BlastChaos/jason-portfolio.git
cd jason-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The application will automatically detect your browser language and redirect to the appropriate locale (`/en` or `/fr`).

## 📁 Project Structure

```
src/
├── app/
│   ├── [lang]/              # Dynamic route for language
│   │   ├── layout.tsx       # Language-specific layout with metadata
│   │   └── page.tsx         # Main page component
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── typography.tsx
│       └── icons/            # Icon components
├── dictionaries/
│   ├── en.json              # English translations
│   ├── fr.json              # French translations
│   └── dictionaries.ts      # Dictionary loader
└── Section/
    ├── AboutMe/             # About section
    ├── ContactMe/            # Contact section
    ├── Education/            # Education section
    ├── Footer/               # Footer component
    ├── Hero/                 # Hero section
    ├── Menu/                 # Navigation menu
    ├── Project/               # Projects showcase
    ├── Skill/                 # Skills section
    ├── WorkExperience/        # Work experience section
    └── shared/               # Shared components and utilities
```

## 🌍 Internationalization

The portfolio supports multiple languages through a custom i18n system:

- **Supported Languages**: English (`en`), French (`fr`)
- **Auto-detection**: Browser language is automatically detected
- **Manual switching**: Users can navigate to `/en` or `/fr` directly
- **Translation files**: Located in `src/dictionaries/`

## 🎨 Customization

### Adding a New Language

1. Add the locale to `src/dictionaries/dictionaries.ts`:

```typescript
export const LOCALES = ["en", "fr", "es"] as const;
```

2. Create a new translation file `src/dictionaries/es.json`
3. Copy the structure from `en.json` and translate all strings

### Updating Content

- **Projects**: Edit `src/Section/Project/utilities/projectsInfo.ts`
- **Work Experience**: Edit `src/Section/WorkExperience/utilities/workInfo.ts`
- **Education**: Edit `src/Section/Education/utilities/educationInfos.ts`
- **Skills**: Edit `src/Section/Skill/utilities/skillInfos.ts`

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

### Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BlastChaos/jason-portfolio)

Or deploy to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 👤 Author

**Jason Brutus**

- Portfolio: [jasonbrutus.com](https://jasonbrutus.com)
- LinkedIn: [linkedin.com/in/jasonbrutus](https://www.linkedin.com/in/jasonbrutus/)
- GitHub: [@BlastChaos](https://github.com/BlastChaos)
- Email: brutusjason123@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons from various open-source projects
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ If you find this portfolio inspiring, feel free to star the repository!
