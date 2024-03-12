import { CreateBankCardDto } from './dto/create-bank-card.dto';
import { UpdateBankCardDto } from './dto/update-bank-card.dto';
export declare class BankCardsService {
    create(createBankCardDto: CreateBankCardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBankCardDto: UpdateBankCardDto): string;
    remove(id: number): string;
}
