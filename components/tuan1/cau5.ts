class BankAccount {
    public id: number;
    private _balance: number;

    constructor(id: number, balance: number) {
        this.id = id;
        this._balance = balance;
    }

    get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        this._balance += amount;
        console.log("Money after increase: " + this._balance);
    }

    public withdraw(amount: number): void {
        this._balance -= amount;
        console.log("Money after decrease: " + this._balance);
    }
}

const newBankAccount = new BankAccount(1, 10);
newBankAccount.deposit(10);
newBankAccount.withdraw(20);
