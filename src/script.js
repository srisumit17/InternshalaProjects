const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Check if user has a preference for dark mode using the prefers-color-scheme media query
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set initial mode based on user preference
if (prefersDarkMode) {
    body.classList.add('dark');
}

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    
    // Store user's preference for light/dark mode in localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark'));
});

// Check if user has previously set a preference for light/dark mode
const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

// If a preference is stored, set the mode accordingly
if (storedDarkMode !== null) {
    if (storedDarkMode) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}

