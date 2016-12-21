/**
 * Created by lxpary on 14/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerceptionOverviewEventsComponent } from './perception-overview-events.component';

describe('PerceptionOverviewEventsComponent', () => {
  let component: PerceptionOverviewEventsComponent;
  let fixture: ComponentFixture<PerceptionOverviewEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerceptionOverviewEventsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerceptionOverviewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
