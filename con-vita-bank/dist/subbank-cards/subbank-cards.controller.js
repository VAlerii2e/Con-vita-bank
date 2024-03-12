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
exports.SubbankCardsController = void 0;
const common_1 = require("@nestjs/common");
const subbank_cards_service_1 = require("./subbank-cards.service");
const create_subbank_card_dto_1 = require("./dto/create-subbank-card.dto");
const update_subbank_card_dto_1 = require("./dto/update-subbank-card.dto");
let SubbankCardsController = class SubbankCardsController {
    constructor(subbankCardsService) {
        this.subbankCardsService = subbankCardsService;
    }
    create(createSubbankCardDto) {
        return this.subbankCardsService.create(createSubbankCardDto);
    }
    findAll() {
        return this.subbankCardsService.findAll();
    }
    findOne(id) {
        return this.subbankCardsService.findOne(+id);
    }
    update(id, updateSubbankCardDto) {
        return this.subbankCardsService.update(+id, updateSubbankCardDto);
    }
    remove(id) {
        return this.subbankCardsService.remove(+id);
    }
};
exports.SubbankCardsController = SubbankCardsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subbank_card_dto_1.CreateSubbankCardDto]),
    __metadata("design:returntype", void 0)
], SubbankCardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubbankCardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubbankCardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subbank_card_dto_1.UpdateSubbankCardDto]),
    __metadata("design:returntype", void 0)
], SubbankCardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubbankCardsController.prototype, "remove", null);
exports.SubbankCardsController = SubbankCardsController = __decorate([
    (0, common_1.Controller)('subbank-cards'),
    __metadata("design:paramtypes", [subbank_cards_service_1.SubbankCardsService])
], SubbankCardsController);
//# sourceMappingURL=subbank-cards.controller.js.map