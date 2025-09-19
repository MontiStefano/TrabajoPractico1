Página Web de URBAN KICKS - E-Commerce de Zapatillas

Este sitio web es un proyecto creado por los alumnos Monti Stefano y Morón Joaquín, como trabajo práctico N° 1 de la materia Programación II de la TUP.
Nuestro objetivo es simular una tienda online de zapatillas; que consta de una página de inicio, un carrito, un formulario de inicio de sesión/registro, una página de información "sobre nosotros" y una página diseñada para cada modelo de zapatillas disponible.

Características principales:
*Todas las páginas cuentan con las siguientes características:
-Logo del E-Commerce y Título con animación al cargar la página.
-Botón para cambiar entre Modo Oscuro/Claro, que queda cargado al cambiar entre páginas o cerrar y volver a abrir el navegador.
-Botón de Cerrar Sesión con el nombre de usuario ingresado a su izquierda, que solo aparece una vez iniciada la sesión.
-Botones de navegación donde todas las páginas del sitio están conectadas unas con otras.
-Diseño de colores y animaciones pensados para Modo Oscuro y Modo Claro.
-Diseño Responsivo que ordena los elementos de nuestro sitio web según el tamaño de la pantalla desde donde se visite nuestro sitio.
-Pie de página.

Páginas que componen nuestro sitio:
-Página de inicio donde hay un menú solo de diseño a la izquierda que al abrirlo en un dispositivo de pantalla chica se convierte en un menú de hamburguesa desplegable, también hay cargados 10 pares de zapatillas (Con imagen, titulo, precio, descripción breve y calificación en estrellas) mediante un JSON-Server, con animación cuando deslizo el mouse por encima y diseñada para alojar infinitos modelos. Cada Zapatilla que se muestra en el inicio está linkeada a una página donde se muestra el elemento con más detalle.
-Página de elemento: Se trata de una sola página de base diseñada, pero mediante JavaScript y el JSON-Server según que zapatilla abrimos en el inicio nos carga los datos de esta misma. Cuenta con toda la información de cada par de zapatillas, un botón de Comprar Ahora que se usa solo para diseño y un botón de Agregar al Carrito con un contador a su derecha, que nos permite almacenar la cantidad que deseemos de zapatillas en él.
-Página de Carrito: Cuenta con el menú a la izquierda que funciona igual que en el inicio, y cuando iniciamos sesión creamos un carrito personalizado para cada usuario que trae los elementos desde la página de cada elemento específico. Aquí podremos aumentar o disminuir la cantidad que queramos comprar o eliminar el producto del carrito.
-Página de Iniciar Sesión: Esta página está formada de 2 formularios para Iniciar Sesión y Registrarse totalmente funcionales y validados que almacenan datos en un JSON-Server, cada vez que se crea un usuario se crea también un carrito de compras individual, y cada vez que se inicia sesión aparece en la parte superior nuestro nombre de usuario y a su derecha un botón para cerrar la sesión. Cuando entramos a esta página solo vemos el formulario de Iniciar Sesión, pero abajo de todo hay un link que dice Registrarse que al clickearlo ambos se deslizan hacia arriba, ocultando el inicio de sesión y mostrando el registro, lo mismo ocurre al revés.
-Página Sobre Nosotros: Esta página cuenta con cuatro tarjetas donde explicamos un poco sobre quienes somos y cuales son nuestros objetivos, cada tarjeta cuenta con una pequeña animación al deslizar el mouse por encima. Pero no es una página con funciones, solo de información.

Las tecnologías usadas son:
•HTML 5
•CSS 3
•JavaScript (ES6)
•JSON-Server
•Git y GitHub

¿Cómo usar nuestra página?
-Lo primero que debemos hacer es tener Git instalado en nuestra PC.
-Luego visitamos el siguiente repositorio: https://github.com/MontiStefano/TrabajoPractico1
-Clonamos el repositorio en nuestra PC con el comando "git clone https://github.com/MontiStefano/TrabajoPractico1" y en la carpeta llamada JSON-Server, mediante Git Bash, ejecutamos el comando "npx json-server --watch db.json" para iniciar la base de datos.
-Por último abrimos el index.html en nuestro navegador, y listo ya estás en el sitio web de Urban Kicks.

Estructura del proyecto:
TrabajoPractico1
┣ assets
┃ ┣ fonts
┃ ┗ images
┣ css
┃ ┣ estilo_carrito.css
┃ ┣ estilo_elemento.css
┃ ┣ estilo_header.css
┃ ┣ estilo_inicio.css
┃ ┣ estilo_iniciar_sesion.css
┃ ┗ sobre_nosotros.css
┣ js
┃ ┣ general.js
┃ ┣ carrito.js
┃ ┣ elemento.js
┃ ┣ iniciar_sesion.js
┃ ┗ main.js
┣ pages
┃ ┣ carrito.html
┃ ┣ elemento.html
┃ ┣ iniciar_sesion.html
┃ ┗ sobre_nosotros.html
┣ index.html
┣ mock
┣ json server
┃ ┣ db.json
┃ ┣ package.json
┃ ┗ package-lock.json
┣ node_modules
┗ README.txt

Autores:
Monti, Stefano.
Morón, Joaquín.
