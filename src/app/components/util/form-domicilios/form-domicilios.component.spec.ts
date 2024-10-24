import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDomiciliosComponent } from './form-domicilios.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FormDomiciliosComponent', () => {
  let component: FormDomiciliosComponent;
  let fixture: ComponentFixture<FormDomiciliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDomiciliosComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDomiciliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
