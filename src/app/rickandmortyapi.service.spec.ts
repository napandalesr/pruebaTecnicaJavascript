import { TestBed } from '@angular/core/testing';

import { RickandmortyapiService } from './rickandmortyapi.service';

describe('RickandmortyapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickandmortyapiService = TestBed.get(RickandmortyapiService);
    expect(service).toBeTruthy();
  });
});
