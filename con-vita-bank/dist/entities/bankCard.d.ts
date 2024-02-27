export declare class BankCards {
    private name;
    private card_number;
    private expiration_date;
    private CVV;
    private money;
    constructor(name?: string, card_number?: string, expiration_date?: string, CVV?: number, money?: number);
    get getName(): string;
    get getCardNumber(): string;
    get getExpirationDate(): string;
    get getCVV(): number;
    get getMoney(): number;
}
