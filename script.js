document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.gallery-item').forEach(image => {
        image.addEventListener('click', (event) => {
            lightbox.style.display = 'flex';
            lightboxImage.src = event.target.src;
            caption.textContent = event.target.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});