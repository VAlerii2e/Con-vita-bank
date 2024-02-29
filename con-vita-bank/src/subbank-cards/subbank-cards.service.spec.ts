import { Test, TestingModule } from '@nestjs/testing';
import { SubbankCardsService } from './subbank-cards.service';

describe('SubbankCardsService', () => {
  let service: SubbankCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubbankCardsService],
    }).compile();

    service = module.get<SubbankCardsService>(SubbankCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
