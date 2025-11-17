// script_accordion.js

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todas las secciones tipo "folder"
    const folders = document.querySelectorAll(".folder");

    // Inicializar: abrir la primera sección, cerrar las demás
    folders.forEach((folder, index) => {
        const panel = folder.querySelector(".fold_panel");
        if (index === 0) {
            panel.style.display = "block"; // abrir primera
        } else {
            panel.style.display = "none"; // cerrar las demás
        }
    });

    // Agregamos evento a los headers
    folders.forEach(folder => {
        const header = folder.querySelector(".fold_header");
        const panel = folder.querySelector(".fold_panel");

        header.addEventListener("click", () => {
            // Si el panel ya está abierto, lo cerramos
            const isOpen = panel.style.display === "block";

            // Cerramos todos los paneles
            folders.forEach(f => f.querySelector(".fold_panel").style.display = "none");

            // Si estaba cerrado, lo abrimos
            if (!isOpen) {
                panel.style.display = "block";
            }
        });
    });
});
