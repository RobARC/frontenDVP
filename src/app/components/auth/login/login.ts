import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginDTO } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  credentials: LoginDTO = {
    Usuario: '',
    Pass: ''
  };
  error: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.error = '';
    this.loading = true;

    this.authService.login(this.credentials).subscribe({
      next: (user) => {
        console.log('Login exitoso:', user);
        this.router.navigate(['/personas']);
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.error = 'Usuario o contraseña incorrectos';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}