let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
if(sum<21){
    console.log("Do you want to draw a new card?")
}
else if(sum===21){
    console.log("Hurraah! You;ve got blackjack!!")
}
else if(sum>21){
    console.log("You are out of the game")
}


