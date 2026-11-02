// 🍰 Mixed Desserts, Bakery, and Nature
let arr = [
    "🥐","🍩","🍪","🧁","🍰","🍫","🍬","🍭","🍮","🍦",
    "🍨","🌹","🥧","🍯","🍡","🍧","🍿","🥨","🧇","🥞",
    "🥐","🍩","🍪","🧁","🍰","🍫","🍬","🍭","🍮","🍦",
    "🍨","🌹","🥧","🍯","🍡","🍧","🍿","🥨","🧇","🥞"
];

// 🌸 Flowers, Plants, and Nature
let arr2 = [
    "🌸","🌷","🌹","🌻","🌼","🌺","🪷","🪻","💐","🌱",
    "🌿","🍀","🌵","🌴","🌳","🌲","🪴","🌾","🍁","🍄",
    "🌸","🌷","🌹","🌻","🌼","🌺","🪷","🪻","💐","🌱",
    "🌿","🍀","🌵","🌴","🌳","🌲","🪴","🌾","🍁","🍄"
];

// 🍹 Mixed Drinks
let arr3 = [
    "🧋","🧃","🥤","🍹","🍸","🍵","☕","🫖","🥛","🍝",
    "🧉","🍷","🍾","🫗","🧊","🥂","🍻","🍺","🥃","🫙",
    "🧋","🧃","🥤","🍹","🍸","🍵","☕","🫖","🥛","🍝",
    "🧉","🍷","🍾","🫗","🧊","🥂","🍻","🍺","🥃","🫙"
];

// 🍓 Fruits and Other Treats
let arr4 = [
    "🍓","🍒","🍑","🍎","🍐","🍊","🍋","🍌","🍉","🍇",
    "🥝","🍍","🥭","🫐","🥥","🍈","🍏","🍅","🫒","🌰",
    "🍓","🍒","🍑","🍎","🍐","🍊","🍋","🍌","🍉","🍇",
    "🥝","🍍","🥭","🫐","🥥","🍈","🍏","🍅","🫒","🌰"
];

// 🧁 Bakery and Desserts
let arr5 = [
    "🧁","🎂","🍰","🍪","🍩","🍫","🍬","🍭","🍮","🍯",
    "🥧","🍨","🍦","🍡","🍧","🥐","🥯","🍞","🧇","🥞",
    "🧁","🎂","🍰","🍪","🍩","🍫","🍬","🍭","🍮","🍯",
    "🥧","🍨","🍦","🍡","🍧","🥐","🥯","🍞","🧇","🥞"
];

// 🍕 Food and Snacks
let arr6 = [
    "🍕","🍔","🍟","🌮","🌯","🥪","🥗","🍜","🍝","🍱",
    "🍣","🍤","🥟","🍙","🍘","🥠","🍛","🥘","🫕","🌽",
    "🍕","🍔","🍟","🌮","🌯","🥪","🥗","🍜","🍝","🍱",
    "🍣","🍤","🥟","🍙","🍘","🥠","🍛","🥘","🫕","🌽"
];

// ☕ Tea, Coffee, and Drinks
let arr7 = [
    "☕","🍵","🫖","🧋","🥛","🧃","🥤","🍝","🌸","🫗",
    "🍹","🍸","🍷","🍾","🥃","🥂","🍻","🍺","🧊","🫙",
    "☕","🍵","🫖","🧋","🥛","🧃","🥤","🍝","🌸","🫗",
    "🍹","🍸","🍷","🍾","🥃","🥂","🍻","🍺","🧊","🫙"
];

// 🌷 Flowers, Bouquets, and Plants
let arr8 = [
    "🌷","🌹","🌸","🌼","🌻","🌺","🪷","🪻","💐","🥀",
    "🌱","🌿","🍀","🪴","🌾","🌳","🌲","🌴","🍁","🍄",
    "🌷","🌹","🌸","🌼","🌻","🌺","🪷","🪻","💐","🥀",
    "🌱","🌿","🍀","🪴","🌾","🌳","🌲","🌴","🍁","🍄"
];

