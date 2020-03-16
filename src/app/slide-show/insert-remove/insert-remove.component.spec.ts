import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRemoveComponent } from './insert-remove.component';

describe('InsertRemoveComponent', () => {
  let component: InsertRemoveComponent;
  let fixture: ComponentFixture<InsertRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
