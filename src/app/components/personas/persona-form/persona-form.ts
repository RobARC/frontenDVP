import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../../services/persona.services';
import { CreatePersonaDTO, Persona } from '../../../models/persona.model';

@Component({
  selector: 'app-persona-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-form.html',
  styleUrl: './persona-form.css'
})
export class PersonaFormComponent implements OnInit {
  persona: CreatePersonaDTO = {
    nombres: '',
    apellidos: '',
    numeroIdentificacion: '',
    tipoIdentificacion: 'CC',
    email: ''
  };
  
  tiposIdentificacion = ['CC', 'TI', 'CE', 'PA'];
  isEditMode: boolean = false;
  personaId: number | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.personaId = Number(id);
      this.loadPersona();
    }
  }

  loadPersona(): void {
    if (this.personaId) {
      this.loading = true;
      this.personaService.getById(this.personaId).subscribe({
        next: (persona) => {
          this.persona = {
            nombres: persona.nombres,
            apellidos: persona.apellidos,
            numeroIdentificacion: persona.numeroIdentificacion,
            tipoIdentificacion: persona.tipoIdentificacion,
            email: persona.email
          };
          this.loading = false;
        },
        error: (err) => {
          console.error('Error cargando persona:', err);
          this.error = 'Error al cargar la persona';
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    this.error = '';
    this.loading = true;

    if (this.isEditMode && this.personaId) {
      // Actualizar
      this.personaService.update(this.personaId, this.persona).subscribe({
        next: () => {
          console.log('Persona actualizada');
          this.router.navigate(['/personas']);
        },
        error: (err) => {
          console.error('Error actualizando persona:', err);
          this.error = 'Error al actualizar la persona';
          this.loading = false;
        }
      });
    } else {
      // Crear
      this.personaService.create(this.persona).subscribe({
        next: () => {
          console.log('Persona creada');
          this.router.navigate(['/personas']);
        },
        error: (err) => {
          console.error('Error creando persona:', err);
          this.error = 'Error al crear la persona';
          this.loading = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/personas']);
  }
}