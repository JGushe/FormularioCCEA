/**
 * CCEA - App Initialization
 * Sets up event listeners and animations
 */

// ── Theme Toggle Functionality ──
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Save preference
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        
        // Add a subtle animation
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize cascading selects (geographic)
    initCascadingSelects();

    // Initialize academic cascading selects
    initAcademicCascadingSelects();

    // Initialize form validation
    initValidation();

    // Form submit handler
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', handleSubmit);

    // Modal close button
    const btnClose = document.getElementById('btnCloseModal');
    btnClose.addEventListener('click', closeModal);

    // Close modal on overlay click
    const modal = document.getElementById('successModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Set max date for birth date (today)
    const fechaInput = document.getElementById('fechaNacimiento');
    const today = new Date();
    const maxDate = today.toISOString().split('T')[0];
    fechaInput.setAttribute('max', maxDate);

    // Open date picker on click anywhere in the field
    fechaInput.addEventListener('click', () => {
        try { fechaInput.showPicker(); } catch (e) { /* fallback for older browsers */ }
    });

    // Set min date (120 years ago)
    const minYear = today.getFullYear() - 120;
    const minDate = `${minYear}-01-01`;
    fechaInput.setAttribute('min', minDate);
});
