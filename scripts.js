document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#element', {
        strings: ['Web developer', 'Graphic designer', 'Video Editor', 'Web Designer'],
        typeSpeed: 50,
    });

    const toggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Function to set the theme based on user preference
    function setTheme(theme) {
        if (theme === 'light') {
            bodyElement.classList.add('light-mode');
            toggleButton.textContent = 'Toggle Dark Mode';
        } else {
            bodyElement.classList.remove('light-mode');
            toggleButton.textContent = 'Toggle Light Mode';
        }
        localStorage.setItem('theme', theme);
    }

    // Event listener for toggle button
    toggleButton.addEventListener('click', () => {
        const currentTheme = bodyElement.classList.contains('light-mode') ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    // Load theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});