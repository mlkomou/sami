import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCPNComponent } from './liste-cpn.component';

describe('ListeCPNComponent', () => {
  let component: ListeCPNComponent;
  let fixture: ComponentFixture<ListeCPNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCPNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
