var cssScrollSupport = false;

// Scroll
if (CSS.supports('animation-timeline', 'scroll()')) {
    console.info('CSS function scroll() is supported in this browser. Will use CSS scroll animation once implemented');
    // Set to true to try to attempt CSS based animation again
    // Maybe edit above console.info() to reflect changes once done
    cssScrollSupport = false;
} else {
    console.warn('CSS function scroll() is not supported in this browser. Using JS-based scroll animation');
}

const heroElement = document.getElementById("root-hero");
const headerElement = document.getElementById("root-header");
if (!cssScrollSupport) {
    window.addEventListener('scroll', () => {
        const start = 0;
        const end = window.innerHeight;
        const scrollY = window.scrollY;

        // Normalize scroll progress
        const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);

        const scale = 1 - 0.3 * progress;
        const opacity = 1 - progress;
        const blurAmount = Math.floor(25 * progress)

        heroElement.style.transform = `scale(${scale})`;
        heroElement.style.opacity = opacity;
        headerElement.style.filter = `blur(${blurAmount}px)`;
    });
}

// Down arrow interactivity
document.getElementById("down-arrow").addEventListener('click', () => {
    const scrollY = window.innerHeight + 100
    scrollTo({
        top: scrollY,
        behavior: "smooth"
    })
})