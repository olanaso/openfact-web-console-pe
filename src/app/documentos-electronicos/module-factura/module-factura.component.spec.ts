/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ModuleFacturaComponent } from './module-factura.component';

describe('Component: ModuleFactura', () => {
  it('should create an instance', () => {
    let component = new ModuleFacturaComponent();
    expect(component).toBeTruthy();
  });
});
