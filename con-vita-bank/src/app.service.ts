import { Injectable } from '@nestjs/common';
import { Bank } from './entities/bank';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ConVita Customer!';
  }

  getBanksList(): string {
    let pbObject = new Bank("PrivatBank", "305299", 'Mykolaiv');
    let bankList: Array<Bank> = [pbObject, new Bank("MonoBank", "999666", "Lviv")];
    bankList.push(pbObject);
    bankList.push(new Bank("AlphaBank", "777111", "Odesa"));
    return JSON.stringify(bankList);
    // return bankList.map( (bank) =>{
    //  //return `${bank.name}  ${bank.mfo}  ${bank.addreess}`;
    //   return JSON.stringify(bank);
    // }).toString();
  }
}
