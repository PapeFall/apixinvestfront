import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlerteComponent } from './detail-alerte.component';

describe('DetailAlerteComponent', () => {
  let component: DetailAlerteComponent;
  let fixture: ComponentFixture<DetailAlerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAlerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
