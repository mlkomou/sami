import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetVaccinationComponent } from './carnet-vaccination.component';

describe('CarnetVaccinationComponent', () => {
  let component: CarnetVaccinationComponent;
  let fixture: ComponentFixture<CarnetVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnetVaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
