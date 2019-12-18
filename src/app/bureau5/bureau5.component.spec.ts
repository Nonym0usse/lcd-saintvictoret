import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bureau5Component } from './bureau5.component';

describe('Bureau5Component', () => {
  let component: Bureau5Component;
  let fixture: ComponentFixture<Bureau5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bureau5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bureau5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
