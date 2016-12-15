/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateInvoiceFormConfirmModalComponent } from './create-invoice-form-confirm-modal.component';

describe('CreateInvoiceFormConfirmModalComponent', () => {
  let component: CreateInvoiceFormConfirmModalComponent;
  let fixture: ComponentFixture<CreateInvoiceFormConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInvoiceFormConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvoiceFormConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
