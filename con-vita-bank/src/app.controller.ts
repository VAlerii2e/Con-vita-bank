import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()//кінцева точка
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Bank')
  showBanksList(): string {
    return this.appService.getBanksList();
  }
  @Get('BankCard')
  showBankCardsList(): string {
    return this.appService.getBankCardsList();
  }
  @Get('BankSubcard')
  showBankSubcardsList(): string {
    return this.appService.getBankSubcardsList();
  }
  
}
