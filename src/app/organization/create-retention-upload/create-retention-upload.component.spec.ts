/**
 * Created by lxpary on 15/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateRetentionUploadComponent } from './create-retention-upload.component';

describe('CreateRetentionUploadComponent', () => {
  let component: CreateRetentionUploadComponent;
  let fixture: ComponentFixture<CreateRetentionUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRetentionUploadComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRetentionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
