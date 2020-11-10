import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcpnComponent } from './detailcpn.component';

describe('DetailcpnComponent', () => {
  let component: DetailcpnComponent;
  let fixture: ComponentFixture<DetailcpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
