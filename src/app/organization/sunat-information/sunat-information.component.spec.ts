import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunatInformationComponent } from './sunat-information.component';

describe('SunatInformationComponent', () => {
  let component: SunatInformationComponent;
  let fixture: ComponentFixture<SunatInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunatInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunatInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
