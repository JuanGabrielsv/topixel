let tema1 = false;
let tema2 = true;

function longitudMaxima(numero) {
    let valor = numero.value;
    if (valor.length > 9) {
        numero.value = valor.slice(0, 9);
    }
}

function colorTheme() {
    let logo = document.getElementById("logo");
    let body = document.getElementById("body");
    let input = document.getElementById("input");
    let futer = document.getElementById("futer");

    if (tema1 === false && tema2 === false) {
        tema1 = true;
        tema2 = true;        
    }

    while (tema1 === true) {
        body.style.backgroundColor = "#222323";
        input.style.backgroundColor = "#f0f6f0";
        futer.style.color = "#f0f6f0";
        logo.style.color = "#f0f6f0";
        input.style.color = "#222323";
        tema1 = false;
        return;
    }

    while (tema2 === true) {
        body.style.backgroundColor = "#0a2e44";
        input.style.backgroundColor = "#fcffcc";
        futer.style.color = "#fcffcc";
        logo.style.color = "#fcffcc";
        input.style.color = "#0a2e44";
        tema2 = false;
        return;
    }

}