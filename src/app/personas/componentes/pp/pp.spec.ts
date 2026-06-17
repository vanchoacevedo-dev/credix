import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pp } from './pp';

describe('Pp', () => {
  let component: Pp;
  let fixture: ComponentFixture<Pp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
