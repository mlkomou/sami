import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeForumComponent } from './liste-forum.component';

describe('ListeForumComponent', () => {
  let component: ListeForumComponent;
  let fixture: ComponentFixture<ListeForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
