export interface Staff {
    staffId: number;
    staffFullName: string;
    staffUserName: string;
    status: StaffStatus;
}
export enum StaffStatus {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
  }