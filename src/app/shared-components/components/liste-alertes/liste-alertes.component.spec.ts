import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAlertesComponent } from './liste-alertes.component';

describe('ListeAlertesComponent', () => {
  let component: ListeAlertesComponent;
  let fixture: ComponentFixture<ListeAlertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAlertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAlertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
