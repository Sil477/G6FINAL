 /* //Declaraciones para el formulario de contacto 
  const form = document.querySelector('.contact');
  const recibido = document.querySelector('#recibido');
  const nombreRecibido = document.querySelector('#nombre-recibido');
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Validacion de  campos
      const email = form.querySelector('#correo');
      const celular = form.querySelector('#celular');
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const regexCelular = /^\d{10}$/;
  
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
  
      //mensaje de recibido
      const nombre = form.querySelector('#nombres').value;
      recibido.style.display = 'block';
      nombreRecibido.textContent = nombre;
      form.style.display = 'none';
  });

  //Para adjuntar archivo en formulario contact de trabaja con  nosotros
const archivoInput = document.getElementById('archivo');
const archivoError = document.getElementById('archivo-error');

function validarArchivo() {
    if (!archivoInput.value) {
        archivoError.style.display = 'block';
        return false;
    }
    archivoError.style.display = 'none';
    return true;
}

archivoInput.addEventListener('change', validarArchivo);
function enviarFormulario(event) {
    event.preventDefault();
    if (!validarEmail() || !validarCelular() || !validarArchivo()) {
        return;
    }
    const nombresInput = document.getElementById('nombres');
    const nombreEnviado = document.getElementById('nombre-enviado');
    nombreEnviado.textContent = nombresInput.value;
    document.getElementById('contact-form').reset();
    document.getElementById('mensaje-enviado').style.display = 'block';
}*/
const form = document.querySelector('.contact');
const nombres = document.getElementById('nombres');
const correo = document.getElementById('correo');
const celular = document.getElementById('celular');
const mensaje = document.getElementById('mensaje');
const enviar = document.querySelector('input[type="submit"]');

enviar.addEventListener('click', function(event) {
    event.preventDefault();

    // validaion que se completen los campos 
    if (nombres.value === '' || correo.value === '' || celular.value === '' || mensaje.value === '') {
        alert('Por favor, complete todos los campos');
        return false;
    }
//validaciones puntuales en los campos 
    // Vañidacion de correo electrónico
    if (!correo.validity.valid) {
        document.getElementById('email-error').style.display = 'block';
        correo.focus();
        return false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // validacion de  número de celular revisar porque esta ....
    const regex = /^[1-9]\d{8}$/;
    if (!regex.test(celular.value)) {
        document.getElementById('celular-error').style.display = 'block';
        celular.focus();
        return false;
    } else {
        document.getElementById('celular-error').style.display = 'none';
    }

    // Validar que se haya adjuntado un archivo
    const archivo = document.querySelector('input[type="file"]');
    if (archivo.value === '') {
        alert('Por favor, adjunte un archivo');
        return false;
    }

    // Mensaje de confirmacion con exito
    const mensajeEnviado = document.createElement('p');
    mensajeEnviado.textContent = `Gracias por contactarnos, ${nombres.value}!`;
    mensajeEnviado.style.backgroundColor = '#c8e6c9';
    mensajeEnviado.style.padding = '1rem';
    form.appendChild(mensajeEnviado);

    // importante limpiar campos del formulario
    nombres.value = '';
    correo.value = '';
    celular.value = '';
    mensaje.value = '';
    archivo.value = '';
});

