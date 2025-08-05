+++
author = "Daniel Guerrero"
categories = ["Javascript", "Tutoriales"]
date = 2020-09-07T04:06:26Z
description = ""
draft = false
image = "/blog/firebase-api.png"
slug = "creando-tu-primer-api-con-nodejs-y-firebase-cloud-functions"
summary = "En este post vamos a construir nuestro primer API usando Google Firebase, las llamadas Firebase Cloud Functions y ExpressJS."
tags = ["Javascript", "Tutoriales"]
title = "Creando tu primer CRUD API con NodeJS y Firebase Cloud Functions"
thumbnail = "/blog/firebase-api.png"
+++


En este post vamos a construir nuestro primer API usando Google Firebase, las llamadas Firebase Cloud Functions y **[ExpressJS](https://expressjs.com/es/)**.

Antes de comenzar es bastante recomendable que tengas la siguiente configuración:

* **NodeJS**  [_(preferentemente la ultima versión estable)_](https://nodejs.org/es/)
* Una cuenta de Google
* **[Postman](https://www.postman.com/)**
* **[Firebase CLI](https://firebase.google.com/docs/cli)** instalado en tu computadora (puedes instalarlo con el comando: _npm install -g firebase-tools_)
* [**VS Code**](https://code.visualstudio.com/)

Puedes encontrar el código referente a este artículo **[aquí](https://github.com/daguerrero/libros-api)**. El repositorio de GitHub también contiene una colección de Postman, la cual te recomiendo importar primero y usarla para probar tu proyecto, solamente cambia las url para que coincidan con las de tu proyecto.

## Conocimientos Necesarios

Para empezar, quiero repasar algunos de los conceptos necesarios sobre que son las API y cómo funcionan. Esto es completamente introductorio, así que si ya está familiarizado con estos conceptos, favor de avanzar a la siguiente sección.

**API** significa _"Interfaz de Programación para Aplicaciones"_ por sus siglas en inglés y se refiere al método que utilizan los sistemas informáticos para comunicarse entre sí.

Básicamente, la idea detrás de construir un API es que tu sistema pueda comunicarse con lo que sea que estés construyendo. Las API pueden incluir _endpoints REST._

Hay otros servicios llamados RESTful y estos se refieren a la transferencia de estado representacional y aprovecha el protocolo HTTP para pasar datos (a través de un API). El protocolo HTTP es lo que usamos todos los días en sitios web y aplicaciones de Internet. Los servicios RESTful utilizan diferentes verbos (o métodos) HTTP para pasar datos entre diferentes sistemas. Los verbos HTTP típicos que utilizará son los siguientes:

* GET => Recuperar datos
* POST => Crear o actualizar datos
* PUT => Actualizar datos
* DELETE => Eliminar datos

Un último punto, mencione _endpoints_ anteriormente... Un _endpoint_ es solo una forma elegante de describir una dirección por la cuál llegarán las solicitudes HTTP.

## Firebase

{{< figure src="/blog/firebase-api.png" caption="Firebase" >}}

Firebase es una plataforma muy poderosa que se puede usar para crear aplicaciones rápidamente. Algunos de los servicios que Firebase pone a tu disposición son los siguientes:

* [Hosting](https://firebase.google.com/docs/hosting)
* [Realtime Database](https://firebase.google.com/docs/database)
* [NoSQL Database](https://firebase.google.com/docs/firestore)
* [Functions (similar a las lamdas de AWS)](https://firebase.google.com/docs/functions)
* [File [Storage](https://firebase.google.com/docs/storage)](https://firebase.google.com/docs/storage)

El único requisito para usar Firebase es una cuenta de Google. (por eso se encuentra en los requisitos...)

Más adelante explicaremos como configurar el backend para un API creada en Firebase... [(si ya leíste este artículo es muy similar...)](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/)

## Configuración Inicial

Vamos a empezar a configurar nuestro entorno, para eso vamos a entrar a la [Consola de Firebase](https://console.firebase.google.com/), tendrías que ver algo similar a esto:

{{< figure src="/blog/image-12.png" caption="Creando nuestro proyecto en Firebase" >}}

Y le damos siguiente a los demás pasos y demás hasta que veamos una pantalla como la siguiente:

{{< figure src="/blog/image-13.png" caption="Proyecto ya creando en Firebase" >}}

Una vez creado nuestro proyecto, abrimos la consola de Firebase y nos vamos a la opción _"Cloud Firestore"_ y tendremos que ver algo como esto:

{{< figure src="/blog/image-14.png" caption="" >}}

Le damos click a la opción que dice _"Crear base de datos"_ para crear nuestra base de datos inicial. Seleccionaremos "modo de prueba" para poder habilitar escrituras y lecturas. Puedes escribir tu propias reglas especificas de seguridad en tu base de datos, más información sobre esto **aquí**.

{{< figure src="/blog/image-15.png" caption="Creando nuestra base de datos inicial" >}}

Una vez que des click en _siguiente_ te preguntarán en que ubicación quieres iniciar tu base de datos, cualquiera funciona pero la recomendación es que escojas la más cercana geográficamente a ti. Más información de todo esto **[aquí](https://firebase.google.com/docs/projects/locations)**.

{{< figure src="/blog/image-16.png" caption="Seleccionando la ubicación de nuestra base de datos" >}}

Ahora ya tenemos las piezas básicas de nuestros proyecto configuradas, ahora toca escribir el código.

## El código

Vamos a empezar a escribir nuestra API de libros y voy a asumir que ya tienes instalado el Firebase CLI en tu computadora. [_Si esto no fuera así, te recomiendo que lo instales usando estas instrucciones._](https://firebase.google.com/docs/cli)

Así que vamos a la terminal que tengas en tu sistema, y vamos a crear una carpeta para guardar nuestro proyecto, en mi caso usaré una carpeta llamada "firebase-api":

```shell
mkdir firebase-api
```

Entramos a la carpeta que acabamos de crear y ahora usamos el siguiente comando:

```shell
firebase init
```

Tendremos que ver una pantalla como la siguiente:

{{< figure src="/blog/image-18.png" caption="Configuración inicial de un proyecto Firebase" >}}

Aquí tendremos que seleccionar _"Functions"_ en el menú:

{{< figure src="/blog/image-19.png" caption="Seleccionando Functions" >}}

Luego tenemos que seleccionar la siguiente opción:

{{< figure src="/blog/image-20.png" caption="Seleccionar Use an existing project" >}}

Esto nos va a permitir usar el proyecto que creamos anteriormente:

{{< figure src="/blog/image-22.png" caption="Seleccionamos el proyecto anteriormente creado" >}}

{{< figure src="/blog/image-23.png" >}}

Lo siguiente es elegir la opciones, para este proyecto en especifico seleccionamos lo siguiente:

* Selecciona **Javascript**
* Selecciona **yes** para _linting_
* Selecciona **yes** para instalar las dependencias

Y listo, accedemos a la carpeta generada... podremos ver que se generaron los siguientes archivos:

* index.js
* node_modules
* package-lock.json
* package.json

Ahora vamos a nuestro editor (usaremos VSCode) y tendremos que ver nuestro código algo así:

{{< figure src="/blog/image-24.png" caption="Proyecto inicial en VSCode" >}}

## Creando nuestro primer Endpoint

Firebase Functions te permite usar **[ExpressJS](https://expressjs.com/es/)** para hospedar tu API de forma [_**serverless**_](https://en.wikipedia.org/wiki/Serverless_computing). Serverless es un término que significa que se ejecuta sin servidores físicos... Técnicamente si se aloja en un servidor, pero le dejamos el trabajo de la configuración a ellos. Las API's tradicionales requieren que configure un servidor en la nube o local que pueda alojar la aplicación. Esto significa que los desarrolladores tendrían que estar a cargo de los parches y alertas del servidor. En el mundo [_**serverless**_](https://en.wikipedia.org/wiki/Serverless_computing)_**,**_ no nos tenemos que preocupar por nada más que el código y esta es una de las cosas que hace muy bueno a Firebase.

Entonces, para usar ExpressJS con este proyecto, vamos a agregar el siguiente código al archivo _index.js:_

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

app.get('/holamundo', (req, res) => {
    return res.status(200).send('Hola mundo, soy el primer endpoint');
});

exports.app = functions.https.onRequest(app);
```

En las primeras lineas, agregamos las dependencias necesarias para este proyecto, más a detalle hace lo siguiente:

* **firebase-functions:** es un módulo npm que te ayuda a crear funciones de firebase.
* **firebase-admin:** es el **[SDK de Firebase](https://firebase.google.com/docs/admin/setup)** que te permite poder usar funciones y tener el control de todos los servicios de Firebase.
* **express:** es **[ExpressJS](https://expressjs.com/es/)** la librería que nos va a permitir crear el código del servidor
* **cors:** es un modulo npm que nos permite correr funciones separado del cliente. Por tanto, _app.use_ solo nos permite habilitar CORS para nuestra instancia de express.

La parte de _app.get_ nos permite crear el enpoint "Hola Mundo". Estamos usando **[express routing](https://expressjs.com/en/guide/routing.html)** aquí. Para más info de como funciona esto, puedes revisar este [**tutorial**](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4).

Para este propósito, este _app.get_ está creando una petición **HTTP GET** que te permite crear la petición _req_ y la respuesta _res_. Cuando un endpoint es llamado, regresará "Hola mundo, soy el primer endpoint" junto con un código HTTP 200, que significa que todo estuvo correcto. Más información sobre los status HTTP [**aquí**](https://developer.mozilla.org/es/docs/Web/HTTP/Status).

La última parte del código, expone nuestra aplicación express para que pueda ser acceda. Ya con todo esto inicializado, vamos a la terminal:

```shell
firebase serve
```

Y tenemos que utilizar la dirección que nos provee la terminal en Postman para ver lo siguiente:

{{< figure src="/blog/image-25.png" caption="Nuestro primer endpoint" >}}

Ahora que tenemos nuestro endpoint inicial, vamos a empezar a utilizar nuestra base de datos.

## CRUD API usando la base de datos

Para la API que estamos creando, necesitamos crear las operaciones necesarias que son: Crear, Leer, Actualizar y Borrar (o CRUD por sus siglas en inglés).

En Firebase, tienes dos opciones para usar la base de datos. Puedes utilizar una base de datos tradicional o puedes utilizar **cloud firestore**. Para este tutorial, vamos a usar **cloud firestore** debido a que es mas fácil de utilizar y más versatil. **Cloud Firestore** es una **[base de datos NoSQL](https://en.wikipedia.org/wiki/NoSQL)** que te permite guardar tus datos en forma de documentos y colecciones. Esto es una base de datos SQL es similar al concepto de filas y columnas.

En la sección de "Configuración Inicial", ya agregamos cloud firestore a nuestro proyecto. Ahora vamos a acceder, para poder usar el SDK de forma local, para hacer esto tendremos que hacer lo siguiente:

Vamos a "Configuración de proyecto":

{{< figure src="/blog/image-26.png" caption="Configuración de proyecto - Firebase" >}}

De ahí nos vamos a "Cuentas de servicio" y tendremos que ver una imagen como esta:

{{< figure src="/blog/libros-api-14.png" caption="Cuentas de Servicio - Firebase" >}}

Damos click en el botón "Generar nueva clave privada" y nos descargará un archivo que deberemos poner en el directorio de nuestro proyecto, yo lo pondré en _libros-api/functions_ y renombraré el archivo a _permisos.json._ 

Con todo eso creado, vamos al archivo _index.js_ de nuestro proyecto y agregamos el siguiente código:

```javascript
var permisos = require("./permisos.json");
admin.initializeApp({
  credential: admin.credential.cert(permisos),
  databaseURL: "https://url-que-te-da-firestore.firebaseio.com"
});

const db = admin.firestore();
```

Lo que hacemos con este código es agregar el archivo de permisos y creamos una variable llamada db, que representa nuestra instancia de firestore. Con todo estos valores creados, vamos a pasar a crear nuestro primer endpoint.

### Create

Para hacer un create, necesitamos utilizar una petición POST, para eso usaremos el siguiente código:

```javascript
app.post('/api/libros', (req, res) => {
    (async () => {
        try {
          await db.collection('libros').doc('/' + req.body.id + '/')
              .create({titulo: req.body.titulo});
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
    })();
});
```

Este código crea el endpoint "/api/libros" que te permite hacer una petición POST. Cuando la petición POST es hecha, agrega el titulo a nuestra base de datos llamada "libros" junto con un id. Las colecciones en las bases de datos NoSQL son colecciones de documentos.

Cuando hagamos una petición desde Postman, veremos lo siguiente:

{{< figure src="/blog/image-28.png" caption="Create endpoint, consumiéndolo" >}}

Y si vamos a la página de cloud firestore, veremos lo siguiente:

{{< figure src="/blog/image-29.png" caption="Nuestro dato inicial en Cloud Firestore" >}}

Como vemos, ya tenemos nuestro dato en nuestra base de datos.

### Modificación intermedia

Esto lo haremos simplemente para tener una especia de salida estándar para nuestros endpoints, pondremos el siguiente código:

```javascript
function salida(codigo, entrada){
    var today = new Date();
    var date = today.getFullYear()+'-'
    +(today.getMonth()+1)+'-'
    +today.getDate()+"|"
    +today.getHours() + ":" 
    + today.getMinutes() + ":" 
    + today.getSeconds();
    
    if(codigo === "200") return {
        mensaje : "Proceso terminado exitosamente",
        folio : date,
        resultado : entrada
    }

    if(codigo === "201") return {
        mensaje : "Elemento creado exitosamente",
        folio : date,
        resultado : entrada
    }

    if(codigo === "500") return {
        mensaje: "Ocurrio un detalle en el servidor",
        folio : date,
        resultado : entrada
    }

    return {
        mensaje: "Ocurrio un detalle en el servidor",
        folio : date,
        resultado : entrada
    }
}
```

Y modificaremos nuestro antiguo endpoint de crear para que se vea de la siguiente manera:

```javascript
app.post('/api/libros', (req, res) => {
    (async () => {
        try {
          await db.collection('libros').doc('/' + req.body.id + '/')
              .create({titulo: req.body.titulo});
          return res.status(200).send(salida("200", "Libro creado correctamente"));
        } catch (error) {
          console.log(error);
          return res.status(500).send(salida("500", error));
        }
    })();
});
```

Lo que nos dará la siguiente salida:

{{< figure src="/blog/image-30.png" caption="Salida de nuestro nuevo endpoint" >}}

Cómo podemos observar, con esto tenemos una salida más entendible.

### Leer

Este endpoint nos va a permitir leer todo lo que tengamos en nuestra base de datos:

```javascript
app.get("/api/libros", async (req, res) => {
  try{
      
      let query = db.collection("libros");
      const querySnapshot = await query.get();
      let docs = querySnapshot.docs;

      const response = docs.map((doc) => ({
          id: doc.id,
          titulo: doc.data().titulo,
      }));

      return res.status(200).json(salida("200", response));
  } catch (error) {
      return res.status(500).json(salida("500", error));
  }
})
```

Y este nos va a permitir leer un elemento en especifico:

```javascript
app.get('/api/libros/:libro_id', (req, res) =>{
  (async () => {
      try{
          const doc = db.collection('libros').doc(req.params.libro_id);
          const item = await doc.get()
              const response = item.data();
              return res.status(200).json(salida("200", response))
      } catch(error) {
          return res.status(500).send(salida("500", error));
      }
  })();
});

```

### Modificar

Este endpoint nos va a permitir modificar nuestros elementos:

```javascript
app.put("/api/libros/:libros_id", async (req, res) => {
  try {      
      const document = db.collection("libros").doc(req.params.libros_id);
      
      await document.update({
          nombre: req.body.nombre,
      });
      
      return res.status(200).json(salida("200", "El libro ha sido actualizado"));
  } catch (error) {
    return res.status(500).json(salida("500", error));
  }
});

```

### Borrar

```javascript
app.delete("/api/libros/:libros_id", async (req, res) => {
  try {
    const doc = db.collection("libros").doc(req.params.libros_id);
    await doc.delete();
    return res.status(200).json(salida("200", "El libros ha sido borrado exitosamente"));
  } catch (error) {
    return res.status(500).send(salida("500", error));
  }
});

```

## Subiendo nuestro API a Firebase

Ya que tenemos nuestro API CRUD funcional es el momento de subirla a Firebase. Para eso lo único que tenemos que hacer es lo siguiente:

```shell
firebase deploy
```

Y listo, con esto ya tenemos todo para subir nuestro API a producción, una vez que termine el proceso, obtendremos nuestra url para poder acceder a nuestra API y habremos finalizado.

## Conclusiones

Y listo, como podemos ver, utilizar Firebase para nuestro backend es una solución bastante rápida de implementar y nos permite liberar rápidamente una API a producción... En el siguiente artículo veremos cómo conectar una PWA a esta API que creamos.

Saludos!!

