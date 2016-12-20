/**
 * Created by lxpary on 14/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreatePerceptionUploadComponent } from './create-perception-upload.component';

describe('CreatePerceptionUploadComponent', () => {
  let component: CreatePerceptionUploadComponent;
  let fixture: ComponentFixture<CreatePerceptionUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePerceptionUploadComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePerceptionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
