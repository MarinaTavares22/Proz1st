function mostrarMensagem() {
    alert("olá, Eu sou Marina");
}

function verificarNumero() {
    let numero = document.getElementById("numero").value 
    numero = Number(numero);
    let mensagem = "";

    if (numero > 0 ) {mensagem = "O Número é positivo.";
    }
    else if ( numero < 0) {
        mensagem = "O número é Negativo."; }
        
  Document.getElementById("Resultado").innertext = mensagem;   
}

