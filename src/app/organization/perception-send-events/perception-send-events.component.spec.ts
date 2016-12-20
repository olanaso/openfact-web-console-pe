/**
 * Created by lxpary on 14/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerceptionSendEventsComponent } from './perception-send-events.component';

describe('PerceptionSendEventsComponent', () => {
  let component: PerceptionSendEventsComponent;
  let fixture: ComponentFixture<PerceptionSendEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerceptionSendEventsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerceptionSendEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
