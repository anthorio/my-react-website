# Status Checks Configuration

Este archivo documenta los status checks que deben estar configurados en GitHub para la protección de ramas.

## Required Status Checks

Cuando configures Branch Protection, asegúrate de que estos checks estén marcados como requeridos:

### Build and Test Checks
- `build-and-test (ubuntu-latest, 18.x)`
- `build-and-test (ubuntu-latest, 20.x)`

### Checks adicionales (opcionales pero recomendados)
- `dependabot` (si tienes Dependabot habilitado)
- `codeql` (si usas análisis de código)

## Cómo verificar que están configurados correctamente

1. Ve a un Pull Request existente
2. Busca la sección "All checks have passed" o "Some checks haven't completed yet"
3. Deberías ver los checks mencionados arriba

## En caso de problemas

Si los status checks no aparecen:
1. Verifica que el workflow se haya ejecutado al menos una vez
2. Los nombres de los jobs deben coincidir exactamente
3. El workflow debe estar en la rama `main` para que GitHub lo reconozca
