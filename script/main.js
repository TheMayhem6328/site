const heroElement = document.getElementById("hero");
const headerElement = document.getElementById("header");

window.addEventListener('scroll', () => {
    const start = 0;
    const end = 1090;
    const scrollY = window.scrollY;

    // Normalize scroll progress
    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);

    const scale = 1 - 0.3 * progress;
    const opacity = 1 - progress;
    const blurAmount = Math.floor(25 * progress)
    const backgroundSize = 1 + 0.4*progress

    heroElement.style.transform = `scale(${scale})`;
    heroElement.style.opacity = opacity;
    headerElement.style.filter = `blur(${blurAmount}px)`;
});

document.getElementById("down-arrow").addEventListener('click', () => {
    const scrollY = window.innerHeight + 50
    scrollTo({
        top: scrollY,
        behavior: "smooth"
    })
})