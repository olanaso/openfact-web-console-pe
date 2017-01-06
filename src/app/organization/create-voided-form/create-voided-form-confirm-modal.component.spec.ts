/**
 * Created by lxpary on 03/01/17.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateVoidedFormConfirmModalComponent } from './create-voided-form-confirm-modal.component';

describe('CreateVoidedFormConfirmModalComponent', () => {
  let component: CreateVoidedFormConfirmModalComponent;
  let fixture: ComponentFixture<CreateVoidedFormConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVoidedFormConfirmModalComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVoidedFormConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
