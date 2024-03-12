import { SubbankCardsService } from './subbank-cards.service';
import { CreateSubbankCardDto } from './dto/create-subbank-card.dto';
import { UpdateSubbankCardDto } from './dto/update-subbank-card.dto';
export declare class SubbankCardsController {
    private readonly subbankCardsService;
    constructor(subbankCardsService: SubbankCardsService);
    create(createSubbankCardDto: CreateSubbankCardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubbankCardDto: UpdateSubbankCardDto): string;
    remove(id: string): string;
}
