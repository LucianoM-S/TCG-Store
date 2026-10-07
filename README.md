TCG Store

Descripción 
TCG Store es un e-commerce desarrollado para la comercialización de Trading Card Game.
Permite visualizar el catálogo, filtrar productos por categoría, acceder al detalle de cada producto y navegar entre las diferentes secciones mediante rutas dinámicas y administrar un carrito de compras.

Funcionalidades
Visualización del catálogo de productos.
Filtrado de productos por categoría:
Singles
Sellados
Accesorios
Vista detallada de cada producto.
Selector de cantidad mediante ItemCount.
Agregado de productos al carrito.
Carrito global mediante Context API.
Contador de productos en el CartWidget.
Visualización de subtotal y total del carrito.
Eliminación individual de productos.
Vaciar el carrito.
Navegación entre páginas mediante React Router.
Página 404 para rutas inexistentes.
Manejo de estados de carga y error durante la obtención de productos.
Simulación de peticiones asíncronas mediante Promises.

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
/cart		-	Carrito de compras
/*	-		Página 404 para rutas inexistentes

Instalación y ejecución
Clonar el repositorio: git clone https://github.com/LucianoM-S/TCG-Store
Instalar dependencias: npm install
Ejecutar el proyecto: npm run dev
Abrir en el navegador: http://localhost:5173/