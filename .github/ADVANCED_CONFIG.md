# Configuración Avanzada de GitHub Actions

## Cache Optimizado (Opcional)

Si quieres optimizar la velocidad de los workflows, puedes habilitar cache manual más adelante. Aquí tienes la configuración:

### Reemplazar en `.github/workflows/ci.yml`:

```yaml
    # 2. Configurar Node.js con cache optimizado
    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
    
    # 2.1. Cache de dependencias npm
    - name: Cache npm dependencies
      uses: actions/cache@v4
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ matrix.node-version }}-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node-${{ matrix.node-version }}-
          ${{ runner.os }}-node-
    
    # 2.2. Cache de Playwright browsers
    - name: Cache Playwright browsers
      uses: actions/cache@v4
      with:
        path: ~/.cache/ms-playwright
        key: ${{ runner.os }}-playwright-${{ hashFiles('package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-playwright-
```

### Beneficios del cache:
- ⚡ **Instalación más rápida** de dependencias (npm ci)
- ⚡ **Download más rápido** de navegadores Playwright
- 💰 **Menos tiempo de ejecución** = menos costo en GitHub Actions

### Cuándo NO usar cache:
- 🚫 **Problemas de compatibilidad** con rutas en diferentes OS
- 🚫 **Errores de cache corruptos** 
- 🚫 **Builds inconsistentes** entre ejecuciones

## Optimizaciones Adicionales

### 1. Ejecutar tests solo en una versión de Node

Si quieres acelerar el CI, puedes ejecutar Playwright solo en Node 20:

```yaml
    # 8. Ejecutar tests de Playwright (solo para Node 20.x)
    - name: Run Playwright Tests
      if: matrix.node-version == '20.x'
      run: |
        npm start &
        npx wait-on http://localhost:3000 --timeout 60000
        npx playwright test
      env:
        NODE_OPTIONS: --openssl-legacy-provider
```

### 2. Paralelizar trabajos

Separar build y tests en trabajos independientes:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # solo build steps
  
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      # solo test steps
```

### 3. Conditional workflows

Ejecutar diferentes checks según archivos modificados:

```yaml
on:
  pull_request:
    paths:
      - 'src/**'
      - 'public/**'
      - 'package*.json'
      - '.github/workflows/**'
```

## Configuración Actual (Estable)

Por ahora, mantenemos la configuración simple y estable sin cache para evitar problemas. Una vez que el flujo esté funcionando perfectamente, puedes agregar estas optimizaciones.
