/**
 * Created by lxpary on 15/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateRetentionFormComponent } from './create-retention-form.component';

describe('CreateRetentionFormComponent', () => {
  let component: CreateRetentionFormComponent;
  let fixture: ComponentFixture<CreateRetentionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRetentionFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRetentionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
