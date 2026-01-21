import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Persona, CreatePersonaDTO } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = `${environment.apiUrl}/personas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  getById(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  create(persona: CreatePersonaDTO): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  update(id: number, persona: Partial<CreatePersonaDTO>): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, persona);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}