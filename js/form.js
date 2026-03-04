/**
 * CCEA - Form Logic
 * Handles cascading selects (Provincia → Cantón → Parroquia)
 * and form validation with Ecuadorian rules
 */

/* ══════════════════════════════════════════════════
   CASCADING SELECTS
   ══════════════════════════════════════════════════ */

function initCascadingSelects() {
    const provinciaSelect = document.getElementById('provincia');
    const cantonSelect = document.getElementById('canton');
    const parroquiaSelect = document.getElementById('parroquia');

    // ── Populate provinces ──
    ECUADOR_DATA.forEach((item) => {
        const option = document.createElement('option');
        option.value = item.provincia;
        option.textContent = titleCase(item.provincia);
        provinciaSelect.appendChild(option);
    });

    // ── Province change → populate cantons ──
    provinciaSelect.addEventListener('change', function () {
        const selectedProvincia = this.value;

        // Reset cantón and parroquia
        cantonSelect.innerHTML = '<option value="">Seleccione un cantón</option>';
        parroquiaSelect.innerHTML = '<option value="">Primero seleccione un cantón</option>';
        cantonSelect.disabled = true;
        parroquiaSelect.disabled = true;

        // Clear validation states
        clearValidation('canton');
        clearValidation('parroquia');

        if (!selectedProvincia) return;

        const provincia = ECUADOR_DATA.find(p => p.provincia === selectedProvincia);
        if (!provincia) return;

        provincia.cantones.forEach((c) => {
            const option = document.createElement('option');
            option.value = c.canton;
            option.textContent = titleCase(c.canton);
            cantonSelect.appendChild(option);
        });

        cantonSelect.disabled = false;

        // Subtle animation for the canton select
        cantonSelect.style.animation = 'none';
        cantonSelect.offsetHeight; // trigger reflow
        cantonSelect.style.animation = 'fadeInUp 0.3s ease-out';
    });

    // ── Canton change → populate parishes ──
    cantonSelect.addEventListener('change', function () {
        const selectedProvincia = provinciaSelect.value;
        const selectedCanton = this.value;

        // Reset parroquia
        parroquiaSelect.innerHTML = '<option value="">Seleccione una parroquia</option>';
        parroquiaSelect.disabled = true;

        // Clear validation
        clearValidation('parroquia');

        if (!selectedCanton || !selectedProvincia) return;

        const provincia = ECUADOR_DATA.find(p => p.provincia === selectedProvincia);
        if (!provincia) return;

        const canton = provincia.cantones.find(c => c.canton === selectedCanton);
        if (!canton) return;

        canton.parroquias.forEach((parroquia) => {
            const option = document.createElement('option');
            option.value = parroquia;
            option.textContent = titleCase(parroquia);
            parroquiaSelect.appendChild(option);
        });

        parroquiaSelect.disabled = false;

        // Subtle animation
        parroquiaSelect.style.animation = 'none';
        parroquiaSelect.offsetHeight; // trigger reflow
        parroquiaSelect.style.animation = 'fadeInUp 0.3s ease-out';
    });
}


/* ══════════════════════════════════════════════════
   VALIDATION
   ══════════════════════════════════════════════════ */

const validationRules = {
    nombre: {
        validate: (val) => val.trim().length >= 2,
        message: 'El nombre debe tener al menos 2 caracteres'
    },
    apellidoPaterno: {
        validate: (val) => val.trim().length >= 2,
        message: 'El apellido paterno debe tener al menos 2 caracteres'
    },
    apellidoMaterno: {
        validate: (val) => val.trim().length >= 2,
        message: 'El apellido materno debe tener al menos 2 caracteres'
    },
    cedula: {
        validate: validateCedulaEcuatoriana,
        message: 'Ingrese una cédula ecuatoriana válida (10 dígitos)'
    },
    telefono: {
        validate: (val) => /^09\d{8}$/.test(val.trim()),
        message: 'El teléfono debe tener 10 dígitos y empezar con 09'
    },
    correo: {
        validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
        message: 'Ingrese un correo electrónico válido'
    },
    fechaNacimiento: {
        validate: (val) => {
            if (!val) return false;
            const date = new Date(val);
            const today = new Date();
            const age = today.getFullYear() - date.getFullYear();
            return age >= 3 && age <= 120;
        },
        message: 'Ingrese una fecha de nacimiento válida'
    },
    lugarNacimiento: {
        validate: (val) => val.trim().length >= 2,
        message: 'Ingrese el lugar de nacimiento'
    },
    domicilio: {
        validate: (val) => val.trim().length >= 5,
        message: 'La dirección debe tener al menos 5 caracteres'
    },
    provincia: {
        validate: (val) => val !== '',
        message: 'Seleccione una provincia'
    },
    canton: {
        validate: (val) => val !== '',
        message: 'Seleccione un cantón'
    },
    parroquia: {
        validate: (val) => val !== '',
        message: 'Seleccione una parroquia'
    }
};

/**
 * Validates an Ecuadorian cédula using the official algorithm
 * @param {string} cedula - 10-digit cédula number
 * @returns {boolean}
 */
function validateCedulaEcuatoriana(cedula) {
    cedula = cedula.trim();

    // Must be exactly 10 digits
    if (!/^\d{10}$/.test(cedula)) return false;

    // Province code must be 01-24 or 30
    const province = parseInt(cedula.substring(0, 2), 10);
    if (province < 1 || (province > 24 && province !== 30)) return false;

    // Third digit must be 0-5 (natural person)
    const thirdDigit = parseInt(cedula[2], 10);
    if (thirdDigit > 5) return false;

    // Modulus 10 algorithm
    const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let total = 0;

    for (let i = 0; i < 9; i++) {
        let product = parseInt(cedula[i], 10) * coefficients[i];
        if (product >= 10) product -= 9;
        total += product;
    }

    const checkDigit = (10 - (total % 10)) % 10;
    return checkDigit === parseInt(cedula[9], 10);
}

