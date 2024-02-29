import { Injectable } from '@nestjs/common';
import { CreateSubbankCardDto } from './dto/create-subbank-card.dto';
import { UpdateSubbankCardDto } from './dto/update-subbank-card.dto';

@Injectable()
export class SubbankCardsService {
  create(createSubbankCardDto: CreateSubbankCardDto) {
    return 'This action adds a new subbankCard';
  }

  findAll() {
    return `This action returns all subbankCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subbankCard`;
  }

  update(id: number, updateSubbankCardDto: UpdateSubbankCardDto) {
    return `This action updates a #${id} subbankCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} subbankCard`;
  }
}
