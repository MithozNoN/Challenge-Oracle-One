
//* Esta funcion va a reemplazar una de las vocales por una porción de texto por medio del metodo replace

function encriptar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    
    document.getElementById("resultado").value = resultado;

//** Agregue una condición a cada botón para alterar la clase de la etiqueta textarea del resultado para añadir o remover
//* la clase alterno dependiendo de si encuentra información en el textarea al ejecutar la función
//* la cual por medio del atributo background-image : none retira el fondo del textarea 'resultado'

    var resultadoTextarea = document.getElementById("resultado");

    resultadoTextarea.value = resultado;

    if (resultado.trim() === "") {
        resultadoTextarea.classList.remove("alterno");
    } else {
        resultadoTextarea.classList.add("alterno");
    }
}

//* Esta funcion va a reemplazar una de las porciones de texto por una vocal por medio del metodo replace

function desencriptar() {
    var textoD = document.getElementById("texto").value.toLowerCase();
    var resultadoD = textoD.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
    
    document.getElementById("resultado").value = resultadoD;

//* Aquí se encuentra de nuevo la condición de añadir o remover la clase en la etiqueta textarea...

    var resultadoTextarea = document.getElementById("resultado");

    resultadoTextarea.value = resultadoD;

    if (resultadoD.trim() === "") {
        resultadoTextarea.classList.remove("alterno");
    } else {
        resultadoTextarea.classList.add("alterno");
    }
}

//*Aquí se encuentra la función del boton copias, la cual nos va a dar 2 tipos de alertas distintas dependiendo de si hay o no información
//*en el resultado final luego del proceso.

function copiar() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand("copy");

    if(resultado.value === ""){
        swal({
            title: "No se encuentra contenido.",
            text: "ingrese un texo para procesar...",
            button: "Continuar",
        });
    }else {
        swal({
            title: "Mensaje copiado correctamente!",
            text: "Su mensaje: " + resultado.value + " ha sido copiado",
            icon: "success",
            button: "Continuar",
        });
    }

}
