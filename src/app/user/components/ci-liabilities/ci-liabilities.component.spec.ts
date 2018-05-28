import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiLiabilitiesComponent } from './ci-liabilities.component';

describe('CiLiabilitiesComponent', () => {
  let component: CiLiabilitiesComponent;
  let fixture: ComponentFixture<CiLiabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiLiabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiLiabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
