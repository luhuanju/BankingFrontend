import { Component,Input, Output, EventEmitter, ViewChild,ElementRef } from '@angular/core';
import { CreateAccountComponent } from '../create-account/create-account.component';
interface Button {
  value: string;
  label: string;
}
@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.css']
})
export class ProfilePanelComponent {
  @Input() buttons: Button[] = [
    { value: 'Create Account', label: 'Create Account' },
    { value: 'Add Beneficiary', label: 'Add Beneficiary' },
    { value: 'Remove Beneficiary', label: 'Remove Beneficiary' },
    { value: 'Transfer Money', label: 'Transfer Money' },
    { value: 'View Statement', label: 'View Statement' },

  ];
  selectedValue: string | null = 'Account List';

  onSelectedValueChange(value: string) {
    console.log('change')
    this.selectedValue = value;
    this.buttonClick.emit(value);
  }

  @Output() buttonClick = new EventEmitter<string>();

  onButtonClick(value: string): void {
    console.log(value)
    this.selectedValue = value;
    this.buttonClick.emit(value);
  }
}
