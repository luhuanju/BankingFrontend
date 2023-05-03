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
    BA = 'BA',
    CA = 'CA'
}  