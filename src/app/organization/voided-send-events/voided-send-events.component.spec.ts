/**
 * Created by lxpary on 03/01/17.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoidedSendEventsComponent } from './voided-send-events.component';

describe('VoidedSendEventsComponent', () => {
  let component: VoidedSendEventsComponent;
  let fixture: ComponentFixture<VoidedSendEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoidedSendEventsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidedSendEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
