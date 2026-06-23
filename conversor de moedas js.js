function converterDolar() {
    const valor = parseFloat(document.getElementById("valor").value);

    const cotacaoDolar = 5.50; // exemplo

    const resultado = valor / cotacaoDolar;

    document.getElementById("resultado").textContent =
        `US$ ${resultado.toFixed(2)}`;
}

function converterEuro() {
    const valor = parseFloat(document.getElementById("valor").value);

    const cotacaoEuro = 6.20; // exemplo

    const resultado = valor / cotacaoEuro;

    document.getElementById("resultado").textContent =
        `€ ${resultado.toFixed(2)}`;
}