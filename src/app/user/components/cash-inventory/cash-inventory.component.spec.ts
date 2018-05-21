import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInventoryComponent } from './cash-inventory.component';

describe('CashInventoryComponent', () => {
  let component: CashInventoryComponent;
  let fixture: ComponentFixture<CashInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
