import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPersonnelsComponent } from './projet-personnels.component';

describe('ProjetPersonnelsComponent', () => {
  let component: ProjetPersonnelsComponent;
  let fixture: ComponentFixture<ProjetPersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetPersonnelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
