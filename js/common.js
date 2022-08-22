
function appendListItem(cardTitleName) {
    const titleNameElement = document.getElementById(cardTitleName);
    const titleName = titleNameElement.innerText;
    const playerList = document.getElementById('player-list');
    
    // console.log(playerList.childNodes);
    // console.log(playerList.childNodes.length);

    if (playerList.childNodes.length <= 5) {
        const li = document.createElement('li');
    li.innerText = titleName;
    // console.log(li);
    const liName = playerList.appendChild(li); 
    }
    else {
        alert("You Have Reached Your Limit");
    }
    
    
}