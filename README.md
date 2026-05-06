# 🚀 Landing Page - Modern AI Portfolio

Welcome to the **Landing Page** project! This is a high-performance, responsive landing page built with React, Vite, and Tailwind CSS, featuring smooth animations and multi-language support.


## ✨ Features

- **⚡ Fast Performance**: Powered by Vite and React 19.
- **🎨 Modern Design**: Beautiful UI with Tailwind CSS 4.
- **🎭 Smooth Animations**: Integrated with `motion` for high-quality transitions.
- **🌐 Multi-language**: Built-in support for i18next.
- **🤖 AI Integration**: Ready for Gemini API interactions.

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tramdk/landing-page.git
   cd landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run in Development Mode:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to view the app.

## 🚀 Deployment

### GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

1.  **Configure Vite**: Ensure `base` in `vite.config.ts` matches your repository name:
    ```ts
    export default defineConfig({
      base: '/landing-page/', // Change to your repo name
      // ...
    });
    ```
2.  **Push to GitHub**: When you push to the `main` branch, the `.github/workflows/deploy.yml` action will automatically build and deploy your site.
3.  **Settings**: In your GitHub Repository, go to **Settings > Pages** and ensure **Source** is set to **GitHub Actions**.

## 📁 Project Structure

- `src/`: React components and logic.
- `public/`: Static assets.
- `vite.config.ts`: Vite configuration.
- `.github/workflows/deploy.yml`: GitHub Actions deployment pipeline.

## 📝 License

This project is licensed under the MIT License.
