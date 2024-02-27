import { Test, TestingModule } from '@nestjs/testing';
import { BankSubcardsService } from './bank-subcards.service';

describe('BankSubcardsService', () => {
  let service: BankSubcardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankSubcardsService],
    }).compile();

    service = module.get<BankSubcardsService>(BankSubcardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
