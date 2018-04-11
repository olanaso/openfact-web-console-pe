import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTotalAdditionalInformationComponent } from './document-total-additional-information.component';

describe('DocumentTotalAdditionalInformationComponent', () => {
  let component: DocumentTotalAdditionalInformationComponent;
  let fixture: ComponentFixture<DocumentTotalAdditionalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTotalAdditionalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTotalAdditionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
