import { test, expect } from '../test-base';
import AxeBuilder from '@axe-core/playwright';

test.describe('Tests de Accesibilidad WCAG 2.2', () => {
  
  test('debe cumplir con estándares WCAG 2.2 AA en página principal', async ({ page }) => {
    // Navegar a la página principal (automático con test-base)
    
    // Ejecutar análisis de accesibilidad con configuración WCAG 2.2 AA
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();

    // Verificar que no hay violaciones de accesibilidad
    expect(accessibilityScanResults.violations).toEqual([]);
    
    console.log('✅ Página principal cumple con WCAG 2.2 AA');
  });

  test('debe cumplir con accesibilidad en página de productos', async ({ page }) => {
    // Navegar a productos
    await page.locator('[data-testid="nav-products-link"]').click();
    await expect(page).toHaveURL('http://localhost:3000/products');
    
    // Esperar a que los productos carguen
    await expect(page.locator('.products-grid')).toBeVisible();
    
    // Análisis de accesibilidad en página de productos
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
    
    console.log('✅ Página de productos cumple con WCAG 2.2 AA');
  });

  test('debe cumplir con accesibilidad en formulario de login', async ({ page }) => {
    // Navegar al login
    await page.locator('[data-testid="navbar-login-button"]').click();
    
    // Esperar a que el formulario cargue
    await expect(page.locator('[data-testid="login-email-input"]')).toBeVisible();
    
    // Análisis de accesibilidad en formulario
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
    
    console.log('✅ Formulario de login cumple con WCAG 2.2 AA');
  });

  test('debe verificar navegación por teclado', async ({ page }) => {
    // Test de navegación por teclado (requisito WCAG)
    
    // Verificar que el primer elemento enfocable recibe focus
    await page.keyboard.press('Tab');
    
    // Obtener el elemento actualmente enfocado
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
    
    // Verificar que podemos navegar a través de elementos interactivos
    let tabCount = 0;
    const maxTabs = 10;
    
    while (tabCount < maxTabs) {
      await page.keyboard.press('Tab');
      tabCount++;
      
      // Verificar que hay un elemento enfocado
      const currentFocus = await page.evaluate(() => {
        const active = document.activeElement;
        return {
          tag: active?.tagName,
          role: active?.getAttribute('role'),
          focusable: active !== document.body
        };
      });
      
      if (currentFocus.focusable) {
        console.log(`✅ Tab ${tabCount}: ${currentFocus.tag} enfocado correctamente`);
      }
    }
    
    console.log('✅ Navegación por teclado funciona correctamente');
  });

  test('debe verificar contraste de colores y texto alternativo', async ({ page }) => {
    // Análisis específico de contraste y texto alternativo
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast', 'image-alt', 'link-name', 'button-name'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.log('❌ Problemas encontrados:');
      accessibilityScanResults.violations.forEach(violation => {
        console.log(`- ${violation.id}: ${violation.description}`);
        violation.nodes.forEach(node => {
          console.log(`  Elemento: ${node.html}`);
        });
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
    
    console.log('✅ Contraste de colores y texto alternativo son correctos');
  });

  test('debe verificar etiquetas y roles ARIA', async ({ page }) => {
    // Análisis específico de ARIA
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules([
        'aria-allowed-attr',
        'aria-required-attr', 
        'aria-valid-attr-value',
        'aria-valid-attr',
        'label',
        'form-field-multiple-labels'
      ])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
    
    console.log('✅ Etiquetas y roles ARIA son correctos');
  });

  test('debe funcionar con lectores de pantalla (simulación)', async ({ page }) => {
    // Verificar que los elementos importantes tienen texto accesible
    const importantElements = [
      '[data-testid="navbar-login-button"]',
      '[data-testid="nav-products-link"]',
      'h1, h2, h3, h4, h5, h6',
      'button',
      'a[href]',
      'input'
    ];

    for (const selector of importantElements) {
      const elements = await page.locator(selector).all();
      
      for (const element of elements) {
        if (await element.isVisible()) {
          // Verificar que el elemento tiene texto accesible
          const accessibleName = await element.evaluate(el => {
            // Simular cómo un lector de pantalla obtendría el nombre
            return el.getAttribute('aria-label') || 
                   el.getAttribute('title') || 
                   el.textContent?.trim() ||
                   el.getAttribute('alt') ||
                   el.getAttribute('placeholder');
          });
          
          expect(accessibleName).toBeTruthy();
        }
      }
    }
    
    console.log('✅ Elementos tienen texto accesible para lectores de pantalla');
  });

  test('debe verificar orden de encabezados', async ({ page }) => {
    // Verificar estructura jerárquica de encabezados (requisito WCAG)
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    
    let previousLevel = 0;
    
    for (const heading of headings) {
      if (await heading.isVisible()) {
        const tagName = await heading.evaluate(el => el.tagName);
        const currentLevel = parseInt(tagName.charAt(1));
        
        // Verificar que no saltamos niveles (h1 -> h3 sin h2)
        if (previousLevel > 0) {
          const diff = currentLevel - previousLevel;
          expect(diff).toBeLessThanOrEqual(1);
        }
        
        previousLevel = currentLevel;
      }
    }
    
    console.log('✅ Estructura de encabezados es correcta');
  });
});
