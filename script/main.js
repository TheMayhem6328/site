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

// Apu appreciation button
const thank_you_text = "Thank you so much, dear grandma for everything. You and grandpa are the closest " +
    "I am with anyone in this university. You've been unwaveringly there for me ever " +
    "since the start, witnessing me being silly, without any filter, and tolerating my " +
    "ever-worsening state of attendance. Thank you for listening to all my ranting, all " +
    "my unnecessarily verbose blurting, all my \"oh did you know how grandly I messed up " +
    "today? UwU\" sorta texts outta nowhere. Overall, thank you for being so supportive" +
    "\n\n" +
    "If grandpa is also reading this, thank you too for allowing me the same privileges, and " +
    "for your enthusiasm in listening to and for your constructive feedback on all the nerdy stuff " +
    "and overly ambitious plans that I discuss about but almost never end up implementing (I promise " +
    "I will do it, sooner than later)." +
    "\n\n" +
    "Overall, thank you both for being so supportive. It's unfortunate that we don't get to meet " +
    "as often as we used to before because of conflicting schedules, but I hope to make up for it soon. " +
    "Here's to many more years of being this well acquainted together :D"
document.getElementById("apu-appreciation").addEventListener('click', () => {
    window.alert(thank_you_text)
})
