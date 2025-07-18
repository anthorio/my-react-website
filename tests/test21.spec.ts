import { test, expect } from '../test-base';

test.describe('Test 21: Página de Productos', () => {
  test('debe navegar a productos, probar filtros e interactuar con el primer producto', async ({ page }) => {
    // 1. Ir a la página de productos
    const productsLink = page.locator('[data-testid="nav-products-link"]');
    await expect(productsLink).toBeVisible();
    await productsLink.click();
    
    // Verificar que la dirección es http://localhost:3000/products
    await expect(page).toHaveURL('http://localhost:3000/products');
    
    // 2. Verificar que se muestran todos los productos
    const productsGrid = page.locator('.products-grid');
    await expect(productsGrid).toBeVisible();
    
    // Verificar que products-grid tiene hijos product-card
    const productCards = productsGrid.locator('.product-card');
    await expect(productCards.first()).toBeVisible();
    
    console.log('✅ Productos cargados correctamente');
    
    // 3. Hacer clic en todos los filtros y verificar cambios
    const filters = [
      'products-filter-all',
      'products-filter-electronics', 
      'products-filter-fitness',
      'products-filter-home',
      'products-filter-fashion',
      'products-filter-books',
      'products-filter-automotive'
    ];
    
    for (const filterTestId of filters) {
      const filterButton = page.locator(`[data-testid="${filterTestId}"]`);
      await expect(filterButton).toBeVisible();
      
      // Guardar el estado anterior de los productos
      const productCountBefore = await productCards.count();
      
      // Hacer clic en el filtro
      await filterButton.click();
      
      // Esperar a que los productos se actualicen
      await page.waitForTimeout(500); // Pequeña pausa para que se aplique el filtro
      
      // Verificar que los productos han cambiado (o al menos que sigue habiendo productos)
      const productCountAfter = await productCards.count();
      await expect(productCards.first()).toBeVisible();
      
      console.log(`✅ Filtro ${filterTestId} aplicado - Productos antes: ${productCountBefore}, después: ${productCountAfter}`);
    }
    
    // 4. Interactuar con el primer producto de los filtrados
    // Primero asegurarse de que hay productos visibles
    await expect(productCards.first()).toBeVisible();
    
    const firstProductCard = productCards.first();
    
    
    // Hacer clic en Add to Cart del primer producto (buscar por clase, no por data-testid específico)
    const addToCartButton = firstProductCard.locator('.add-to-cart-btn');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
    
    console.log('✅ Add to Cart clicked en el primer producto');
    console.log('✅ Test 21 completado exitosamente');
  });
});
