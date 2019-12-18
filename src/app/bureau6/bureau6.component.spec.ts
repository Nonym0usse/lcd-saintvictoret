import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bureau6Component } from './bureau6.component';

describe('Bureau6Component', () => {
  let component: Bureau6Component;
  let fixture: ComponentFixture<Bureau6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bureau6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bureau6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
