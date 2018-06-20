import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateLbComponent } from './modal-create-lb.component';

describe('ModalCreateLbComponent', () => {
  let component: ModalCreateLbComponent;
  let fixture: ComponentFixture<ModalCreateLbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateLbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
