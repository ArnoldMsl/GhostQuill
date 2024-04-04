document.addEventListener('DOMContentLoaded', function () {
    const segments = document.getElementsByClassName('circle-segment');
    const texts = document.getElementsByClassName('circle-segment-text');


    function positionSegment(element, angle, i) {
        element.style.left = 50 + (44.15 * Math.cos(angle)) + '%';
        element.style.top = 50 + (44.15 * Math.sin(angle)) + '%';
        element.style.transform = `translate(-50%, -50%) rotate(${i * 44.9}deg)`;
    }

    function positionText(text, i) {
        text.style.transform = `rotate(${i * -45}deg)`;
    }

    function backgroundSegment(element, i) {
        element.style.backgroundImage = `url('/build/images/wheel-segment${i + 1}.svg')`;
    }

    for (let i = 0; i < segments.length; i++) {
        let angle = (((Math.PI * 2) / segments.length) * i + 22.46);
        console.log(texts.length);
        positionSegment(segments[i], angle, i);
        positionText(texts[i], i);
        backgroundSegment(segments[i], i);
    }
});