const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEnciptado = encriptar(textArea.value)
    mensaje.value = textoEnciptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value= textoDesencriptado
    textoArea.value= "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

const copiarBoton = document.querySelector(".copiar");

copiarBoton.addEventListener("click", function() {
    mensaje.select(); // Selecciona el texto en el textarea
    document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
});
