import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEditPromoteurComponent } from './projet-edit-promoteur.component';

describe('ProjetEditPromoteurComponent', () => {
  let component: ProjetEditPromoteurComponent;
  let fixture: ComponentFixture<ProjetEditPromoteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetEditPromoteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEditPromoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
