import { CreateSubbankCardDto } from './dto/create-subbank-card.dto';
import { UpdateSubbankCardDto } from './dto/update-subbank-card.dto';
export declare class SubbankCardsService {
    create(createSubbankCardDto: CreateSubbankCardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSubbankCardDto: UpdateSubbankCardDto): string;
    remove(id: number): string;
}
