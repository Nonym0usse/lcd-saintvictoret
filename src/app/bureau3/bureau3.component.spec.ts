import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bureau3Component } from './bureau3.component';

describe('Bureau3Component', () => {
  let component: Bureau3Component;
  let fixture: ComponentFixture<Bureau3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bureau3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bureau3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
