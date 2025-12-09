export default defineNuxtPlugin(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const userMenu = document.querySelector('.user-menu');
        const dropdown = userMenu?.querySelector('.dropdown-menu');
        const backdrop = document.querySelector('#dropdownBackdrop');

        if (!userMenu || !dropdown || !backdrop) return;

        function showDropdown() {
            dropdown.classList.add('show');
            backdrop.style.display = 'block';
            setTimeout(() => backdrop.classList.add('show'), 10);
        }

        function hideDropdown() {
            dropdown.classList.remove('show');
            backdrop.classList.remove('show');
            setTimeout(() => {
                backdrop.style.display = 'none';
            }, 150);
        }

        userMenu.addEventListener('mouseenter', showDropdown);
        userMenu.addEventListener('mouseleave', hideDropdown);
        backdrop.addEventListener('click', hideDropdown);
    });
});
