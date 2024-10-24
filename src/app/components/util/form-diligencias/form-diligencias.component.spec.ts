import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiligenciasComponent } from './form-diligencias.component';

describe('FormDiligenciasComponent', () => {
  let component: FormDiligenciasComponent;
  let fixture: ComponentFixture<FormDiligenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDiligenciasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDiligenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
