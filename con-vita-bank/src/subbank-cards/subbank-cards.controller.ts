import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubbankCardsService } from './subbank-cards.service';
import { CreateSubbankCardDto } from './dto/create-subbank-card.dto';
import { UpdateSubbankCardDto } from './dto/update-subbank-card.dto';

@Controller('subbank-cards')
export class SubbankCardsController {
  constructor(private readonly subbankCardsService: SubbankCardsService) {}

  @Post()
  create(@Body() createSubbankCardDto: CreateSubbankCardDto) {
    return this.subbankCardsService.create(createSubbankCardDto);
  }

  @Get()
  findAll() {
    return this.subbankCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subbankCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubbankCardDto: UpdateSubbankCardDto) {
    return this.subbankCardsService.update(+id, updateSubbankCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subbankCardsService.remove(+id);
  }
}
