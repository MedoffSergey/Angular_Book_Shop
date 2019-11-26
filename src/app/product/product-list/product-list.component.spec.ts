import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { product-list } from './mynewcomponent.component';

describe('product-list', () => {
  let component: product-list;
  let fixture: ComponentFixture<product-list>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ product-list ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(product-list);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
