# Arent Test – React + TypeScript + Vite

A single-page React application built with TypeScript and Vite. The project uses Tailwind CSS for styling, React Router for client-side routing, and Recharts for simple data visualizations. This README explains how to set up, develop, test (lint), build, and deploy the app, and documents the project structure and conventions.

## Table of Contents
- Overview
- Tech Stack
- Requirements
- Getting Started
- Available Scripts
- Project Structure
- Routing
- Pages and Components
- Styling (Tailwind CSS)
- Charts (Recharts)
- Assets (Fonts & Images)
- Environment Variables
- Linting & Code Quality
- TypeScript Configuration
- Vite Configuration
- Build & Deploy
- Troubleshooting
- FAQ
- Contributing
- License

## Overview
This project is a front-end SPA demonstrating a simple health/record UI with multiple pages:
- Top page with banners/photos
- My Record page with body record, diary, and exercise sections
- Column page with recommended items
- Not Found page for unmatched routes

The app is organized by high-level pages under `src/pages` and shared UI under `src/components` and `src/layout`.

## Tech Stack
- React 19 + TypeScript
- Vite 7 for dev server and build
- React Router v6
- Tailwind CSS 3
- Recharts 2 for charts
- ESLint 9 with TypeScript support

## Requirements
- Node.js 18+ (LTS recommended)
- npm 9+ (or compatible package manager)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL printed by Vite (typically `http://localhost:5173`).

## Available Scripts
- `npm run dev`: Start Vite dev server with HMR.
- `npm run build`: Type-check with `tsc -b` and build for production with Vite.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint across the repository.

## Project Structure
The important directories and files are listed below:

```text
arent-test/
  public/
    fonts/
    images/
  src/
    assets/
    components/
      Banner.tsx
      Button.tsx
      Footer.tsx
      Header.tsx
      LineChart.tsx
      MainPhoto.tsx
      ScrollTop.tsx
    layout/
      index.tsx
      LayoutConfig.ts
    pages/
      column/
        components/
          Column.tsx
          Recommended.tsx
        index.tsx
      my-record/
        components/
          BodyRecord.tsx
          MyDiary.tsx
          MyExercise.tsx
          Record.tsx
        index.tsx
      not-found/
        index.tsx
      top/
        components/
          Hex.tsx
          Photo.tsx
        index.tsx
    router/
      routes.tsx
    App.tsx
    App.css
    index.css
    main.tsx
  eslint.config.js
  tailwind.config.js
  vite.config.ts
  tsconfig.json
  tsconfig.app.json
  tsconfig.node.json
```

Notes:
- `public/` contains static assets copied as-is to the final build output.
- `src/components/` holds shared UI building blocks.
- `src/pages/` contains route-level pages and their local components.
- `src/layout/` defines global layout elements and configuration.
- `src/router/routes.tsx` centralizes application routes.

## Routing
The app uses React Router v6. Routes are defined in `src/router/routes.tsx`. Common pages include:
- `/` (Top page)
- `/my-record`
- `/column`
- `*` (Not Found)

To add a new page:
1. Create a folder under `src/pages/<your-page>` with an `index.tsx` entry.
2. Export your page component.
3. Add a corresponding route in `src/router/routes.tsx`.

## Pages and Components
- `src/pages/top/`: Landing/top-level visuals (e.g., `Photo.tsx`, `Hex.tsx`).
- `src/pages/my-record/`: Body record chart, diary list, and exercise log.
- `src/pages/column/`: Recommended items/columns.
- `src/pages/not-found/`: 404 page.
- Shared UI components live in `src/components/` (e.g., `Header.tsx`, `Footer.tsx`, `Button.tsx`, `LineChart.tsx`).

## Styling (Tailwind CSS)
Tailwind is configured via `tailwind.config.js` and `postcss.config.js`. The main Tailwind imports are in `src/index.css`.

Common patterns:
- Use utility classes in JSX via `className`.
- Add global styles or Tailwind layer directives in `src/index.css`.

If you add new content paths (e.g., new folders under `src/`), update `tailwind.config.js` `content` globs accordingly.

## Charts (Recharts)
Recharts is used for simple line charts (see `src/components/LineChart.tsx`). Data can be provided via props. Keep datasets small and memoize heavy computations when necessary.

## Assets (Fonts & Images)
- Fonts are stored in `public/fonts/` and can be used via `@font-face` in CSS.
- Images are in `public/images/` and can be referenced with `/images/<name>.<ext>`.
- You can also import assets from `src/assets/` if you want them processed by Vite.

## Environment Variables
Vite reads environment variables that start with `VITE_`.

Examples:
```env
VITE_API_BASE_URL=https://example.com/api
```

Usage in code:
```ts
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
```

For per-environment configs, create `.env.development`, `.env.production`, etc. See Vite docs for precedence.

## Linting & Code Quality
Run ESLint:
```bash
npm run lint
```

Key configuration files:
- `eslint.config.js`: ESLint setup for TypeScript and React.

Recommended (optional):
- Consider adding React-specific rule sets like `eslint-plugin-react-x` and `eslint-plugin-react-dom` if your team prefers stricter React linting.

## TypeScript Configuration
- `tsconfig.json`: Base settings.
- `tsconfig.app.json`: App-specific compiler options.
- `tsconfig.node.json`: Node-specific config for tooling.

The build step runs `tsc -b` to type-check the project before Vite bundling.

## Vite Configuration
- `vite.config.ts` contains the Vite setup, including the React plugin.
- Aliases, dev server settings, and other optimizations can be added here as the app grows.

## Build & Deploy
1. Build the project:
   ```bash
   npm run build
   ```
2. Preview the production build locally:
   ```bash
   npm run preview
   ```
3. Deploy the contents of `dist/` to your hosting provider (e.g., Netlify, Vercel, GitHub Pages, static hosting).

If you deploy behind a sub-path, set `base` in `vite.config.ts` accordingly.

## Troubleshooting
- Port already in use: change the dev server port in `vite.config.ts` or stop the other process.
- Styles not applying: ensure new file paths are included in `tailwind.config.js` `content` globs and that `index.css` imports Tailwind layers.
- Broken routes in production: ensure your hosting is configured to serve `index.html` for SPA routes (fallback rewrites to `/index.html`).
- Type errors on build: run `npm run lint` and fix reported issues. Ensure your editor uses the workspace TypeScript version.

## FAQ
- Q: Can I use Sass with Tailwind?
  A: Yes. `sass-embedded` is available. Use `.scss` files as needed; prefer Tailwind utilities for most styling.
- Q: How do I add a new page?
  A: Create a folder under `src/pages/<name>` with `index.tsx` and add a route in `src/router/routes.tsx`.
- Q: How do I add a new font?
  A: Place it in `public/fonts/` and declare `@font-face` in `index.css`.

## Contributing
1. Create a new branch
2. Make changes with clear commit messages
3. Ensure `npm run lint` passes
4. Open a Pull Request

## License
This project is licensed under the ISC License (see `package.json`).
