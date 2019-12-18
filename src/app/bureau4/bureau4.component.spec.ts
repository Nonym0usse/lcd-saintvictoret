import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bureau4Component } from './bureau4.component';

describe('Bureau4Component', () => {
  let component: Bureau4Component;
  let fixture: ComponentFixture<Bureau4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bureau4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bureau4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
