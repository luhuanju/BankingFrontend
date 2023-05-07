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
    SB = 'BA',
    CA = 'CA'
}  
export class BeneficiaryAccount {
  constructor(
    public id: number,
    public customerId: number,
    public accountNumber: string,
    public accountType: AccountType,
    public approved: string,
  ) {}
}
