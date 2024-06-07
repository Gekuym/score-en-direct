function updateScore(team, value, matchId) {
    const scoreElement = document.getElementById(`${team}-score-${matchId}`);
    let currentScore = parseInt(scoreElement.innerText);
    currentScore += value;
    
    if (currentScore < 0) {
        currentScore = 0;
    }
    
    scoreElement.innerText = currentScore;
}

function changeImage(team, matchId) {
    const uploadInput = document.getElementById(`${team}-upload-${matchId}`);
    const imgElement = document.getElementById(`${team}-img-${matchId}`);
    
    const file = uploadInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgElement.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function addScorer(team, matchId) {
    const playerNameInput = document.getElementById(`${team}-player-name-${matchId}`);
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        const scorersList = document.getElementById(`${team}-scorers-${matchId}`);
        const newScorer = document.createElement('li');
        newScorer.textContent = playerName;
        scorersList.appendChild(newScorer);
        playerNameInput.value = '';
    }
}

function addYellowCard(team, matchId) {
    const playerNameInput = document.getElementById(`${team}-player-name-${matchId}`);
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        const yellowCardsList = document.getElementById(`${team}-yellow-cards-${matchId}`);
        const newYellowCard = document.createElement('li');
        newYellowCard.textContent = playerName;
        yellowCardsList.appendChild(newYellowCard);
        playerNameInput.value = '';
    }
}

function addRedCard(team, matchId) {
    const playerNameInput = document.getElementById(`${team}-player-name-${matchId}`);
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        const redCardsList = document.getElementById(`${team}-red-cards-${matchId}`);
        const newRedCard = document.createElement('li');
        newRedCard.textContent = playerName;
        redCardsList.appendChild(newRedCard);
        playerNameInput.value = '';
    }
}