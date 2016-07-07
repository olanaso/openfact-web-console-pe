/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SidebarAreaComponent } from './sidebar-area.component';

describe('Component: SidebarArea', () => {
  it('should create an instance', () => {
    let component = new SidebarAreaComponent();
    expect(component).toBeTruthy();
  });
});
