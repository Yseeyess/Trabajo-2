let formulario:any=document.getElementById("formulario");
let nombre:any=document.getElementById("nombre");
let apellidos:any=document.getElementById("apellidos");
let rut:any=document.getElementById("rut");
let email:any=document.getElementById("email");
let telefono:any=document.getElementById("telefono");
let checkboxs:any=document.getElementsByClassName("checkboxs");
let radio:any=document.getElementsByClassName("radios");
let descripcion:any=document.getElementById("descripcion");

let mensaje:any=document.getElementById("mensaje");

let slider:any = document.getElementById("conocProgr");
var output:any = document.getElementById("sliderNum");
output.innerHTML = slider.value; 

formulario.addEventListener("submit",function(evento:any){
    console.log(nombre.value + " " + apellidos.value + " "+ rut.value + " " + email. value + " " + telefono. value);
    
    if (validar()==false) {                                        /*Si el formulario no es valido */
        evento.preventDefault();
        return false;
    }else{                                                        /*Si el formulario cumple con los requisitos, se imprime un mensaje*/
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
    
        evento.preventDefault();
    }
   
});


function validar(){       /*Valida que se cumplan los requisitos*/
    if (validarRut()==true && checklist()==true && numTelefono()==true) {
        return true;
    }else{
        return false;
    }
}


function validarRut(){  /*Valida que el RUT ingresado sea valido*/
    let i:any=rut.value.length;

    for (let index = 0; index <= i-3; index++) {    // Revisara que solo se ingresen números antes del guion
        if (isNaN(rut.value[index])==true){
            alert("E R R O R. El RUT debe ingresarse sin puntos y solamente números antes del digito verificador. Ej: 12345678-9");
                return false;
        }   
    }

    if (rut.value[i-2]!="-") {  //Revisara que se haya ingresado un guion
        alert("E R R O R. El RUT debe ingresarse con el digito verificador. Ej: 12345678-9");
       return false; 
    }

    switch(rut.value[i-1]){ //Revisara que solamente se ingrese un número o una 'k' como digito verificador
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
            return false;   //Si NO es valido el rut retornara false
            break;        
    }
    return true;    //Si es valido el rut retornara true
}


function checklist(){   /*Valida que se ingrese aunque sea 1 lenguaje de programación*/
    let checked:boolean=false;

    for(let index = 0; index <6; index++) {
        if (checkboxs[index].checked==true) {
            checked=true;          
        }
    }
        if (checked==false) {
            alert("E R R O R. Debe seleccionar uno o más lenguajes de programación");
        }
        return checked;
}


function numTelefono(){ /*Valida que se ingrese un número de telefono valido*/
    let i:any=telefono.value;
    
    if (i.length != 9) {
        alert("El número de telefono tiene que tener 9 digitos");
        return false;
    }else{
        return true;    
    }
}


function limpiarDatos(){    /*Limpia todos los datos*/
    
    nombre.value="";
    apellidos.value="";
    rut.value="";
    email.value="";
    telefono.value="";
   
    slider.value="0";
    output.innerHTML="0";

    for(let index = 0; index <6; index++) {
        checkboxs[index].checked=false;
    }

    for(let index = 0; index <5; index++) {
        radio[index].checked=false;
    }

    descripcion.value="";

    document.documentElement.scrollTop = 0;
}
  
slider.oninput = function() {   /* Muestra el valor del rango*/
    output.innerHTML = this.value;
}