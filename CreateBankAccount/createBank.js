class normalAccount{
    constructor(accountNumber, password, balance, surname){
        this.accountNumber = accountNumber;
        this.password = password;
        this.balance = balance;
        this.surname = surname;
    }
    balanceUp(amount, company){
        this.balance += amount;
    }
    balanceDown(amount, company){
        if(amount <= 0){
            return 'Cant withdraw 0€'
        }
        else if(amount > this.balance){
            return 'Error Not Enough funds to procede'
        }
        else {
            this.balance -= amount;
            return company;
        }
    }
    getBalance(){
        return this.balance
    }
}

class savingAccount extends normalAccount {
    constructor(accountNumber, password, goalBalance = 1000){
        super(accountNumber, password);
        this.goalBalance = goalBalance;
    }
}

export const bankAccount = {
    accounts: {},
    createBankAccount(accountNumber, password, balance, surname){
        const newAccount = new normalAccount(accountNumber, password, balance, surname)
        this.accounts[accountNumber] = newAccount;
        console.log(`Created a new account ${accountNumber} for ${surname}`)
        return this.accounts[accountNumber];
    },
    savingAccounts: {},
    createSavingAccount(accountNumber, password, goalBalance){
        const newSavingAccount = new savingAccount(accountNumber, password, goalBalance)
        this.savingAccounts[accountNumber] = newSavingAccount;
        console.log(`Created a new savings account for ${accountNumber}`)
        return this.savingAccounts[accountNumber];
    },
    getAccount(accountNumber){
        return this.accounts[accountNumber]
    },

}

export const Noga = bankAccount.createBankAccount('12345', '123', 1000, 'Noga')
export const Brenkusova = bankAccount.createBankAccount('123456', '123', 10000, 'Brenkusova')
export const Nogova = bankAccount.createBankAccount('1234567', '123', 100000, 'Nogova')

export const NogaSaving = bankAccount.createSavingAccount('12345', '123', 10000)
export const BrenkusovaSaving = bankAccount.createSavingAccount('123456', '123', 2000)
export const NogovaSaving = bankAccount.createSavingAccount('1234567', '123', 5000)