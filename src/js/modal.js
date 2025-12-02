// Video Modal Module
class VideoModal {
  constructor() {
    this.modal = document.getElementById("videoModal");
    this.videoFrame = document.getElementById("videoFrame");
    this.closeBtn = document.querySelector(".close");
    this.init();
  }

  init() {
    // Close modal when clicking the X button
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    // Close modal when clicking outside the video
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("show")) {
        this.close();
      }
    });
  }

  open(videoId) {
    // Set iframe source with autoplay
    this.videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    this.modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  close() {
    this.modal.classList.remove("show");
    this.videoFrame.src = ""; // Stop video playback
    document.body.style.overflow = ""; // Restore scrolling
  }
}
