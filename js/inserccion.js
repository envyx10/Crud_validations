
const nombre = document.getElementById('nombre')
const apellidos = document.getElementById('apellidos') 
const numero = document.getElementById('numero')
const dep = document.getElementById('dep')


let correcto = true;

const namePattern = /^([a-zA-Záéíóúñ]{2,}\s?)+([a-zA-Záéíóúñ]{2,}\s?)+$/; // nombre
const phonePattern = /^\d{9}$/ // tlf


function validacion(event){

    event.preventDefault(); 

    // VALIDACION NOMBRE
    if(nombre.value == "" || !validateName(nombre.value)){

        document.getElementById('nombreHelp').style.visibility = " visible "
        nombre.style.border="1px solid red"
        correcto = false
    } 

    // VALIDACION APELLIDO
    if(apellidos.value == "" || !validateApellidos(apellidos.value)) {

        document.getElementById('apellidosHelp').style.visibility = " visible " 
        apellidos.style.border="1px solid red"
        correcto = false
    }

    // TELEFONO
    if(numero.value == "" || !validateNumero(numero.value)){

        document.getElementById('numeroHelp').style.visibility = " visible " 
        numero.style.border="1px solid red"
        correcto = false
    } 

    //NO ME FUNCIONA ESTE DEP
    console.log(dep.value)
    if (dep.value == "") {
        document.getElementById('depHelp').style.visibility = "visible"
        dep.style.border = "1px solid red"
        correcto = false
    }
    
    return correcto;

}



function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgreen"; // Corrected: borderColor and added unit
}

function validateName(nombre) {
    return namePattern.test(nombre);
}

function validateApellidos(apellidos) {
    return namePattern.test(apellidos);
}

function validateNumero(numero) {
    return phonePattern.test(numero);
}

