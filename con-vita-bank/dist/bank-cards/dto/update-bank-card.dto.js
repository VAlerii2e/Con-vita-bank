"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBankCardDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bank_card_dto_1 = require("./create-bank-card.dto");
class UpdateBankCardDto extends (0, mapped_types_1.PartialType)(create_bank_card_dto_1.CreateBankCardDto) {
}
exports.UpdateBankCardDto = UpdateBankCardDto;
//# sourceMappingURL=update-bank-card.dto.js.map