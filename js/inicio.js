"use strict";
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var checkboxs = document.getElementsByClassName("checkboxs");
var radio = document.getElementsByClassName("radios");
var descripcion = document.getElementById("descripcion");
var mensaje = document.getElementById("mensaje");
var slider = document.getElementById("conocProgr");
var output = document.getElementById("sliderNum");
output.innerHTML = slider.value;
formulario.addEventListener("submit", function (evento) {
    console.log(nombre.value + " " + apellidos.value + " " + rut.value + " " + email.value + " " + telefono.value);
    if (validar() == false) { /*Si el formulario no es valido */
        evento.preventDefault();
        return false;
    }
    else { /*Si el formulario cumple con los requisitos, se imprime un mensaje*/
        formulario.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
        evento.preventDefault();
    }
});
function validar() {
    if (validarRut() == true && checklist() == true && numTelefono() == true) {
        return true;
    }
    else {
        return false;
    }
}
function validarRut() {
    var i = rut.value.length;
    for (var index = 0; index <= i - 3; index++) { // Revisara que solo se ingresen números antes del guion
        if (isNaN(rut.value[index]) == true) {
            alert("E R R O R. El RUT debe ingresarse sin puntos y solamente números antes del digito verificador. Ej: 12345678-9");
            return false;
        }
    }
    if (rut.value[i - 2] != "-") { //Revisara que se haya ingresado un guion
        alert("E R R O R. El RUT debe ingresarse con el digito verificador. Ej: 12345678-9");
        return false;
    }
    switch (rut.value[i - 1]) { //Revisara que solamente se ingrese un número o una 'k' como digito verificador
        case "0":
            break;
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;
        case "7":
            break;
        case "8":
            break;
        case "9":
            break;
        case "k":
            break;
        case "K":
            break;
        default:
            alert("E R R O R. El RUT debe ingresarse sin puntos y con un digito verificador valido. Ej: 12345678-9");
            return false; //Si NO es valido el rut retornara false
            break;
    }
    return true; //Si es valido el rut retornara true
}
function checklist() {
    var checked = false;
    for (var index = 0; index < 6; index++) {
        if (checkboxs[index].checked == true) {
            checked = true;
        }
    }
    if (checked == false) {
        alert("E R R O R. Debe seleccionar uno o más lenguajes de programación");
    }
    return checked;
}
function numTelefono() {
    var i = telefono.value;
    if (i.length != 9) {
        alert("El número de telefono tiene que tener 9 digitos");
        return false;
    }
    else {
        return true;
    }
}
function limpiarDatos() {
    nombre.value = "";
    apellidos.value = "";
    rut.value = "";
    email.value = "";
    telefono.value = "";
    slider.value = "0";
    output.innerHTML = "0";
    for (var index = 0; index < 6; index++) {
        checkboxs[index].checked = false;
    }
    for (var index = 0; index < 5; index++) {
        radio[index].checked = false;
    }
    descripcion.value = "";
    document.documentElement.scrollTop = 0;
}
slider.oninput = function () {
    output.innerHTML = this.value;
};
