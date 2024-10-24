import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, NgbModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  logout() {
    // Implementa la lógica de cierre de sesión
    console.log('Cerrar sesión');
  }
}
