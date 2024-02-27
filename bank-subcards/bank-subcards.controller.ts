import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankSubcardsService } from './bank-subcards.service';
import { CreateBankSubcardDto } from './dto/create-bank-subcard.dto';
import { UpdateBankSubcardDto } from './dto/update-bank-subcard.dto';

@Controller('bank-subcards')
export class BankSubcardsController {
  constructor(private readonly bankSubcardsService: BankSubcardsService) {}

  @Post()
  create(@Body() createBankSubcardDto: CreateBankSubcardDto) {
    return this.bankSubcardsService.create(createBankSubcardDto);
  }

  @Get()
  findAll() {
    return this.bankSubcardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankSubcardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankSubcardDto: UpdateBankSubcardDto) {
    return this.bankSubcardsService.update(+id, updateBankSubcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankSubcardsService.remove(+id);
  }
}
