import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bureau2Component } from './bureau2.component';

describe('Bureau2Component', () => {
  let component: Bureau2Component;
  let fixture: ComponentFixture<Bureau2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bureau2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bureau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
