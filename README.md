# Midweek Shot

My youtube video log in a minimal static viewer hosted on GitHub Pages.
No backend required, zero npm dependencies ;)

## Features

- **No Backend Required** - Pure static site generation
- **YouTube Integration** - Displays thumbnails and embeds videos
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Zero Dependencies** - Uses only Node.js built-in modules
- **Simple Content Management** - Just edit a JSON file to add posts

## Quick Start

### 1. Add Blog Posts

Edit `posts.json`:

```json
{
  "posts": [
    {
      "id": "unique-id",
      "videoId": "youtube-video-id",
      "title": "That Youtube Video",
      "description": "This is a description...",
      "date": "2025-01-02",
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

### 2. Build the Site

```bash
node build.js
```

This generates `index.html` from `posts.json` file.

## Project Structure

```
/
├── posts.json              # Blog posts data
├── build.js                # Build script
├── index.html              # Generated homepage
├── src/
│   ├── template.html       # HTML template
│   ├── styles.css          # CSS styles
│   └── js/                 # JavaScript modules
└── README.md
```

## Understanding the Build System

This project uses a build system to generate `index.html`:

- **`src/template.html`** - This is the source template file with placeholders (`{{BLOG_TITLE}}`, `{{POSTS_CONTENT}}`). Edit this file to change the HTML structure.
- **`index.html`** - This is the generated output file. **No need to edit this** - it gets overwritten when running `node build.js`.
- **`build.js`** - Reads `src/template.html` and `posts.json`, then generates `index.html`.

**Workflow:** Edit `src/template.html` for structure changes → Edit `posts.json` for content → Run `node build.js` to regenerate `index.html`.
**Blog Title/Subtitle:** Edit `build.js`:

```javascript
const BLOG_TITLE = "Midweek Shot";
const BLOG_SUBTITLE = "interesting & curious video every week.";
```

**Styling:** Edit `src/styles.css`

**Template:** Edit `src/template.html`

## Auto-Building

GitHub Actions can automatically rebuild when pushing changes. See `.github/workflows/build.yml`.
