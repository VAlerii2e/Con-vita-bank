"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCardsController = void 0;
const common_1 = require("@nestjs/common");
const bank_cards_service_1 = require("./bank-cards.service");
const create_bank_card_dto_1 = require("./dto/create-bank-card.dto");
const update_bank_card_dto_1 = require("./dto/update-bank-card.dto");
let BankCardsController = class BankCardsController {
    constructor(bankCardsService) {
        this.bankCardsService = bankCardsService;
    }
    create(createBankCardDto) {
        return this.bankCardsService.create(createBankCardDto);
    }
    findAll() {
        return this.bankCardsService.findAll();
    }
    findOne(id) {
        return this.bankCardsService.findOne(+id);
    }
    update(id, updateBankCardDto) {
        return this.bankCardsService.update(+id, updateBankCardDto);
    }
    remove(id) {
        return this.bankCardsService.remove(+id);
    }
};
exports.BankCardsController = BankCardsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bank_card_dto_1.CreateBankCardDto]),
    __metadata("design:returntype", void 0)
], BankCardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BankCardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BankCardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bank_card_dto_1.UpdateBankCardDto]),
    __metadata("design:returntype", void 0)
], BankCardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BankCardsController.prototype, "remove", null);
exports.BankCardsController = BankCardsController = __decorate([
    (0, common_1.Controller)('bank-cards'),
    __metadata("design:paramtypes", [bank_cards_service_1.BankCardsService])
], BankCardsController);
//# sourceMappingURL=bank-cards.controller.js.map