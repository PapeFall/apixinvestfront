import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEditPersonnelComponent } from './projet-edit-personnel.component';

describe('ProjetEditPersonnelComponent', () => {
  let component: ProjetEditPersonnelComponent;
  let fixture: ComponentFixture<ProjetEditPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetEditPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEditPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
