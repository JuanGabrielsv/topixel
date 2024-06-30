let logo = document.getElementById("logo");
let body = document.getElementById("body");
let inputMetros = document.getElementById("inputMetros");
let footer = document.getElementById("footer");
let inputPpp = document.getElementById("inputPpp");
let button = document.getElementById("button");
let textoUnidad = document.getElementById("textoUnidad");
let pixelResultado = document.getElementById("pixelResultado");

let tema1 = false;
let tema2 = true;
let tema3 = true;
let convertir = true;

function longitudMaxima(numero, cantidad) {
    let valor = numero.value;
    if (valor.length > cantidad) {
        numero.value = valor.slice(0, cantidad);
    }
}

function colorTheme() {

    if (tema1 === false && tema2 === false && tema3 === false) {
        tema1 = true;
        tema2 = true;
        tema3 = true;
    }

    while (tema1 === true) {
        body.style.backgroundColor = "#222323";
        inputMetros.style.color = "#222323";
        inputPpp.style.color = "#222323";
        textoUnidad.style.color = "#f0f6f0";
        pixelResultado.style.color = "#f0f6f0";
        button.style.backgroundColor = "#222323";
        button.style.borderColor = "#f0f6f0";
        button.style.color = "#f0f6f0";
        inputMetros.style.backgroundColor = "#f0f6f0";
        inputPpp.style.backgroundColor = "#f0f6f0";
        footer.style.color = "#f0f6f0";
        logo.style.color = "#f0f6f0";
        tema1 = false;
        return;
    }

    while (tema2 === true) {
        body.style.backgroundColor = "#0a2e44";
        inputMetros.style.color = "#0a2e44";
        inputPpp.style.color = "#0a2e44";
        textoUnidad.style.color = "#fcffcc";
        pixelResultado.style.color = "#fcffcc";
        button.style.backgroundColor = "#0a2e44";
        button.style.borderColor = "#fcffcc";
        button.style.color = "#fcffcc";
        inputMetros.style.backgroundColor = "#fcffcc";
        inputPpp.style.backgroundColor = "#fcffcc";
        footer.style.color = "#fcffcc";
        logo.style.color = "#fcffcc";
        tema2 = false;
        return;
    }

    while (tema3 === true) {
        body.style.backgroundColor = "#ef243a";
        inputMetros.style.color = "#ef243a";
        inputPpp.style.color = "#ef243a";
        textoUnidad.style.color = "#fff2df";
        pixelResultado.style.color = "#fff2df";
        button.style.backgroundColor = "#ef243a";
        button.style.borderColor = "#fff2df";
        button.style.color = "#fff2df";
        inputMetros.style.backgroundColor = "#fff2df";
        inputPpp.style.backgroundColor = "#fff2df";
        footer.style.color = "#fff2df";
        logo.style.color = "#fff2df";
        tema3 = false;
        return;
    }

}

function truncar(n) {
    let t = n.toString();
    let regex = /(\d*.\d{0,4})/;
    return t.match(regex)[0];
}

function iniciarPrograma() {
    let metros = document.getElementById("inputMetros").value;
    let ppp = document.getElementById("inputPpp").value;
    let pixelesPorCentimetro = ppp / 2.54;
    let pixeles = (metros * 100) * pixelesPorCentimetro;

    if (convertir === true && inputMetros.value !== ("") && inputPpp.value !== ("")) {
        button.innerHTML = ("BORRAR");
        convertir = false;
    } else if (convertir === false) {
        button.innerHTML = ("CONVERTIR");
        inputMetros.value = ("");
        inputPpp.value = ("");
        pixeles = 0;
        convertir = true;
    }

    let resultado = Number(truncar(pixeles));
    resultado = resultado.toString().replace(".", ",");


    document.getElementById("pixelResultado").innerHTML = resultado;
}