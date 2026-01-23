# PersonasDVP - Frontend

Web application for managing people built with Angular 20 and a Tokyo Dark theme.

## Technologies

- **Angular 20** (standalone components)
- **TypeScript**
- **RxJS**
- **HttpClient**
- **Custom CSS** (Tokyo Dark cyberpunk theme)

## Design Highlights

### Tokyo Dark Theme
- Dark palette (#0f1419, #1a1b26, #24283b)
- Neon accents: Cyan (#7dcfff), Purple (#bb9af7), Pink (#f7768e)
- Glow and text-shadow effects
- Cyan → purple gradients on primary buttons
- Responsive design (mobile, tablet, desktop)

## Features

### Authentication
- User registration (creates Person + User in a single form)
- Login with validation
- Session persisted in localStorage
- Logout

### People Management (CRUD)
- List people
- Create person
- Edit person
- Delete person
- Form validations

## Project Structure

```
personasDVP/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── home/
│   │   │   ├── footer/
│   │   │   └── personas/
│   │   │       ├── persona-list/
│   │   │       └── persona-form/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   └── persona.service.ts
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   └── persona.model.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── environments/
│   │   └── environment.ts
│   └── styles.css
└── angular.json
```

## Backend API

This frontend connects to the backend deployed on Render:

- **Base URL:** `https://backenddvp.onrender.com/api`

Common endpoints:

- `POST /auth/login` - Login
- `POST /auth/register` - Register
- `GET /personas` - List people
- `GET /personas/:id` - Get person by id
- `POST /personas` - Create person
- `PUT /personas/:id` - Update person
- `DELETE /personas/:id` - Delete person

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Angular CLI 20

### Steps

1. Clone the repository

```bash
git clone <repository-url>
cd personasDVP
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

Edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://backenddvp.onrender.com/api'
};
```

4. Run in development

```bash
ng serve
```

The app will be available at `http://localhost:4200`.

## Production Build

```bash
ng build --configuration production
```

The compiled files will be placed in `dist/personas-dvp/`.

## Deployment

### Vercel (recommended)

1. Install Vercel CLI

```bash
npm install -g vercel
```

2. Deploy

```bash
vercel --prod
```

Vercel configuration example (`vercel.json`):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Routes

- `/` - Home
- `/login` - Login
- `/register` - Register
- `/personas` - People list (requires authentication)
- `/personas/new` - Create person
- `/personas/edit/:id` - Edit person

## Authentication

The app stores session data in localStorage:

```typescript
localStorage.setItem('currentUser', JSON.stringify(user));
localStorage.removeItem('currentUser');
```

## Theme Customization

Primary colors are defined in component CSS variables:

```css
/* Backgrounds */
:root {
  --bg-primary: #0f1419;
  --bg-secondary: #1a1b26;
  --bg-card: #24283b;

  /* Accents */
  --accent-cyan: #7dcfff;
  --accent-purple: #bb9af7;
  --accent-blue: #7aa2f7;
  --accent-pink: #f7768e;

  /* Text */
  --text-primary: #c0caf5;
  --text-secondary: #9aa5ce;
}
```

## Debugging

Open browser console (F12) to see:

- API errors
- Authentication state
- CRUD operations

## Author

RobARC

## License

Open source
