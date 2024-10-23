document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    // Función para ocultar todas las secciones y mostrar solo la seleccionada
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Inicialmente, mostrar solo la primera sección
    showSection('about');

    // Agregar eventos de click a los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el comportamiento por defecto de los enlaces
            const sectionId = link.getAttribute('data-section'); // Obtener el ID de la sección a mostrar
            showSection(sectionId);
        });
    });
});
