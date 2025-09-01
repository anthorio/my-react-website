# 🚀 Guía Completa: Configuración de GitHub Actions para CI/CD

## ✅ Lo que ya tienes configurado

¡Perfecto! Ya tienes todos los archivos necesarios para la integración continua:

- ✅ **Workflow principal** (`.github/workflows/ci.yml`)
- ✅ **Scripts de validación** (`package.json` actualizado)
- ✅ **Dependencias instaladas** (`wait-on` agregado)
- ✅ **Documentación completa**

## 🔄 Próximos pasos para completar la configuración

### Paso 1: Commit y Push de los cambios

```bash
# En tu terminal, ejecuta:
git add .
git commit -m "feat: agregar GitHub Actions para CI/CD y branch protection"
git push origin main
```

### Paso 2: Verificar que el workflow funciona

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **"Actions"**
3. Deberías ver que se ejecutó el workflow "CI - Build and Test"
4. Si es la primera vez, puede fallar porque no tienes configurado branch protection aún

### Paso 3: Configurar Branch Protection (¡IMPORTANTE!)

1. Ve a **Settings** → **Branches** en tu repositorio de GitHub
2. Haz clic en **"Add rule"**
3. En "Branch name pattern" escribe: `main`
4. **Marca estas opciones:**

   ✅ **Require a pull request before merging**
   - ✅ Require approvals: `1`
   - ✅ Dismiss stale PR approvals when new commits are pushed

   ✅ **Require status checks to pass before merging**
   - ✅ Require branches to be up to date before merging
   - En "Search for status checks", busca y selecciona:
     - `build-and-test (ubuntu-latest, 18.x)`
     - `build-and-test (ubuntu-latest, 20.x)`

   ✅ **Restrict pushes that create files that match a path** (opcional)

   ✅ **Require linear history** (recomendado)

   ✅ **Include administrators**

5. Haz clic en **"Create"**

### Paso 4: Probar el flujo completo

1. **Crear una branch de prueba:**
   ```bash
   git checkout -b test/github-actions
   ```

2. **Hacer un pequeño cambio** (por ejemplo, editar README.md):
   ```bash
   echo "# Test de GitHub Actions" >> README.md
   git add README.md
   git commit -m "test: verificar funcionamiento de GitHub Actions"
   git push origin test/github-actions
   ```

3. **Crear un Pull Request:**
   - Ve a GitHub y crea un PR desde `test/github-actions` hacia `main`
   - Deberías ver que aparecen los checks automáticamente
   - El PR NO se podrá mergear hasta que todos los checks estén ✅

### Paso 5: Verificar que todo funciona

En el Pull Request deberías ver:
- ✅ `build-and-test (ubuntu-latest, 18.x)` - Build exitoso con Node 18
- ✅ `build-and-test (ubuntu-latest, 20.x)` - Build exitoso con Node 20
- 🔒 Botón de merge deshabilitado hasta que pasen todos los checks

## 🎯 ¿Qué hace exactamente el CI?

### Para cada Pull Request, automáticamente:
1. **Instala dependencias** con `npm ci`
2. **Audita vulnerabilidades** de seguridad
3. **Construye la aplicación** con `npm run build`
4. **Verifica artifacts** (que se generó el build correctamente)
5. **Instala navegadores** de Playwright
6. **Inicia el servidor** React en background
7. **Ejecuta todos los tests** de Playwright (accesibilidad, funcionalidad)
8. **Sube reportes** si algo falla

### Matriz de pruebas:
- ✅ Node.js 18.x en Ubuntu Latest
- ✅ Node.js 20.x en Ubuntu Latest

## 🛟 Comandos útiles para desarrollo

```bash
# Simular el CI localmente
npm run ci:local

# Solo build
npm run ci:build

# Solo tests (requiere servidor corriendo)
npm run ci:test

# Ver reportes de Playwright
npm run playwright:show-report
```

## 🚨 Solución de problemas comunes

### ❌ "Status checks not found"
- **Causa:** Los workflows no se han ejecutado nunca
- **Solución:** Haz push a main y espera a que se ejecute el workflow

### ❌ Tests fallan en CI pero funcionan localmente
- **Causa:** Diferencias de timing o dependencias
- **Solución:** Revisa los logs en GitHub Actions, descarga playwright-report

### ❌ No puedo mergear el PR
- **Causa:** Branch protection funcionando correctamente
- **Solución:** Asegúrate de que todos los checks estén ✅ en verde

### ❌ Build falla por "legacy OpenSSL"
- **Ya solucionado:** Los workflows usan `NODE_OPTIONS=--openssl-legacy-provider`

## 🎉 ¡Listo!

Una vez completados estos pasos, tendrás:
- 🔒 **Branch protection** completa en `main`
- 🚀 **CI/CD automático** en cada PR
- 🧪 **Tests automatizados** de accesibilidad y funcionalidad
- 📊 **Reportes detallados** de fallos
- 🛡️ **Protección contra merges** con errores

¡Tu repositorio ahora tiene un flujo de desarrollo profesional y seguro!