/**
 * Validate a single field
 */
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const group = document.getElementById('group-' + fieldId);
    const errorEl = document.getElementById('error-' + fieldId);
    const rule = validationRules[fieldId];

    if (!field || !rule) return true;

    const value = field.value;
    const isValid = rule.validate(value);

    if (!isValid) {
        group.classList.add('error');
        group.classList.remove('success');
        if (errorEl) errorEl.textContent = rule.message;
        return false;
    } else {
        group.classList.remove('error');
        group.classList.add('success');
        if (errorEl) errorEl.textContent = '';
        return true;
    }
}

/**
 * Clear validation state for a field
 */
function clearValidation(fieldId) {
    const group = document.getElementById('group-' + fieldId);
    if (group) {
        group.classList.remove('error', 'success');
    }
    const errorEl = document.getElementById('error-' + fieldId);
    if (errorEl) errorEl.textContent = '';
}

/**
 * Validate entire form
 */
function validateForm() {
    let isValid = true;
    let firstError = null;

    for (const fieldId in validationRules) {
        if (fieldId === 'referencia') continue; // Optional field
        if (!validateField(fieldId)) {
            isValid = false;
            if (!firstError) {
                firstError = document.getElementById(fieldId);
            }
        }
    }

    // Scroll to first error
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
    }

    return isValid;
}

/**
 * Setup real-time validation
 */
function initValidation() {
    const fieldsToValidate = Object.keys(validationRules);

    fieldsToValidate.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // Validate on blur
        field.addEventListener('blur', () => {
            if (field.value) {
                validateField(fieldId);
            }
        });

        // Clear error on input
        field.addEventListener('input', () => {
            const group = document.getElementById('group-' + fieldId);
            if (group && group.classList.contains('error')) {
                clearValidation(fieldId);
            }
        });

        // Also validate selects on change
        if (field.tagName === 'SELECT') {
            field.addEventListener('change', () => {
                if (field.value) {
                    validateField(fieldId);
                }
            });
        }
    });

    // Format cédula (only digits)
    const cedulaInput = document.getElementById('cedula');
    cedulaInput.addEventListener('input', () => {
        cedulaInput.value = cedulaInput.value.replace(/\D/g, '');
    });

    // Format teléfono (only digits)
    const telInput = document.getElementById('telefono');
    telInput.addEventListener('input', () => {
        telInput.value = telInput.value.replace(/\D/g, '');
    });
}


/* ══════════════════════════════════════════════════
   FORM SUBMISSION
   ══════════════════════════════════════════════════ */

function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    // Gather the data
    const formData = {
        nombre: document.getElementById('nombre').value.trim(),
        apellidoPaterno: document.getElementById('apellidoPaterno').value.trim(),
        apellidoMaterno: document.getElementById('apellidoMaterno').value.trim(),
        cedula: document.getElementById('cedula').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        lugarNacimiento: document.getElementById('lugarNacimiento').value.trim(),
        domicilio: document.getElementById('domicilio').value.trim(),
        referencia: document.getElementById('referencia').value.trim(),
        provincia: document.getElementById('provincia').value,
        canton: document.getElementById('canton').value,
        parroquia: document.getElementById('parroquia').value,
    };

    // Show success modal
    showSuccessModal(formData);
}

/**
 * Display the success modal with a summary of submitted data
 */
function showSuccessModal(data) {
    const summary = document.getElementById('modalSummary');
    const labelMap = {
        nombre: 'Nombre',
        apellidoPaterno: 'Apellido Paterno',
        apellidoMaterno: 'Apellido Materno',
        cedula: 'Cédula',
        telefono: 'Teléfono',
        correo: 'Correo',
        fechaNacimiento: 'F. Nacimiento',
        lugarNacimiento: 'L. Nacimiento',
        domicilio: 'Domicilio',
        referencia: 'Referencia',
        provincia: 'Provincia',
        canton: 'Cantón',
        parroquia: 'Parroquia',
    };

    let html = '';
    for (const [key, label] of Object.entries(labelMap)) {
        const value = data[key];
        if (!value) continue;

        let displayValue = value;
        // Title-case the location fields
        if (['provincia', 'canton', 'parroquia'].includes(key)) {
            displayValue = titleCase(value);
        }
        // Format date
        if (key === 'fechaNacimiento') {
            const date = new Date(value + 'T00:00:00');
            displayValue = date.toLocaleDateString('es-EC', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
        }

        html += `
      <div class="summary-row">
        <span class="summary-label">${label}</span>
        <span class="summary-value">${displayValue}</span>
      </div>
    `;
    }

    summary.innerHTML = html;

    // Show modal
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Reset form
    document.getElementById('registrationForm').reset();
    document.getElementById('canton').innerHTML = '<option value="">Primero seleccione una provincia</option>';
    document.getElementById('canton').disabled = true;
    document.getElementById('parroquia').innerHTML = '<option value="">Primero seleccione un cantón</option>';
    document.getElementById('parroquia').disabled = true;

    // Clear all validation states
    document.querySelectorAll('.form-group').forEach(g => {
        g.classList.remove('error', 'success');
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ══════════════════════════════════════════════════
   UTILITIES
   ══════════════════════════════════════════════════ */

/**
 * Convert UPPERCASE text to Title Case
 */
function titleCase(str) {
    if (!str) return '';
    return str
        .toLowerCase()
        .replace(/(?:^|\s|[-/\(])\S/g, (match) => match.toUpperCase());
}
