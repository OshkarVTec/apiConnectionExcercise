# apiConnectionExcercise
A web app that connects to an API to fectch data.\
Type the following commands to run:\
 ```cd back-end ```\
 ```npm install ```\
 ```node app.js ```

 Then, on another terminal window, run the following commands:\
 ```cd front-end ```\
 ```npm install ```\
 ```npm run dev ```

The app will run on http://localhost:5173/

## Preguntas
● ¿Qué harías para generar un archivo CSV de las frutas de la #11 a la #20?
(como si estuviera paginada)
Como la API no provee un método para obtener una fruta de acuerdo con un rango de valores, llamaría a la url que manda la lista completa de frutas y después utilizaría la función filter() para poder filtrar por un rango de valores de los id de las frutas. Esto funcionaría en este ejemplo porque la lista completa no es muy extensa.\
● Si el API estuviera intermitente, regresando un status HTTP 500, cómo lo
manejarías?
El status del servidor está fuera de mi control, por lo que se debe buscar otro proveedor de servicio y mostrar temporalmente un anuncio de que el servicio se encuentra intermitente y que se debe intentar más tarde.\
● ¿Cómo guardarías la información en una base de datos?
Los archivos se reciben en formato JSON, por lo que una base de datos no relacional como MongoDB permitiría que se pueda guardar la información tal y como se recibe, lo que ahorraría recursos al no tener que ordenar y transformar los datos.\
● ¿Qué escenarios de pruebas agregarías?
Un escenario con una carga muy alta de solicitudes, para comprobar cual sería la respuesta de la app si hay muchos usuarios simultáneos.

