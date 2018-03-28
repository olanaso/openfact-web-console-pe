import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRetentionComponent } from './new-retention.component';

describe('NewRetentionComponent', () => {
  let component: NewRetentionComponent;
  let fixture: ComponentFixture<NewRetentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRetentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
