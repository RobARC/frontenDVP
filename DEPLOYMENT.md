# Personas Frontend - Angular

Frontend para gestión de personas con autenticación.

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado para Angular - Sin Docker)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

**En Vercel Dashboard:**
- Build Command: `ng build --configuration production`
- Output Directory: `dist/personas-dvp/browser`
- Framework Preset: Angular

### Opción 2: Netlify (Sin Docker)

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Configuración:**
- Build command: `npm run build`
- Publish directory: `dist/personas-dvp/browser`

### Opción 3: Render.com (Con Docker)

1. **Crear repositorio en GitHub:**
   ```bash
   cd personasDVP
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/personas-frontend.git
   git push -u origin main
   ```

2. **En Render.com:**
   - New → Web Service
   - Connect repository
   - Environment: **Docker**
   - Plan: **Free**
   - Create Web Service

### Opción 4: Railway.app (Con Docker)

- New Project → Deploy from GitHub
- Seleccionar repo `personas-frontend`
- Railway detecta Dockerfile
- Deploy automático

## ⚙️ Configuración de Producción

1. **Actualizar API URL** en [environment.ts](src/environments/environment.ts):
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://tu-backend.onrender.com/api'
   };
   ```

2. **Build local para verificar:**
   ```bash
   npm run build -- --configuration production
   ```

## 🌐 CORS - Configurar Backend

En tu backend .NET, asegúrate de permitir el origen del frontend:

```csharp
// Program.cs
builder.Services.AddCors(options => {
    options.AddPolicy("AllowFrontend", policy => {
        policy.WithOrigins(
            "https://tu-frontend.vercel.app",
            "https://tu-frontend.onrender.com"
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

app.UseCors("AllowFrontend");
```

## 📝 Pasos Post-Deploy

1. Verificar que la app carga: `https://tu-frontend.vercel.app`
2. Probar login/register
3. Verificar llamadas a la API en DevTools → Network
4. Si hay errores CORS, actualizar backend

## 🆓 Recomendación de Plataforma

| Plataforma | Ventaja | Desventaja |
|------------|---------|------------|
| **Vercel** ⭐ | Optimizado para Angular, CDN global, sin sleep | Solo frontend |
| **Netlify** | Similar a Vercel, fácil setup | - |
| **Render.com** | Soporta Docker, full-stack posible | Sleep después 15min |
| **Railway.app** | Simple, soporta Docker | Límite mensual |

**Mejor opción:** Vercel/Netlify para frontend + Render.com para backend
