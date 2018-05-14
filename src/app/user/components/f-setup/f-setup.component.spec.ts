import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSetupComponent } from './f-setup.component';

describe('FSetupComponent', () => {
  let component: FSetupComponent;
  let fixture: ComponentFixture<FSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
