import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdemoPage } from './ardemo.page';

describe('ArdemoPage', () => {
  let component: ArdemoPage;
  let fixture: ComponentFixture<ArdemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
