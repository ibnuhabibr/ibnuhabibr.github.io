document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. I will get back to you soon!');
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

const typingEffect = document.querySelector('.typing');
const textArray = ['Ibnu Habib'];
let typingIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[typingIndex].length) {
        typingEffect.textContent += textArray[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    }
}

window.onload = type;
