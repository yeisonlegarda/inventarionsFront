import { TestBed } from '@angular/core/testing';

import { TiposproductoService } from './tiposproducto.service';

describe('TiposproductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposproductoService = TestBed.get(TiposproductoService);
    expect(service).toBeTruthy();
  });
});
