export class Bank {
    name: string;
    mfo: string;
    addreess: string;
    constructor(bankName: string, bankMfo: string, bankAddress: string) {
        this.name = bankName;
        this.addreess = bankAddress;
        this.mfo = bankAddress;
    }

    getBankName(): string {
        return `${this.name} owned by Nastichka`;
    }

}