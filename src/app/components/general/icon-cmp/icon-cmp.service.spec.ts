import { TestBed } from '@angular/core/testing';

import { IconCmpService } from './icon-cmp.service';

describe('IconCmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconCmpService = TestBed.get(IconCmpService);
    expect(service).toBeTruthy();
  });
});
