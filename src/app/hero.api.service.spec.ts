import { TestBed } from '@angular/core/testing';

import { Hero.ApiService } from './hero.api.service';

describe('Hero.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Hero.ApiService = TestBed.get(Hero.ApiService);
    expect(service).toBeTruthy();
  });
});
