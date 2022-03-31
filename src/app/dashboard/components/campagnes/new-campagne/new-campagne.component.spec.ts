import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampagneComponent } from './new-campagne.component';

describe('NewCampagneComponent', () => {
  let component: NewCampagneComponent;
  let fixture: ComponentFixture<NewCampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCampagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
