interface BankAccount {
    id: number;
    balance: number;
}

const deposit = (balance: number, BackAccount: BankAccount) => {
    BackAccount.balance += balance;
    console.log("Money after increase: " + BackAccount.balance)
}

const withdraw = (balance: number, BackAccount: BankAccount) => {
    BackAccount.balance -= balance;
    console.log("Money after decrease: " + BackAccount.balance)
}

const newBankAccount: BankAccount = {
    id: 1, balance: 10
}

deposit(10, newBankAccount);
withdraw(20, newBankAccount);

