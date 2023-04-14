let modoEscuro = true; // Variável de controle do modo escuro

function calcular() {
    let expressao = document.getElementById("resultado").innerText;
    try {
        let resultado = eval(expressao); // Avalia a expressão
        if (isNaN(resultado)) {
            document.getElementById("resultado").innerText = "Erro! Expressão inválida.";
        } else if (!isFinite(resultado)) {
            document.getElementById("resultado").innerText = "Erro! Divisão por zero.";
        } else {
            document.getElementById("resultado").innerText = resultado;
        }
    } catch (error) {
        document.getElementById("resultado").innerText = "Erro! Expressão inválida.";
    }
}

function insert(caracter) {
    let expressao = document.getElementById("resultado").innerText;
    if (caracter === '/' && expressao.endsWith('/0')) {
        return; // Não permite dividir por zero novamente
    }
    document.getElementById("resultado").innerText += caracter;
}

function toggleModo() {
    let fundo = document.getElementById("fundo");
    let calculadora = document.getElementById("calculadora");
    if (modoEscuro) {
        fundo.style.backgroundImage = "linear-gradient(45deg, rgb(100, 020, 011), rgb(55, 52, 555))";
        calculadora.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        document.body.style.color = "white";
        modoEscuro = false;
    } else {
        fundo.style.backgroundImage = "linear-gradient(45deg, rgb(255, 255, 255), rgb(215, 215, 215))";
        calculadora.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        document.body.style.color = "black";
        modoEscuro = true;
    }
}
