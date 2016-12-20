/**
 * Created by lxpary on 15/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditRetentionComponent } from './edit-retention.component';

describe('EditRetentionComponent', () => {
  let component: EditRetentionComponent;
  let fixture: ComponentFixture<EditRetentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRetentionComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
