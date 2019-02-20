import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarpperComponent } from './warpper.component';

describe('WarpperComponent', () => {
  let component: WarpperComponent;
  let fixture: ComponentFixture<WarpperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarpperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
