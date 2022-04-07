const darkMode = document.getElementById('dark_theme');

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})