import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-dashboard',
  standalone: true, // Asegúrate de que diga standalone si no usas módulos
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  // Esta es la función que faltaba
  logout() {
    this.authService.logout(); // Borra el token del localStorage
    this.router.navigate(['/login']); // Te manda de vuelta al login
  }
}