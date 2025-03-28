const suits = ["♠", "♣", "♥", "♦"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let vidas = 3;
let contador = 1;
let streak = 0;
let currentCard = drawCard();
const buttonCounts = {
  alta: 15,
  baja: 15,
  mismoColor: 5,
  distintoColor: 5,
  sumaMenor: 10,
  comodin: 3
};

function drawCard() {
  const value = values[Math.floor(Math.random() * values.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  return { value, suit };
}

function getCardValue(card) {
  if (card.value === "A") return 1;
  if (["J", "Q", "K"].includes(card.value)) return 10;
  return parseInt(card.value);
}

function sameColor(card1, card2) {
  return (["♥", "♦"].includes(card1.suit) && ["♥", "♦"].includes(card2.suit)) ||
         (["♠", "♣"].includes(card1.suit) && ["♠", "♣"].includes(card2.suit));
}

function updateUI() {
  document.getElementById("vidas").textContent = vidas;
  document.getElementById("contador").textContent = contador;
  document.getElementById("currentCard").textContent = `${currentCard.value}${currentCard.suit}`;
  document.getElementById("alta").textContent = `ALTA (${buttonCounts.alta})`;
  document.getElementById("baja").textContent = `BAJA (${buttonCounts.baja})`;
  document.getElementById("mismoColor").textContent = `MISMO COLOR (${buttonCounts.mismoColor})`;
  document.getElementById("distintoColor").textContent = `DISTINTO COLOR (${buttonCounts.distintoColor})`;
  document.getElementById("sumaMenor").textContent = `SUMA < 11 (${buttonCounts.sumaMenor})`;
  document.getElementById("comodin").textContent = `COMODÍN (${buttonCounts.comodin})`;
}

function handleButton(button, condition) {
  if (buttonCounts[button] > 0) {
    buttonCounts[button]--;
    const newCard = drawCard();
    const isCorrect = condition(currentCard, newCard);

    if (isCorrect) {
      contador++;
      streak++;
      if (streak === 5) {
        for (const key of Object.keys(buttonCounts)) {
          if (key !== "comodin") buttonCounts[key]++;
        }
        streak = 0;
      }
    } else {
      vidas--;
      streak = 0;
      if (vidas === 0) {
        alert("Fin del juego. Has perdido todas las vidas.");
        location.reload();
      }
    }

    currentCard = newCard;
    updateUI();
  }
}

document.getElementById("alta").addEventListener("click", () => handleButton("alta", (current, next) => getCardValue(next) > getCardValue(current)));
document.getElementById("baja").addEventListener("click", () => handleButton("baja", (current, next) => getCardValue(next) < getCardValue(current)));
document.getElementById("mismoColor").addEventListener("click", () => handleButton("mismoColor", (current, next) => sameColor(current, next)));
document.getElementById("distintoColor").addEventListener("click", () => handleButton("distintoColor", (current, next) => !sameColor(current, next)));
document.getElementById("sumaMenor").addEventListener("click", () => handleButton("sumaMenor", (current, next) => getCardValue(current) + getCardValue(next) < 11));
document.getElementById("comodin").addEventListener("click", () => {
  if (buttonCounts.comodin > 0) {
    buttonCounts.comodin--;
    streak = 0;
    currentCard = drawCard();
    updateUI();
  }
});
document.getElementById("plantarse").addEventListener("click", () => {
  alert(`Fin del juego. Puntuación obtenida: ${contador}`);
  location.reload();
});

updateUI();
