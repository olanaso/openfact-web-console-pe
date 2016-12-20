/**
 * Created by lxpary on 14/12/16.
 */
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerceptionOverviewComponent } from './perception-overview.component';

describe('PerceptionOverviewComponent', () => {
  let component: PerceptionOverviewComponent;
  let fixture: ComponentFixture<PerceptionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerceptionOverviewComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerceptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
