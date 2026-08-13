# Week 9: React Advanced — Routing, Data Fetching, Custom Hooks & Styling

## Author
- **Name:** Christine Kamau
- **GitHub:** [@kaywambui-1](https://github.com/kaywambui-1)
- **Date:** August 14, 2026

## Project Description
A solo practice project covering Lesson 17 (data fetching, React Router, loading/error states) and Lesson 18 (custom hooks, styling approaches, a shared component library, and an accessibility audit). Built with React + Vite.

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- React Router
- CSS Modules
- Tailwind CSS v4
- Chrome DevTools Lighthouse (accessibility auditing)

## Features
- **Data fetching** — posts fetched directly with `useState`/`useEffect`, and via a reusable `useFetch` custom hook (dummyjson.com API)
- **Routing** — nested routes with `BrowserRouter`, a shared `Layout` with `Outlet`, dynamic post detail pages (`posts/:postId`), active-link styling with `NavLink`, and a logout redirect using `useNavigate`
- **Loading & error handling** — shared `LoadingSpinner` and `ErrorMessage` components with a working retry button
- **Custom hooks** — `useLocalStorage` (Settings: theme + font size), `useToggle` (Modal), `useForm` (contact form)
- **Styling** — CSS Modules (`Button.module.css` with variant props) and Tailwind CSS v4
- **Shared component library** — `Button`, `Input`, `Card`, `Modal`, `Avatar` in `src/components/shared/`, each with its own folder and a top-level barrel export
- **Accessibility audit** — full Lighthouse accessibility pass with fixes (see below)

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`

## Accessibility Audit
- **Before:** 20/22
- **After:** 21/22
- **Fixes:**
  - Increased button padding and added `min-height: 44px` in `Button.module.css` so all buttons meet the minimum touch target size
  - Darkened the primary button color from `#007bff` to `#0056b3` to meet the AA contrast ratio requirement (4.5:1)

## Lessons Learned
I learned how to fetch data with vite
How to load and handle errors

## Challenges Faced
the accessibility audit was hard to fix because i did'd know what needed to be changed.



