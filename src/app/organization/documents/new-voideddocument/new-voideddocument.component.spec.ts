import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVoideddocumentComponent } from './new-voideddocument.component';

describe('NewVoideddocumentComponent', () => {
  let component: NewVoideddocumentComponent;
  let fixture: ComponentFixture<NewVoideddocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVoideddocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVoideddocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
