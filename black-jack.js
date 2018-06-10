const shapes = {
    1: "&hearts;",
    2: "&clubs;",
    3: "&diams;",
    4: "&spades;"
};
const values = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K"
};

function Card(value, shape, isUpsideDown) {
    this.value = value;
    this.shape = shape;
    this.isUpsideDoun = isUpsideDown;
    this.genCardElm = function () {
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let cardValue, cardShape;
        cardValue = document.createElement("span");
        cardValue.classList.add("card-value");
        // let valueText = document.createTextNode(this.value);
        cardValue.innerText = values[this.value];
        cardShape = document.createElement("span");
        cardShape.classList.add("card-shape");
        // let shapeText = document.createTextNode(this.shape);
        cardShape.innerHTML = shapes[this.shape];
        if (this.shape === 1 || this.shape === 3) {
            cardBody.classList.add("red-shape");
        }
        let cardBack = document.createElement("img");
        cardBack.src = "images/card-back.png";
        if (isUpsideDown) {
            cardContainer.appendChild(cardBack)
        } else {
            cardBody.appendChild(cardValue);
            cardBody.appendChild(cardShape);
            cardContainer.appendChild(cardBody);
        }
        return cardContainer;


    }
}

function Deck() {
    this.allCards = [];
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 14; j++) {
            this.allCards.push(new Card(j, i, false))
        }
    }
    this.shuffle = function () {
        let j, x, i;
        for (i = this.allCards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.allCards[i];
            this.allCards[i] = this.allCards[j];
            this.allCards[j] = x;
        }
    }
    this.nextCard = function () {
        return this.allCards.pop()
    }

}

let card;
window.onload = function () {
    card = new Card(3, 4, true);
    document.body.appendChild(card.genCardElm());
    deck = new Deck();
    // for (const cardd of deck.allCards) {
    //     console.log(cardd)
    // }
    deck.shuffle();
    for (const cardd of deck.allCards) {
        console.log(cardd)
    }
    console.log("--");
    console.log("--");
    console.log("--");
    console.log("--");
    console.log("--");
    console.log(deck.nextCard());
    console.log(deck.nextCard());
    console.log(deck.nextCard());
    console.log(deck.nextCard());
    console.log("--");
    console.log("--");
    console.log("--");
    console.log("--");
    console.log("--");
    for (const cardd of deck.allCards) {
        console.log(cardd)
    }


};