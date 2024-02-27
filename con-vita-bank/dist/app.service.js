"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const bank_1 = require("./entities/bank");
const bankCard_1 = require("./entities/bankCard");
const bankSubcard_1 = require("./entities/bankSubcard");
let AppService = class AppService {
    getHello() {
        return 'Hello ConVita Customer!';
    }
    getBanksList() {
        let pbObject = new bank_1.Banks("PrivatBank", "305299", 'Mykolaiv');
        let bankList = [pbObject, new bank_1.Banks("MonoBank", "999666", "Lviv")];
        bankList.push(pbObject);
        bankList.push(new bank_1.Banks("AlphaBank", "777111", "Odesa"));
        return JSON.stringify(bankList);
    }
    getBankCardsList() {
        let pbObject = new bankCard_1.BankCards("PrivatBank", "1231 3145 1541 1412", '22/02/2029', 123, 21213);
        let bankCardList = [pbObject, new bankCard_1.BankCards("MonoBank", "1231 2123 1231 5432", "04/07/2029", 323, 3242)];
        bankCardList.push(pbObject);
        bankCardList.push(new bankCard_1.BankCards("AlphaBank", "4235 6463 2434 6543", "09/03/2029", 323, 2389));
        return JSON.stringify(bankCardList);
    }
    transferToCard(fromCard, toCard, amount) {
        if (fromCard instanceof bankCard_1.BankCards && toCard instanceof bankCard_1.BankCards) {
            console.log(`Transferred ${amount} from BankCard to BankCard`);
        }
        else if (fromCard instanceof bankSubcard_1.Subcards && toCard instanceof bankSubcard_1.Subcards) {
            console.log(`Transferred ${amount} from Subcard to Subcard`);
        }
        else {
            console.log("Invalid card types for transfer");
        }
    }
    getBankSubcardsList() {
        let pbObject = new bankSubcard_1.Subcards("PrivatBank", 21213);
        let bankSubcardsList = [pbObject, new bankSubcard_1.Subcards("MonoBank", 3242)];
        bankSubcardsList.push(pbObject);
        bankSubcardsList.push(new bankSubcard_1.Subcards("AlphaBank", 2389));
        return JSON.stringify(bankSubcardsList);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map