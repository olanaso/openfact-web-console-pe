import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTableLinesComponent } from './document-table-lines.component';

describe('DocumentTableLinesComponent', () => {
  let component: DocumentTableLinesComponent;
  let fixture: ComponentFixture<DocumentTableLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTableLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTableLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
