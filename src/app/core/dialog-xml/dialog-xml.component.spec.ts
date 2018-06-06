import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogXmlComponent } from './dialog-xml.component';

describe('DialogXmlComponent', () => {
  let component: DialogXmlComponent;
  let fixture: ComponentFixture<DialogXmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogXmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
