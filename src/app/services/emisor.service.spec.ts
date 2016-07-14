/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { EmisorService } from './emisor.service';

describe('Emisor Service', () => {
  beforeEachProviders(() => [EmisorService]);

  it('should ...',
      inject([EmisorService], (service: EmisorService) => {
    expect(service).toBeTruthy();
  }));
});
