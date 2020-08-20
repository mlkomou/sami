import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetPrenatalComponent } from './carnet-prenatal.component';

describe('CarnetPrenatalComponent', () => {
  let component: CarnetPrenatalComponent;
  let fixture: ComponentFixture<CarnetPrenatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnetPrenatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetPrenatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
