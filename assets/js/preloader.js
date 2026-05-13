document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    const bar = document.getElementById('preloader-bar');
    if (!preloader) return;

    // Animate progress bar to full
    if (bar) {
        bar.style.transition = 'width 800ms ease';
        bar.style.width = '100%';
    }

    // After bar fills, trigger fade-out
    setTimeout(() => {
        preloader.classList.add('preloader--loaded');
        // Remove from flow after transition
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 420);
    }, 900);
});
