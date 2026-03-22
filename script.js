document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links is already handled by CSS (scroll-behavior: smooth)

    // Intersection Observer for fade-up animations
    const fadeUpElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger the animation
                entry.target.classList.add('visible');
                // Unobserve after it's visible so it doesn't animate out and in continually
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeUpElements.forEach(element => {
        observer.observe(element);
    });
});
