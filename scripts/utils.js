/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {

    if (texto.trim() === '') {
        return false;
    }

    const regex = /^[a-zA-Z\s]+$/;

    if (!regex.test(texto)) {
        return false;
    }
    return true;
}

function normalizarTexto(texto) {

    texto = texto.toLowerCase().trim();

    const words = texto.split(' ');

    const normalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const normalizedText = normalizedWords.join(' ');

    return normalizedText;
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {

}

function normalizarEmail(email) {

    email = email.toLowerCase();
    email = email.trim();
    const atIndex = email.indexOf('@');
    const domain = email.slice(atIndex + 1).toLowerCase();
    const normalizedEmail = `${email.slice(0, atIndex)}@${domain}`;
    return normalizedEmail;

}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {

}

function compararContrasenias(contrasenia_1, contrasenia_2) {

}

