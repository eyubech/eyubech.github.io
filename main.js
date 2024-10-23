// Typing animation
const text = "Python Developer";
const typingText = document.getElementById("typing-text");
let isDeleting = false;
let txtIndex = 0;

function typeWriter() {
    const currentText = text.substring(0, txtIndex);
    typingText.innerHTML = currentText;
    typingText.className = isDeleting ? 'deleting' : 'typing';

    if (!isDeleting && txtIndex < text.length) {
        txtIndex++;
        setTimeout(typeWriter, 100);
    } else if (!isDeleting && txtIndex === text.length) {
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && txtIndex > 0) {
        txtIndex--;
        setTimeout(typeWriter, 50);
    } else if (isDeleting && txtIndex === 0) {
        isDeleting = false;
        setTimeout(typeWriter, 500);
    }
}

// Start the typing animation
typeWriter();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hide scroll indicator when scrolling down
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 50) {
        scrollIndicator.style.display = 'none';
    } else {
        scrollIndicator.style.display = 'flex';
    }
});
