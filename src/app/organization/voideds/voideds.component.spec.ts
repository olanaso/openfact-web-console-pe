/**
 * Created by lxpary on 03/01/17.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoidedsComponent } from './voideds.component';

describe('VoidedsComponent', () => {
  let component: VoidedsComponent;
  let fixture: ComponentFixture<VoidedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoidedsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
