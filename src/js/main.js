
function longitudMaxima(numero) {
    let valor = numero.value;
    if (valor.length > 9) {
        numero.value = valor.slice(0, 9);
    }
}