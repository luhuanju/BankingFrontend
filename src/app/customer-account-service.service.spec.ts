import { TestBed } from '@angular/core/testing';

import { CustomerAccountService } from './customer-account-service.service';

describe('CustomerAccountServiceService', () => {
  let service: CustomerAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
