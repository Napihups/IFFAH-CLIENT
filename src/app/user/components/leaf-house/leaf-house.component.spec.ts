import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafHouseComponent } from './leaf-house.component';

describe('LeafHouseComponent', () => {
  let component: LeafHouseComponent;
  let fixture: ComponentFixture<LeafHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
