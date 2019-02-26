import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCmpComponent } from './layout-cmp.component';

describe('LayoutCmpComponent', () => {
  let component: LayoutCmpComponent;
  let fixture: ComponentFixture<LayoutCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
