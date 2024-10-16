import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(
    private router: Router,
    private offcanvasService: NgbOffcanvas,
  ) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openLogin(loginOffcanvas: any) {
    this.offcanvasService.open(loginOffcanvas, { position: 'end' });
  }
}
