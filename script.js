quantCards = Number(prompt("Quantas Cartas você quer jogar?"));
gamePush = document.querySelector(".game");
div = `<div class="card"><img src="./Assets/front 1.png" alt=""></div>`
let gameCards = []








n howManyCards(){
if(quantCards%2 == 0 && quantCards >= 4 && quantCards <=14){
    for(i=0;i<quantCards;i++){
    gameCards.push(div)
    gamePush.innerHTML += gameCards[i]
}

}else{
    alert("Numero Invalido, o numero deve ser entre 4-14 e DEVE ser Par")
    numeroInvalido = Number(prompt("Quantas Cartas você quer jogar?"))
    quantCards = numeroInvalido
    howManyCards();
}}
howManyCards()