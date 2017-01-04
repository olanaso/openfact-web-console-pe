/**
 * Created by lxpary on 03/01/17.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateVoidedUploadComponent } from './create-voided-upload.component';

describe('CreateVoidedUploadComponent', () => {
  let component: CreateVoidedUploadComponent;
  let fixture: ComponentFixture<CreateVoidedUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVoidedUploadComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVoidedUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
