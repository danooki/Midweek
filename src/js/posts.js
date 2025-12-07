// Posts Module - Handles post card interactions
class PostsHandler {
  constructor(modal) {
    this.modal = modal;
    this.postCards = document.querySelectorAll(".post-card");
    this.init();
  }

  init() {
    // Open modal when clicking on a post card
    this.postCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        // Don't open modal if clicking on the YouTube button
        if (e.target.closest('.youtube-button')) {
          return;
        }
        
        const videoId = card.dataset.videoId;
        if (videoId) {
          this.modal.open(videoId);
        }
      });
    });
  }
}
