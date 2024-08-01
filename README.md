# MongoDB project

1. **API para Listar Películas:** Permitir la consulta de todas las películas disponibles en el catálogo, con detalles como título, género, duración.

``````js
const viewpelis = new peliculaController();

await viewpelis.apiUno();
``````

Respuesta:

![image-20240731111834424](https://github.com/TheWiXi/proyectoMongoII/blob/main/docs/1.png)

2.**API para Obtener Detalles de Película:** Permitir la consulta de información detallada sobre una película específica, incluyendo sinopsis.

``````js
const idPelicula = "66a80379a5aad36c22a20c80"
const viewpelis = new peliculaController();
await viewpelis.apiDos(idPelicula);
``````

Respuesta:
![image-20240731112739072](https://github.com/TheWiXi/proyectoMongoII/blob/main/docs/2.png)

3**API para Verificar Disponibilidad de Asientos:** Permitir la consulta de la disponibilidad de asientos en una sala para una proyección específica.

``````js
const funciones = new funcionController();
const showFuncioness = await funciones.apiUno();S
``````

Respuesta:

![image-20240731120917667](https://github.com/TheWiXi/proyectoMongoII/blob/main/docs/3.png)

``````js
const idFuncion = "66a807cca5aad36c22a20ca3";

const showFunciones = await funciones.apiDos(idFuncion);

``````

Respuesta:

![image-20240731121050767](https://github.com/TheWiXi/proyectoMongoII/blob/main/docs/4.png)

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
![image-20240731122905583](https://github.com/TheWiXi/proyectoMongoII/blob/main/docs/5.png)

5. **API para Reservar Asientos:** Permitir la selección y reserva de asientos para una proyección específica.

   ```js
   const funcion = new funcionController();
   const idFuncion = "66a807cca5aad36c22a20ca3";
   const codAsiento = "A1";
   const newReserva = funcion.apiTres(idFuncion,codAsiento);
   ```

6.**API para Cancelar Reserva de Asientos:** Permitir la cancelación de una reserva de asiento ya realizada.

```js
const funcion = new funcionController();
const idFuncion = "66a807cca5aad36c22a20ca3";
const codAsiento = "A1";
const newReserva = funcion.apiCuatro(idFuncion,codAsiento);
```

7.**API para Crear Usuario:** Permitir la creación de nuevos usuarios en el sistema, asignando roles y privilegios específicos (usuario estándar, usuario VIP o administrador).

```js
const users = new usuarioController();
const user = "prueba";
const pass = "prueba123";
const rol = "admin";
const newUser = await users.apiUno(user,pass,rol);
```

Respuesta

![image-20240801092227255](/home/wixi/.config/Typora/typora-user-images/image-20240801092227255.png)

### Roles

![image-20240801092448741](/home/wixi/.config/Typora/typora-user-images/image-20240801092448741.png)

```js
const users = new usuarioController();
const user = {
    _id: 98765432121,
    Nombre: "user prueba1",
    Nick: "prueba11",
    contrasenia: "prueba1231", 
    email: "prueba@example.com",
    telefono: "3216549870",
    rol: "vip",
    tarjeta: {
        fechaVencimiento: new Date("2025-06-15T00:00:00.000+00:00"),
        estado: "activa"
    }
};
const newUser = await users.apiUno(user);

```

8.**API para Obtener Detalles de Usuario:** Permitir la consulta de información detallada sobre un usuario, incluyendo su rol y estado de tarjeta VIP.

```js
const showUsers = new usuarioController().apiDos();
```

9.**API para Listar Usuarios:** Permitir la consulta de todos los usuarios del sistema, con la posibilidad de filtrar por rol (VIP, estándar o administrador).

```js
const rol = "vip";

const showUsers = new usuarioController().apiTres(rol);
```
Connection
```js
MONGO_USER=
MONGO_PASS=
MONGO_HOST=
MONGO_CLUSTER=
MONGO_PORT=
MONGO_DBNAME=
mongodb://wixi:wixi.1234!@serveo.net:27017/Cine
```
