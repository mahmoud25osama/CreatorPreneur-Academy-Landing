# Academy Landing Page 🎓

A modern, responsive landing page built with React, TailwindCSS, and Sanity CMS. Features full RTL/LTR support, dark mode, and dynamic content management.

![React](https://img.shields.io/badge/React-18.2-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Features

-   Modern and responsive design
-   Full RTL/LTR support for Arabic/English
-   Dark mode support
-   Mobile-first responsive design
-   Smooth animations with Framer Motion
-   Content management with Sanity CMS
-   Fast performance with Vite
-   SEO optimized
-   Accessibility features
-   Lazy loading for images and videos

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

-   Node.js (v14 or higher)
-   npm or yarn

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

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`

### Fonts

Update fonts in `tailwind.config.js`

### Components

All components are in `src/components/`. Each component accepts:

-   `data` - Content from `src/data/siteData.js`
-   `isRTL` - RTL/LTR state

## 🌐 RTL/LTR Support

The app automatically switches between RTL and LTR layouts:

-   Click the language toggle button in the header
-   All text, layouts, and animations adapt accordingly
-   Arabic font family is applied in RTL mode

## 🌙 Dark Mode

Dark mode is supported throughout the app:

-   Click the moon/sun icon to toggle
-   Respects system preferences by default
-   All components have dark mode variants

## 📱 Responsive Design

The landing page is fully responsive:

-   **Mobile** (<640px): Single column layouts, mobile menu
-   **Tablet** (640px-1024px): 2-column grids, adjusted spacing
-   **Desktop** (>1024px): Full layouts with all features

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
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
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Videos.jsx
│   │   ├── Statistics.jsx
│   │   ├── Programs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── FAQ.jsx
│   │   ├── Pricing.jsx
│   │   ├── Partners.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── themSchema.js    # Theme configuration
│   ├── contexts/
│   │     ├─ data/
│   │     |    ├── DataContext.jsx        # Data Context to share Data
│   │     |    └── DataProvider.jsx       # Data Provider to provide data
│   │     ├─ direction/
│   │     |    ├── DirectionContext.jsx   # direction Context to share Data
│   │     |    └── DirectionProvider.jsx  # direction Provider
│   │     └─ theme/
│   │          ├── ThemeContext.jsx       # Theme Context to share Data
│   │          └── ThemeProvider.jsx      # Theme Provider
│   ├── data/
│   │   └── siteData.js      # site data
│   ├── hooks/
│   │   └── useData.js       # custom hook for site data
│   │   └── useDirection.js  # custom hook for Rtl Direction
│   │   └── useTheme.js      # custom hook for site theme
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json
```

## 🐛 Troubleshooting

### Styling Issues

1. Ensure PostCSS is configured correctly
2. Check Tailwind directives in `index.css`
3. Verify content paths in `tailwind.config.js`

## 📝 License

This project is licensed under the MIT License.

---

Made with ❤️ by Mahmoud Osama
