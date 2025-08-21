document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Solicitud enviada con éxito!");
});
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function mostrarSlide(n) {
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prev.addEventListener('click', () => {
    index--;
    mostrarSlide(index);
});

next.addEventListener('click', () => {
    index++;
    mostrarSlide(index);
});

// Cambio automático cada 4 segundos
setInterval(() => {
    index++;
    mostrarSlide(index);
}, 4000);
