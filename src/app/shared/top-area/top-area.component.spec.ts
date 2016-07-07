/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TopAreaComponent } from './top-area.component';

describe('Component: TopArea', () => {
  it('should create an instance', () => {
    let component = new TopAreaComponent();
    expect(component).toBeTruthy();
  });
});
