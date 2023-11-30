import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionDashbordComponent } from './promotion-dashbord.component';

describe('PromotionDashbordComponent', () => {
  let component: PromotionDashbordComponent;
  let fixture: ComponentFixture<PromotionDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
