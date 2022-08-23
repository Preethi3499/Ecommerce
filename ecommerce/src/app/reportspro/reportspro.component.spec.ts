import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsproComponent } from './reportspro.component';

describe('ReportsproComponent', () => {
  let component: ReportsproComponent;
  let fixture: ComponentFixture<ReportsproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
