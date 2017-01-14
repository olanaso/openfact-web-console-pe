/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DebitNoteAttatchedDocumentsComponent } from './debit-note-attatched-documents.component';

describe('DebitNoteAttatchedDocumentsComponent', () => {
  let component: DebitNoteAttatchedDocumentsComponent;
  let fixture: ComponentFixture<DebitNoteAttatchedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitNoteAttatchedDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitNoteAttatchedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
