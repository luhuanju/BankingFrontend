import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-panel',
  templateUrl: './staff-panel.component.html',
  styleUrls: ['./staff-panel.component.css']
})
export class StaffPanelComponent {
  selectedTab = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
