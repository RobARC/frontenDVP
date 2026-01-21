import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PersonaService } from '../../../services/persona.services';
import { AuthService } from '../../../services/auth.service';
import { Persona } from '../../../models/persona.model';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-list.html',
  styleUrl: './persona-list.css'
})
export class PersonaListComponent implements OnInit {
  personas: Persona[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(
    private personaService: PersonaService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas(): void {
    this.loading = true;
    this.error = '';

    this.personaService.getAll().subscribe({
      next: (personas) => {
        this.personas = personas;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando personas:', err);
        this.error = 'Error al cargar las personas';
        this.loading = false;
      }
    });
  }

  createPersona(): void {
    this.router.navigate(['/personas/new']);
  }

  editPersona(id: number): void {
    this.router.navigate(['/personas/edit', id]);
  }

  deletePersona(id: number, nombre: string): void {
    if (confirm(`¿Está seguro de eliminar a ${nombre}?`)) {
      this.personaService.delete(id).subscribe({
        next: () => {
          console.log('Persona eliminada');
          this.loadPersonas(); // Recargar lista
        },
        error: (err) => {
          console.error('Error eliminando persona:', err);
          this.error = 'Error al eliminar la persona';
        }
      });
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  get currentUser() {
    return this.authService.getCurrentUser();
  }
}