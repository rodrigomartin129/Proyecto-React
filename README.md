# Tienda Vivero Green Life

_Este proyecto es un ecommerce básico que presento como Proyecto Final del curso de React JS – Comisión 47170. La aplicación permite ver un listado de artículos (plantas) y realizar compras en línea. Tanto los artículos como las órdenes de compra se almacenan en Firebase._

## Tecnologías utilizadas

* React
* React Router
* Firebase

## Funcionalidades

* Visualizar un listado de productos disponibles para la compra.
* Contar con acceso visible al carrito de compras.
* Visualizar el detalle de cada artículo (foto, precio, descripción, selector de cantidad).
* Agregar productos al carrito de compras.
* Realizar una orden de compra. 

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1.	Clona el repositorio a tu máquina local.
2.	Abre una terminal en el directorio del proyecto.
3.	Ejecuta el comando `npm install` para instalar las dependencias.
4.	Ejecuta el comando `npm run start` para iniciar la aplicación.
5.	Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará cuando realices cambios. 

También es posible ver los errores en la consola.

## Aprende más:

Puede obtener más información en [Create React App documentation](https://create-react-app.dev/docs/getting-started/).

Para aprender React, consulta la documentación en [React documentation](https://react.dev/).

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1.	Crea una cuenta en Firebase y crea un nuevo proyecto.
2.	En la sección "Authentication" de Firebase, introduce el correo electrónico y contraseña.
3.	En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4.	En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5.	Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env del proyecto.

