# Collage de Imágenes

Este proyecto es una aplicación web para crear un collage de imágenes. Permite subir imágenes a posiciones específicas en una cuadrícula y reemplazar las imágenes existentes. Además, permite eliminar imágenes de la cuadrícula.

## Tecnologías Utilizadas

- Node.js
- Express
- express-fileupload
- HTML
- CSS
- Bootstrap

## Estructura del Proyecto

collage de imagenes
│
├── public
│ └── imgs
│ └── (aquí se guardan las imágenes subidas)
│
├── formulario.html
├── collage.html
├── index.js
└── README.md


## Instalación

1. Clona este repositorio en tu máquina local.

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd collage-imagenes
    ```

2. Instala las dependencias del proyecto.

    ```sh
    npm install express express-fileupload
    ```

## Uso

1. Inicia el servidor.

    ```sh
    node index.js
    ```

2. Abre tu navegador web y navega a `http://localhost:3000` para ver el formulario de subida de imágenes.

3. Sube una imagen seleccionando una posición en la cuadrícula.

4. Ve a `http://localhost:3000/collage` para ver el collage de imágenes.

## Archivos

### `index.js`

El archivo principal del servidor. Configura el middleware y define las rutas para subir imágenes, mostrar el formulario, mostrar el collage y eliminar imágenes.

### `formulario.html`

Contiene el formulario para subir nuevas imágenes. Permite seleccionar una imagen y una posición en la cuadrícula.

### `collage.html`

Muestra el collage de imágenes. Cada imagen en la cuadrícula tiene un botón "X" para eliminarla.

## Funcionalidades

### Subir Imágenes

- Selecciona una imagen desde tu dispositivo.
- Selecciona una posición en la cuadrícula.
- Si ya existe una imagen en la posición seleccionada, se te pedirá confirmación para reemplazarla.

### Ver el Collage

- Muestra las imágenes subidas en una cuadrícula.
- Cada imagen tiene un botón "X" para eliminarla.

### Eliminar Imágenes

- Haz clic en el botón "X" de una imagen en el collage para eliminarla.
