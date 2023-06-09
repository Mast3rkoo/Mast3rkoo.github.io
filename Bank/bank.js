import { normalAccount } from "../CreateBankAccount/createBank.js"

// GETTING THE LOGGED ACCOUNT INFO
const loggedInSavingAccount = JSON.parse(localStorage.getItem('loggedInSavingAccount'));
const loggedInAccount = Object.assign(new normalAccount(), JSON.parse(localStorage.getItem('loggedInAccount')));
// GOAL SAVING BALANCE CIRCLE

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

// LOGGING OUT SYSTEM
const logoutButton = document.getElementById('logout');
logoutButton.onclick = () => {
  window.location.href = '../index.html'
}

// USER NAME AND USER ALANCE SHOWER
document.getElementById('accountBalance').textContent = loggedInAccount.balance.toFixed(2) + " €";

document.getElementById('user-name').textContent = loggedInAccount.surname

// Inserting new transactions in table
const transactionTable = document.getElementById('transactionTable');
const transactionDate = new Date().toJSON().slice(0,10).replace(/-/g,'.');

function addRow(newTransaction) {
    transactionTable.innerHTML += newTransaction;
}

// NEW TRANSACTION OPERATIONS 
function populateTable() {
  const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if (storedTransactions) {
    storedTransactions.forEach((transaction) => {
      addRow(transaction);
    });
  }
}

// Call the populateTable function to populate the table when the page loads
window.addEventListener('load', populateTable);

// NEW TRANSACTION OPERATIONS
const transactionSubmitButton = document.getElementById('transaction-button');
let chartWithdrawValues = JSON.parse(localStorage.getItem('chartWithdrawValues')) || [0];

transactionSubmitButton.onclick = () => {
  const transactionName = document.getElementById('transaction-name').value;
  const transactionValue = document.getElementById('transaction-amount').value;
  let icon;
  switch(transactionName.toLowerCase()) {
    case 'spotify':
      icon = transactionName;
      break;
    case 'lidl':
      icon = transactionName;
      break;
    case 'apple':
      icon = transactionName;
      break;
    case 'mcdonald':
        icon = transactionName;
        break;
    case 'coop':
          icon = transactionName;
          break;
    default:
      icon = 'profile';
  }
  loggedInAccount.balanceDown(transactionValue);
  const newTransaction = `<tr>
    <td><img src="../Bank/companyLogos/${icon}.png" alt=""></td>
    <td>${transactionName}</td>
    <td><p class="operation withdraw">Withdraw</p></td>
    <td>${transactionDate}</td>
    <td><strong>${transactionValue}€</strong></td>
  </tr>`;
  addRow(newTransaction);

  // Save the new transaction to local storage
  const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
  storedTransactions.push(newTransaction);
  localStorage.setItem('transactions', JSON.stringify(storedTransactions));

  // Update the logged-in account in local storage
  localStorage.setItem('loggedInAccount', JSON.stringify(loggedInAccount));
  chartWithdrawValues[0] += Number(transactionValue);
  // Save the chatWithdrawValues 
  localStorage.setItem('chartWithdrawValues', JSON.stringify(chartWithdrawValues)) || [0];
};


