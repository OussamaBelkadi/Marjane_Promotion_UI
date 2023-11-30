import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPromotionComponent } from './new-promotion.component';

describe('NewPromotionComponent', () => {
  let component: NewPromotionComponent;
  let fixture: ComponentFixture<NewPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPromotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
