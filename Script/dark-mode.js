// -------------------------------
// MODO OSCURO
// -------------------------------

// ESTE ES EL ID CORRECTO SEGÚN TU HTML
const btnModoOscuro = document.getElementById("full-moon");

let darkMode = false;

btnModoOscuro.addEventListener("click", () => {
    darkMode = !darkMode;
    darkMode ? activarModoOscuro() : desactivarModoOscuro();
});


function activarModoOscuro() {
    document.body.style.background = "#1e1e1e";
    document.body.style.color = "#ffffff";

    document.querySelector(".encabezado").style.background = "#2a2a2a";

    // Nav links
    navLinks.forEach(link => {
        link.style.color = "#fff";
    });

    // Botones
    const botones = document.querySelectorAll(".btn");
    botones.forEach(btn => {
        btn.style.background = "#3b3b3b";
        btn.style.color = "#fff";
    });

    const contenedores = document.querySelectorAll(".contenedor");
    contenedores.forEach(cont => {
        cont.style.background = "#2a2a2a";
        cont.style.color = "#ffffff";
        cont.style.borderColor = "#444";
    });
}

function desactivarModoOscuro() {
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";

    document.querySelector(".encabezado").style.background = "#0b2545";

    navLinks.forEach(link => {
        link.style.color = "#ffffff";
    });

    document.querySelectorAll(".btn").forEach(btn => {
        btn.style.background = "#0b2545";
        btn.style.color = "#f2c94c";
    });
    const contenedores = document.querySelectorAll(".contenedor");
    contenedores.forEach(cont => {
        cont.style.background = "#f9f9f9";
        cont.style.color = "#000000";
        cont.style.borderColor = "#ccc";
    });
}
