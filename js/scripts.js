//===== Appunti ======
// ` backtick

//===== Code ======
const min = 1;
const max = 10;
const randomNumbers = [];
const numbersContainer = document.getElementById('numbers-container');
const timeToWait = 5;
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
    `;
}
// impostazione timer 
// imposto un timer più breve per far sparire in numeri prima del prompt
setTimeout(function () {
    console.log('tempo scaduto 1');
    numbersContainer.innerHTML = `
    <h1>
        Inserisci i numeri nell' ordine corretto
    </h1>
    `;


}, (timeToWait - 1) * 1000);
// prompt per richiedere i numeri
setTimeout(function () {
    console.log('tempo scaduto 2');
    // creo un contatore per i numeri indovinati
    let correctNumbers = 0;
    for (let i = 0; i < randomNumbers.length; i++) {
        const userNumber = parseInt(prompt(`Inserisci il ${i + 1}° numero: `));
        console.log('userNumber', userNumber);
        // confronto il numero dell'utente con l'indice i di randomNumbers 
        if (userNumber == randomNumbers[i]) {
            correctNumbers++;
        }
    }
    numbersContainer.innerHTML = `
    <h1>
        Hai indovinato ${correctNumbers} numeri su ${randomNumbers.length}
    </h1>
    `;

}, timeToWait * 1000);



//===== Functions =====
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}