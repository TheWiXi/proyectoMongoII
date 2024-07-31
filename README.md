# MongoDB project

1. **API para Listar Películas:** Permitir la consulta de todas las películas disponibles en el catálogo, con detalles como título, género, duración.

``````js
const viewpelis = new peliculaController();

await viewpelis.apiUno();
``````

Respuesta:

![image-20240731111834424](https://github.com/TheWiXi/proyectoMongoII/tree/dev/docs/1.png)

2.**API para Obtener Detalles de Película:** Permitir la consulta de información detallada sobre una película específica, incluyendo sinopsis.

``````js
const idPelicula = "66a80379a5aad36c22a20c80"
const viewpelis = new peliculaController();
await viewpelis.apiDos(idPelicula);
``````

Respuesta:
![image-20240731112739072](https://github.com/TheWiXi/proyectoMongoII/tree/dev/docs/2.png)

3**API para Verificar Disponibilidad de Asientos:** Permitir la consulta de la disponibilidad de asientos en una sala para una proyección específica.

``````js
const funciones = new funcionController();
const showFuncioness = await funciones.apiUno();S
``````

Respuesta:

![image-20240731120917667](https://github.com/TheWiXi/proyectoMongoII/tree/dev/docs/3.png)

``````js
const idFuncion = "66a807cca5aad36c22a20ca3";

const showFunciones = await funciones.apiDos(idFuncion);

``````

Respuesta:

![image-20240731121050767](https://github.com/TheWiXi/proyectoMongoII/tree/dev/docs/4.png)

4.**API para Comprar Boletos:** Permitir la compra de boletos para una película específica, incluyendo la selección de la fecha y la hora de la proyección.

``````js
const boletos = new boletoController();
const newTicket = {
  id_funcion: new ObjectId("66a807cca5aad36c22a20ca3"), // Asegúrate de que este ObjectId es correcto
  asiento: "A1",
  fechaCompra: new Date("2024-07-31T11:50:46.715Z"), // Asegúrate de que esta fecha es correcta
  id_sala: new ObjectId("66a8058ca5aad36c22a20c9e"), // Asegúrate de que este ObjectId es correcto
  subTotal: 14000,
  Total: 27580,
  cedula_user: 1234
};
const newboleto = boletos.apiUno(newTicket);
``````

Respuesta:
![image-20240731122905583](https://github.com/TheWiXi/proyectoMongoII/tree/dev/docs/5.png)