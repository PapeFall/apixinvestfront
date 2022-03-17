import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcInfosbulleComponent } from './bmc-infosbulle.component';

describe('BmcInfosbulleComponent', () => {
  let component: BmcInfosbulleComponent;
  let fixture: ComponentFixture<BmcInfosbulleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcInfosbulleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcInfosbulleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
