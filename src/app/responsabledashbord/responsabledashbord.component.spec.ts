import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabledashbordComponent } from './responsabledashbord.component';

describe('ResponsabledashbordComponent', () => {
  let component: ResponsabledashbordComponent;
  let fixture: ComponentFixture<ResponsabledashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsabledashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsabledashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
