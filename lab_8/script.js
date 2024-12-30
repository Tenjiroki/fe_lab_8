document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a, .dropdown-menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }

            if (link.closest('.dropdown')) {
                const dropdownMenu = link.closest('.dropdown').querySelector('.dropdown-menu');
                dropdownMenu.classList.remove('show');
            }
        });
    });

    // Dropdown hover behavior for showing and hiding the menu
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        dropdown.addEventListener('mouseenter', function() {
            dropdownMenu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            dropdownMenu.style.display = 'none';
        });
    });

    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Ваша реєстрація успішна! Дякуємо за запис.');
            appointmentForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelector('.testimonial-carousel');
    let scrollPosition = 0;

    setInterval(() => {
        scrollPosition += 300;
        if (scrollPosition >= testimonials.scrollWidth) {
            scrollPosition = 0;
        }
        testimonials.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
    }, 3000);
});
