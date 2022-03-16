import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostitComponent } from './edit-postit.component';

describe('EditPostitComponent', () => {
  let component: EditPostitComponent;
  let fixture: ComponentFixture<EditPostitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
