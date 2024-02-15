function scrollToTop(duration: number) {
    const startingY = window.scrollY;
    const startTime = performance.now();

    function scrollStep(timestamp: number) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startingY * (1 - progress));

        if (progress < 1) {
            window.requestAnimationFrame(scrollStep);
        }
    }

    window.requestAnimationFrame(scrollStep);
}

export default scrollToTop;
