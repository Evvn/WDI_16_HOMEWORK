class BankAccount {
  constructor(type) {
    this.type = type
    this.balance = 0
    this.transactionHistory = []
  }

  witdraw(amount) {
    this.balance -= amount
    this.transactionHistory.push("deposit $" + amount + " into " + this.type + " (balance: $" + this.balance + ")" )
    return console.log(this.type + ": $" + this.balance + " \n");
  }

  deposit(amount) {
    this.balance += amount
    this.transactionHistory.push("withdraw $" + amount + " from " + this.type + " (balance: $" + this.balance + ")" )
    return console.log(this.type + ": $" + this.balance + " \n");
  }

  showBalance() {
    return console.log(this.type + ": $" + this.balance + " \n");
  }

  showTransactions() {
    return console.log(this.transactionHistory.join("\n") + "\n");
  }
}

module.exports = BankAccount
