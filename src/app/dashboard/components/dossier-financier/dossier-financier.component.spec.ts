import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierFinancierComponent } from './dossier-financier.component';

describe('DossierFinancierComponent', () => {
  let component: DossierFinancierComponent;
  let fixture: ComponentFixture<DossierFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierFinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
