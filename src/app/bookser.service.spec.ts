import { TestBed } from '@angular/core/testing';

import { BookserService } from './bookser.service';

describe('BookserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookserService = TestBed.get(BookserService);
    expect(service).toBeTruthy();
  });
});
