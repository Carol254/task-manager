let texts = [
    'Increased output & productivity',
    'Access anywhere and at anytime',
    'Empowers members making them effective'
];
let speed = 70;

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContentLoaded event');
    typeWriter(texts, speed);
});

function typeWriter(texts, speed) {
    let maxLength = Math.max(...texts.map(text => text.length));

    for (let i = 0; i < maxLength; i++) {
        setTimeout(() => {
            texts.forEach((text, index) => {
                if (i < text.length) {
                    document.getElementById(`type-txt${index + 1}`).innerHTML += text.charAt(i);
                }
            });
        }, speed * i);
    }
}


