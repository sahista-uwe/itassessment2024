document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const luxuryNav = document.querySelector('.luxury-nav');
    
    mobileToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      luxuryNav.classList.toggle('active');
    });
    
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (luxuryNav.classList.contains('active')) {
          mobileToggle.classList.remove('active');
          luxuryNav.classList.remove('active');
        }
      });
    });
  });