import { bankAccount } from "../CreateBankAccount/createBank.js"

const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let typedAccountNumber = document.getElementById("accountNumber").value;
    let typedPassword = document.getElementById('password').value;
    let h1 = document.getElementById('password-messages');
    if (bankAccount.accounts[typedAccountNumber]) {
      const account = bankAccount.accounts[typedAccountNumber];
      const savingAccount = bankAccount.savingAccounts[typedAccountNumber];
      if (typedPassword === account.password) {
        console.log(`Successfully logged into ${account.surname}'s account!`);
        h1.innerText = `Successfully logged into ${account.surname}'s account!`; 
        localStorage.setItem('loggedInAccount', JSON.stringify(account));
        localStorage.setItem('loggedInSavingAccount', JSON.stringify(savingAccount));
        window.location.href = '../Bank/bank.html'
        return;
      } else {
        console.log("Incorrect password. Please try again.");
        h1.innerText = `Incorrect password. Please try again.`; 
      }
    } else {
      console.log("Account does not exist. Please check the account number.");
      h1.innerText = `Account does not exist. Please check the account number.`; 
    }
});

