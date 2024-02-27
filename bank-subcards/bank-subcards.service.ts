import { Injectable } from '@nestjs/common';
import { CreateBankSubcardDto } from './dto/create-bank-subcard.dto';
import { UpdateBankSubcardDto } from './dto/update-bank-subcard.dto';

@Injectable()
export class BankSubcardsService {
  create(createBankSubcardDto: CreateBankSubcardDto) {
    return 'This action adds a new bankSubcard';
  }

  findAll() {
    return `This action returns all bankSubcards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankSubcard`;
  }

  update(id: number, updateBankSubcardDto: UpdateBankSubcardDto) {
    return `This action updates a #${id} bankSubcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankSubcard`;
  }
}
