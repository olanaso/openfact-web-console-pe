/**
 * Created by lxpary on 19/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateRetentionFormConfirmModalComponent } from './create-retention-form-confirm-modal.component';

describe('CreateRetentionFormConfirmModalComponent', () => {
  let component: CreateRetentionFormConfirmModalComponent;
  let fixture: ComponentFixture<CreateRetentionFormConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRetentionFormConfirmModalComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRetentionFormConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
