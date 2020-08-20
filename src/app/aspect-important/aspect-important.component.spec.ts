import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectImportantComponent } from './aspect-important.component';

describe('AspectImportantComponent', () => {
  let component: AspectImportantComponent;
  let fixture: ComponentFixture<AspectImportantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectImportantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
