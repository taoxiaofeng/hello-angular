import { TestBed } from '@angular/core/testing';

import { ButtonCmpService } from './button-cmp.service';

describe('ButtonCmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonCmpService = TestBed.get(ButtonCmpService);
    expect(service).toBeTruthy();
  });
});
