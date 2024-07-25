//===== Appunti ======
// ` backtick

//===== Code ======
const min = 1;
const max = 10;
const randomNumbers = [];
const numbersContainer = document.getElementById('numbers-container');
const timeToWait = 2;
// generazione numeri casuali
for (let i = 0; i < 5; i++) {
    const num = getRndNumber(min, max);
    console.log(num);
    randomNumbers.push(num);
    console.log(randomNumbers);
    numbersContainer.innerHTML += `
    <div>
        ${num}
    </div>
    `
}
// impostazione timer
setTimeout(function () {
    console.log('tempo scaduto');
    numbersContainer.innerHTML = `
    <h1>
        Inserisci i numeri nell' ordine corretto
    </h1>
    `
}, timeToWait * 1000);



//===== Functions =====
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}