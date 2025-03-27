document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      clearErrors();
      
      if (validateForm()) {
        successModal.style.display = 'block';
        form.reset();
      }
    });
    
    closeModal.addEventListener('click', function() {
      successModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
      if (e.target === successModal) {
        successModal.style.display = 'none';
      }
    });
    
    function validateForm() {
      let isValid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      const name = document.getElementById('name');
      if (name.value.trim() === '') {
        showError('name-error', 'Please enter your name');
        isValid = false;
      }
      
      const email = document.getElementById('email');
      if (email.value.trim() === '') {
        showError('email-error', 'Please enter your email');
        isValid = false;
      } else if (!emailRegex.test(email.value)) {
        showError('email-error', 'Please enter a valid email');
        isValid = false;
      }
      
      const message = document.getElementById('message');
      if (message.value.trim() === '') {
        showError('message-error', 'Please enter your message');
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError('message-error', 'Message must be at least 10 characters');
        isValid = false;
      }
      
      return isValid;
    }
    
    function showError(id, message) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    
    function clearErrors() {
      const errors = document.querySelectorAll('.error-message');
      errors.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
      });
    }
  });