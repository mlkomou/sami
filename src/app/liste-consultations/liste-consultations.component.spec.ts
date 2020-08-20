import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConsultationsComponent } from './liste-consultations.component';

describe('ListeConsultationsComponent', () => {
  let component: ListeConsultationsComponent;
  let fixture: ComponentFixture<ListeConsultationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeConsultationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
