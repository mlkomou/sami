import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConseilComponent } from './liste-conseil.component';

describe('ListeConseilComponent', () => {
  let component: ListeConseilComponent;
  let fixture: ComponentFixture<ListeConseilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeConseilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
