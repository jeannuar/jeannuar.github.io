const themeSwitch = document.getElementById('theme-switch');
const htmlElement = document.documentElement;

// Load saved theme preference, default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark-mode');
    themeSwitch.checked = true;
}

// Theme toggle event listener
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        htmlElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
