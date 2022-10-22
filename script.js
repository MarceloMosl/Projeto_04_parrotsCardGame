quantCards = Number(prompt("Quantas Cartas você quer jogar?"));
gamePush = document.querySelector(".game");
gameCards = []
const gameOptions = [1,2,3,4,5,6,7];
gameOptions.sort(comparador)
let pares = quantCards/2 
let mudaFundo = gameOptions.slice(0, pares);
let mudaFundoDuplicated = [...mudaFundo, ...mudaFundo]

function howManyCards() {
  if (quantCards % 2 == 0 && quantCards >= 4 && quantCards <= 14) {


    for (i = 0; i < quantCards; i++) {

      gameCards.push(`<ul class="card" onclick="virarCarta(this)">
      <li class="front-face face">
      <img src="./Assets/front 1.png" alt="">
      </li>
      <li class="back-face face">
      ${mudaFundoDuplicated[i]}
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


let contador = 0;

function virarCarta(carta) {
  carta.classList.toggle('virada');
  contador++;

  if (contador == 2) {
    contador = 0;
    // se as cartas forem diferentes
    setTimeout(desvirar, 1000);

  }
}

function desvirar() {
  const cartas = document.querySelectorAll('.virada');
  for (let i = 0; i < cartas.length; i++) {
    cartas[i].classList.remove('virada');
  }
}
function comparador() {
  return Math.random() - 0.5;
}