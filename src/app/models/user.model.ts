export interface User {
  id?: number;
  usuario: string;
  personaId: number;
  fechaCreacion?: Date;
}

export interface LoginDTO {
  Usuario: string;
  Pass: string;
}

export interface RegisterDTO {
  Usuario: string;
  Pass: string;
  PersonaId: number;
}