/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrganizationKeyProvidersSettingsComponent } from './organization-key-providers-settings.component';

describe('OrganizationKeyProvidersSettingsComponent', () => {
  let component: OrganizationKeyProvidersSettingsComponent;
  let fixture: ComponentFixture<OrganizationKeyProvidersSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationKeyProvidersSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationKeyProvidersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
