// Dynamically update copyright year in footer
const copyrightYearElement = document.querySelector('footer p');
if (copyrightYearElement) {
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear} Hailin Zeng. All rights reserved.`;
}

// Hamburger menu & form handling
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    }

    // Certificate modal
    const modal = document.getElementById('cert-modal');
    if (modal) {
        const modalImg = document.getElementById('cert-modal-img');
        const closeBtn = modal.querySelector('.cert-modal-close');

        document.querySelectorAll('button.cert-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                modalImg.src = btn.dataset.cert;
                modal.classList.add('open');
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.classList.remove('open');
            modalImg.src = '';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('open');
                modalImg.src = '';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.classList.remove('open');
                modalImg.src = '';
            }
        });
    }
});
