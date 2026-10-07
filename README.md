TCG Store

Descripción 
TCG Store es un e-commerce desarrollado para la comercialización de Trading Card Game.
Permite visualizar el catálogo, filtrar productos por categoría, acceder al detalle de cada producto y navegar entre las diferentes secciones mediante rutas dinámicas.

Funcionalidades
Visualización del catálogo de productos.
Navegación entre páginas mediante React Router.
Filtrado de productos por categoría.
Rutas dinámicas para categorías y productos.
Vista de detalle de cada producto.
Manejo de estados de carga y errores.
Navegación interna mediante Link y NavLink.
Navbar y Footer compartidos entre las diferentes rutas.
CartWidget visible en todas las páginas.
Página 404 para rutas inexistentes.
Carga simulada de productos mediante una función asíncrona.

Tecnologías utilizadas
React
JavaScript
Node js
Vite
CS
React Icons
Git
GitHub

Rutas principales
Ruta	Descripción
/	-		Página principal con todos los productos
/category/singles -	Productos de la categoría Singles
/category/sellados -	Productos de la categoría Sellados
/category/accesorios -	Productos de la categoría Accesorios
/item/:id -		Detalle de un producto específico
*	-		Página 404 para rutas inexistentes

Instalación y ejecución
Clonar el repositorio: git clone https://github.com/LucianoM-S/TCG-Store
Instalar dependencias: npm install
Ejecutar el proyecto: npm run dev
Abrir en el navegador: http://localhost:5173/