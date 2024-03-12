import { TestBed } from '@angular/core/testing';

import { JatekService } from './jatek.service';

describe('JatekService', () => {
  let service: JatekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JatekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
