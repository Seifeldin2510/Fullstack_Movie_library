import { TestBed } from '@angular/core/testing';

import { TvServicesService } from './tv-services.service';

describe('TvServicesService', () => {
  let service: TvServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
