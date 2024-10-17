import { Component } from '@angular/core';
import { UrlConstant } from '../../../shared/constants/url-constants';

@Component({
  selector: 'app-chat-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-util.component.html',
  styleUrl: './whatsapp-util.component.scss',
})
export class WhatsappUtilComponent {
  public urlWhatsapp = UrlConstant.URL_WHATSAPP;
}
