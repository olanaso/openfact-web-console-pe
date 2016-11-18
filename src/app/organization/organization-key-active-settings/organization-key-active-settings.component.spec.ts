/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrganizationKeyActiveSettingsComponent } from './organization-key-active-settings.component';

describe('OrganizationKeyActiveSettingsComponent', () => {
  let component: OrganizationKeyActiveSettingsComponent;
  let fixture: ComponentFixture<OrganizationKeyActiveSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationKeyActiveSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationKeyActiveSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
