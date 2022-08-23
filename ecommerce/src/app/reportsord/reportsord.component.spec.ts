import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsordComponent } from './reportsord.component';

describe('ReportsordComponent', () => {
  let component: ReportsordComponent;
  let fixture: ComponentFixture<ReportsordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
