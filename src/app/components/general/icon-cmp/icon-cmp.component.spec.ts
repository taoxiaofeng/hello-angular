import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCmpComponent } from './icon-cmp.component';

describe('IconCmpComponent', () => {
  let component: IconCmpComponent;
  let fixture: ComponentFixture<IconCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
