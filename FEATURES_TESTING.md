# 📋 Features para Testing - Lista de Pasos

## 🔐 Autenticación

### **Test 1: Login Exitoso**
1. Navegar a la página de login
2. Introducir email válido en el campo de email
3. Introducir contraseña válida en el campo de contraseña
4. Hacer clic en el botón "Sign In"
5. Verificar redirección al dashboard
6. Confirmar que aparece el botón de perfil de usuario en la navegación

### **Test 2: Login con Credenciales Incorrectas**
1. Ir a la página de login
2. Introducir email válido
3. Introducir contraseña incorrecta
4. Hacer clic en enviar
5. Verificar que aparece mensaje de error
6. Confirmar que el usuario permanece en la página de login

### **Test 3: Validación de Email**
1. Acceder al formulario de login
2. Introducir email con formato inválido (sin @, sin dominio, etc.)
3. Intentar enviar el formulario
4. Verificar que aparece mensaje de error específico para email
5. Confirmar que el formulario no se envía

### **Test 4: Campos Requeridos**
1. Ir a la página de login
2. Dejar todos los campos vacíos
3. Hacer clic en el botón de enviar
4. Verificar que aparecen mensajes de error para campos requeridos
5. Confirmar que el email y contraseña muestran "es requerido"

### **Test 5: Funcionalidad "Remember Me"**
1. Acceder al login
2. Introducir credenciales válidas
3. Marcar la casilla "Remember me"
4. Enviar formulario
5. Verificar que la preferencia se guarda (simular cierre de sesión y verificar)

### **Test 6: Enlace "Forgot Password"**
1. Estar en la página de login
2. Hacer clic en "Forgot password?"
3. Verificar que se ejecuta la acción correspondiente (consola o modal)

### **Test 7: Login Social - Google**
1. Ir a la página de login
2. Hacer clic en "Continue with Google"
3. Verificar que se activa la funcionalidad de login social

### **Test 8: Login Social - GitHub**
1. Acceder al login
2. Hacer clic en "Continue with GitHub"
3. Confirmar que se ejecuta la acción de autenticación

### **Test 9: Estado de Carga**
1. Ir al formulario de login
2. Introducir credenciales válidas
3. Hacer clic en enviar
4. Verificar que el botón muestra "Signing In..." durante el proceso
5. Confirmar que el botón se deshabilita durante la carga

### **Test 10: Redirección a Registro**
1. Estar en la página de login
2. Hacer clic en "Create one here"
3. Verificar redirección a la página de registro

---

## 📝 Registro de Usuario

### **Test 11: Registro Exitoso**
1. Navegar a la página de registro
2. Completar todos los campos requeridos con datos válidos
3. Marcar la casilla de términos y condiciones
4. Hacer clic en el botón de registro
5. Verificar redirección al dashboard
6. Confirmar mensaje de bienvenida

### **Test 12: Validación de Contraseñas**
1. Acceder al formulario de registro
2. Introducir contraseña en el primer campo
3. Introducir contraseña diferente en confirmar contraseña
4. Intentar enviar
5. Verificar mensaje de error "las contraseñas no coinciden"

### **Test 13: Selección de Intereses**
1. Ir a la página de registro
2. Completar campos básicos
3. Seleccionar múltiples intereses disponibles
4. Confirmar que las selecciones se mantienen
5. Enviar formulario y verificar que los intereses se guardan

### **Test 14: Términos y Condiciones Requeridos**
1. Llenar formulario de registro completamente
2. Dejar sin marcar la casilla de términos
3. Intentar enviar
4. Verificar que aparece error indicando que es requerido

### **Test 15: Email Ya Registrado**
1. Usar email que ya existe en el sistema
2. Completar resto del formulario
3. Enviar
4. Verificar mensaje de error indicando que el email ya está en uso

---

## 🧭 Navegación

### **Test 16: Menú Principal Desktop**
1. Acceder a la página principal
2. Verificar que todos los enlaces del menú están visibles
3. Hacer clic en cada enlace (Home, Services, Products)
4. Confirmar que cada clic navega a la página correcta
5. Verificar que la URL cambia apropiadamente

### **Test 17: Menú Móvil**
1. Cambiar a vista móvil (pantalla pequeña)
2. Verificar que aparece el botón de menú hamburguesa
3. Hacer clic en el botón hamburguesa
4. Confirmar que se despliega el menú móvil
5. Hacer clic en un enlace del menú móvil
6. Verificar navegación correcta y que el menú se cierra

### **Test 18: Estados de Autenticación en Navegación**
1. Acceder sin estar logueado
2. Verificar que aparecen botones "Login" y "Sign Up"
3. Hacer login
4. Confirmar que aparecen botones de perfil y logout
5. Verificar que desaparecen los botones de login/signup

