/* Na função abaixo está o processo de adicionar números. Criei uma variável
que vai "ler" o visor pra torná-lo o numero atual. A medida que vamos digitiando
(até 8 dígitos), os números vão sendo atualizados e indo pro visor. */

var valor1 = 0;
var valor2 = 0;
var operacao;
var total = "";
var total2;

function limpar() {
  valor1 = "";
  valor2 = "";
  operacao = "";
  total = "";
  document.querySelector(".visor").innerHTML = "";
}

function apagardigito() {
  numeroatual = document.querySelector(".visor").innerHTML;
  numeroatual = numeroatual.substring(0, numeroatual.length - 1);
  document.querySelector(".visor").innerHTML = numeroatual;

}


function adicionarnumero(numero) {
  document.querySelector(".visor").style.fontSize = "40px";

  if (document.querySelector(".visor").innerHTML == "+" ||
    document.querySelector(".visor").innerHTML == "-" ||
    document.querySelector(".visor").innerHTML == "*" ||
    document.querySelector(".visor").innerHTML == "/" ||
    total !== "") {
    document.querySelector(".visor").innerHTML = "";
    total = "";
    document.querySelector(".visor").innerHTML = numero;

  } else {

    var numeroatual = document.querySelector(".visor").innerHTML;

    if (numeroatual.length < 8) {

      numeroatual = numeroatual + numero;
      document.querySelector(".visor").innerHTML = numeroatual;
    }
  }//fim do else

}//fim da function adicionarnumero


function somar() {
  document.querySelector(".visor").style.fontSize = "40px";
  valor1 = parseInt(document.querySelector(".visor").innerHTML);
  operacao = document.querySelector(".visor").innerHTML = "+";

}

function multiplicar() {
  document.querySelector(".visor").style.fontSize = "40px";
  valor1 = parseInt(document.querySelector(".visor").innerHTML);
  operacao = document.querySelector(".visor").innerHTML = "*";

}

function subtrair() {
  document.querySelector(".visor").style.fontSize = "40px";
  valor1 = parseInt(document.querySelector(".visor").innerHTML);
  operacao = document.querySelector(".visor").innerHTML = "-";

}

function dividir() {
  document.querySelector(".visor").style.fontSize = "40px";
  valor1 = parseInt(document.querySelector(".visor").innerHTML);
  operacao = document.querySelector(".visor").innerHTML = "/";

}

function resultado() {
  var valor2 = parseInt(document.querySelector(".visor").innerHTML);



  if (operacao == "+") {
    total = valor1 + valor2;
    total = total.toString();
    avaliartamanho();
    document.querySelector(".visor").innerHTML = total;
    valor1 = "";
    valor2 = "";
  } else if (operacao == "-") {
    total = valor1 - valor2;
    total = total.toString();
    avaliartamanho();
    document.querySelector(".visor").innerHTML = total;
    valor1 = "";
    valor2 = "";
  } else if (operacao == "*") {
    total = valor1 * valor2;
    total = total.toString();
    avaliartamanho();
    document.querySelector(".visor").innerHTML = total;
    valor1 = "";
    valor2 = "";
  } else if (operacao == "/") {
    total = valor1 / valor2;
    total = total.toString();
    console.log(total);
    avaliartamanho();
    document.querySelector(".visor").innerHTML = total;
    valor1 = "";
    valor2 = "";
  }
}


function avaliartamanho() {
  if (total.length > 8 && total.length <= 15) {
    console.log("o total é maior que 8 e menor que 15")
    document.querySelector(".visor").style.fontSize = "23px";

  } else if (total.length > 15 && total.length <= 20) {

    document.querySelector(".visor").style.fontSize = "18px";
  } else if (total.length > 20) {
    document.querySelector(".visor").style.fontSize = "12px";
    total = "Número muito grande! Me ajuda aí!";

  }
}






window.document.onkeydown = chooseKey;
function chooseKey(clique) {
  if (clique.keyCode == 13) {
    resultado();
    document.querySelector("#igual").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 8) {
    apagardigito();
    document.querySelector("#apagar").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 27) {
    limpar();
    document.querySelector("#limpar").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 48) {
    adicionarnumero('0');
    document.querySelector("#zero").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 49) {
    adicionarnumero('1');
    document.querySelector("#um").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 50) {
    adicionarnumero('2');
    document.querySelector("#dois").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 51) {
    adicionarnumero('3');
    document.querySelector("#tres").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 52) {
    adicionarnumero('4');
    document.querySelector("#quatro").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 53) {
    adicionarnumero('5');
    document.querySelector("#cinco").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 54) {
    adicionarnumero('6');
    document.querySelector("#seis").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 55) {
    adicionarnumero('7');
    document.querySelector("#sete").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 56) {
    adicionarnumero('8');
    document.querySelector("#oito").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 57) {
    adicionarnumero('9');
    document.querySelector("#nove").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 96) {
    adicionarnumero('0');
    document.querySelector("#zero").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 97) {
    adicionarnumero('1');
    document.querySelector("#um").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 98) {
    adicionarnumero('2');
    document.querySelector("#dois").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 99) {
    adicionarnumero('3');
    document.querySelector("#tres").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 100) {
    adicionarnumero('4');
    document.querySelector("#quatro").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 101) {
    adicionarnumero('5');
    document.querySelector("#cinco").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 102) {
    adicionarnumero('6');
    document.querySelector("#seis").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 103) {
    adicionarnumero('7');
    document.querySelector("#sete").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 104) {
    adicionarnumero('8');
    document.querySelector("#oito").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 105) {
    adicionarnumero('9');
    document.querySelector("#nove").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 110) {
    clickNum('.');
    document.querySelector("#ponto").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 106) {
    multiplicar();
    document.querySelector("#vezes").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 107) {
    somar();
    document.querySelector("#mais").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 111) {
    dividir();
    document.querySelector("#dividir").classList.add("botaoapertado");
  }
  else if (clique.keyCode == 109) {
    subtrair();
    document.querySelector("#menos").classList.add("botaoapertado");
  }
}


window.document.onkeyup = voltarcor;
function voltarcor(clique) {
  if (clique.keyCode == 13) { document.querySelector("#igual").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 8) { document.querySelector("#apagar").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 27) { document.querySelector("#limpar").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 48) { document.querySelector("#zero").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 49) { document.querySelector("#um").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 50) { document.querySelector("#dois").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 51) { document.querySelector("#tres").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 52) { document.querySelector("#quatro").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 53) { document.querySelector("#cinco").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 54) { document.querySelector("#seis").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 55) { document.querySelector("#sete").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 56) { document.querySelector("#oito").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 57) { document.querySelector("#nove").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 96) { document.querySelector("#zero").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 97) { document.querySelector("#um").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 98) { document.querySelector("#dois").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 99) { document.querySelector("#tres").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 100) { document.querySelector("#quatro").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 101) { document.querySelector("#cinco").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 102) { document.querySelector("#seis").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 103) { document.querySelector("#sete").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 104) { document.querySelector("#oito").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 105) { document.querySelector("#nove").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 110) { document.querySelector("#ponto").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 106) { document.querySelector("#vezes").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 107) { document.querySelector("#mais").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 111) { document.querySelector("#dividir").classList.remove("botaoapertado"); }
  else if (clique.keyCode == 109) { document.querySelector("#menos").classList.remove("botaoapertado"); }
}
