document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-lightbox');
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src.replace('-thumb', '-full');
        const imgAlt = this.querySelector('img').alt;
        const modelName = this.querySelector('.overlay').textContent;
        
        lightboxImg.src = imgSrc;
        lightboxImg.alt = imgAlt;
        caption.textContent = `${modelName} - ${imgAlt}`;
        lightbox.style.display = 'flex';
      });
    });
    
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        lightbox.style.display = 'none';
      }
    });
  });