const parallaxContainers = document.querySelectorAll('.parallax-container');

window.addEventListener('scroll', function() {
    for (const container of parallaxContainers) {
        const background = container.querySelector('.parallax-background');
        const speed = container.getAttribute('data-speed') || 0.5;

        container.style.backgroundPositionY = -(window.pageYOffset * speed) + 'px';
    }
});