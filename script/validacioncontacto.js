//Declaraciones para el formulario de contacto 
const form = document.querySelector('.contact');
const recibido = document.querySelector('#recibido');
const nombreRecibido = document.querySelector('#nombre-recibido');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevenir que la página se recargue al enviar el formulario

    // Validacion de  campos
    const email = form.querySelector('#correo');
    const celular = form.querySelector('#celular');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCelular = /^\d{10}$/;
//if para validar y marcar error
    if (!regexEmail.test(email.value)) {
        document.querySelector('#email-error').style.display = 'block';
        email.classList.add('error');
        email.focus();
        return;
    } else {
        document.querySelector('#email-error').style.display = 'none';
        email.classList.remove('error');
    }

    if (!regexCelular.test(celular.value)) {
        document.querySelector('#celular-error').style.display = 'block';
        celular.classList.add('error');
        celular.focus();
        return;
    } else {
        document.querySelector('#celular-error').style.display = 'none';
        celular.classList.remove('error');
    }

    //mensaje de recibido con el agregado del campo nombre recibido en la declaracion
    const nombre = form.querySelector('#nombres').value;
    recibido.style.display = 'block';
    nombreRecibido.textContent = nombre;
    form.style.display = 'none';
});

