import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankCardsService } from './bank-cards.service';
import { CreateBankCardDto } from './dto/create-bank-card.dto';
import { UpdateBankCardDto } from './dto/update-bank-card.dto';

@Controller('bank-cards')
export class BankCardsController {
  constructor(private readonly bankCardsService: BankCardsService) {}

  @Post()
  create(@Body() createBankCardDto: CreateBankCardDto) {
    return this.bankCardsService.create(createBankCardDto);
  }

  @Get()
  findAll() {
    return this.bankCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankCardDto: UpdateBankCardDto) {
    return this.bankCardsService.update(+id, updateBankCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankCardsService.remove(+id);
  }
}
