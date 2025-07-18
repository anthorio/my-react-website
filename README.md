# React Travel Website

## 🚀 Cómo iniciar el proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar la aplicación
```bash
npm start
```

El sitio web se abrirá automáticamente en: **http://localhost:3000**

## 🛠️ Scripts disponibles

### **Aplicación React:**
- `npm start` - Inicia el servidor de desarrollo en http://localhost:3000
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta los tests unitarios de React

### **Tests con Playwright:**
- `npm run playwright:test` - Ejecutar todos los tests
- `npm run playwright:test:headed` - Tests con navegador visible
- `npm run playwright:test:debug` - Tests en modo debug
- `npm run playwright:test:ui` - Interfaz visual de Playwright
- `npm run playwright:test:report` - Ejecutar tests y mostrar reporte
- `npm run playwright:show-report` - Ver último reporte de resultados

### **Reportes:**
- `npm run playwright:report:open` - Abrir reporte en navegador
- `npm run playwright:report:generate` - Generar reporte HTML
- `npm run playwright:report:serve` - Servir reporte en puerto 8080

### **Para ejecutar tests:**
```bash
# Primero inicia la aplicación
npm start

# En otra terminal, ejecuta los tests
npm run playwright:test
```

## 🎯 Funcionalidades de la aplicación

### **Páginas principales:**
- **Home** (`/`) - Página principal con hero section y cards
- **Login** (`/login`) - Autenticación de usuarios
- **Sign Up** (`/sign-up`) - Registro de nuevos usuarios
- **Dashboard** (`/dashboard`) - Panel de usuario (requiere login)
- **Services** (`/services`) - Catálogo de servicios
- **Products** (`/products`) - Página de productos

### **Componentes:**
- **Navbar** - Navegación responsive con menú móvil
- **Footer** - Links y suscripción a newsletter
- **Newsletter** - Formulario de suscripción
- **Testimonials** - Carousel de testimonios
- **Cards** - Tarjetas interactivas
 
## 💡 Consejos importantes

### **Para testing:**
- Usa `data-testid` en lugar de CSS selectors
- Los formularios tienen validación implementada
- Estados de carga y error están preparados para testing

### **Solución de problemas:**
- Si `npm start` no funciona, verifica que `react-scripts` esté instalado
- Si los tests fallan, verifica que la aplicación esté en http://localhost:3000

---

**¡Listo para usar! 🎉**
