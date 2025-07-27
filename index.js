
let player = {
    name: "Eva",
    chips: 137
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el") // # = element w the id of "sum-el". asking for an element by its selector.
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() { //function declarations get hoisted to the top = accessible even at line 1, no matter where it's written within the code
    let randomNumber = Math.floor( Math.random()*13) + 1 //generates random number between 1 and 13
    if (randomNumber===1) {
        randomNumber=11
    }
    else if (randomNumber>10) {
        randomNumber=10
    }
    return randomNumber
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    
    sumEl.textContent = "Sum: " + sum    
    if (sum<=20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum===21) {
        message = "You've got Blackjack! 🥳"
        hasBlackjack = true
    }
    else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message //Display the message in the messageEl
}

function newCard() {
    if (isAlive && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

