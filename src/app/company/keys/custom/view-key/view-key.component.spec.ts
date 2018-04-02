import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKeyComponent } from './view-key.component';

describe('ViewKeyComponent', () => {
  let component: ViewKeyComponent;
  let fixture: ComponentFixture<ViewKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
