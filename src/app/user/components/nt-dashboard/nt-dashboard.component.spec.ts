import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtDashboardComponent } from './nt-dashboard.component';

describe('NtDashboardComponent', () => {
  let component: NtDashboardComponent;
  let fixture: ComponentFixture<NtDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
