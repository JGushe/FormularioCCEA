/**
 * CCEA - App Initialization
 * Sets up event listeners and animations
 */

document.addEventListener('DOMContentLoaded', () => {
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
