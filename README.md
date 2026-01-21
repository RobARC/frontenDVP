# PersonasDVP - Frontend

Aplicación web de gestión de personas desarrollada con Angular 20 y diseño Tokyo Dark theme.

## 🚀 Tecnologías

- **Angular 20** - Framework standalone components
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **HttpClient** - Consumo de API REST
- **CSS Custom** - Tokyo Dark cyberpunk theme

## 🎨 Características de Diseño

### Tokyo Dark Theme
- Paleta de colores oscura (#0f1419, #1a1b26, #24283b)
- Acentos neón: Cyan (#7dcfff), Púrpura (#bb9af7), Rosa (#f7768e)
- Efectos de glow y text-shadow
- Gradientes cyan → púrpura en botones principales
- Responsive design (móvil, tablet, desktop)

## 📋 Funcionalidades

### Autenticación
- ✅ Registro de usuarios (crea Persona + Usuario en un solo formulario)
- ✅ Login con validación
- ✅ Persistencia de sesión en localStorage
- ✅ Logout

### Gestión de Personas (CRUD)
- ✅ Listar todas las personas
- ✅ Crear nueva persona
- ✅ Editar persona existente
- ✅ Eliminar persona
- ✅ Validaciones de formularios

## 🏗️ Estructura del Proyecto

```
personasDVP/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── login/           # Componente de login
│   │   │   │   └── register/        # Componente de registro
│   │   │   ├── home/                # Página de inicio
│   │   │   ├── footer/              # Footer con firma
│   │   │   └── personas/
│   │   │       ├── persona-list/    # Lista de personas
│   │   │       └── persona-form/    # Formulario crear/editar
│   │   ├── services/
│   │   │   ├── auth.service.ts      # Servicio de autenticación
│   │   │   └── persona.service.ts   # Servicio de personas
│   │   ├── models/
│   │   │   ├── user.model.ts        # Interfaces de usuario
│   │   │   └── persona.model.ts     # Interfaces de persona
│   │   ├── app.routes.ts            # Configuración de rutas
│   │   └── app.config.ts            # Configuración global
│   ├── environments/
│   │   └── environment.ts           # Variables de entorno
│   └── styles.css                   # Estilos globales
└── angular.json
```

## 🔌 API Backend

Se conecta al backend desplegado en Render:
- **URL:** `https://backenddvp.onrender.com/api`
- **Endpoints:**
  - `POST /auth/login` - Iniciar sesión
  - `POST /auth/register` - Registrar usuario
  - `GET /personas` - Listar personas
  - `GET /personas/:id` - Obtener persona
  - `POST /personas` - Crear persona
  - `PUT /personas/:id` - Actualizar persona
  - `DELETE /personas/:id` - Eliminar persona

## 🛠️ Instalación

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Angular CLI 20

### Pasos

1. **Clonar el repositorio**
```bash
git clone <url-repositorio>
cd personasDVP
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Editar `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://backenddvp.onrender.com/api'
};
```

4. **Ejecutar en desarrollo**
```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## 📦 Build para Producción

```bash
ng build --configuration production
```

Los archivos compilados estarán en `dist/personas-dvp/`

## 🌐 Despliegue

### Vercel (Recomendado)

1. **Instalar Vercel CLI**
```bash
npm install -g vercel
```

2. **Desplegar**
```bash
vercel --prod
```

### Configuración de Vercel
Crear archivo `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 🎯 Rutas de la Aplicación

- `/` - Página de inicio
- `/login` - Iniciar sesión
- `/register` - Registrarse
- `/personas` - Lista de personas (requiere autenticación)
- `/personas/new` - Crear persona
- `/personas/edit/:id` - Editar persona

## 🔐 Autenticación

El sistema usa localStorage para mantener la sesión:
```typescript
// Al hacer login/register
localStorage.setItem('currentUser', JSON.stringify(user));

// Al hacer logout
localStorage.removeItem('currentUser');
```

## 🎨 Personalización del Tema

Los colores principales están definidos en los archivos CSS de cada componente:

```css
/* Backgrounds */
--bg-primary: #0f1419;
--bg-secondary: #1a1b26;
--bg-card: #24283b;

/* Acentos */
--accent-cyan: #7dcfff;
--accent-purple: #bb9af7;
--accent-blue: #7aa2f7;
--accent-pink: #f7768e;

/* Text */
--text-primary: #c0caf5;
--text-secondary: #9aa5ce;
```

## 🐛 Debug

Para ver logs en consola del navegador (F12):
- Errores de API
- Estado de autenticación
- Operaciones CRUD

## 👤 Autor

**RobARC**  
Made with ❤️

## 📄 Licencia

Opensource.
