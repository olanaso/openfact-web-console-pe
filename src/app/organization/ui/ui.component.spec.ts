import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { OrganizationUIComponent } from './ui.component';

describe('UiComponent', () => {
  let component: OrganizationUIComponent;
  let fixture: ComponentFixture<OrganizationUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
