import { TestBed } from '@angular/core/testing';

import { PariService } from './pari.service';

describe('PariService', () => {
  let service: PariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
