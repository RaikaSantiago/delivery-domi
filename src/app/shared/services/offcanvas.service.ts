import { Injectable } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {
  private offcanvasRef: NgbOffcanvasRef | null = null;

  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: unknown) {
    this.offcanvasRef = this.offcanvasService.open(content, {
      position: 'end',
    });
  }

  dismiss() {
    this.offcanvasRef?.dismiss(); // Cerrar el offcanvas si está abierto
    this.offcanvasRef = null;
  }

  close() {
    this.offcanvasRef?.close(); // Cerrar el offcanvas con estado de éxito
    this.offcanvasRef = null;
  }
}
