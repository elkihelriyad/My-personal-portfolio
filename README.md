# Portfolio React

Modern React portfolio built with Vite, TailwindCSS, and Framer Motion.

## Stack

- React + Vite
- TailwindCSS v4
- Framer Motion
- Lucide React

## Project Structure

```text
portfolio-react/
|-- public/
|-- src/
|   |-- assets/
|   |   |-- images/
|   |   `-- icons/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   |-- ProjectCard.jsx
|   |   |-- Projects.jsx
|   |   `-- Skills.jsx
|   |-- data/
|   |   `-- projects.js
|   |-- pages/
|   |   `-- Home.jsx
|   |-- styles/
|   |   `-- global.css
|   |-- App.jsx
|   `-- main.jsx
|-- package.json
`-- README.md
```

## Features

- Dynamic project listing from `src/data/projects.js`
- Reusable `ProjectCard` component
- Project filtering by category
- Dynamic skills rendering
- Smooth scrolling navigation with active section tracking
- Framer Motion reveal animations
- Responsive mobile/tablet/desktop layout
- Dark and light mode toggle persisted in local storage
- Glassmorphism-inspired UI with modern typography

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
