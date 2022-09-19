# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# En la descripcion previa, pueden ver los diferentes scripts para ejecutar en consola.

## Descripcion de como se utiliza la app

Al iniciar el proyecto podran ver de una ves la temperatura de su posicion geografica, y la temperatura de los 5 dias posteriores.

Veran un select donde ya estan pre cargados 5 ciudades, al seleccionar cualquiera podra ver la temperatura en esa licalidad.

Del lado derecho de la pantalla, hay un boton que te lleva a otra pantalla donde podran agregar mas ciudades. Al agregarlas va aparecer un pequeño rectangulo con la informacion de la misma, si le dan click, te llevara de nuevo al inicio, pero con la informacion de la ciudad que seleccionaste. En el caso de que estes en la pantalla de agregar una ciudad y solo quieras regregar a la pantalla de inicio, hay un icono de atras en el lado superior izquierdo de la pantalla.

## Estructura de proyecto.

Hablare de como esta constituido el codigo fuente.
Todo el codigo esta dentro de una carpeta 'src' luego encontraran una carpeta 'components', dentro de esta, hay tres carpetas, que son: 

'addWeather': Estan los componentes correspodiente a la pantalla de agregar mas ciudades.

'homeWeayherApp': Son los componentes de la pantalla principal de app.

'selectFormWeather': Esta el componente del select donde estan las ciudades pre establecidas.

Tambien esta la carpeta 'context' donde haga uso de un contexto global para distribuir los estados.

Luego podran ver la carpeta 'hooks' que tiene distintos hooks que los utilize para extraer la logica de los componentes.

Quiero aclarar que utilize la libreria de material ui, que me facilito el maquetado y los estilos. Asi me pude enfocar mas en la logica.

## Aclaracion

**Los iconos de la api de openWeather me ocasiono problemas, porque me aparecian rotas. No pude resolver eso.**
