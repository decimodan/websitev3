+++
author = "Daniel Guerrero"
categories = ["Opiniones", "Javascript", "Vuejs"]
date = 2020-10-21T22:17:00Z
description = ""
draft = false
image = "/blogo/PRLP.webp"
slug = "pwas-mas-rapidas-con-prpl"
tags = ["Opiniones", "Javascript", "Vuejs"]
title = "PWAS más rápidas con PRPL"
thumbnail = "/thumbs/PRLP.webp"

+++


Estructurar y sobretodo entregar nuestras aplicaciones y **[PWA's](https://decimodan.com/blog/2019/progressive-web-apps/) de la forma más rápida y eficiente posible** es una de las partes fundamentales para lograr que los usuarios tengan una experiencia positiva.

Por tanto **PRPL** viene para atacar este problema, pero... ¿Qué es **PRPL**?

## El patrón PRPL

Primero que nada **PRPL es un patrón para estructurar y entregar aplicaciones web y Progressive Web Apps, enfocado en dos cosas:**

* Entregar a nuestro usuario la aplicación de la forma más rápida posible
* Mejorar el rendimiento en el inicio de la aplicación

En otras palabras, darle al usuario la aplicación lo más rápido posible y que cuando la utilice pueda interactuar con ella muy rápidamente. Mencionar que esto se lleva perfectamente de la mano con el concepto de **[Critical Rendering Path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path#:~:text=The%20Critical%20Rendering%20Path%20is,render%20path%20improves%20render%20performance.)**.

Las iniciales corresponden a lo siguiente:

* **Push:** Se refiere a **entregar** todos los recursos necesarios para la ruta inicial y _solamente esos recursos_ para asegurarse que estén disponibles lo más rápido posible.
* **Render:** Visualiza la ruta inicial y hacerla interactiva antes de cargar cualquier recurso adicional.
* **Pre-cache:** [**Almacena en caché**](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/) los recursos para rutas adicionales que el usuario probablemente visite, con esto, maximizamos la capacidad de respuesta a las solicitudes posteriores y la flexibilidad en condiciones de red deficientes.
* **Lazy-Load:** Carga de forma diferida recursos según los solicite el usuario. Los recursos para las rutas clave deben cargarse inmediatamente desde la caché, mientras que los recursos menos utilizados se pueden recuperar posteriormente cuando el usuario los necesite.

> [**El patrón PRPL fue presentado por primera vez en 2016**](https://www.polymer-project.org/blog/2016-05-19-Polymer-IO-2016) por el equipo de Polymer, pero es claramente aplicable a otros stacks. (como muchos de los conceptos que nos trajeron que hoy son el pan de cada día en **[VueJS](__GHOST_URL__/tag/vuejs/)** por ejemplo)

El servidor y el **[Service Worker](https://decimodan.com/tags/vuejs/)** trabajan juntos para almacenar previamente los recursos de las rutas inactivas. Cuando el usuario cambia de ruta, la aplicación carga de forma diferida los recursos necesarios que aún no se han almacenado en caché y crea las vistas necesarias.

## ¿Por qué usar PRPL?

[**PWA's**](https://decimodan.com/blog/2019/progressive-web-apps/) creada con **PRPL** en mente, tratan de demostrar confiabilidad, rapidez y no perder la atención del usuario. Pero más de eso, PRPL ayuda en:

* **Mejorar la preparación para la interacción de una aplicación:** Para ello, se asegura de que no se envíen recursos extraños al navegador antes de que la primera vista se muestre y se vuelva interactiva.
* **Aumentar la eficiencia del almacenamiento en caché, especialmente con el tiempo:** Para esto, envía recursos al navegador con una granularidad alta. Cuando los recursos se eliminan o se agrupan de manera menos agresiva, cada cambio en el código invalida menos el caché.
* **Reducir la complejidad del desarrollo y la implementación:** Cualquiera que haya desarrollado una [**PWA's**](https://decimodan.com/blog/2019/progressive-web-apps/) sabe que no es lo mismo que desarrollar una **SPA**. Para esto, PRPL se basa en el gráfico de dependencia implícita de la aplicación  para asignar cada punto de entrada al conjunto preciso de recursos necesarios, lo que reduce o elimina la necesidad de una gestión manual de la entrega de recursos. (¿Alguien dice optimización de Bundles?)

Esta forma de pensar se vuelve útil porque las aplicaciones típicas de hoy son mucho más pesadas de lo necesario. Para mejorar esa experiencia, debemos comenzar por hacer que las aplicaciones sean más livianas en general. Esto implica comprender y considerar cuidadosamente el peso de todo lo que incluimos, tanto nuestro propio código como nuestras dependencias.

Pero esto es lo mínimo. También solemos _servir_ nuestras aplicaciones de forma ineficiente, en pocas palabras, ofrecemos un **_bundle todo en uno_** que contiene todos los recursos de nuestra aplicación. Este paquete debe recibirse y procesarse en el cliente antes de que el usuario pueda hacer algo.

De ahora en adelante, necesitamos estructurar y servir nuestras aplicaciones de manera que:

* Una vez realizada la solicitud inicial de un usuario, entregamos y procesamos solos los recursos necesarios para crear la ruta solicitada, asegurando que nuestra aplicación sea interactiva lo más rápido posible.
* Una vez interactiva, comenzamos a entregar de manera oportuna los recursos adicionales necesarios para garantizar que nuestra aplicación responda **instantáneamente** a las solicitudes de los usuarios.
* Las actualizaciones de nuestra aplicación deben ser eficientes y consumir la menor cantidad de tiempo y ancho de banda posible.

## ¿Qué tecnologías necesita PRPL para funcionar?

**PRPL** es un patrón conceptual que puede ser implementado de varias maneras, pero una de las más sencillas es con una combinación de los siguientes elementos:

* Un sistema de módulos modernos basado en [**Javascript**](https://decimodan.com/tags/javascript/) con herramientas que te permitan construir tu grafo de dependencias. [**VueJS**](https://decimodan.com/tags/vuejs/) es completamente válido aquí.
* [**Service Workers**](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/) para realizar la instalación de los recursos de las vistas del usuario (esto permite activar la arquitectura **[offline-first](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/))**.
* **[Preload](https://web.dev/preload-critical-assets/),** para enviar los recursos de la manera más rápida posible. Inclusive, podrían aprovecharse los  **[preload link headers](https://w3c.github.io/preload/#server-push-http-2) ** que pueden ser interceptados por servidores cooperantes y actualizados a **[respuestas Push con HTTP2](https://www.smashingmagazine.com/2017/04/guide-http2-server-push/)**. Es importante tener en mente que, si bien es bastante poderoso, **Push** tiene sus problemas conocidos. Sin embargo, el uso de **PRPL** de **[Service Workers](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/)** puede eludir el problema de sobrecarga.

## ¿Qué se necesita para implementar el patrón PRPL?

Una gran parte de **PRPL** está cambiando la mentalidad de empaquetado de  **[JS](https://decimodan.com/tags/javascript/) ** (aquí entra muy bien el concepto de **[micro-frontends](https://decimodan.com/blog/2020/frontend-2020/)**) y entregando recursos lo más cercano posible a la granularidad en la que están creados (al menos en términos de módulos funcionalmente independientes). A todo esto...

## ¿Como lograr la granularidad?

* Dividiendo el código y carga diferida basada en rutas o componentes (y si todavía no se encuentra en componentes, pasarlo a componentes)
* Quizás estés usando módulos ES para **[Webpack](https://webpack.js.org/)**, por tanto, deberías utilizar la **[importación dińamica](https://v8.dev/features/dynamic-import)** de forma predeterminada.
* Para la parte de **Push/Preload de PPRL, [Webpack](https://webpack.js.org/)** también admite la **[precarga como un comentario mágico](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)** para pre-cargar código critico.
* **Pre-caching** de las rutas restantes. Esto se puede lograr utilizando [**Service Worker**](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/)**s**. No es raro aprovechar una biblioteca como [**Workbox**](https://developers.google.com/web/tools/workbox) para simplificar el proceso de almacenamiento en caché de rutas y fragmentos para la aplicación.

## ¿Qué estructura de aplicación utiliza PRPL?

**PRPL** fomenta una arquitectura de aplicación de una sola página (SPA) con la siguiente estructura:

* El punto inicial de la aplicación se _sirve_ para cada ruta válida
* Este archivo debe ser muy pequeño, ya que se entregará desde diferentes URL, por lo que se almacenará en caché varias veces.
* Todas las URL de recursos en el punto de entrada deben ser absolutas, ya que se pueden proporcionar desde URL que no sean de nivel superior.
* El  **[shell o app-shell](https://developers.google.com/web/fundamentals/architecture/app-shell) ** que incluye la lógica de la aplicación de nivel superior, el router, etc.
* Utilizar **lazy-load** para cargar otros fragmentos de la aplicación.
* Un fragmento puede representar el código de una vista en particular u otro código que se puede cargar de forma _**lazy**_ (por ejemplo, parte de la aplicación principal que no son necesarias para la primera pantalla, como menús que no se muestran hasta que un usuario interactúa con la aplicación). El  **[shell](https://developers.google.com/web/fundamentals/architecture/app-shell) ** es responsable de importar dinámicamente los fragmentos según sea necesario.

{{< figure src="/blogo/lazy_load.webp" caption="Lazy-Load" >}}

La aplicación debe importar dinámicamente estos componentes usando **_lazy-load_** según sea necesario. Por ejemplo, cuando el usuario cambia a una nueva ruta, importa los fragmentos asociados con esta ruta. Esto puede iniciar una nueva solicitud al servidor o simplemente cargar el recurso desde la caché.

## Conclusiones

Más allá de apuntar a los objetivos y estándares fundamentales de las [**PWA**](https://decimodan.com/blog/2019/progressive-web-apps/), **PRPL** se esfuerza por optimizar para:

* Disponibilidad mínima para la interacción, especialmente en el primer uso (independientemente del punto de entrada)
* Máxima eficiencia de almacenamiento en caché, especialmente tomando en cuenta las actualizaciones.
* Simplicidad de desarrollo e implementación

Por tanto, **PRPL** es un patrón que se ha utilizado a gran escala desde su introducción en 2016 y sigue siendo un enfoque completamente valioso que vale la pena considerar para tu aplicación.

Más información que puedes consultar:

* **[Instant loading with the PRPL pattern](https://web.dev/apply-instant-loading-with-prpl/)**
* **[PRPL in the Polymer 3.x docs](https://polymer-library.polymer-project.org/3.0/docs/apps/prpl)**
* **[PRPL using Custom Elements and Firebase](https://prpl-ce-firebase.netlify.app/#0)**
* **[HTTP server for Node designed to serve PRPL apps in production](https://github.com/Polymer/prpl-server)**
* **[End-to-end apps with Polymer and PRPL-50](https://www.youtube.com/watch?v=0A-2BhEZiM4)**
* **[PRPL-30 for delivering code to feature phones](https://dev.to/addyosmani/loading-web-pages-fast-on-a-20-feature-phone-8h6)**
* **[Preact CLI with support for PRPL](https://preactjs.com/cli/)**

Nota final: Este artículo es una traducción de [este](https://addyosmani.com/blog/the-prpl-pattern/) increíble artículo.

