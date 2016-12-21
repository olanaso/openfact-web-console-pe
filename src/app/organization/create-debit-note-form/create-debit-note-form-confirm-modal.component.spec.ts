/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateDebitNoteFormConfirmModalComponent } from './create-debit-note-form-confirm-modal.component';

describe('CreateDebitNoteFormConfirmModalComponent', () => {
  let component: CreateDebitNoteFormConfirmModalComponent;
  let fixture: ComponentFixture<CreateDebitNoteFormConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDebitNoteFormConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDebitNoteFormConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
