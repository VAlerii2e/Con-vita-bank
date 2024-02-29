import { PartialType } from '@nestjs/mapped-types';
import { CreateBankCardDto } from './create-bank-card.dto';

export class UpdateBankCardDto extends PartialType(CreateBankCardDto) {}
