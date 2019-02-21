import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCmpComponent } from './button-cmp.component';

describe('ButtonCmpComponent', () => {
  let component: ButtonCmpComponent;
  let fixture: ComponentFixture<ButtonCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
