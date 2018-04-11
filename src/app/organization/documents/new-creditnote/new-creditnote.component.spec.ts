import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreditnoteComponent } from './new-creditnote.component';

describe('NewCreditnoteComponent', () => {
  let component: NewCreditnoteComponent;
  let fixture: ComponentFixture<NewCreditnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCreditnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
