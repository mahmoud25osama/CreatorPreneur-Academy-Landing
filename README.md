# Academy Landing Page 🎓

A modern, responsive landing page built with React, TailwindCSS, and Sanity CMS. Features full RTL/LTR support, dark mode, and dynamic content management.

![React](https://img.shields.io/badge/React-18.2-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-green)
![Sanity](https://img.shields.io/badge/Sanity-CMS-red)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Features

- ✨ Modern and responsive design
- 🌍 Full RTL/LTR support for Arabic/English
- 🌙 Dark mode support
- 📱 Mobile-first responsive design
- 🎨 Smooth animations with Framer Motion
- 📝 Content management with Sanity CMS
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- ♿ Accessibility features
- 🔄 Lazy loading for images and videos

## 📋 Sections

1. **Header** - Navigation with language toggle and CTAs
2. **Hero Section** - Eye-catching hero with video/image background
3. **Features** - Key features showcase
4. **Videos/Case Studies** - Student success stories
5. **Statistics** - Animated numbers display
6. **Programs/Tracks** - Course offerings
7. **Testimonials** - Student reviews
8. **FAQ** - Frequently asked questions
9. **Pricing** - Pricing plans
10. **Partners** - Company partners
11. **Footer** - Contact info and links

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Sanity account (for CMS)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/academy-landing.git
cd academy-landing
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Add your Sanity project details to `.env`:
```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=your-token (optional)
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Sanity Setup

### 1. Create a Sanity Project

```bash
npm create sanity@latest -- --project <projectname> --dataset production
```

### 2. Copy Schemas

Copy the schemas from `sanity/schemas.js` to your Sanity Studio project.

### 3. Deploy Sanity Studio

```bash
cd sanity-studio
sanity deploy
```

### 4. Add Content

Access your Sanity Studio at `https://yourprojectname.sanity.studio` and add content for each section.

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`

### Fonts

Update fonts in `tailwind.config.js`

### Components

All components are in `src/components/`. Each component accepts:
- `data` - Content from Sanity CMS
- `isRTL` - RTL/LTR state

## 🌐 RTL/LTR Support

The app automatically switches between RTL and LTR layouts:

- Click the language toggle button in the header
- All text, layouts, and animations adapt accordingly
- Arabic font family is applied in RTL mode

## 🌙 Dark Mode

Dark mode is supported throughout the app:

- Click the moon/sun icon to toggle
- Respects system preferences by default
- All components have dark mode variants

## 📱 Responsive Design

The landing page is fully responsive:

- **Mobile** (<640px): Single column layouts, mobile menu
- **Tablet** (640px-1024px): 2-column grids, adjusted spacing
- **Desktop** (>1024px): Full layouts with all features

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

```bash
vercel
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

## 📁 Project Structure

```
academy-landing/
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Videos.jsx
│   │   ├── Statistics.jsx
│   │   ├── Programs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Pricing.jsx
│   │   ├── Partners.jsx
│   │   └── Footer.jsx
│   ├── lib/
│   │   └── sanityClient.js  # Sanity configuration
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── sanity/
│   └── schemas.js           # Sanity schemas
├── public/                  # Static assets
├── .env.example             # Environment variables example
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json
```

## 🐛 Troubleshooting

### Sanity Connection Issues

1. Check your project ID and dataset in `.env`
2. Ensure CORS is configured in Sanity dashboard
3. Verify API token if using private dataset

### Build Errors

1. Clear node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

2. Clear build cache

### Styling Issues

1. Ensure PostCSS is configured correctly
2. Check Tailwind directives in `index.css`
3. Verify content paths in `tailwind.config.js`

## 📝 License

This project is licensed under the MIT License.

---

Made with ❤️ by Academy Team

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
