import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCmpComponent } from './menu-cmp.component';

describe('MenuCmpComponent', () => {
  let component: MenuCmpComponent;
  let fixture: ComponentFixture<MenuCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
