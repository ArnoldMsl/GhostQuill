document.addEventListener('DOMContentLoaded', function () {
    const segments = document.getElementsByClassName('circle-segment');
    console.log(segments.length);

    function positionSegment(element, theta, i) {
        element.style.left = 50 + (44.15 * Math.cos(theta)) + '%';
        element.style.top = 50 + (44.15 * Math.sin(theta)) + '%';
        element.style.transform = `translate(-50%, -50%) rotate(${i * 44.9}deg)`;
    }

    function backgroundSegment(element, i) {
        element.style.backgroundImage = `url('/build/images/wheel-segment${i + 1}.svg')`;
    }

    for (let i = 0; i < segments.length; i++) {
        let theta = (((Math.PI * 2) / segments.length) * i + 22.46);
        console.log(theta);
        positionSegment(segments[i], theta, i);
        backgroundSegment(segments[i], i);
    }
});