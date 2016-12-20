/**
 * Created by lxpary on 19/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreatePerceptionFormConfirmModalComponent } from './create-perception-form-confirm-modal.component';

describe('CreatePerceptionFormConfirmModalComponent', () => {
  let component: CreatePerceptionFormConfirmModalComponent;
  let fixture: ComponentFixture<CreatePerceptionFormConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePerceptionFormConfirmModalComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePerceptionFormConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
