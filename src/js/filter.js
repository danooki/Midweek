// Tag Filter Module
class TagFilter {
  constructor() {
    this.activeTag = "all";
    this.filterButtons = document.querySelectorAll(".tag-filter");
    this.postCards = document.querySelectorAll(".post-card");
    this.homeButton = document.querySelector(".nav-home");
    this.init();
  }

  init() {
    // Add click handler to home button (shows all posts)
    if (this.homeButton) {
      this.homeButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.filterByTag("all");
        // Remove active state from all tag buttons
        this.filterButtons.forEach((btn) => {
          btn.classList.remove("active");
        });
      });
    }

    // Add click handlers to filter buttons
    this.filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tag = button.dataset.tag;
        this.filterByTag(tag);
      });
    });
  }

  filterByTag(tag) {
    // Update active button
    this.filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.tag === tag) {
        btn.classList.add("active");
      }
    });

    this.activeTag = tag;

    // Filter posts
    this.postCards.forEach((card) => {
      if (tag === "all") {
        card.style.display = "";
      } else {
        const cardTagsString = card.dataset.tags || "";
        const cardTags = cardTagsString
          .split(" ")
          .filter((t) => t.trim() !== "");
        // Check for exact match in the tags array
        if (cardTags.includes(tag)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      }
    });
  }
}
