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
        mensagem = "O número é Negativo."; 
    }
    else {
        mensagem= "O número é zero.";
    }
        
  Document.getElementById("Resultado").innertext = mensagem;   
}



function executarFor() {
    let Resultado = "números pares de 0 a 10: ";
    for (let i = 0; i <=10; i++) {
        if(i % 2 === 0)
            Resultado += i ;
    }  
    
    document. getElementById("saída").textContent = Resultado;
}

function executarArray() {
    let nomes = ["Manu", "Samira", "Andreia", "Ana"];
    let Resultado = "Lista de alunas:" ;

    for (let i = 0; nomes.length; i++) {
        Resultado += nomes [i]
 }
 document.getElementById("saída").textContent = Resultado;
}


