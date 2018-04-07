import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLineComponent } from './document-line.component';

describe('DocumentLineComponent', () => {
  let component: DocumentLineComponent;
  let fixture: ComponentFixture<DocumentLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
