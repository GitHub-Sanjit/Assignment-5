
function appendList(cardTitleName) {
    const titleNameElement = document.getElementById(cardTitleName);
    const titleName = titleNameElement.innerText;
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = titleName;
    const liName = playerList.appendChild(li); 
}