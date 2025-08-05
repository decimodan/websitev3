+++
author = "Daniel Guerrero"
categories = ["Vuejs"]
date = 2019-09-12T03:15:46Z
description = ""
draft = false
image = "/blogo/vuejsPortada-1.webp"
slug = "que-es-vuejs"
summary = "Hace un rato le di una oportunidad a Vue.js y te quiero contar por que me ha gustado y por que te recomiendo que empieces a utilizarlo en tus proyectos. 😎"
tags = ["Vuejs"]
title = "Qué es Vue.js y por que me gusta"
thumbnail = "/blogo/vuejsPortada-1.webp"
+++


Siempre me gusta aprender cosas nuevas (ademas es algo que creo que todo desarrollador debería hacer a menudo) así que desde hace un rato le di una oportunidad a **[Vue.js](https://vuejs.org/)** y te quiero contar por que me ha gustado y por que te **recomiendo que empieces a utilizarlo en tus proyectos**. 😎

<iframe src="https://giphy.com/embed/VgGthkhUvGgOit7Y9i" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/devrock-js-javascript-vuejs-VgGthkhUvGgOit7Y9i"></a></p>

## Framework Progresivo

Vue.js es un framework progresivo...

<iframe src="https://giphy.com/embed/l3q2K5jinAlChoCLS" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-l3q2K5jinAlChoCLS"></a></p>

Eso quiere decir (en pocas palabras) que podemos usarlo para algo muy _(muy...)_ básico o para algo muy (muy...) complejo como una **[Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)**, una **[Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)**, etc, primando siempre el _**desarrollo y el rendimiento**_.

Si queremos hacer el uso más básico de Vue y crear una aplicación, basta con importar la librería en tu documento HTML de la siguiente forma:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>
```

Eventualmente si nuestra aplicación crece y queremos enfocarnos a **componentes** podemos hacerlo sin ningún problema.

Cuando empecemos a manejar muchos ficheros podemos crear  archivos con **.vue** y hacer que **[Webpack](https://webpack.js.org/)** los gestione y los empaquete. Si vamos a tener muchas vistas podemos utilizar _**[vue-router](https://router.vuejs.org/)**_, para manejar el estado de la aplicación podemos utilizar a [**_vuex_**](https://vuex.vuejs.org/) y asi agregar más y más cosas de una forma muy simple.

Resumiendo, si queremos algo básico, Vue es perfecto. Si queremos desarrollar algo más complejo, podemos ir ampliando a Vue con _"plugins"_ a medida que nuestro desarrollo lo vaya necesitando.

## Ciclo de Vida

Una de las cosas que más me gusta de Vue es el ciclo de vida de sus componentes, gracias a esto, podemos manejar el comportamiento de los mismos dependiendo de la situación. La siguiente imagen [(sacada de aquí)](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) muestra más a detalle esto:

{{< figure src="/blog/lifecycle.png" caption="Ciclo de vida de los componentes en Vue.js" >}}

## Data y Methods

Otra cosa que me encanta es como organizan los diferentes elementos dentro de un componente en Vue. Tanto los datos como el modelo del componente se encuentran dentro de un objeto **_data_** y los métodos que creamos se encuentran dentro de un objeto **_methods._**

Evan You (creador de Vue) explica que esto lo hace debido a que la sintaxis en **ES6** no ofrece ventajas prácticas sobre la definición de objetos planos, excepto por temas de preferencia de sintaxis... A decir verdad, creo que para como funciona Vue es bastante correcto su uso y si es tu primer framework Javascript te vas a adaptar sin ningún problema.

```javascript
Vue.component('componente', {
    data: {},
    methods: {}
})
```

## Componentes

Hace un momento dijimos que Vue puede utilizarse como una librería para realizar algo muy simple (siendo un reemplazo de jQuery por decirlo de alguna manera...) pero la verdadera potencia de Vue se muestra cuando utilizamos _**componentes**_. Podemos estructurar nuestro proyecto de esta forma sin ninguna complicación y podemos hacerlo tan complejo como haga falta.

<iframe src="https://giphy.com/embed/UqpyIO8Mg9OhBJva13" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/transparent-UqpyIO8Mg9OhBJva13"></a></p>

## Templates

Sin duda, mi parte favorita, aunque seguramente es la que más detractores tiene (en parte por la gran comunidad de desarrolladores [**React**](https://es.reactjs.org/)).

Vue contiene una plantilla con la extension **_.vue_** donde podemos tener HTML, CSS y Javascript en un único archivo.

Esto es beneficioso debido a que si ya sabes [**_Bootstrap_**](https://getbootstrap.com/), [**_Materialize_**](https://materializecss.com/) o cualquier otro framework para construir interfaces web no tienes que dejarlos botados y aprender [_**JSX**_](https://es.reactjs.org/docs/introducing-jsx.html), lo que de entrada le da puntos extra a la gente de desarrollo que no se siente comoda con la maquetacion. Un archivo _**.vue**_ se ve de la siguiente forma:

```html
<template>
 <!--- HTML -->
</template>

<script>
// JavaScript
</script>

<style>
/* CSS */
</style> 
```

Webpack (especificamente algo llamado vue-loader) extrae cada parte a su correspondiente formato y archivo a la hora de realizar nuestro archivo de producción, permitiendo tener todo separado por componentes.

Esto al parecer es nada, pero esto está más dirigido a los entornos de desarrollo, por lo que el código final de producción no tiene archivos _**.vue**_, si no que todo se incluye en un archivo _**build.js.**_

## Directivas

Los eventos en Vue son manejados por las directivas, por ejemplo: si queremos que un elemento responda a un click (evento click) debemos hacerlo de la siguiente manera:

```html
<button @click="metodo()">Click</button>

```

Donde _**@click**_ representa a la directiva (que en este caso hace que este elemento responda al click del botón). Esto parece nada, pero a la larga, nos permite mantener separada la vista de la lógica de la aplicación.

## VUE-CLI

Cuando empiezas con un nuevo framework siempre quisieras una guía de como estructurarlo de mejor forma... En Vue esto se hace con el **[VUE-CLI](https://cli.vuejs.org/)** que nos ayuda a iniciar un proyecto nuevo, nos crea la estructura de carpetas y archivos de configuración _**(Webpack)**_ y otras herramientas que nos ayudan durante el desarrollo. Para utilizarlo basta con hacer lo siguiente:

```shell
# Instalamos VUE-CLI
$ npm install --global vue-cli
# Generamos un proyecto Webpack preparado para todo
$ vue init webpack
```

Esta parte se merece un articulo más a detalle que seguramente escribiré más adelante...

## Vuex

Una de las cosas más complejas en las aplicaciones de "cierto tamaño" es manejar estado de las mismas.

Vuex es basicamente la aplicacion del patron **[Flux](https://facebook.github.io/flux/)**. Esta imagen muestra más a detalle de lo que hablo:

{{< figure src="/blogo/vuex.webp" caption="Vuex a detalle" >}}

**Vuex** es un plugin (y se vuelve aún más poderoso usando cosas como **[vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)**) y esto nos abre la posibilidad de acceder al estado y metodos desde el componente que se lo requiera. Basicamente, por medio de _**getters**_ podemos acceder una forma muy sencilla.

Podemos cambiar el estado de los componentes de manera mutacional...

<iframe src="https://giphy.com/embed/l3q2K5jinAlChoCLS" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-l3q2K5jinAlChoCLS"></a></p>

Osea que, para modificar un estado debemos hacer una **_mutación_** para lograr la _**reactividad**_ y que así la vista nos muestre los cambios de inmediato. Ademas, todo esto sirve para las llamadas asíncronas, por lo que estas tambien pueden manipular el estado lo que le da una potencia increíble.

## Conclusión

Vue me parece una librería increible con un gran trabajo detras y me parece que tomaron algunos aspectos de React y Angular, pero tomando lo mejor de ellos y haciendolo a su manera.

Si llegaste hasta aquí buscando si es mejor o peor que los anteriores la respuesta rápida es: depende... Creo que hay 1 aspecto que definen la potencia de un framework (y que no tienen que ver 100% con el mismo), que es:

* **La experiencia del programador**

Y es que, al final del día, Vue.js es una herramienta que está para ayudarnos a realizar cualquier proyecto (independientemente del tamaño) pero no es la panacea ni lo "mejor de lo mejor".

> Mi recomendación final es: comparalo, usalo pero no te ancles a este framework (ni a ningún otro).

Mejor prueba Vue.js y formate tu propio criterio y luego me comentas tu experiencia en los comentarios... Saludos!