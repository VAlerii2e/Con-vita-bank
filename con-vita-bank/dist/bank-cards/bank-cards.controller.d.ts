import { BankCardsService } from './bank-cards.service';
import { CreateBankCardDto } from './dto/create-bank-card.dto';
import { UpdateBankCardDto } from './dto/update-bank-card.dto';
export declare class BankCardsController {
    private readonly bankCardsService;
    constructor(bankCardsService: BankCardsService);
    create(createBankCardDto: CreateBankCardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBankCardDto: UpdateBankCardDto): string;
    remove(id: string): string;
}
