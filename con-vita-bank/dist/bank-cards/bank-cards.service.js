"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCardsService = void 0;
const common_1 = require("@nestjs/common");
let BankCardsService = class BankCardsService {
    create(createBankCardDto) {
        return 'This action adds a new bankCard';
    }
    findAll() {
        return `This action returns all bankCards`;
    }
    findOne(id) {
        return `This action returns a #${id} bankCard`;
    }
    update(id, updateBankCardDto) {
        return `This action updates a #${id} bankCard`;
    }
    remove(id) {
        return `This action removes a #${id} bankCard`;
    }
};
exports.BankCardsService = BankCardsService;
exports.BankCardsService = BankCardsService = __decorate([
    (0, common_1.Injectable)()
], BankCardsService);
//# sourceMappingURL=bank-cards.service.js.map