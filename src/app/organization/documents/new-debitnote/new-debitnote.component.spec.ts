import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDebitnoteComponent } from './new-debitnote.component';

describe('NewDebitnoteComponent', () => {
  let component: NewDebitnoteComponent;
  let fixture: ComponentFixture<NewDebitnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDebitnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDebitnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
