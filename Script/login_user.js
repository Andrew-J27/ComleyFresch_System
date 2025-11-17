// ================================
// script-login.js (para login.html)
// ================================
document.addEventListener("DOMContentLoaded", () => {
// Si ya existe sesión, ir a CF.html
if (localStorage.getItem("usuario")) {
window.location.href = "CF.html";
return;
}


// Evento del formulario de login
document.getElementById("form_login").addEventListener("submit", function(e) 
{

    e.preventDefault();


    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();


    if (user === "" || pass === "") 
    {
        alert("Debe llenar ambos campos.");
        return;
    }


    // Validación de ejemplo (sustituir por lógica real)
    if (user === "admin" && pass === "1234") 
    {
        localStorage.setItem("usuario", user);
        window.location.href = "../CF.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
    });
});