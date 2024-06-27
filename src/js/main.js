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
    if (valor.length > 7) {
        numero.value = valor.slice(0, 7);
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
    const PULGADA = 2.54;

    let pixels = document.getElementById("inputPixels").value;
    let ppp = document.getElementById("inputPpp").value;
    let centimetros = 0;
    let milimetros = 0;
    let metros = 0;
    let pxCuadrados = 0;

    if (pixels === "") {
        pixels = 0;
    }

    if (ppp === "") {
        ppp = 0;
    }

    // Calcular los cm.
    centimetros = Number((pixels / ppp) * PULGADA);
    
    // Calcular los milímetros.
    milimetros = Number(centimetros * 10);

    // Calcular los metros.
    metros = Number(centimetros / 100);

    //Calculamos los pixeles por cm²
    

    document.getElementById("centimetrosResultado").innerHTML = centimetros;
    document.getElementById("milimetrosResultado").innerHTML = milimetros;
    document.getElementById("metrosResultado").innerHTML = metros;
    document.getElementById("cuadradoResultado").innerHTML = pxCuadrados;



    
    
}