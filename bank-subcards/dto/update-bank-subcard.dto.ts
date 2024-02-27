import { PartialType } from '@nestjs/mapped-types';
import { CreateBankSubcardDto } from './create-bank-subcard.dto';

export class UpdateBankSubcardDto extends PartialType(CreateBankSubcardDto) {}
