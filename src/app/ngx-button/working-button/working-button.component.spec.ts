import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingButtonComponent } from './working-button.component';

describe('WorkingButtonComponent', () => {
  let component: WorkingButtonComponent;
  let fixture: ComponentFixture<WorkingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
