/**
 * Created by lxpary on 15/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetentionOverviewComponent } from './retention-overview.component';

describe('RetentionOverviewComponent', () => {
  let component: RetentionOverviewComponent;
  let fixture: ComponentFixture<RetentionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionOverviewComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
