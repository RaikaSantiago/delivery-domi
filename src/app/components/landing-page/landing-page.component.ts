import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { OffcanvasService } from '../../shared/services/offcanvas.service';
import { WhatsappUtilComponent } from '../util/whatsapp-util/whatsapp-util.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LoginComponent, WhatsappUtilComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(
    private router: Router,
    private offcanvasServiceAux: OffcanvasService,
  ) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  openLogin(loginOffcanvas: unknown) {
    this.offcanvasServiceAux.open(loginOffcanvas);
  }
}
