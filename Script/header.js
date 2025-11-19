// -------------------------------
// CAMBIO DE CONTENEDORES
// -------------------------------

const navLinks = document.querySelectorAll(".nav_links a");
const contenedores = document.querySelectorAll(".contenedor");

// Oculta todos los contenedores
function ocultarContenedores() {
    contenedores.forEach(cont => cont.style.display = "none");
}

// Muestra un contenedor específico
function mostrarContenedor(id) {
    ocultarContenedores();
    const contenedor = document.getElementById(id);
    if (contenedor) contenedor.style.display = "block";
}

// Click en los links
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetID = link.dataset.target;
        mostrarContenedor(targetID);
    });
});

// Al cargar la página, mostrar SOLO "formularios"
document.addEventListener("DOMContentLoaded", () => {
    mostrarContenedor("formularios");
});


