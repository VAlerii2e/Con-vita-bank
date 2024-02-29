import { Test, TestingModule } from '@nestjs/testing';
import { SubbankCardsController } from './subbank-cards.controller';
import { SubbankCardsService } from './subbank-cards.service';

describe('SubbankCardsController', () => {
  let controller: SubbankCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubbankCardsController],
      providers: [SubbankCardsService],
    }).compile();

    controller = module.get<SubbankCardsController>(SubbankCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
