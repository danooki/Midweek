# Simple JavaScript Blog

A minimal, static blog generator for GitHub Pages that displays YouTube videos. No backend required, no external services needed, and zero npm dependencies (uses only Node.js built-in modules).

## Features

- ✅ **No Backend Required** - Pure static site generation
- ✅ **YouTube Integration** - Displays thumbnails and embeds videos
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Zero Dependencies** - Uses only Node.js built-in modules
- ✅ **Simple Content Management** - Just edit a JSON file to add posts
- ✅ **GitHub Pages Ready** - Deploy directly to GitHub Pages

## Quick Start

### 1. Add Your Blog Posts

Edit `posts.json` to add your blog posts:

```json
{
  "posts": [
    {
      "id": "unique-id",
      "videoId": "youtube-video-id",
      "title": "My First Video",
      "description": "This is a description of my video...",
      "date": "2025-01-02",
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

**Fields:**
- `id`: Unique identifier for the post
- `videoId`: YouTube video ID (the part after `v=` in YouTube URLs)
- `title`: Post title
- `description`: Post description
- `date`: Date in YYYY-MM-DD format
- `tags`: Array of tags (optional)

### 2. Build the Site

Run the build script:

```bash
node build.js
```

This generates `index.html` from your `posts.json` file.

### 3. Deploy to GitHub Pages

1. Push your files to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch containing your files (usually `main` or `master`)
4. Select `/ (root)` as the source
5. Click Save

Your blog will be available at `https://yourusername.github.io/repository-name/`

## Project Structure

```
/
├── posts.json              # Blog posts data
├── build.js                # Build script
├── index.html              # Generated homepage (created by build.js)
├── src/
│   ├── template.html       # HTML template
│   ├── styles.css          # Responsive CSS styles
│   └── script.js           # Client-side JavaScript
└── README.md               # This file
```

## How It Works

1. **Content Management**: Edit `posts.json` with your blog posts
2. **Build Process**: Run `node build.js` to generate static HTML
3. **Deployment**: Push the generated files to GitHub Pages

The build script:
- Reads `posts.json` to get your posts
- Uses `src/template.html` as the HTML template
- Generates `index.html` with all posts rendered
- Sorts posts by date (newest first)

## Customization

### Change Blog Title and Subtitle

Edit `build.js` and modify these variables:

```javascript
const BLOG_TITLE = 'My Video Blog';
const BLOG_SUBTITLE = 'A simple blog powered by YouTube videos';
```

### Styling

Edit `src/styles.css` to customize colors, fonts, and layout.

### Template

Edit `src/template.html` to modify the HTML structure.

## Getting YouTube Video IDs

To get a YouTube video ID:
1. Go to your YouTube video
2. Copy the URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. The video ID is the part after `v=` (e.g., `dQw4w9WgXcQ`)

## Auto-Building with GitHub Actions

If you want GitHub Actions to automatically rebuild your site when you push changes to `posts.json`, see `.github/workflows/build.yml`.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

Feel free to use this for your own projects!

# Midweek
