/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContainerComponent } from './container.component';

describe('Component: Container', () => {
  it('should create an instance', () => {
    let component = new ContainerComponent();
    expect(component).toBeTruthy();
  });
});
