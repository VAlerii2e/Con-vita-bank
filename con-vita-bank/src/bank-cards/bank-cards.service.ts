import { Injectable } from '@nestjs/common';
import { CreateBankCardDto } from './dto/create-bank-card.dto';
import { UpdateBankCardDto } from './dto/update-bank-card.dto';

@Injectable()
export class BankCardsService {
  create(createBankCardDto: CreateBankCardDto) {
    return 'This action adds a new bankCard';
  }

  findAll() {
    return `This action returns all bankCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankCard`;
  }

  update(id: number, updateBankCardDto: UpdateBankCardDto) {
    return `This action updates a #${id} bankCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankCard`;
  }
}
