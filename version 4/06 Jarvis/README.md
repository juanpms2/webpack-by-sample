# 3.1_Bundling. Instalando Jarvis.
 Este ejercicio parte de la configuración de webpack en el ejercicio de bundling https://github.com/juanpms2/3_Bundling

 Se instalará el plugin Jarvis para comprobar el rendimiento y el peso de la aplicación y Imagemin para la optimización o minimizado de imágenes

#Jarvis

 ##Instalación:

 `npm install webpack-jarvis -D`

 ##Configuración:

 Hemos creado el archivo **rendimiento.webpack.config.js** para realizar las pruebas. En el configuraremos Jarvis con el siguiente código:

 `const Jarvis = require('webpack-jarvis');

 plugins: [ new Jarvis({
     watchOnly: false
 }) ];`

 Añadimos la opción **watchOnly: false** (por defecto está definida como true) para que el servidor quede levantado y así poder acceder a **localhost:1337** (host y puerto por defecto) para ver el resultado.

 Arrancamos la prueba con: `npm run build:perf`


 Para más información: https://github.com/zouhir/jarvis


#Imagemin

