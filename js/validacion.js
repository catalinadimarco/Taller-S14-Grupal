document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const emailInput = document.getElementById('email');
    const password1Input = document.getElementById('password1');
    const password2Input = document.getElementById('password2');
    const termsCheckbox = document.getElementById('terminos');
  
    form.addEventListener('submit', (event) => {
      let valid = true;
  
      // Reiniciar validaciones
      form.querySelectorAll('.form-control').forEach(input => {
        input.classList.remove('is-invalid');
        input.setCustomValidity('');
      });
  
      // Validar campos requeridos
      form.querySelectorAll('input[required]').forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('is-invalid');
          input.setCustomValidity('Este campo es obligatorio.');
        }
      });
  
      // Validar email
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(emailInput.value)) {
        valid = false;
        emailInput.classList.add('is-invalid');
        emailInput.setCustomValidity('Introduce un correo electrónico válido.');
      }
  
      // Validar contraseña
      if (password1Input.value.length < 6) {
        valid = false;
        password1Input.classList.add('is-invalid');
        password1Input.setCustomValidity('La contraseña debe tener al menos 6 caracteres.');
      }
  
      // Validar coincidencia de contraseñas
      if (password1Input.value !== password2Input.value) {
        valid = false;
        password2Input.classList.add('is-invalid');
        password2Input.setCustomValidity('Las contraseñas no coinciden.');
      }
  
      // Validar terminos y condiciones
      if (!termsCheckbox.checked) {
        valid = false;
        alert("Debes aceptar los términos y condiciones.");
      }
  
      // Si hay errores, evitar el envío
      if (!valid) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      // Chequear la validez de los campos
      if (form.checkValidity() === false) {
        // Mostrar feedback de Bootstrap
        form.classList.add('was-validated');
      }
    });
  });
  