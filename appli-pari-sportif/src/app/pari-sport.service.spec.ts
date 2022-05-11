import { TestBed } from '@angular/core/testing';

import { PariSportService } from './pari-sport.service';

describe('PariSportService', () => {
  let service: PariSportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PariSportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
