import { TestBed } from '@angular/core/testing';

import { MassuerService } from './massuer.service';

describe('MassuerService', () => {
  let service: MassuerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassuerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