### **Test 19: Logout Funcional**
1. Estar logueado en el sistema
2. Hacer clic en el botón de logout
3. Verificar redirección a página principal
4. Confirmar que vuelven a aparecer botones de login/signup

---

## 📄 Páginas de Contenido

### **Test 20: Página de Servicios**
1. Navegar a la página de servicios
2. Hacer clic en el toggle del primer servicio
3. Verificar que se expanden los detalles
4. Hacer clic en "Get Quote" del servicio
5. Confirmar que aparece modal o acción de cotización
6. Probar cerrar/cancelar la cotización

### **Test 21: Página de Productos**
1. Ir a la página de productos
2. Verificar que se muestran todos los productos
3. Hacer clic en filtros disponibles
4. Confirmar que el filtrado funciona correctamente
5. Interactuar con elementos específicos de productos

### **Test 22: Dashboard - Navegación por Tabs**
1. Acceder al dashboard (requiere login)
2. Verificar que se muestra el tab "Overview" por defecto
3. Hacer clic en tab "Projects"
4. Confirmar cambio de contenido
5. Repetir para tabs "Notifications" y "Profile"
6. Verificar que cada tab muestra contenido específico

### **Test 23: Dashboard - Acciones Rápidas**
1. Estar en el dashboard
2. Hacer clic en "New Project"
3. Verificar que se activa funcionalidad correspondiente
4. Probar otros botones de acción rápida
5. Confirmar que cada botón ejecuta su función

---

## 📧 Newsletter y Formularios

### **Test 24: Suscripción a Newsletter**
1. Localizar el formulario de newsletter en cualquier página
2. Introducir email válido
3. Hacer clic en "Subscribe"
4. Verificar mensaje de éxito
5. Confirmar que aparecen enlaces de redes sociales

### **Test 25: Newsletter - Email Inválido**
1. Ir al formulario de newsletter
2. Introducir email con formato incorrecto
3. Intentar suscribirse
4. Verificar mensaje de error apropiado

### **Test 26: Newsletter - Reset después de Éxito**
1. Completar suscripción exitosa
2. Hacer clic en "Subscribe Another"
3. Verificar que vuelve al formulario inicial
4. Confirmar que se puede hacer nueva suscripción

---

## 📱 Responsive y Móvil

### **Test 27: Layout en Diferentes Tamaños**
1. Cambiar el navegador a tamaño móvil (375px)
2. Verificar que el layout se adapta correctamente
3. Cambiar a tamaño tablet (768px)
4. Confirmar adaptación para tablet
5. Probar en desktop (1200px+)
6. Verificar que todos los elementos son visibles y funcionales

### **Test 28: Interacciones Touch**
1. Usar dispositivo móvil o simular touch
2. Probar scroll en carousels o elementos deslizables
3. Verificar que los botones responden al toque
4. Confirmar que no hay problemas de hover persistente

---

## 🎠 Componentes Interactivos

### **Test 29: Carousel de Testimonios**
1. Localizar el carousel de testimonios
2. Hacer clic en botón "siguiente"
3. Verificar que cambia al siguiente testimonio
4. Hacer clic en botón "anterior"
5. Confirmar navegación hacia atrás
6. Probar navegación por puntos/dots

### **Test 30: Cards Interactivas**
1. Hacer clic en diferentes cards de la página principal
2. Verificar que cada card responde apropiadamente
3. Confirmar navegación si las cards tienen enlaces
4. Probar hover effects (en desktop)

---

## 📊 Estados y Feedback

### **Test 31: Mensajes de Error Generales**
1. Provocar diferentes tipos de errores en formularios
2. Verificar que aparecen mensajes específicos y claros
3. Confirmar que los errores se limpian al corregir
4. Probar que los errores no persisten innecesariamente

### **Test 32: Estados de Carga**
1. Realizar acciones que requieren tiempo de procesamiento
2. Verificar que aparecen indicadores de carga
3. Confirmar que los botones se deshabilitan durante carga
4. Probar que la interfaz responde apropiadamente

### **Test 33: Feedback de Éxito**
1. Completar acciones exitosas (login, registro, suscripción)
2. Verificar que aparecen mensajes de confirmación
3. Confirmar que el feedback es claro y útil

---

## 🔄 Flujos Completos

### **Test 34: Journey de Usuario Nuevo**
1. Llegar como visitante a la página principal
2. Explorar servicios disponibles
3. Decidir registrarse y completar registro
4. Acceder al dashboard por primera vez
5. Explorar funcionalidades básicas
6. Realizar logout y login nuevamente

### **Test 35: Flujo de Solicitud de Servicio**
1. Hacer login como usuario existente
2. Navegar a servicios
3. Revisar detalles de servicios específicos
4. Solicitar cotización
5. Verificar confirmación en dashboard
6. Comprobar notificaciones relacionadas
