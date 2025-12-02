// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize modal
    const modal = new VideoModal();
    
    // Initialize posts handler
    new PostsHandler(modal);
});

