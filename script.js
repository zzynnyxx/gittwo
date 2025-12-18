// Toggle menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar').querySelector('ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Interactive portfolio items
function openProject(name) {
    alert(`You clicked on ${name}. More details can be added here!`);
}

// Contact form submission (example)
const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    response.textContent = "Thank you for your message!";
    form.reset();
});
