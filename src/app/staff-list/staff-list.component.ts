import { Component } from '@angular/core';
import { Staff, StaffStatus } from '../staff-list/staff.model';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent {
  constructor(private adminService: AdminService) { }
  staffList: Staff[] = [];
  ngOnInit(): void {
    this.adminService.viewStuffs().subscribe(res => {
      this.staffList = res;
      console.log(res);
      // show success message
    }, error => {
      console.log(error);
      // show error message
    });
  }


  toggleLoginStatus(staff: Staff) {
    staff.status = staff.status==StaffStatus.ENABLED?StaffStatus.DISABLED: StaffStatus.ENABLED;
    this.adminService.updateStaff(staff).subscribe(res => {
      console.log(res);
      // show success message
    }, error => {
      console.log(error);
      // show error message
    });
  }

}
