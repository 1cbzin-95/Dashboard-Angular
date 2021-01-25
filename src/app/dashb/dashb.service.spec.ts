import { TestBed } from '@angular/core/testing';

import { DashbService } from './dashb.service';

describe('DashbService', () => {
  let service: DashbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
