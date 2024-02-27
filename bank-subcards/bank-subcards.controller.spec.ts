import { Test, TestingModule } from '@nestjs/testing';
import { BankSubcardsController } from './bank-subcards.controller';
import { BankSubcardsService } from './bank-subcards.service';

describe('BankSubcardsController', () => {
  let controller: BankSubcardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankSubcardsController],
      providers: [BankSubcardsService],
    }).compile();

    controller = module.get<BankSubcardsController>(BankSubcardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
