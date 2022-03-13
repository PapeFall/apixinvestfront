import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProjectMainComponent } from './send-project-main.component';

describe('SendProjectMainComponent', () => {
  let component: SendProjectMainComponent;
  let fixture: ComponentFixture<SendProjectMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendProjectMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendProjectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
