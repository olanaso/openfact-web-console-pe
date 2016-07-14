/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FacturaService } from './factura.service';

describe('Factura Service', () => {
  beforeEachProviders(() => [FacturaService]);

  it('should ...',
      inject([FacturaService], (service: FacturaService) => {
    expect(service).toBeTruthy();
  }));
});
