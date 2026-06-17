import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteraColectiva } from './cartera-colectiva';

describe('CarteraColectiva', () => {
  let component: CarteraColectiva;
  let fixture: ComponentFixture<CarteraColectiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteraColectiva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteraColectiva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
