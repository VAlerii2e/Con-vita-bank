

export class Subcards{
    subcardName: string;
    money: number;
    
    constructor(subcardName: string = "", money: number = 0)
    {     
        this.subcardName = subcardName;
        this.money = money;
    }

    getSubcardsName(): string {
        return `Your Subcard name is: ${this.subcardName} `;
    }

    getSubcardsmoney(): string {
        return `You have:${this.subcardName}on your subcard:`;
    }
    

}