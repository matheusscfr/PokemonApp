import { TestBed } from '@angular/core/testing';

import { VIACEPService } from './viacep.service';

describe('VIACEPService', () => {
  let service: VIACEPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VIACEPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
