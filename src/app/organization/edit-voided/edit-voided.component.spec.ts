/**
 * Created by lxpary on 03/01/17.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditVoidedComponent } from './edit-voided.component';

describe('EditVoidedComponent', () => {
  let component: EditVoidedComponent;
  let fixture: ComponentFixture<EditVoidedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVoidedComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVoidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
