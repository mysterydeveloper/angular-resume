import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects_UnderTakenComponent } from './Projects_UnderTaken.component';

describe('Projects_UnderTakenComponent', () => {
  let component: Projects_UnderTakenComponent;
  let fixture: ComponentFixture<Projects_UnderTakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projects_UnderTakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projects_UnderTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
