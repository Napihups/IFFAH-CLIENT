import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiLoansComponent } from './ci-loans.component';

describe('CiLoansComponent', () => {
  let component: CiLoansComponent;
  let fixture: ComponentFixture<CiLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
