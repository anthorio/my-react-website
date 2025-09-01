# GitHub Actions - CI/CD Pipeline

Este repositorio utiliza GitHub Actions para automatizar el proceso de integración continua (CI) y garantizar la calidad del código antes de mergear Pull Requests.

## 🚀 Workflows Configurados

### 1. CI - Build and Test (`ci.yml`)

**Trigger:** Se ejecuta en:
- Todos los Pull Requests hacia `main`
- Pushes directos a `main`

**Pasos del workflow:**
1. **Checkout del código** - Descarga el código del repositorio
2. **Setup Node.js** - Configura Node.js (versiones 18.x y 20.x)
3. **Install dependencies** - Instala las dependencias con `npm ci`
4. **Audit dependencies** - Verifica vulnerabilidades de seguridad
5. **Build application** - Construye la aplicación React
6. **Check build artifacts** - Verifica que el build se generó correctamente
7. **Install Playwright** - Instala navegadores para tests E2E
8. **Run Playwright Tests** - Ejecuta tests de accesibilidad y funcionalidad
9. **Upload artifacts** - Sube reportes y archivos de build

**Matriz de pruebas:**
- ✅ Node.js 18.x
- ✅ Node.js 20.x
- ✅ Ubuntu Latest

### 2. Branch Protection Guide (`branch-protection-guide.yml`)

Workflow manual que proporciona instrucciones para configurar la protección de ramas.

## 🔒 Configuración de Protección de Ramas

Para que las GitHub Actions bloqueen efectivamente los merges con errores, necesitas configurar **Branch Protection Rules**:

### Pasos para configurar:

1. **Ve a tu repositorio en GitHub**
2. **Settings** → **Branches**
3. **Add rule** para la rama `main`
4. **Configura las siguientes opciones:**

   ✅ **Require a pull request before merging**
   - Require approvals: 1
   - Dismiss stale PR approvals when new commits are pushed

   ✅ **Require status checks to pass before merging**
   - Require branches to be up to date before merging
   - Status checks requeridos:
     - `build-and-test (ubuntu-latest, 18.x)`
     - `build-and-test (ubuntu-latest, 20.x)`

   ✅ **Restrict pushes that create files that match a path** (opcional)

   ✅ **Require linear history** (recomendado)

   ✅ **Include administrators** (para aplicar reglas también a admins)

5. **Save changes**

### ⚠️ Importante:
Una vez configuradas estas reglas, **NO se podrán mergear Pull Requests** hasta que:
- ✅ Todos los status checks pasen (build exitoso, tests exitosos)
- ✅ La rama esté actualizada con main
- ✅ Tenga las aprobaciones requeridas

## 🛠️ Tests Incluidos

### Tests de Build
- ✅ Verificación de sintaxis
- ✅ Build sin errores
- ✅ Generación correcta de artifacts

### Tests E2E con Playwright
- ✅ Tests de accesibilidad WCAG 2.2
- ✅ Tests de funcionalidad (login, navegación)
- ✅ Tests de productos y filtros

### Auditoría de Seguridad
- ✅ Verificación de vulnerabilidades en dependencias
- ✅ Nivel de auditoría: High

## 📊 Reportes y Artifacts

### Artifacts generados:
- **build-files** - Archivos compilados de React (7 días)
- **playwright-report** - Reportes de tests E2E (30 días)

### Ver reportes:
- Los reportes están disponibles en la pestaña "Actions" de cada workflow run
- Los artifacts se pueden descargar desde la página del workflow

## 🔄 Flujo de Trabajo Recomendado

1. **Crear feature branch** desde `main`
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Desarrollar y commitear cambios**
   ```bash
   git add .
   git commit -m "feat: agregar nueva funcionalidad"
   ```

3. **Push y crear Pull Request**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

4. **Esperar a que pasen los checks**
   - GitHub Actions ejecutará automáticamente todos los tests
   - Los checks deben estar ✅ en verde antes del merge

5. **Review y merge**
   - Solicitar review de código
   - Una vez aprobado y con checks verdes, mergear

## 🚨 Solución de Problemas

### Si los tests fallan:
1. **Revisa los logs** en la pestaña Actions
2. **Descarga el playwright-report** para ver detalles de tests E2E
3. **Ejecuta tests localmente**:
   ```bash
   npm install
   npm run build
   npx playwright test
   ```

### Si el build falla:
1. **Verifica errores de TypeScript/JavaScript**
2. **Ejecuta build localmente**:
   ```bash
   npm run build
   ```

### Comandos útiles para debugging local:
```bash
# Instalar dependencias
npm install

# Ejecutar build
npm run build

# Ejecutar servidor de desarrollo
npm start

# Ejecutar tests de Playwright
npx playwright test

# Ver reporte de Playwright
npx playwright show-report
```

## 📝 Notas Adicionales

- Los workflows usan `NODE_OPTIONS=--openssl-legacy-provider` para compatibilidad con versiones legacy
- Se ejecutan en Ubuntu Latest para consistencia con entornos de producción
- Los artifacts se mantienen por tiempo limitado para optimizar almacenamiento
- Los tests de Playwright solo se ejecutan en Node.js 20.x para evitar duplicación
