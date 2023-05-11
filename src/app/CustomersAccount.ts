export class CustomerAccount {
    constructor(
      public customerId: number,
      public accountBalance: number,
      public approved: string,
      public dateOfCreation: Date,
      public accountType: AccountType,
    ) {}
}

export class Account {
 
  accountId:number;
  accountNumber: number;
  accountType: string;
  accountBalance: AccountType;
  approved:string;
  dateOfCreation:Date;
  customerId:any;
  transaction:any
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

export class Payload {
  // constructor(
  //   public fromAccNumber: number,
  //   public toAccNumber: number,
  //   public amount: number,
  //   public reason: string
  // ) {}
  fromAccNumber: any;
  toAccNumber: any;
  amount: any;
  reason: any;
}