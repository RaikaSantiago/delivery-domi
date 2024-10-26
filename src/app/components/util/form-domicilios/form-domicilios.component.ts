import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Constants } from '../../../shared/constants/url-constants';

@Component({
  selector: 'app-form-domicilios',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './form-domicilios.component.html',
  styleUrl: './form-domicilios.component.scss',
})
export class FormDomiciliosComponent implements OnInit {
  public img_icon_logo: string = Constants.IMG_ICON_LOGO;
  public valor: string = '4.000';
  public isPrice: boolean = false;
  public formDomi!: FormGroup;
  public isValidRequest: boolean = true;
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
  filteredBarriosOrigen!: Observable<string[]>;
  filteredBarriosDestino!: Observable<string[]>;

  constructor(private fb: FormBuilder) {
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
    this.filteredBarriosOrigen = this.formDomi
      .get('barrioOrigen')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );

    this.filteredBarriosDestino = this.formDomi
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

  private calculatePrice() {
    this.isPrice = true;
    this.isValidRequest = false;
    Swal.fire({
      html: '<div style="text-align: center;"><img src="assets/images/domi-icon.png" alt="GIF" style="width: 50px; height: auto;"></div>',
      title: 'Costo del domicilio: $ ' + this.valor,
      width: 600,
      timer: 3000,
      showConfirmButton: false,
      // background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0, 0, 0, 0.7)
      `,
    });
  }

  public placeOrder() {
    window.open(Constants.URL_WHATSAPP, '_blank');
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
