import { Injectable } from '@nestjs/common';
import { Banks } from './entities/bank';
import { BankCards } from './entities/bankCard';
import { Subcards } from './entities/bankSubcard';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ConVita Customer!';
  }

  getBanksList(): string {
    let pbObject = new Banks("PrivatBank", "305299", 'Mykolaiv');
    let bankList: Array<Banks> = [pbObject, new Banks("MonoBank", "999666", "Lviv")];
    bankList.push(pbObject);
    bankList.push(new Banks("AlphaBank", "777111", "Odesa"));
    return JSON.stringify(bankList);
    
  }
  getBankCardsList(): string {
    let pbObject = new BankCards("PrivatBank", "1231 3145 1541 1412", '22/02/2029', 123, 21213);
    let bankCardList: Array<BankCards> = [pbObject, new BankCards("MonoBank", "1231 2123 1231 5432", "04/07/2029", 323,3242)];
    bankCardList.push(pbObject);
    bankCardList.push(new BankCards("AlphaBank", "4235 6463 2434 6543", "09/03/2029", 323,2389));
    return JSON.stringify(bankCardList);
    
  }
  transferToCard(fromCard: BankCards | Subcards, toCard: BankCards | Subcards, amount: number): void {
    if (fromCard instanceof BankCards && toCard instanceof BankCards) {
        // Логіка для переказу між BankCards
        console.log(`Transferred ${amount} from BankCard to BankCard`);
    } else if (fromCard instanceof Subcards && toCard instanceof Subcards) {
        // Логіка для переказу між Subcards
        console.log(`Transferred ${amount} from Subcard to Subcard`);
    } else {
        console.log("Invalid card types for transfer");
    }
}
  getBankSubcardsList(): string {
    let pbObject = new Subcards("PrivatBank", 21213);
    let bankSubcardsList: Array<Subcards> = [pbObject, new Subcards("MonoBank", 3242)];
    bankSubcardsList.push(pbObject);
    bankSubcardsList.push(new Subcards("AlphaBank",2389));
    return JSON.stringify(bankSubcardsList);
    
  }
}
