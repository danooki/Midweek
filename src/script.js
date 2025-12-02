// Video Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeBtn = document.querySelector('.close');
    const postCards = document.querySelectorAll('.post-card');
    
    // Open modal when clicking on a post card
    postCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoId = this.dataset.videoId;
            if (videoId) {
                openVideoModal(videoId);
            }
        });
    });
    
    // Close modal when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeVideoModal);
    }
    
    // Close modal when clicking outside the video
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeVideoModal();
        }
    });
    
    function openVideoModal(videoId) {
        // Set iframe source with autoplay
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closeVideoModal() {
        modal.classList.remove('show');
        videoFrame.src = ''; // Stop video playback
        document.body.style.overflow = ''; // Restore scrolling
    }
});

