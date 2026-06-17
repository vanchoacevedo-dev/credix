import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteraIndividual } from './cartera-individual';

describe('CarteraIndividual', () => {
  let component: CarteraIndividual;
  let fixture: ComponentFixture<CarteraIndividual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteraIndividual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteraIndividual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
