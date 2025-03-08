// Typing animation
const titles = ["Python Developer", "Machine Learning Engineer", "Data Scientist", "Web Developer"];
let titleIndex = 0;
const typingText = document.getElementById("typing-text");
let isDeleting = false;
let txtIndex = 0;

function typeWriter() {
    const currentTitle = titles[titleIndex];
    const currentText = currentTitle.substring(0, txtIndex);
    typingText.innerHTML = currentText;
    typingText.className = isDeleting ? 'deleting' : 'typing';

    // Speed of typing/deleting (adjust as needed)
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && txtIndex < currentTitle.length) {
        txtIndex++;
        setTimeout(typeWriter, typeSpeed);
    } else if (!isDeleting && txtIndex === currentTitle.length) {
        // Pause at complete text
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && txtIndex > 0) {
        txtIndex--;
        setTimeout(typeWriter, typeSpeed);
    } else if (isDeleting && txtIndex === 0) {
        isDeleting = false;
        // Move to next title
        titleIndex = (titleIndex + 1) % titles.length;
        // Pause before typing next title
        setTimeout(typeWriter, 500);
    }
}

// Start the typing animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    loadProjects();
    loadSkills();
    setupScrollAnimation();
    setupContactForm();
});

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
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

// Load projects dynamically
function loadProjects() {
    const projectsData = [
        {
            title: "AI Image Generator",
            description: "A deep learning model that generates unique images from text descriptions using state-of-the-art AI techniques.",
            image: "minishell.webp",
            technologies: ["Python", "PyTorch", "Flask"],
            github: "https://github.com/eyubech/ai-image-generator",
            demo: "https://ai-image-generator.example.com"
        },
        {
            title: "Data Analytics Dashboard",
            description: "Real-time analytics dashboard for monitoring business metrics with interactive visualizations.",
            image: "doom.webp",
            technologies: ["Python", "Django", "React"],
            github: "https://github.com/eyubech/analytics-dashboard",
            demo: "https://analytics-dashboard.example.com"
        },
        {
            title: "Automation Suite",
            description: "Collection of Python scripts for automating repetitive tasks and improving workflow efficiency.",
            image: "doomAI.webp",
            technologies: ["Python", "Selenium", "BeautifulSoup"],
            github: "https://github.com/eyubech/automation-suite",
            demo: null
        },
        {
            title: "Chatbot Application",
            description: "An AI-powered chatbot that helps users with various queries, built using machine learning algorithms.",
            image: "project4.webp",
            technologies: ["Python", "TensorFlow", "NLP"],
            github: "https://github.com/eyubech/chatbot-app",
            demo: "https://chatbot-app.example.com"
        },
        {
            title: "E-commerce Platform",
            description: "Full-featured e-commerce platform with a clean interface, easy-to-use checkout, and advanced search options.",
            image: "project5.webp",
            technologies: ["Python", "Django", "JavaScript"],
            github: "https://github.com/eyubech/ecommerce-platform",
            demo: "https://ecommerce-platform.example.com"
        },
        {
            title: "Weather Forecasting App",
            description: "An application that provides accurate weather forecasts and alerts users about severe weather conditions.",
            image: "project6.webp",
            technologies: ["Python", "Flask", "APIs"],
            github: "https://github.com/eyubech/weather-app",
            demo: "https://weather-app.example.com"
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate-on-scroll';
        
        const linksHTML = `
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
            </div>
        `;
        
        const techTagsHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${techTagsHTML}
                </div>
                ${linksHTML}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load skills dynamically
function loadSkills() {
    const programmingSkills = [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "HTML/CSS", level: 90 }
    ];
    
    const frameworkSkills = [
        { name: "Django", level: 90 },
        { name: "Flask", level: 85 },
        { name: "React", level: 75 },
        { name: "PyTorch", level: 80 },
        { name: "TensorFlow", level: 85 },
        { name: "Pandas", level: 95 }
    ];
    
    const softSkills = [
        { name: "Problem Solving", level: 95 },
        { name: "Project Management", level: 85 },
        { name: "Team Leadership", level: 80 },
        { name: "Communication", level: 90 },
        { name: "Time Management", level: 85 }
    ];
    
    populateSkills('programming-skills', programmingSkills);
    populateSkills('frameworks-skills', frameworkSkills);
    populateSkills('soft-skills', softSkills);
}

function populateSkills(containerId, skills) {
    const container = document.getElementById(containerId);
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item animate-on-scroll';
        
        skillItem.innerHTML = `
            <span>${skill.name}</span>
            <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}" style="width: 0%"></div>
            </div>
        `;
        
        container.appendChild(skillItem);
    });
}

// Animate elements when they come into view
function setupScrollAnimation() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate skill bars
                const skillBar = entry.target.querySelector('.skill-progress');
                if (skillBar) {
                    const level = skillBar.dataset.level;
                    setTimeout(() => {
                        skillBar.style.width = `${level}%`;
                    }, 300);
                }
            }
        });
    }, { threshold: 0.2 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup contact form validation and submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Basic validation
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                isValid = false;
                showError(nameInput, 'Name is required');
            } else {
                removeError(nameInput);
            }
            
            if (!emailInput.value.trim()) {
                isValid = false;
                showError(emailInput, 'Email is required');
            } else if (!isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email address');
            } else {
                removeError(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                isValid = false;
                showError(messageInput, 'Message is required');
            } else {
                removeError(messageInput);
            }
            
            // Submit form if valid
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Your message has been sent successfully!';
                
                // Clear form
                contactForm.reset();
                
                // Add success message
                contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
                
                // Here you would typically send the form data to a server
                console.log('Form submitted successfully');
                // For actual implementation, you would use fetch or XMLHttpRequest to send the data
            }
        });
    }
}

// Helper functions for form validation
function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error-message') || document.createElement('div');
    
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    if (!formControl.querySelector('.error-message')) {
        formControl.appendChild(errorElement);
    }
    
    formControl.className = 'form-control error';
    input.className = 'form-input error';
}

function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    formControl.className = 'form-control';
    input.className = 'form-input';
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Theme toggler
const themeToggler = document.getElementById('theme-toggler');
if (themeToggler) {
    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save user preference
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        
        // Update toggler icon
        themeToggler.innerHTML = isDarkMode ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    });
    
    // Check for saved theme preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggler.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        const scrollPosition = window.scrollY;
        header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
});

// Initialize AOS (Animate On Scroll) if it's being used
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out'
    });
}