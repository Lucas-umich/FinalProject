window.onload = () => {
const allCards = [
  // BASTO
  { name: '1 Basto', path: './barajas de cartas/Basto/basto1.png', strength: 14 },
  { name: '2 Basto', path: './barajas de cartas/Basto/basto2.png', strength: 10 },
  { name: '3 Basto', path: './barajas de cartas/Basto/basto3.png', strength: 11 },
  { name: '4 Basto', path: './barajas de cartas/Basto/basto4.png', strength: 2 },
  { name: '5 Basto', path: './barajas de cartas/Basto/basto5.png', strength: 3 },
  { name: '6 Basto', path: './barajas de cartas/Basto/basto6.png', strength: 4 },
  { name: '7 Basto', path: './barajas de cartas/Basto/basto7.png', strength: 13 },
  { name: '10 Basto', path: './barajas de cartas/Basto/basto10.png', strength: 6 },
  { name: '11 Basto', path: './barajas de cartas/Basto/basto11.png', strength: 7 },
  { name: '12 Basto', path: './barajas de cartas/Basto/basto12.png', strength: 8 },

  // COPAS 
  { name: '1 copas', path: './barajas de cartas/Copas/copas1.png', strength: 9 },
  { name: '2 copas', path: './barajas de cartas/Copas/copas2.png', strength: 10 },
  { name: '3 copas', path: './barajas de cartas/Copas/copas3.png', strength: 11 },
  { name: '4 copas', path: './barajas de cartas/Copas/copas4.png', strength: 2 },
  { name: '5 copas', path: './barajas de cartas/Copas/copas5.png', strength: 3 },
  { name: '6 copas', path: './barajas de cartas/Copas/copas6.png', strength: 4 },
  { name: '7 copas', path: './barajas de cartas/Copas/copas7.png', strength: 5 },
  { name: '10 copas', path: './barajas de cartas/Copas/copas10.png', strength: 6 },
  { name: '11 copas', path: './barajas de cartas/Copas/copas11.png', strength: 7 },
  { name: '12 copas', path: './barajas de cartas/Copas/copas12.png', strength: 8 },

  // ESPADAS  
  { name: '1 espadas', path: './barajas de cartas/espadas/espada1.png', strength: 15 },
  { name: '2 espadas', path: './barajas de cartas/espadas/espada2.png', strength: 10 },
  { name: '3 espadas', path: './barajas de cartas/espadas/espada3.png', strength: 11 },
  { name: '4 espadas', path: './barajas de cartas/espadas/espada4.png', strength: 2 },
  { name: '5 espadas', path: './barajas de cartas/espadas/espada5.png', strength: 3 },
  { name: '6 espadas', path: './barajas de cartas/espadas/espada6.png', strength: 4 },
  { name: '7 espadas', path: './barajas de cartas/espadas/espada7.png', strength: 13 },
  { name: '10 espadas', path: './barajas de cartas/espadas/espada10.png', strength: 6 },
  { name: '11 espadas', path: './barajas de cartas/espadas/espada11.png', strength: 7 },
  { name: '12 espadas', path: './barajas de cartas/espadas/espada12.png', strength: 8 },

  // ORO
  { name: '1 oro', path: './barajas de cartas/oro/oro1.png', strength: 9 },
  { name: '2 oro', path: './barajas de cartas/oro/oro2.png', strength: 10 },
  { name: '3 oro', path: './barajas de cartas/oro/oro3.png', strength: 11 },
  { name: '4 oro', path: './barajas de cartas/oro/oro4.png', strength: 2 },
  { name: '5 oro', path: './barajas de cartas/oro/oro5.png', strength: 3 },
  { name: '6 oro', path: './barajas de cartas/oro/oro6.png', strength: 4 },
  { name: '7 oro', path: './barajas de cartas/oro/oro7.png', strength: 12 },
  { name: '10 oro', path: './barajas de cartas/oro/oro10.png', strength: 6 },
  { name: '11 oro', path: './barajas de cartas/oro/oro11.png', strength: 7 },
  { name: '12 oro', path: './barajas de cartas/oro/oro12.png', strength: 8 }
];

const backImage = './barajas de cartas/parte de atras.png';

const playerCardsDiv = document.getElementById('player-cards');
const machineCardsDiv = document.getElementById('machine-cards');
const status = document.getElementById('status');
const playerScoreEl = document.getElementById('player-points');
const machineScoreEl = document.getElementById('machine-points');


let playerPoints = 0;
let machinePoints = 0;
let roundWinsPlayer = 0;
let roundWinsMachine = 0;
let playerHand = [];
let machineHand = [];
let roundsPlayed = 0;


startNewRound();


function startNewRound() {
playerHand = pickRandomCards(3);
machineHand = pickRandomCards(3);
roundWinsPlayer = 0;
roundWinsMachine = 0;
roundsPlayed = 0;


status.textContent = 'New round! Your turn.';
playerCardsDiv.innerHTML = '';
machineCardsDiv.innerHTML = '';


playerHand.forEach((card, index) => {
const img = document.createElement('img');
img.src = card.path;
img.alt = card.name;
img.className = 'card-thumbnail';
img.dataset.index = index;
img.onclick = () => playCard(index);
playerCardsDiv.appendChild(img);
});


machineHand.forEach(() => {
const back = document.createElement('img');
back.src = backImage;
back.alt = 'Hidden';
back.className = 'card-thumbnail';
machineCardsDiv.appendChild(back);
});
}


function playCard(index) {
const playerCard = playerHand[index];
const machineCard = machineHand[index];


const clickedCard = playerCardsDiv.children[index];
clickedCard.onclick = null;
clickedCard.style.opacity = '0.5';


status.textContent = `You played: ${playerCard.name}. Machine is thinking...`;


setTimeout(() => {
status.textContent = `You played: ${playerCard.name}. Machine played: ${machineCard.name}. `;


if (playerCard.strength > machineCard.strength) {
roundWinsPlayer++;
status.textContent += 'You win this hand!';
} else if (playerCard.strength < machineCard.strength) {
roundWinsMachine++;
status.textContent += 'Machine wins this hand!';
} else {
status.textContent += "It's a tie!";
}


updateScores();
roundsPlayed++;


if (roundWinsPlayer === 2 || roundWinsMachine === 2 || roundsPlayed === 3) {
setTimeout(() => {
if (roundWinsPlayer > roundWinsMachine) {
playerPoints++;
status.textContent = 'You win the round!';
} else if (roundWinsMachine > roundWinsPlayer) {
machinePoints++;
status.textContent = 'Machine wins the round!';
} else {
status.textContent = "Round ended in a tie!";
}


updateScores();
setTimeout(startNewRound, 2000);
}, 1500);
}
}, 3000);
}


function updateScores() {
playerScoreEl.textContent = playerPoints;
machineScoreEl.textContent = machinePoints;
}


function pickRandomCards(count) {
const shuffled = [...allCards].sort(() => 0.5 - Math.random());
return shuffled.slice(0, count);
}
};

function playTruco() {
  document.getElementById('status').textContent = "You called Truco!";
}

function playRetruco() {
  document.getElementById('status').textContent = "You escalated to +4 (Retruco)!";
}

function playEnvido() {
  document.getElementById('status').textContent = "You called Envido!";
}

function playFlor() {
  document.getElementById('status').textContent = "You declared Flor!";
}