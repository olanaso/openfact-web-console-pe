import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPerceptionComponent } from './new-perception.component';

describe('NewPerceptionComponent', () => {
  let component: NewPerceptionComponent;
  let fixture: ComponentFixture<NewPerceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPerceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
