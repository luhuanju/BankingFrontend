import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStamentsComponent } from './staff-staments.component';

describe('StaffStamentsComponent', () => {
  let component: StaffStamentsComponent;
  let fixture: ComponentFixture<StaffStamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffStamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffStamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
