//===== Appunti ======
// ` backtick

//===== Code ======
const min = 1;
const max = 10;
const randomNumbers = [];
const numbersContainer = document.getElementById('numbers-container');
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


//===== Functions =====
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}