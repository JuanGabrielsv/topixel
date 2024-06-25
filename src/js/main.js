let logo = document.getElementById("logo");
let centimetrosResultado = document.getElementById("centimetrosResultado");
let body = document.getElementById("body");
let inputPixels = document.getElementById("inputPixels");
let futer = document.getElementById("futer");
let tema1 = false;
let tema2 = true;
let tema3 = true;


function longitudMaxima(numero) {
    let valor = numero.value;
    if (valor.length > 9) {
        numero.value = valor.slice(0, 9);
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
        inputPixels.style.backgroundColor = "#f0f6f0";
        futer.style.color = "#f0f6f0";
        logo.style.color = "#f0f6f0";
        inputPixels.style.color = "#222323";
        tema1 = false;
        return;
    }

    while (tema2 === true) {
        body.style.backgroundColor = "#0a2e44";
        inputPixels.style.backgroundColor = "#fcffcc";
        futer.style.color = "#fcffcc";
        logo.style.color = "#fcffcc";
        inputPixels.style.color = "#0a2e44";
        tema2 = false;
        return;
    }

    while (tema3 === true) {
        body.style.backgroundColor = "#ef243a";
        inputPixels.style.backgroundColor = "#fff2df";
        futer.style.color = "#fff2df";
        logo.style.color = "#fff2df";
        inputPixels.style.color = "#ef243a";
        tema3 = false;
        return;
    }

}

function iniciarPrograma() {

    const PIXELEMREM = 16;
    const PIXELCM = 0.0264;
    const PIXELMETRO = 3787.8787;

    let pixeles = inputPixels.value;
    let emRem = pixeles / PIXELEMREM;    
    let cm = pixeles * PIXELCM;
    let metros = pixeles / PIXELMETRO;



    document.getElementById("emremResultado").innerHTML = emRem;
    document.getElementById("centimetrosResultado").innerHTML = cm;
    document.getElementById("metrosResultado").innerHTML = metros;



}