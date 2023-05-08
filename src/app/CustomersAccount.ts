export class CustomerAccount {
    constructor(
      public customerId: number,
      public accountBalance: number,
      public approved: string,
      public dateOfCreation: Date,
      public accountType: AccountType,
    ) {}
}
export enum AccountType {
    SB = 'SB',
    CA = 'CA'
}  

export class BeneficiaryAccount {
  id:number;
  customerId: number;
  accountNumber: string;
  accountType: AccountType;
  approved:string;
}
