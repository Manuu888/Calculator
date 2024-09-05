function adicionar(valor) {
    document.getElementById("resultado").value += valor;
}

function limpar() {
    document.getElementById("resultado").value = "";
}

function apagar() {
    var resultado = document.getElementById("resultado").value;
    document.getElementById("resultado").value = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById("resultado").value;
    if (resultado) {
        document.getElementById("resultado").value = eval(resultado);
    }
}
