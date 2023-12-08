import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticPromotionComponent } from './statistic-promotion.component';

describe('StatisticPromotionComponent', () => {
  let component: StatisticPromotionComponent;
  let fixture: ComponentFixture<StatisticPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticPromotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
