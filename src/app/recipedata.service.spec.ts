import { TestBed } from '@angular/core/testing';

import { ReceipedataService } from './recipedata.service';

describe('ReceipedataService', () => {
  let service: ReceipedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
