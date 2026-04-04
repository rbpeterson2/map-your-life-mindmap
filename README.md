# Map Your Life — Interactive Mind Map

An interactive mind map web app that visualizes a personal life document (Markdown). Upload any new `.md` background file and Claude AI will regenerate the mind map automatically.

## Features

- **Interactive mind map** — pan, zoom, click nodes for details
- **See background** — view the source markdown document rendered in a modal
- **Upload new background** — drop in any `.md` file
- **AI-powered regeneration** — Claude reads the new document and rebuilds the mind map via the Anthropic API

## Tech Stack

- **Frontend**: Vanilla JS + Vite (no framework overhead)
- **Backend**: Vercel serverless function (`/api/generate-mindmap.js`)
- **AI**: Anthropic Claude (claude-sonnet-4-20250514)

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your API key

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Run the dev server

You need two terminals — one for Vite (frontend) and one for the serverless function.

**Option A — Vercel CLI (recommended, runs everything together):**

```bash
npm install -g vercel
vercel dev
```

**Option B — Vite only (no API calls):**

```bash
npm run dev
```

> Note: Without the API running, uploading a new file will fail with a network error. The default mind map will still display correctly.

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create map-your-life --public --push
```

### 2. Import into Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Vercel will auto-detect the Vite config — no changes needed
4. Under **Environment Variables**, add:
   - `ANTHROPIC_API_KEY` = your key from [console.anthropic.com](https://console.anthropic.com)
5. Click **Deploy**

That's it. Vercel handles the serverless function at `/api/generate-mindmap` automatically.

---

## Project Structure

```
mindmap-app/
├── api/
│   └── generate-mindmap.js   # Vercel serverless function (Anthropic API call)
├── src/
│   ├── index.html            # App entry point
│   ├── style.css             # All styles
│   └── main.js               # Mind map logic + upload/regeneration
├── public/                   # Static assets (favicon etc.)
├── .env.example              # Environment variable template
├── .gitignore
├── package.json
├── vercel.json               # Vercel routing config
└── vite.config.js            # Vite build config
```

## How the AI Regeneration Works

1. User uploads a `.md` file
2. The browser reads the file contents
3. A `POST /api/generate-mindmap` request is sent with the markdown
4. The Vercel function calls the Anthropic API with a structured prompt
5. Claude returns a JSON object with `nodes` and `edges`
6. The front end rebuilds the mind map with the new data

The API key is **never exposed to the browser** — it lives only in the serverless function's environment.

---

## Customization

To change the default document, edit `DEFAULT_MD` and `DEFAULT_NODES` / `DEFAULT_EDGES` in `src/main.js`.

To adjust the AI prompt or model, edit `api/generate-mindmap.js`.
