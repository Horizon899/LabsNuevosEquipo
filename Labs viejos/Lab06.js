const contraseña = document.getElementById('contra');
const contraval = document.getElementById('contraval');
const seccionver = document.getElementById('seccionver');
const boton = document.getElementById('boton');

const requisitos = () => {
    const contra1 = contraseña.value;
    let strengthMessage = '';

    if (contra1.length >= 8) {
        strengthMessage += 'Contraseña suficientemente larga. ';
    } else {
        strengthMessage += 'Contraseña muy corta. ';
    }

    if (/[A-Z]/.test(contra1)) {
        strengthMessage += 'Tiene una mayúscula. ';
    } else {
        strengthMessage += 'Falta una mayúscula. ';
    }

    if (/[a-z]/.test(contra1)) {
        strengthMessage += 'Tiene una minúscula. ';
    } else {
        strengthMessage += 'Falta una minúscula. ';
    }

    if (/[0-9]/.test(contra1)) {
        strengthMessage += 'Tiene un número. ';
    } else {
        strengthMessage += 'Falta un número. ';
    }

    if (/[\W_]/.test(contra1)) {
        strengthMessage += 'Tiene un carácter especial. ';
    } else {
        strengthMessage += 'Falta un carácter especial. ';
    }


    return contra1.length >= 8 && /[A-Z]/.test(contra1) && /[a-z]/.test(contra1) &&
           /[0-9]/.test(contra1) && /[\W_]/.test(contra1);
};

const validacion = () => {
    if (contraseña.value === contraval.value) {
        seccionver.className = "hero is-success";
    } else {
        seccionver.className = "hero is-danger";
    }
};

contraseña.addEventListener('input', () => {
    const validotodo = requisitos();
    boton.disabled = !(validotodo && validacion());
});

boton.onclick = function() {
    boton.disabled = !(requisitos() && validacion());
};

document.getElementById("textito").textContent = "Es momento de validar tu contraseña!";
