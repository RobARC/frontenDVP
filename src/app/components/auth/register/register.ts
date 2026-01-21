import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { PersonaService } from '../../../services/persona.services';
import { RegisterDTO } from '../../../models/user.model';
import { CreatePersonaDTO } from '../../../models/persona.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  // Datos de la persona
  personaData: CreatePersonaDTO = {
    nombres: '',
    apellidos: '',
    numeroIdentificacion: '',
    tipoIdentificacion: 'CC',
    email: ''
  };

  // Datos del usuario
  usuarioData = {
    nombreUsuario: '',
    contrasena: ''
  };

  tiposIdentificacion = ['CC', 'TI', 'CE', 'PA'];
  error: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private personaService: PersonaService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.error = '';
    this.loading = true;

    // Paso 1: Crear la persona
    this.personaService.create(this.personaData).pipe(
      // Paso 2: Con el ID de la persona, crear el usuario
      switchMap(persona => {
        const registerDTO: RegisterDTO = {
          Usuario: this.usuarioData.nombreUsuario,
          Pass: this.usuarioData.contrasena,
          PersonaId: persona.id!
        };
        return this.authService.register(registerDTO);
      })
    ).subscribe({
      next: (user) => {
        console.log('Registro exitoso:', user);
        this.router.navigate(['/personas']);
      },
      error: (err) => {
        console.error('Error en registro:', err);
        this.error = err.error?.message || 'Error al registrar. Verifique los datos.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}