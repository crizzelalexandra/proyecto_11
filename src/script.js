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

// Cambio automático cada 6 segundos
setInterval(() => {
    index++;
    mostrarSlide(index);
}, 4000);

// Seleccionar todos los botones "Comprar"
const botonesComprar = document.querySelectorAll('.comprar');
const modal = document.getElementById('modal-pago');
const cerrarModal = document.getElementById('cerrar-modal');
const detalleCompra = document.getElementById('detalle-compra');
const confirmarCompra = document.getElementById('confirmar-compra');

let productoSeleccionado = '';
let precioSeleccionado = '';

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        productoSeleccionado = boton.getAttribute('data-producto');
        precioSeleccionado = boton.getAttribute('data-precio');

        detalleCompra.textContent = `Producto: ${productoSeleccionado} - Precio: $${precioSeleccionado}`;
        modal.style.display = 'block';
    });
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

confirmarCompra.addEventListener('click', () => {
    const metodoPago = document.getElementById('metodo-pago').value;
    if (metodoPago === '') {
        alert('Por favor, selecciona un método de pago.');
    } else {
        // Redirigir a la página de registro con datos en la URL
        const url = `registro.html?producto=${encodeURIComponent(productoSeleccionado)}&precio=${encodeURIComponent(precioSeleccionado)}&pago=${encodeURIComponent(metodoPago)}`;
        window.location.href = url;
    }
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
