import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxSendComponent } from './mailbox-send.component';

describe('MailboxSendComponent', () => {
  let component: MailboxSendComponent;
  let fixture: ComponentFixture<MailboxSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
