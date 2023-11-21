var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balanceInit += amount;
    };
    BankAccount.prototype.getMoney = function (amount) {
        if (amount <= this.balanceInit) {
            this.balanceInit -= amount;
        }
        else {
            console.log("Fondi insufficienti");
        }
    };
    return BankAccount;
}());
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SonAccount.prototype.depositToSon = function (amount) {
        this.deposit(amount);
    };
    SonAccount.prototype.withdrawFromSon = function (amount) {
        this.getMoney(amount);
    };
    return SonAccount;
}(BankAccount));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = this.balanceInit * 0.1;
        this.getMoney(interest);
    };
    return MotherAccount;
}(BankAccount));
var sonAccount = new SonAccount(500);
sonAccount.deposit(400);
console.log(sonAccount.balanceInit);
sonAccount.getMoney(80);
console.log("Saldo del conto figlio:", sonAccount.balanceInit);
var motherAccount = new MotherAccount(0);
motherAccount.deposit(600);
motherAccount.addInterest();
console.log("Saldo del conto madre dopo l'aggiunta di interesse:", motherAccount.balanceInit);
