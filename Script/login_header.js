// -------------------------------
// MODO OSCURO (Optimizado)
// -------------------------------

// Obtener el botón de modo oscuro
const btnModoOscuro = document.getElementById("full-moon");

// Evento al hacer clic
btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
