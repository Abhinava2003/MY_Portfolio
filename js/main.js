// Avatar Welcome Modal
const avatarModal = document.getElementById('avatarModal');
const closeAvatar = document.getElementById('closeAvatar');
const enterPortfolio = document.getElementById('enterPortfolio');
const speechText = document.getElementById('speechText');

// Show avatar modal on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set a timeout to show the modal after a brief moment
    setTimeout(() => {
        avatarModal.classList.remove('hidden');
        
        // Array of different greetings
        const greetings = [
            "Welcome to my portfolio! I'm excited to share my work with you.",
            "Hello there! Thanks for visiting my portfolio.",
            "Hey! Welcome to my creative space. Enjoy exploring!",
            "Hi there! I'm glad you're here to check out my work.",
            "Welcome! Feel free to explore my projects and skills."
        ];
        
        // Select a random greeting
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        speechText.textContent = randomGreeting;
        
    }, 500);
});

// Close modal when clicking the close button
closeAvatar.addEventListener('click', function() {
    avatarModal.classList.add('hidden');
});

// Close modal and scroll to top when clicking enter portfolio
enterPortfolio.addEventListener('click', function() {
    avatarModal.classList.add('hidden');
    window.scrollTo(0, 0);
});

// Close modal when clicking outside the modal content
avatarModal.addEventListener('click', function(e) {
    if (e.target === avatarModal) {
        avatarModal.classList.add('hidden');
    }
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Download CV Button
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    alert('CV download functionality would be implemented here. In a real application, this would download your CV file.');
});

// Project Modals
const projectButtons = document.querySelectorAll('.view-project');
const certificateButtons = document.querySelectorAll('.view-certificate');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-id');
        const modal = document.getElementById(`project-modal-${projectId}`);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

certificateButtons.forEach(button => {
    button.addEventListener('click', () => {
        const certificateId = button.getAttribute('data-id');
        const modal = document.getElementById(`certificate-modal-${certificateId}`);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});