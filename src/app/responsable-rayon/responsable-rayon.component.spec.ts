import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableRayonComponent } from './responsable-rayon.component';

describe('ResponsableRayonComponent', () => {
  let component: ResponsableRayonComponent;
  let fixture: ComponentFixture<ResponsableRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableRayonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
