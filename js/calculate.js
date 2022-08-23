
document.getElementById('calculate').addEventListener('click', function () {
    const selectedFive = document.getElementById('player-list');
    const playerExpenses = document.getElementById('playerExpenses');
    const perPlayerInput = document.getElementById('perPlayer');
    let perPlayerInputValue = parseInt(perPlayerInput.value);
    const playerCosts = (selectedFive.childNodes.length - 1) * perPlayerInputValue;
    playerExpenses.innerText = playerCosts;
})


document.getElementById('calculateTotal').addEventListener('click', function () {
    const playerExpenses = parseInt(document.getElementById('playerExpenses').innerText);
    const managerCost = parseInt(document.getElementById('manager').value);
    const coachCost = parseInt(document.getElementById('coach').value);
    const totalCost = document.getElementById('total');

    let total = playerExpenses + (managerCost + coachCost);

    totalCost.innerText = total;
})