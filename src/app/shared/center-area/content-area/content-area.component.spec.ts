/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContentAreaComponent } from './content-area.component';

describe('Component: ContentArea', () => {
  it('should create an instance', () => {
    let component = new ContentAreaComponent();
    expect(component).toBeTruthy();
  });
});
