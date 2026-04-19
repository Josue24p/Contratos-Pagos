import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login';
import { RegistroComponent } from './components/auth/registro/registro';
import { DashboardComponent } from './components/reportes/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Luego agregaremos las demás rutas aquí
];