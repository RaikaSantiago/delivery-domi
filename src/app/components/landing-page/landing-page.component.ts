import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { OffcanvasService } from '../../shared/services/offcanvas.service';
import { WhatsappUtilComponent } from '../util/whatsapp-util/whatsapp-util.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { UrlConstant } from '../../shared/constants/url-constants';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    LoginComponent,
    WhatsappUtilComponent,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  public valor: string = '4.000';
  public isPrice: boolean = false;
  public formDomi!: FormGroup;
  options: string[] = [
    'Barrio 1',
    'Barrio 2',
    'Barrio 3',
    'Barrio 4',
    'Barrio 5',
    'Barrio 6',
    'Barrio 7',
    'Barrio 8',
    'Barrio 9',
    'Barrio 10',
    'Barrio 11',
    'Barrio 12',
    'Barrio 13',
    'Barrio 14',
    'Barrio 15',
  ];
  filteredOptions1!: Observable<string[]>;
  filteredOptions2!: Observable<string[]>;

  constructor(
    private router: Router,
    private offcanvasServiceAux: OffcanvasService,
    private fb: FormBuilder,
  ) {
    this.formDomi = this.fb.group({
      barrioOrigen: new FormControl('', [
        Validators.required,
        this.optionValidator.bind(this),
      ]),
      barrioDestino: new FormControl('', [
        Validators.required,
        this.optionValidator.bind(this),
      ]),
    });
  }
  ngOnInit(): void {
    this.filteredOptions1 = this.formDomi
      .get('barrioOrigen')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );

    this.filteredOptions2 = this.formDomi
      .get('barrioDestino')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue),
    );
  }

  public goToLogin() {
    this.router.navigate(['/login']);
  }

  public openLogin(loginOffcanvas: unknown) {
    this.offcanvasServiceAux.open(loginOffcanvas);
  }

  private calculatePrice() {
    this.isPrice = true;
    Swal.fire({
      html: '<div style="text-align: center;"><img src="assets/images/domi-icon.png" alt="GIF" style="width: 50px; height: auto;"></div>',
      title: 'Costo del domicilio: $ ' + this.valor,
      width: 600,
      timer: 3000,
      showConfirmButton: false,
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0, 0, 0, 0.7)
      `,
    });
  }

  public placeOrder() {
    window.open(UrlConstant.URL_WHATSAPP, '_blank');
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.formDomi.valid) {
      this.calculatePrice();
      console.log(
        'Formulario válido, valores seleccionados:',
        this.formDomi.value,
      );
      // Lógica adicional en caso de que el formulario sea válido
    } else {
      console.log('El formulario no es válido');
    }
  }

  // Validador personalizado para verificar si el valor coincide con una de las opciones
  private optionValidator(control: FormControl): ValidationErrors | null {
    const isValid = this.options.includes(control.value);
    return isValid ? null : { invalidOption: true };
  }

  // Método getter para acceder a los controles de formulario
  get validOrigenField() {
    return this.formDomi.get('barrioOrigen')?.hasError('invalidOption');
  }

  get validDestinoField() {
    return this.formDomi.get('barrioDestino')?.hasError('invalidOption');
  }
}
