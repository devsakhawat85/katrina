# Mind & Body Mastery — Katharina Tschurtschenthaler

High-performance luxury wellness and executive nervous-system mastery platform.

---

## 🚀 Deploy to Netlify via GitHub

This project is fully configured for automatic continuous deployment on **Netlify**.

### Step 1: Push Code to GitHub

If you haven't initialized Git yet, run these commands in your project folder:

```bash
git init
git add .
git commit -m "Initial commit: Mind and Body Mastery platform"
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** and authorize access to your repository.
4. Choose your repository (`<YOUR-REPO-NAME>`).

### Step 3: Deploy (Auto-configured!)

Netlify will automatically detect the settings from `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `20`
- **SPA redirect**: `/* -> /index.html 200`

Click **"Deploy site"**. Within 1–2 minutes, your website will be live with a free SSL certificate!

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
