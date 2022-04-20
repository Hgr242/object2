class account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    withdraw(amount) { this.balance -= amount }

    deposit(amount) { this.balance += amount }
}