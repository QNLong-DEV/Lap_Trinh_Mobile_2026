class Account {
    public name: string;
    private balance: number;
    readonly id: string;
    constructor(name: string, balance: number, id: string) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}