import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtNavbarComponent } from './nt-navbar.component';

describe('NtNavbarComponent', () => {
  let component: NtNavbarComponent;
  let fixture: ComponentFixture<NtNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
