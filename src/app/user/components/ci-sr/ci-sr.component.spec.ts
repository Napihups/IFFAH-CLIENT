import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiSrComponent } from './ci-sr.component';

describe('CiSrComponent', () => {
  let component: CiSrComponent;
  let fixture: ComponentFixture<CiSrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiSrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiSrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
