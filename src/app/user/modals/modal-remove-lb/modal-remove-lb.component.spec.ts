import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveLbComponent } from './modal-remove-lb.component';

describe('ModalRemoveLbComponent', () => {
  let component: ModalRemoveLbComponent;
  let fixture: ComponentFixture<ModalRemoveLbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRemoveLbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
