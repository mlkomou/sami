import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatienteComponent } from './list-patiente.component';

describe('ListPatienteComponent', () => {
  let component: ListPatienteComponent;
  let fixture: ComponentFixture<ListPatienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
