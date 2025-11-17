window.onload = () => {
const playerCards = ['5 Espadas', '7 Copas', 'Ancho Bastos'];
const machineCards = ['3 Espadas', '6 Oros', 'Ancho Falso'];


const playerCardsDiv = document.getElementById('player-cards');
const machineCardsDiv = document.getElementById('machine-cards');


// Show player's cards
playerCards.forEach((card, index) => {
const div = document.createElement('div');
div.className = 'card';
div.textContent = card;
div.onclick = () => playCard(card);
playerCardsDiv.appendChild(div);
});


// Show placeholder for machine's cards
machineCardsDiv.textContent = '[Machine is thinking...]';
}


function playCard(card) {
document.getElementById('status').textContent = `You played: ${card}. Waiting for machine...`;


setTimeout(() => {
const options = ['3 Espadas', '6 Oros', 'Ancho Falso'];
const machinePlay = options[Math.floor(Math.random() * options.length)];
document.getElementById('status').textContent += ` Machine played: ${machinePlay}`;
}, 1000);
}