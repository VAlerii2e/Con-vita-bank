import { Module } from '@nestjs/common';
import { BankSubcardsService } from './bank-subcards.service';
import { BankSubcardsController } from './bank-subcards.controller';

@Module({
  controllers: [BankSubcardsController],
  providers: [BankSubcardsService],
})
export class BankSubcardsModule {}
