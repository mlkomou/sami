import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienteComponent } from './patiente.component';

describe('PatienteComponent', () => {
  let component: PatienteComponent;
  let fixture: ComponentFixture<PatienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
