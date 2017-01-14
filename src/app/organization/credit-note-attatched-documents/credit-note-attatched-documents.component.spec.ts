/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreditNoteAttatchedDocumentsComponent } from './credit-note-attatched-documents.component';

describe('CreditNoteAttatchedDocumentsComponent', () => {
  let component: CreditNoteAttatchedDocumentsComponent;
  let fixture: ComponentFixture<CreditNoteAttatchedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditNoteAttatchedDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditNoteAttatchedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
