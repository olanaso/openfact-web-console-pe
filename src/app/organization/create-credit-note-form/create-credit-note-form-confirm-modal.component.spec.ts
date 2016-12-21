/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateCreditNoteFormConfirmModalComponent } from './create-credit-note-form-confirm-modal.component';

describe('CreateCreditNoteFormConfirmModalComponent', () => {
  let component: CreateCreditNoteFormConfirmModalComponent;
  let fixture: ComponentFixture<CreateCreditNoteFormConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCreditNoteFormConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCreditNoteFormConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
