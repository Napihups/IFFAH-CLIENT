import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddLbComponent } from './modal-add-lb.component';

describe('ModalAddLbComponent', () => {
  let component: ModalAddLbComponent;
  let fixture: ComponentFixture<ModalAddLbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddLbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
