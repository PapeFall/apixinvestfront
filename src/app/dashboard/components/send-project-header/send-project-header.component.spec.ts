import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendProjectHeaderComponent } from './send-project-header.component';


describe('SendProjectHeaderComponent', () => {
  let component: SendProjectHeaderComponent;
  let fixture: ComponentFixture<SendProjectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendProjectHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
