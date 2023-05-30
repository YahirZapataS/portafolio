function limpiar() {
    document.getElementById("user-message").value = "";
    document.getElementById("display-message").innerText = "";
    document.querySelectorAll("#img-empty, #message1-empty, #message2-empty").forEach(element => {
        element.style.display = "block";
    });
}

function cambiarDisplayMessage(displayValue) {
    document.querySelectorAll("#img-empty, #message1-empty, #message2-empty").forEach(element => {
        element.style.display = displayValue;
    });
}

function encriptar() {
    cambiarDisplayMessage("none");
    let mensajeEncriptado = document.getElementById("user-message").value;
    mensajeEncriptado = mensajeEncriptado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return mensajeEncriptado;
}

function desencriptar() {
    cambiarDisplayMessage("none");
    let mensajeDesncriptado = document.getElementById("user-message").value;
    mensajeDesncriptado = mensajeDesncriptado.replace(/ai/g ,"a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    return mensajeDesncriptado;
}

function botonEncriptar() {
    let mensajeEncriptado = document.getElementById("user-message").value;
    if (!Alertar(mensajeEncriptado)) {
        document.getElementById("display-message").innerHTML = encriptar();
    } else {
        Alertar();
    }
}

function botonDesencriptar() {
    let mensajeDesencriptado = document.getElementById("user-message").value;
    if (!Alertar(mensajeDesencriptado)) {
        document.getElementById("display-message").innerHTML = desencriptar();
    } else {
        Alertar();
    }
}

function copiar() {
    document.getElementById("user-message").value = "";
    const mensajeElement = document.getElementById("display-message");
    const textoTemporal = document.createElement("textarea");
    textoTemporal.value = mensajeElement.textContent;
    document.body.appendChild(textoTemporal);
    textoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(textoTemporal);
}

function Alertar(mensaje) {
    let letrasNoPermitidas = /[A-ZÁ-Úá-ú´']/;
    if (mensaje === '') {
        Swal.fire({
            title: 'Alerta',
            text: 'No has ingresado ningún texto',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return true;
    } else if (letrasNoPermitidas.test(mensaje)) {
        Swal.fire({
            title: 'Hay letras no permitidas en el texto',
            text: "Solo minúsculas y sin acentos",
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return true;
    } else {
        return false;
    }
}