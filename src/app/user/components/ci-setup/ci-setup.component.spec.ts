import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiSetupComponent } from './ci-setup.component';

describe('CiSetupComponent', () => {
  let component: CiSetupComponent;
  let fixture: ComponentFixture<CiSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
