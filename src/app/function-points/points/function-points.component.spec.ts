import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionPointsComponent } from './function-points.component';

describe('FunctionPointsComponent', () => {
  let component: FunctionPointsComponent;
  let fixture: ComponentFixture<FunctionPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
