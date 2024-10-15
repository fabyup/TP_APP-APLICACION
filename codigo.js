// Capturamos el formulario y los campos de entrada
const form = document.getElementById('contact-form');
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('telefono');
const mensajeInput = document.getElementById('mensaje');

// Mensajes de error
const nombreError = document.getElementById('nombre-error');
const telefonoError = document.getElementById('telefono-error');
const mensajeError = document.getElementById('mensaje-error');

// Función para validar el campo de nombre
function validarNombre() {
    if (nombreInput.value.trim() === '') {
        nombreError.textContent = 'El nombre es obligatorio.';
        return false;
    } else if (nombreInput.value.length < 3) {
        nombreError.textContent = 'El nombre debe tener al menos 3 caracteres.';
        return false;
    }
    nombreError.textContent = ''; // Sin errores
    return true;
}

// Función para validar el teléfono
function validarTelefono() {
    const telefono = telefonoInput.value.trim();
    const regex = /^[0-9]{10}$/; // 10 dígitos exactos

    if (!regex.test(telefono)) {
        telefonoError.textContent = 'El teléfono debe tener 10 dígitos.';
        return false;
    }
    telefonoError.textContent = ''; // Sin errores
    return true;
}

// Función para validar el mensaje
function validarMensaje() {
    if (mensajeInput.value.trim() === '') {
        mensajeError.textContent = 'El mensaje no puede estar vacío.';
        return false;
    }
    mensajeError.textContent = ''; // Sin errores
    return true;
}

// Escuchar eventos en tiempo real
nombreInput.addEventListener('input', validarNombre);
telefonoInput.addEventListener('input', validarTelefono);
mensajeInput.addEventListener('input', validarMensaje);

// Validar formulario completo al enviar
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenimos el envío si hay errores

    const esNombreValido = validarNombre();
    const esTelefonoValido = validarTelefono();
    const esMensajeValido = validarMensaje();

    if (esNombreValido && esTelefonoValido && esMensajeValido) {
        alert('Formulario enviado exitosamente.');
        form.reset(); // Limpiar el formulario
    } else {
        alert('Por favor, corrige los errores antes de enviar.');
    }
});
