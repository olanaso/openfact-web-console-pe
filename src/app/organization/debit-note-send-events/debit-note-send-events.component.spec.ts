/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DebitNoteSendEventsComponent } from './debit-note-send-events.component';

describe('DebitNoteSendEventsComponent', () => {
  let component: DebitNoteSendEventsComponent;
  let fixture: ComponentFixture<DebitNoteSendEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitNoteSendEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitNoteSendEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
