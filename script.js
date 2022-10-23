quantCards = Number(prompt("Quantas Cartas você quer jogar?"));
gamePush = document.querySelector(".game");
gameCards = []
const gameOptions = ["back1","back2","back3","back4","back5","back6","back7"];
gameOptions.sort(comparador)
let pares = quantCards/2 
let mudaFundo = gameOptions.slice(0, pares);
let mudaFundoDuplicated = [...mudaFundo, ...mudaFundo]
mudaFundoDuplicated.sort(comparador)
let clicks = 0;
let finaldoJogo= 0;
function contadorDeClicks(){
  clicks++
}

function howManyCards() {
  if (quantCards % 2 == 0 && quantCards >= 4 && quantCards <= 14) {


    for (i = 0; i < quantCards; i++) {

      gameCards.push(`<ul class="card" onclick="virarCarta(this), contadorDeClicks()" data-character="${mudaFundoDuplicated[i]}">
      <li class="front-face face">
      <img src="./Assets/front 1.png" alt="">
      </li>
      <li class="back-face face ${mudaFundoDuplicated[i]}">
  
      </li>
      </ul>`)
      gamePush.innerHTML += gameCards[i]
    }

  } else {
    alert("Numero Invalido, o numero deve ser entre 4-14 e DEVE ser Par")
    numeroInvalido = Number(prompt("Quantas Cartas você quer jogar?"))
    quantCards = numeroInvalido
    howManyCards();
  }
}
howManyCards()
let c1;
let c2;
let contador = 0;
function virarCarta(carta) {
  carta.classList.toggle('virada');
  contador++;
  if(contador==1){
    c1 = carta
  }else if(contador == 2){
    c2 = carta
    verificarCarta(c1,c2)
    Acertou(c1,c2)
    contador = 0;
    c1 =0;
    c2=0; 
 }
}
let check;
let primeiraCartaVirada, segundaCartaVirada;
function verificarCarta(card1, card2){
  primeiraCartaVirada = card1.getAttribute('data-character')
  segundaCartaVirada = card2.getAttribute('data-character')
  if(primeiraCartaVirada == segundaCartaVirada){
    console.log("acertou")
    check = 10;
    return "acertou"
  }else{
    check = 0;
    console.log("errou")
    return "errou"
  }

}
function Acertou(opcaoUm, opcaoDois){
  if (check == 10) {
       opcaoUm.classList.add('virada1')
       opcaoDois.classList.add('virada1')
       finaldoJogo++;
       setTimeout(fim, 100)

  }else if (check == 0 ){
     setTimeout(desvirar, 500);
    }}


function desvirar() {
  const cartas = document.querySelectorAll('.virada');
  for (let i = 0; i < cartas.length; i++) {
    cartas[i].classList.remove('virada');
  }
}
function comparador() {
  return Math.random() - 0.5;
}
function fim(){
  if(finaldoJogo == pares){
    alert(`Parabens!!! voce terminou o jogo em ${clicks} jogadas`)
    reiniciar = prompt("gostaria de reiniciar? (Responda- 'sim'ou 'nao' )")
    if(reiniciar == "sim"){
      window.location.reload(true)
    }else if(reiniciar == 'nao'){
      window.close()
    }else{
      reiniciar = prompt(" Responda 'sim' ou 'nao'")
      fim()
    }
  }
}