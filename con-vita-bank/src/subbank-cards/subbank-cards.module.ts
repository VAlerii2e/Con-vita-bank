import { Module } from '@nestjs/common';
import { SubbankCardsService } from './subbank-cards.service';
import { SubbankCardsController } from './subbank-cards.controller';

@Module({
  controllers: [SubbankCardsController],
  providers: [SubbankCardsService],
})
export class SubbankCardsModule {}
