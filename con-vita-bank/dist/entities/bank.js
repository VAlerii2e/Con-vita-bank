"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banks = void 0;
class Banks {
    constructor(bankName, bankMfo, bankAddress) {
        this.name = bankName;
        this.addreess = bankAddress;
        this.mfo = bankAddress;
    }
    getBankName() {
        return `${this.name} owned by Nastichka`;
    }
}
exports.Banks = Banks;
//# sourceMappingURL=bank.js.map