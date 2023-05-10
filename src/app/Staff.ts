export class Staff {
    staffId:number;
    status: SatffStatus;
    staffFullName: string;
    staffUserName: string;
    staffPassword:string;
    stuffAddedDate:Date;
}
export enum SatffStatus {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}  

