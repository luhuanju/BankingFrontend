export class Customer {
    customerId:any;
    username: any;
    fullname: any;
    password: any;
    phone:any;
    identityID:any;
    secretQuestion:any;
    secretAnswer:any;
    status:boolean;
}
export enum CustomerStatus {
    Enable = 'Enable',
    Disable = 'Disable'
}  
