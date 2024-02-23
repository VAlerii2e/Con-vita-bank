export class BankCards 
{
    private name: string;
    private card_number: string;
    private expiration_date: string;
    private CVV:number;
    private money:number;

    
    constructor(name: string = "", card_number: string = "", expiration_date: string = "",  CVV:number = 0, money:number = 0)
    {
        this.name = name;
        this.card_number = card_number;
        this.expiration_date = expiration_date;
        this.CVV = CVV;
        this.money = money;
    }

    get getName(): string {
        return this.name;
      }
    
      get getCardNumber(): string {
        return this.card_number;
      }
    
      get getExpirationDate(): string {
        return this.expiration_date;
      }
    
      get getCVV(): number {
        return this.CVV;
      }
    
      get getMoney(): number {
        return this.money;
      }

}