const form = document.querySelector('.contact');
const enviado = document.querySelector('.mensaje-enviado');
const nombreEnviado = document.querySelector('#nombre-enviado');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar campos
  const email = form.querySelector('#correo');
  const celular = form.querySelector('#celular');
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexCelular = /^\d{10}$/;
//Agregado de errores
  if (!regexEmail.test(email.value)) {
    alert('Ingresa una dirección de correo electrónico válida');
    email.focus();
    return;
  }

  if (!regexCelular.test(celular.value)) {
    alert('Ingresa un número de celular válido');
    celular.focus();
    return;
  }

  // Enviar formulario con el campo nombre dentro del mensaje 
  const nombre = form.querySelector('#nombres').value;
  enviado.style.display = 'block';
  nombreEnviado.textContent = nombre;
  form.reset(); 
  form.style.display = 'none';
});
