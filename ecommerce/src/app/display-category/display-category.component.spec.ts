import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCategoryComponent } from './display-category.component';

describe('DisplayCategoryComponent', () => {
  let component: DisplayCategoryComponent;
  let fixture: ComponentFixture<DisplayCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
