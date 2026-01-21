export interface Persona {
  id?: number;
  nombres: string;
  apellidos: string;
  numeroIdentificacion: string;
  tipoIdentificacion: string;
  email: string;
  fechaCreacion?: string;
  nombreCompleto?: string;
  identificacionCompleta?: string;
}

export interface CreatePersonaDTO {
  nombres: string;
  apellidos: string;
  numeroIdentificacion: string;
  tipoIdentificacion: string;
  email: string;
}