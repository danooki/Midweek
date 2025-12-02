# Midweek Shot

A minimal, static blog generator for GitHub Pages that displays YouTube videos. No backend required, zero npm dependencies.

## Features

- ✅ **No Backend Required** - Pure static site generation
- ✅ **YouTube Integration** - Displays thumbnails and embeds videos
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Zero Dependencies** - Uses only Node.js built-in modules
- ✅ **Simple Content Management** - Just edit a JSON file to add posts

## Quick Start

### 1. Add Your Blog Posts

Edit `posts.json`:

```json
{
  "posts": [
    {
      "id": "unique-id",
      "videoId": "youtube-video-id",
      "title": "My First Video",
      "description": "This is a description...",
      "date": "2025-01-02",
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

**Fields:** `id`, `videoId` (YouTube ID after `v=`), `title`, `description`, `date` (YYYY-MM-DD), `tags` (optional)

### 2. Build the Site

```bash
node build.js
```

This generates `index.html` from your `posts.json` file.

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

## Customization

**Blog Title/Subtitle:** Edit `build.js`:

```javascript
const BLOG_TITLE = "Midweek Shot";
const BLOG_SUBTITLE = "interesting & curious video every week.";
```

**Styling:** Edit `src/styles.css`

**Template:** Edit `src/template.html`

## Getting YouTube Video IDs

From URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ` (the part after `v=`).

## Auto-Building

GitHub Actions can automatically rebuild when you push changes. See `.github/workflows/build.yml`.

## License

Feel free to use this for your own projects!
