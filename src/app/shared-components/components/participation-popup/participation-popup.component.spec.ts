import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationPopupComponent } from './participation-popup.component';

describe('ParticipationPopupComponent', () => {
  let component: ParticipationPopupComponent;
  let fixture: ComponentFixture<ParticipationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
