import { TestBed } from '@angular/core/testing';

import { LimiteServiceService } from './limite-service.service';

describe('LimiteServiceService', () => {
  let service: LimiteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimiteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
