import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcOnlineMainComponent } from './bmc-online-main.component';

describe('BmcOnlineMainComponent', () => {
  let component: BmcOnlineMainComponent;
  let fixture: ComponentFixture<BmcOnlineMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcOnlineMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcOnlineMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
