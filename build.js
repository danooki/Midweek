const fs = require("fs");
const path = require("path");

// Configuration
const BLOG_TITLE = "Midweek Shot";
const BLOG_SUBTITLE = "interesting & curious video every week.";

// Read posts.json
function readPosts() {
  try {
    const postsData = fs.readFileSync("posts.json", "utf8");
    return JSON.parse(postsData);
  } catch (error) {
    console.error("Error reading posts.json:", error.message);
    process.exit(1);
  }
}

// Read template.html
function readTemplate() {
  try {
    return fs.readFileSync("src/template.html", "utf8");
  } catch (error) {
    console.error("Error reading template.html:", error.message);
    process.exit(1);
  }
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Format description - convert newlines to <br> tags
function formatDescription(description) {
  if (!description) return "";
  return description.replace(/\n/g, "<br>");
}

// Generate post HTML
function generatePostHTML(post) {
  const thumbnailUrl = `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`;

  // Separate language from tags
  const language = post.language || "";
  const filterableTags = (post.tags || []).filter(
    (tag) => tag !== "ENG" && tag !== "SPA"
  );
  const tagsHTML =
    filterableTags.length > 0
      ? `<div class="post-tags">${filterableTags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("")}</div>`
      : "";

  // Language badge (not filterable)
  const languageHTML = language
    ? `<span class="post-language">${language}</span>`
    : "";

  // Create data attribute for filtering (combine all tags)
  const allTags = filterableTags.join(" ");
  const dataTags = allTags ? `data-tags="${allTags}"` : "";

  const youtubeUrl = `https://www.youtube.com/watch?v=${post.videoId}`;
  const youtubeButtonHTML = `<a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-button" title="Open the video in Youtube">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>`;

  return `
        <article class="post-card" data-video-id="${post.videoId}" ${dataTags}>
            <div class="thumbnail-container">
                <img src="${thumbnailUrl}" alt="${post.title}" loading="lazy">
                <div class="play-button"></div>
            </div>
            <div class="post-content">
                <div class="post-header">
                    <h2 class="post-title">${post.title}</h2>
                    <div class="post-header-badges">
                        ${languageHTML}
                        ${youtubeButtonHTML}
                    </div>
                </div>
                <div class="post-meta">
                    <span class="post-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${formatDate(post.date)}
                    </span>
                </div>
                <p class="post-description">${formatDescription(post.description)}</p>
                ${tagsHTML}
            </div>
        </article>
    `;
}

// Generate all posts HTML
function generatePostsHTML(posts) {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return sortedPosts.map((post) => generatePostHTML(post)).join("");
}

// Build the site
function build() {
  console.log("Building blog...");

  // Read data
  const { posts } = readPosts();
  const template = readTemplate();

  if (!posts || posts.length === 0) {
    console.warn("Warning: No posts found in posts.json");
  }

  // Generate posts HTML
  const postsHTML = generatePostsHTML(posts);

  // Replace template placeholders
  const currentYear = new Date().getFullYear();
  let html = template
    .replace(/{{BLOG_TITLE}}/g, BLOG_TITLE)
    .replace(/{{BLOG_SUBTITLE}}/g, BLOG_SUBTITLE)
    .replace(/{{POSTS_CONTENT}}/g, postsHTML)
    .replace(/{{CURRENT_YEAR}}/g, currentYear);

  // Write index.html
  fs.writeFileSync("index.html", html, "utf8");

  console.log(`✓ Generated index.html with ${posts.length} post(s)`);
  console.log("Build complete!");
}

// Run build
build();
