import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappUtilComponent } from './whatsapp-util.component';

describe('WhatsappUtilComponent', () => {
  let component: WhatsappUtilComponent;
  let fixture: ComponentFixture<WhatsappUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
