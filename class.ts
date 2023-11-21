class BankAccount {
  balanceInit: number;
  constructor(_balanceInit: number) {
    this.balanceInit = _balanceInit;
  }

  deposit(amount: number): void {
    this.balanceInit += amount;
  }

  getMoney(amount: number): void {
    if (amount <= this.balanceInit) {
      this.balanceInit -= amount;
    } else {
      console.log("Fondi insufficienti");
    }
  }
}

class SonAccount extends BankAccount {
  depositToSon(amount: number): void {
    this.deposit(amount);
  }

  withdrawFromSon(amount: number): void {
    this.getMoney(amount);
  }
}

class MotherAccount extends BankAccount {
  addInterest(): void {
    const interest = this.balanceInit * 0.1;
    this.getMoney(interest);
  }
}

const sonAccount = new SonAccount(500);
sonAccount.deposit(400);
console.log(sonAccount.balanceInit);

sonAccount.getMoney(80);
console.log("Saldo del conto figlio:", sonAccount.balanceInit);

const motherAccount = new MotherAccount(0);
motherAccount.deposit(600);
motherAccount.addInterest();
console.log(
  "Saldo del conto madre dopo l'aggiunta di interesse:",
  motherAccount.balanceInit
);
