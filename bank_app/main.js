
class BankAccount {
    accountNumber;
    ownerName;
    balance ;

    constructor(name, balance){
        this.accountNumber = (parseInt(Math.random() * 900000));
        this.ownerName = name;
        this.balance = balance;
    }

    deposit(ammount){
       this.balance = this.balance + ammount; 
    }

    withdraw(ammount){
        if(this.balance < ammount) {
            console.log("Insufficient funds");
            return;
        }

        this.balance = this.balance - ammount;
    }

    getBalance(){
        return this.balance;
    }

    displayAccountInfo(){
        console.log("Account Number:", this.accountNumber);
        console.log("Owner Name:", this.ownerName);
        console.log("Blance:", this.getBalance());
        console.log("");
    }
}

var faruk = new BankAccount("faruk", 5000);
var rasel = new BankAccount("rasel", 10000);


faruk.deposit(5000);
faruk.withdraw(2000);
faruk.displayAccountInfo();

rasel.deposit(5000);
rasel.withdraw(2000);
rasel.displayAccountInfo();

rasel.withdraw(22000);