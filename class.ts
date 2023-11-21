class BankAccount {
  balanceInit: number = 0;

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

const sonAccount = new SonAccount();
sonAccount.depositToSon(100);

sonAccount.withdrawFromSon(120);
console.log("Saldo del conto figlio:", sonAccount.balanceInit);

const motherAccount = new MotherAccount();
motherAccount.deposit(500);
motherAccount.addInterest();
console.log(
  "Saldo del conto madre dopo l'aggiunta di interesse:",
  motherAccount.balanceInit
);
