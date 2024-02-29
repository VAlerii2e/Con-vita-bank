import { PartialType } from '@nestjs/mapped-types';
import { CreateSubbankCardDto } from './create-subbank-card.dto';

export class UpdateSubbankCardDto extends PartialType(CreateSubbankCardDto) {}
