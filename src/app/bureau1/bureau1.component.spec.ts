import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bureau1Component } from './bureau1.component';

describe('Bureau1Component', () => {
  let component: Bureau1Component;
  let fixture: ComponentFixture<Bureau1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bureau1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bureau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
