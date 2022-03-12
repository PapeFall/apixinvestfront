import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBaseComponent } from './pages-base.component';

describe('PagesBaseComponent', () => {
  let component: PagesBaseComponent;
  let fixture: ComponentFixture<PagesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
