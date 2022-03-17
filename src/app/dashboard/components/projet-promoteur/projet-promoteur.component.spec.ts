import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPromoteurComponent } from './projet-promoteur.component';

describe('ProjetPromoteurComponent', () => {
  let component: ProjetPromoteurComponent;
  let fixture: ComponentFixture<ProjetPromoteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetPromoteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPromoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
