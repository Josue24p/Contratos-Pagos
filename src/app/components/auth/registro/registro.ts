import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
export class RegistroComponent {
  // Coincide con tu UsuarioCreate schema
  userData = {
    username: '',
    password: '',
    rol: 'ADMIN'
  };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegistro() {
    this.authService.registro(this.userData).subscribe({
      next: (res) => {
        console.log('Registro exitoso', res);
        // Opcional: Loguear automáticamente o redirigir al login
        alert('Usuario creado con éxito');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = 'Error al registrar usuario. Posiblemente el nombre ya existe.';
        console.error(err);
      }
    });
  }
}