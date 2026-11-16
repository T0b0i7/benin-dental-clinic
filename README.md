# Benin Dental Clinic — Bilingual Website

![React](https://img.shields.io/badge/React-16.14-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-GPL_v3-blue)

A modern, responsive and bilingual (English / French) website for a dental clinic based in **Cotonou, Benin**. It includes service and blog sections, an online appointment form and an embedded Google Map centered on Benin.

## Live websites

| Host | URL |
| --- | --- |
| Vercel (production) | https://benin-dental-clinic.vercel.app |
| GitHub Pages | https://t0b0i7.github.io/benin-dental-clinic/ |

## Features

- English / French language switcher (French by default)
- Home, About, Services, Blog, Dental Tourism, Contact and Online Reservation pages
- Translated service, blog and booking-form content for both languages
- Responsive layout for desktop, tablet and mobile
- Google Maps embed centered on Cotonou, Benin
- Contact / appointment form
- SPA routing with proper fallback on GitHub Pages and Vercel
- Optimized static build with Vite

## Tech stack

- React 16 + React Router
- Vite 4
- Tailwind CSS
- i18next / react-i18next
- Swiper, Alice Carousel and Animate.css

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173/

## Production build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

The project is linked to Vercel and deploys automatically on every push to `main`.

```bash
vercel deploy --prod
```

### GitHub Pages

```bash
npm run deploy
```

This builds with the `/benin-dental-clinic/` base path, creates the SPA fallback and publishes the `gh-pages` branch.

## Project structure

```
src/
  Components/     UI components, language files and i18n setup
  Pages/          Route pages (Home, Services, Blog, Contact, ...)
  data/           English, French, Italian and Albanian content
  assets/         Images and icons
  utils/          Asset URL helper for sub-path deployments
public/           Public images served as-is
```

## License

This project is based on the open-source [Dental Clinic Website](https://github.com/KristianPepa/Dental-Clinic-Website) template and is distributed under the GPL v3 license.
