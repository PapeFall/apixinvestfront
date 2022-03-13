import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessModelInfosComponent } from './business-model-infos.component';

describe('BusinessModelInfosComponent', () => {
  let component: BusinessModelInfosComponent;
  let fixture: ComponentFixture<BusinessModelInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessModelInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessModelInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
