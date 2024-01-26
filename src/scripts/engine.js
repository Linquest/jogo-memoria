const emojis = [
    "🛸",
    "🛸",
    "🎠",
    "🎠",
    "💕",
    "💕",
    "🎄",
    "🎄",
    "⚽",
    "⚽",
    "🍭",
    "🍭",
    "🍓",
    "🍓",
    "🍒",
    "🍒",
    "🍑",
    "🍑",
    "🍊",
    "🍊",
    "🍉",
    "🍉",
    "🍌",
    "🍌",
]
let openCards = []

// let shuffledEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1)
let shuffledEmojis = emojis.sort(() => Math.random() - 0.5)

for (let i = 0; i < emojis.length; i++) {
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = shuffledEmojis[i]
    card.onclick = handleClick;
    document.querySelector(".game").appendChild(card)
}

function handleClick(card) {
    if (openCards.length < 2) {
        this.classList.add("boxOpen")
        openCards.push(this)
    }
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
        openCards = []
    } else {
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
        openCards = []
    }

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Parabéns, você ganhou!")
        window.location.reload()
    }
}