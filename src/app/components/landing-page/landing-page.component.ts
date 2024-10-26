import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { OffcanvasService } from '../../shared/services/offcanvas.service';
import { WhatsappUtilComponent } from '../util/whatsapp-util/whatsapp-util.component';
import { FormDomiciliosComponent } from '../util/form-domicilios/form-domicilios.component';
import { Constants } from '../../shared/constants/url-constants';
import { AnunciosUtilComponent } from '../util/anuncios-util/anuncios-util.component';
import { UtilService } from '../../shared/services/util/util.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    LoginComponent,
    WhatsappUtilComponent,
    FormDomiciliosComponent,
    AnunciosUtilComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  public img_background: string = Constants.IMG_BACKGROUND_LANDING_PAGE;
  public img_icon_logo: string = Constants.IMG_ICON_LOGO;
  constructor(
    private router: Router,
    private offcanvasServiceAux: OffcanvasService,
    private utilService: UtilService,
  ) {}

  ngOnInit(): void {
    this.img_background = this.utilService.updateBackgroundImage();
  }

  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  onResize(event: any) {
    this.img_background = this.utilService.updateBackgroundImage();
  }

  public goToLogin() {
    this.router.navigate(['/login']);
  }

  public openLogin(loginOffcanvas: unknown) {
    this.offcanvasServiceAux.open(loginOffcanvas);
  }
}
