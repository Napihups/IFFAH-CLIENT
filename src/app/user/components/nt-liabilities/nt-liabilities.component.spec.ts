import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtLiabilitiesComponent } from './nt-liabilities.component';

describe('NtLiabilitiesComponent', () => {
  let component: NtLiabilitiesComponent;
  let fixture: ComponentFixture<NtLiabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtLiabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtLiabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
