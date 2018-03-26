import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDocumentsComponent } from './draft-documents.component';

describe('DraftDocumentsComponent', () => {
  let component: DraftDocumentsComponent;
  let fixture: ComponentFixture<DraftDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
