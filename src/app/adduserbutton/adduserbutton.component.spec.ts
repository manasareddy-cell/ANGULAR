import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserbuttonComponent } from './adduserbutton.component';

describe('AdduserbuttonComponent', () => {
  let component: AdduserbuttonComponent;
  let fixture: ComponentFixture<AdduserbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
