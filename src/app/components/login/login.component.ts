/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { OffcanvasService } from '../../shared/services/offcanvas.service';
import { Constants } from '../../shared/constants/url-constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public img_icon_logo: string = Constants.IMG_ICON_LOGO;
  public loginForm: FormGroup;
  private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  public submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private offcanvasService: OffcanvasService,
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.emailPattern),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('ENTRO', this.loginForm.valid);
    this.submitted = true;
    if (this.loginForm.valid) {
      // Lógica para enviar la información del formulario
      console.log('Formulario válido', this.loginForm.value);
      this.goToDashboard();
    } else {
      console.log('Formulario inválido');
    }
  }

  public get emailErrors() {
    const errors = this.loginForm.get('email')?.errors;

    if (!errors || !this.submitted) return null;

    if (errors['required']) {
      return 'El email es requerido.';
    } else if (errors['email']) {
      return 'Por favor, introduce un correo electrónico con formato válido.';
    } else if (errors['pattern']) {
      return 'El email no cumple con el formato esperado.';
    }
    return null;
  }

  goToDashboard() {
    this.offcanvasService.dismiss();
    // this.router.navigate(['/dashboard']);
  }
}
