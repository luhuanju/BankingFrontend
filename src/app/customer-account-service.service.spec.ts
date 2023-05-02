import { TestBed } from '@angular/core/testing';

import { CustomerAccountServiceService } from './customer-account-service.service';

describe('CustomerAccountServiceService', () => {
  let service: CustomerAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
