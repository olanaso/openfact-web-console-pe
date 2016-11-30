/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrganizationGenericKeystoreComponent } from './organization-generic-keystore.component';

describe('OrganizationGenericKeystoreComponent', () => {
  let component: OrganizationGenericKeystoreComponent;
  let fixture: ComponentFixture<OrganizationGenericKeystoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationGenericKeystoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationGenericKeystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
