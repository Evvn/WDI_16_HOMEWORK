const BankAccount = require('./bankAccount');

console.log("Bank.\n");

console.log("new savings account\n");
b = new BankAccount('savings')

console.log('deposit $13');
b.deposit(13)

console.log('witdraw $8');
b.witdraw(8)

console.log('show balance');
b.showBalance()

console.log('transaction history');
b.showTransactions()
