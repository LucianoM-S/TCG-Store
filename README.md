TCG Store

Descripción 
TCG Store es un e-commerce desarrollado para la comercialización de Trading Card Game.
En esta etapa se implementó la vista de detalle de producto mediante una promesa dinámica, aplicando separación de responsabilidades entre los componentes encargados de obtener, administrar y mostrar la información.

Funcionalidades
Visualización de un catálogo de productos.
Productos organizados por categorías:
Singles
Sellados
Accesorios
Visualización de imagen, nombre, categoría, precio y descripción.
Vista de detalle individual de un producto.
Búsqueda dinámica de productos mediante su id.
Simulación de una petición asincrónica mediante Promise y setTimeout.
Estado de carga mientras se obtiene el producto.
Manejo de errores cuando el producto no existe.
Selector de cantidad mediante ItemCount.
Control del stock disponible.
Prevención de cantidades superiores al stock.
Prevención de cantidades inferiores a cero.
Agregado de productos al carrito.
Contador de productos en el carrito.
Diseño responsive para diferentes tamaños de pantalla.

Tecnologías utilizadas
React
JavaScript
Node js
Vite
CS
React Icons
Git
GitHub

Separación de responsabilidades
El proyecto utiliza componentes con responsabilidades específicas:
getProductById
Se encarga de buscar un producto mediante su identificador y retornar una promesa.
ItemDetailContainer
Se encarga de ejecutar la búsqueda del producto, administrar el estado y controlar los estados de carga y error.
ItemDetail
Se encarga exclusivamente de mostrar la información completa del producto.
ItemCount
Se encarga de controlar la cantidad seleccionada respetando el stock disponible.

Instalación y ejecución
Clonar el repositorio: git clone https://github.com/LucianoM-S/TCG-Store
Instalar dependencias: npm install
Ejecutar el proyecto: npm run dev
Abrir en el navegador: http://localhost:5173/