import { BankCards } from './entities/bankCard';
import { Subcards } from './entities/bankSubcard';
export declare class AppService {
    getHello(): string;
    getBanksList(): string;
    getBankCardsList(): string;
    transferToCard(fromCard: BankCards | Subcards, toCard: BankCards | Subcards, amount: number): void;
    getBankSubcardsList(): string;
}
