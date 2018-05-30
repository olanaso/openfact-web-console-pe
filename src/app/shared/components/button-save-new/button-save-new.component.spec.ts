import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSaveNewComponent } from './button-save-new.component';

describe('ButtonSaveNewComponent', () => {
  let component: ButtonSaveNewComponent;
  let fixture: ComponentFixture<ButtonSaveNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSaveNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSaveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
