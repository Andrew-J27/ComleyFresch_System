// ==============================
// script-cf.js (para CF.html)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
// Impedir acceso sin login
if (!localStorage.getItem("usuario")) {
window.location.href = "login.html";
return;
}
});


// ==============================
// script-cf.js (para CF.html)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
// Impedir acceso sin login
if (!localStorage.getItem("usuario")) {
window.location.href = "login.html";
return;
}
});


// -------------------------------
// CERRAR SESIÓN
// -------------------------------

// Obtener el botón de cerrar sesión
const btnCerrarSesion = document.getElementById("turn-off");

btnCerrarSesion.addEventListener("click", () => {
    // Eliminar usuario logeado
    localStorage.removeItem("usuario");

    // Redirigir al login.html
    window.location.href = "login.html";
});