// 🍹 Juices, Drinks, and Fruits
let arr9 = [
    "🧋","🧃","🥤","🍹","🥛","🧉","🍵","☕","🫖","🫗",
    "🍋","🍊","🍉","🍓","🍒","🥭","🍍","🫐","🌸","🍈",
    "🧋","🧃","🥤","🍹","🥛","🧉","🍵","☕","🫖","🫗",
    "🍋","🍊","🍉","🍓","🍒","🥭","🍍","🫐","🌸","🍈"
];

// 🩷 Cute Treats, Flowers, and Desserts
let arr10 = [
    "🌸","🎀","🩷","🌷","🍓","🧁","🍒","💐","🍰","🌹",
    "🍩","🍪","🍭","🍬","🌻","🌺","🪷","🪻","🍦","🍫",
    "🌸","🎀","🩷","🌷","🍓","🧁","🍒","💐","🍰","🌹",
    "🍩","🍪","🍭","🍬","🌻","🌺","🪷","🪻","🍦","🍫"
];
let arr1;

let winner = document.querySelector(".winner");
let pairFound = 0;

let firstplayerScore = 0;
let SecondPlayerScore = 0;
let playerNum = 0;

let myscore = document.querySelector("#mySc");
let momscore = document.querySelector("#momSc");

let turnOne = document.querySelector("#One");
let turntwo = document.querySelector("#two");

turntwo.style.display = "none";

// Stop text selection
document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

// Create cards
function createCard() {
    let card = document.createElement("div");
    card.classList.add("card");

    document.querySelector(".cards-container").appendChild(card);

    return card;
}

// Choose a random emoji array
function choosingArray() {
    let allArrays = [
        arr, arr2, arr3, arr4, arr5,
        arr6, arr7, arr8, arr9, arr10
    ];

    let random = Math.floor(Math.random() * allArrays.length);

    return [...allArrays[random]];
}

arr1 = choosingArray();

// Shuffle emojis
function shuffleArray(arr1, card) {
    let random = Math.floor(Math.random() * arr1.length);

    card.innerText = arr1[random];

    arr1.splice(random, 1);
}

// Create 40 cards
for (let i = 0; i < 40; i++) {
    let card = createCard();
    shuffleArray(arr1, card);
}

// Hide emojis initially
let cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
    cards[i].style.color = "transparent";
}

// Matching variables
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Card click events
cards.forEach(card => {
    card.addEventListener("click", () => {

        if (lockBoard) {
            return;
        }

        if (card.dataset.matched === "true") {
            return;
        }

        if (card === firstCard) {
            return;
        }

        card.style.color = "black";

        if (firstCard === null) {
            firstCard = card;
        }

        else if (secondCard === null) {
            secondCard = card;

            if (firstCard.innerText === secondCard.innerText) {

                // Pair found
                firstCard.dataset.matched = "true";
                secondCard.dataset.matched = "true";

                firstCard = null;
                secondCard = null;

                pairFound++;

                // Player 1 scoring
                if (playerNum % 2 === 0) {
                    firstplayerScore++;

                    myscore.innerHTML =
                        `Player 1's score: ${firstplayerScore}`;
                }

                // Player 2 scoring
                else {
                    SecondPlayerScore++;

                    momscore.innerHTML =
                        `Player 2's score: ${SecondPlayerScore}`;
                }

                // Check winner after 20 pairs
                if (pairFound === 20) {
                    checkwinner(firstplayerScore, SecondPlayerScore);
                }

            }

            else {

                // Wrong pair
                lockBoard = true;

                setTimeout(() => {

                    firstCard.style.color = "transparent";
                    secondCard.style.color = "transparent";

                    firstCard = null;
                    secondCard = null;

                    lockBoard = false;

                    // Switch player
                    playerNum++;

                    if (playerNum % 2 === 0) {
                        turnOne.style.display = "block";
                        turntwo.style.display = "none";
                    }

                    else {
                        turnOne.style.display = "none";
                        turntwo.style.display = "block";
                    }

                }, 1000);
            }
        }
    });
});

// Declare winner
function checkwinner(firstplayerScore, SecondPlayerScore) {

    if (firstplayerScore > SecondPlayerScore) {
        winner.innerText = "Player 1 is the winner! 🏆";
    }

    else if (firstplayerScore < SecondPlayerScore) {
        winner.innerText = "Player 2 is the winner! 🏆";
    }

    else {
        winner.innerText = "It's a draw! 🤝";
    }
}

