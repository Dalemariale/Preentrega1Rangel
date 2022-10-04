// Credenciales del usuario ya registrado
const userRegistrado = "maria";
const passRegistrada = "12345"

// Variables
let nombreUsuario;
let passUsuario;
let correoUsuario;
let confirmarPass;
let contadorIntentos = 1;

// Funcion inicial para elegir el flujo a recorrer (Usuario registrado, Usuario nuevo)
function inicio(){
    let respuestaInicio = confirm("Ya tienes una cuenta?");
    if (respuestaInicio) {
        console.log("Flujo de inicio")
        validacionIntentos();
    } else {
        console.log("Flujo de registro");
        solicitarDatosRegistro();
    }
}

// Contar la cantidad de intentos de inicio de sesion del usuario
function validacionIntentos(){
    for (let i = 1; i <= 3; i++){
        contadorIntentos =+ i;
        
        // Si los datos del usuario no coinciden, volver a pedir datos
        if (!validarDatosInicio(nombreUsuario, passUsuario)){
            solicitarDatosInicio();
            
            // Si el usuario agota 3 intentos, debe volver al inicio
            if (contadorIntentos == 3){
                alert("Has agotado los intentos");
                inicio();
            }
        } else {
            break;
        }
    }
}

// Solicitar datos de inicio de sesion
function solicitarDatosInicio(){
    nombreUsuario = prompt("Ingrese su nombre de usuario");
    passUsuario = prompt("Ingrese su contraseña");
    
    // Elegir respuesta a devolver al usuario
    if (validarDatosInicio (nombreUsuario, passUsuario)){
        alert("Bienvenido/a " + nombreUsuario)
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
}

// Validar datos de inicio de sesion
function validarDatosInicio(nombreUsuario, passUsuario){
    if (nombreUsuario === userRegistrado && passUsuario === passRegistrada){
        return true
    } else { 
        return false
    }
}

// Solicitar datos de registro para usuario nuevo
function solicitarDatosRegistro () {
    nombreUsuario = prompt("Ingrese un nombre de usuario")
    correoUsuario = prompt("Ingrese su correo electrónico")
    crearPass ()
}

// Crear contraseña y confirmar contraseña
function crearPass () {
    passUsuario = prompt("Ingrese una contraseña")
    confirmarPass = prompt("Confirme su contraseña")
    
    // Elegir respuesta al usuario
    if (validarPass (passUsuario, confirmarPass)) {
        alert ("Usuario creado con éxito")
    } else {
        alert ("Contraseñas no coinciden")
        crearPass();
    }
}

// Validar si las contraseñas coinciden para crear usuario nuevo
function validarPass (passUsuario,confirmarPass) {
    if (passUsuario === confirmarPass && passUsuario != null) {
        return true
    } else {
        return false 
    }
}

inicio();