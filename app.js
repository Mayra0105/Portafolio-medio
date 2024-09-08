// Selecciona todas las barras de progreso
const barrasProgreso = document.querySelectorAll('.porcentaje-progreso');

function animarBarras() {
    barrasProgreso.forEach((barra) => {
        const distancia = barra.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;

        // Comprobamos si la barra está visible en el viewport
        if (distancia < alturaVentana) {
            const porcentaje = barra.getAttribute('data-porcentaje');
            barra.style.width = porcentaje;
        }
    });
}
// Llamar a la función al cargar la página y al hacer scroll
window.addEventListener('scroll', animarBarras);
window.addEventListener('load', animarBarras);


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-effect');
    const text = textElement.textContent; // Obtén el texto original
    textElement.textContent = ''; // Limpia el contenido del <h1>
  
    let index = 0;
    const speed = 40; // Velocidad de escritura en milisegundos (más bajo = más rápido)
  
    function type() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed); // Llama a la función de escritura de nuevo después de un intervalo
      }
    }
  
    type(); // Inicia el efecto de escritura
  });



// Barra de navegacion
const navbar = document.querySelector('.navbar');
// Función para agregar o quitar la clase de barra fija
function stickyNavbar() {
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
// Escucha el evento de desplazamiento para aplicar la funcionalidad sticky
window.addEventListener('scroll', stickyNavbar);

//Footer Copyright, Función para obtener el año actual
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear; 
});