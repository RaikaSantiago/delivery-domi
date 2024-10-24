import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosUtilComponent } from './anuncios-util.component';

describe('AnunciosUtilComponent', () => {
  let component: AnunciosUtilComponent;
  let fixture: ComponentFixture<AnunciosUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnunciosUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnunciosUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
