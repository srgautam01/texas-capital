import { TestBed } from '@angular/core/testing';

import { BusinessAcctOpenService } from './business-acct-open.service';

describe('BusinessAcctOpenService', () => {
  let service: BusinessAcctOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessAcctOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
