import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockEnableCustomerComponent } from './block-enable-customer.component';

describe('BlockEnableCustomerComponent', () => {
  let component: BlockEnableCustomerComponent;
  let fixture: ComponentFixture<BlockEnableCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockEnableCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockEnableCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
