"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCards = void 0;
class BankCards {
    constructor(name = "", card_number = "", expiration_date = "", CVV = 0, money = 0) {
        this.name = name;
        this.card_number = card_number;
        this.expiration_date = expiration_date;
        this.CVV = CVV;
        this.money = money;
    }
    get getName() {
        return this.name;
    }
    get getCardNumber() {
        return this.card_number;
    }
    get getExpirationDate() {
        return this.expiration_date;
    }
    get getCVV() {
        return this.CVV;
    }
    get getMoney() {
        return this.money;
    }
}
exports.BankCards = BankCards;
//# sourceMappingURL=bankCard.js.map