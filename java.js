// Funcion para cuando se redusca el menu
var navlist = document.querySelector('.navlist'); // Selecciona el elemento con la clase 'navlist'
var menu_icon = document.getElementById('menu-icon'); // Selecciona el ícono del menú

if (navlist && menu_icon) {
    menu_icon.onclick = function() {
        // Verifica el valor actual de 'right' para alternar el menú
        if (navlist.style.right === "0%") {
            navlist.style.right = "-100%"; // Cierra el menú (lo desplaza hacia la derecha fuera de la pantalla)
        } else {
            navlist.style.right = "0%"; // Abre el menú (lo coloca visible en la pantalla)
        }
    };
}
// funcion botones menu
var Hv = document.getElementById('hv');
if (Hv) {
    Hv.onclick=function(){
        window.location.href = 'HV.html';
    }
    
}


// Ventana emergente
var contenedor=document.getElementById("overLay");
var OpenContenedor=document.getElementById("Contacto");
var OpenContenedor1=document.getElementById("Contacto1");
var buttonclose=document.getElementsByClassName("PopupClose")[0];
function abrirContenedor() {
    contenedor.style.display = "block";
}

// Verifica que los elementos existan y asigna el evento de clic
if (OpenContenedor) {
    OpenContenedor.onclick = abrirContenedor;
}

if (OpenContenedor1) {
    OpenContenedor1.onclick = abrirContenedor;
}

if (buttonclose) {
    buttonclose.onclick = function() {
        contenedor.style.display = "none";
    };
}
 // Botones panel de Contacto
 var buttonLinkedin = document.getElementById("BotonLinkedin");
 var buttonGitHub = document.getElementById("BotonGitHub");
 var buttonGmail=document.getElementById('BotonGmail');
if (buttonLinkedin) {
    buttonLinkedin.onclick = function() {
        window.open('https://www.linkedin.com/in/davidgarzong', "_blank");
    };
}

if (buttonGitHub) {
    buttonGitHub.onclick = function() {
        window.open('https://github.com/David-Garzon-07', "_blank");
    };
}
if (buttonGmail) {
    buttonGmail.onclick = function() {
        window.open('mailto:davidstevengarzon@gmail.com', "_blank");
    };
}