import { Noga, Brenkusova, Nogova } from "../CreateBankAccount/createBank.js"

const loggedInAccount = JSON.parse(localStorage.getItem('loggedInAccount'));
const loggedInSavingAccount = JSON.parse(localStorage.getItem('loggedInSavingAccount'));
const circle = document.querySelector('circle');
const savingCircleNumber = document.getElementById("number");
const savingCircleRange = document.getElementById('range')

const savedMoney = 2000;
const currentSavings = savedMoney  / loggedInSavingAccount.goalBalance * 100;  
const circleFiller = 450 - currentSavings / 100 * 450;
let counter = 0;
setInterval(() => {
    savingCircleRange.innerHTML = `${savedMoney}€/${loggedInSavingAccount.goalBalance}€`
    circle.style.setProperty('--dash-offset', circleFiller);
    if (counter >= currentSavings) {
        clearInterval;
    } else {
    counter += 1;
    savingCircleNumber.innerHTML = `${counter}%`
    }
}, 25);

document.getElementById('accountBalance').textContent = loggedInAccount.balance + " €";

document.getElementById('user-name').textContent = loggedInAccount.surname
