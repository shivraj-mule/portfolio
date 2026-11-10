# Shivraj Mule — Personal Portfolio Website

A cinematic, premium personal portfolio and digital introduction website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **GSAP**, and **Three.js / React Three Fiber**.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (tested on Node v20 / v24)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
This compiles TypeScript and builds optimized static assets into the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠 Centralized Content Configuration

All text, project details, skills, research topics, and social links are centralized in:
📁 `src/data/portfolioData.ts`

To update any content on your website, simply edit that single file. It is strongly typed with TypeScript and thoroughly commented.

---

## 🌐 GitHub Pages Deployment

This website is configured to work with GitHub Pages using relative asset paths (`base: './'`).

### Automated GitHub Actions Deployment
A ready-to-use workflow is included at `.github/workflows/deploy.yml`.

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete cinematic portfolio website"
   git branch -M main
   git remote add origin https://github.com/ShivrajMule/<your-repo-name>.git
   git push -u origin main
   ```

2. Enable GitHub Pages in your GitHub repository:
   - Navigate to **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select **GitHub Actions**
   - Every time you push to `main`, GitHub Actions will build and publish your website automatically!
