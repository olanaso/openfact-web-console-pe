/**
 * Created by lxpary on 14/12/16.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreatePerceptionFormComponent } from './create-perception-form.component';

describe('CreatePerceptionFormComponent', () => {
  let component: CreatePerceptionFormComponent;
  let fixture: ComponentFixture<CreatePerceptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePerceptionFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePerceptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
