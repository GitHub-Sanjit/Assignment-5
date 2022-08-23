
function appendListItem(cardTitleName) {
    const titleNameElement = document.getElementById(cardTitleName);
    const titleName = titleNameElement.innerText;
    const playerList = document.getElementById('player-list');
    
    if (playerList.childNodes.length > 5) {
        alert("You Have Reached Your Limit");
    }
    else {
        const li = document.createElement('li');
        li.innerText = titleName;
        const liName = playerList.appendChild(li);
    }
}

