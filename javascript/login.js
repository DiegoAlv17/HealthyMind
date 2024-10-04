// Función para validar credenciales
function validarCredenciales(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Credenciales del administrador
    const adminUser = "utp123";
    const adminPassword = "utp456";

    // Validación de credenciales
    if (usuario === adminUser && password === adminPassword) {
        // Redirige al dashboard si las credenciales son correctas
        const location = window.location.href = "https://curious-tulumba-e257a8.netlify.app/";
        console.log(location) // Cambia por la ruta de tu dashboard en React
    } else {
        // Mostrar un mensaje de error
        alert("Usuario o contraseña incorrectos. Intente nuevamente...!!!");
    }
}
