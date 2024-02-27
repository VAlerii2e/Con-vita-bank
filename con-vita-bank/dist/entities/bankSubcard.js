"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subcards = void 0;
class Subcards {
    constructor(subcardName = "", money = 0) {
        this.subcardName = subcardName;
        this.money = money;
    }
    getSubcardsName() {
        return `Your Subcard name is: ${this.subcardName} `;
    }
    getSubcardsmoney() {
        return `You have:${this.subcardName}on your subcard:`;
    }
}
exports.Subcards = Subcards;
//# sourceMappingURL=bankSubcard.js.map