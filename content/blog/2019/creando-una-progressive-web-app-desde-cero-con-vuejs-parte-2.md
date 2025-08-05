+++
author = "Daniel Guerrero"
categories = ["Vuejs", "Tutoriales", "Javascript"]
date = 2019-10-03T16:41:01Z
description = ""
draft = false
image = "/blogo/offline_first.webp"
slug = "creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2"
summary = "En el tutorial anterior vimos cómo crear una calculadora básica con Vuejs. Ahora revisaremos cómo aplicar las técnicas necesarias para crear nuestra primera PWA Offline."
tags = ["Vuejs", "Tutoriales", "Javascript"]
title = "Creando una Progressive Web App desde cero con VueJS - Parte 2"
thumbnail = "/blogo/offline_first.webp"
+++

En la **[parte 1](https://decimodan.com/blog/2019/creando-una-pwa-con-vuejs-parte-1/)** vimos como crear nuestra aplicación base, ahora toca mostrar como lograr que nuestra aplicación funcione offline... En pocas palabras, lo que vamos a aprender es lo siguiente:

* Qué es un **[Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers)** y como nos ofrece una experiencia **offline**
* Como lograr que nuestra aplicación funcione con **caché**
* Como mostrar probar nuestra aplicación en móvil

## El paradigma Offline-First

En la web de hoy la mayoría de sitios web fallan cuando no tienen conexión a internet. Esto es tan común que los usuarios ni siquiera se quejan de esta mala experiencia.

Pero, para una **[Progressive Web App](https://decimodan.com/blog/2019/progressive-web-apps/)** es diferente, ya que (como habíamos visto) esto cierra la brecha entre las aplicaciones nativas (Android/iOS) y las aplicaciones web. A diferencia de las páginas web, los usuarios de las aplicaciones nativas no aceptan malas experiencias debido a la poca (o mala) conectividad de internet.

Es por eso que crear **[PWAs](https://decimodan.com/blog/2019/progressive-web-apps/)** no solo requiere de [**nuevas tecnologías**](https://decimodan.com/blog/2019/que-es-vuejs/) sino un nuevo paradigma para poder satisfacer las expectativas de nuestros usuarios. Este paradigma es llamado  **[Offline-First](http://offlinefirst.org/)** y puede ser traducido como:

> **Offline-First** significa proporcionar siempre la mejor experiencia de usuario posible dependiendo de las condiciones de red actuales del usuario

## Hagamos nuestra app offline

Vamos a empezar con **[nuestra app](https://decimodan.com/blog/2019/creando-una-pwa-con-vuejs-parte-1/)** y vamos a lograr que funcione **offline**. Generalmente, todos los archivos estáticos en una web (CSS, imágenes, JS, etc.) se "solicitan" cada vez que se actualiza la página, sin embargo, nuestra aplicación no requiere hacer llamadas al servidor para realizar sus cálculos, solamente requiere la conexión al servidor para obtener estos archivos estáticos. Para lograr esto significa que debemos almacenarlos en caché utilizando un **[Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers)**.

{{< figure src="/blog/chrome_offline.png" caption="¿Te suena esta imagen?" >}}

Si has desarrollado páginas web por algún tiempo, esto no te sonará muy sencillo (o posible)... No te preocupes, ya casi hemos hecho todo debido a que nuestra aplicación está basada en la plantilla  **[vue-pwa](https://github.com/vuejs-templates/pwa)** que nos permite el almacenamiento previo en caché de archivos estáticos, sin embargo, no es fácil de entender qué está pasando si no se está familiarizado con los conceptos de **[Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers)** y el **[API de CacheStorage](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)**, así que veremos de que tratan estos conceptos.

## ¿Qué es un Service Worker?

{{< figure src="/blogo/service_worker.webp" caption="Diagrama de un Service Worker" >}}

Un **Service Worker** es un script que el navegador ejecuta en segundo plano, separado de la página web, es decir, no puede interactuar directamente con la página web ni acceder directamente a los elementos del **[DOM](https://developer.mozilla.org/es/docs/DOM)** debido a que el Service Worker se ejecuta en un **[hilo diferente](https://es.wikipedia.org/wiki/Hilo_(inform%C3%A1tica))**.

Esto permite crear características que no necesitan la interacción directa del usuario, por ejemplo, la gestión de actualizaciones, el almacenamiento en caché de los datos, la gestión de solicitudes de red, etc.

**Nota Importante:** Las aplicaciones progresivas no necesariamente implementan un modo offline en cada dispositivo: **[iOS todavía no soporta 100% las funcionalidades de los Service Workers](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API).** Esta es otra razón por las llamamos **[progresivas](https://decimodan.com/blog/2019/progressive-web-apps/)...**

> Esto quiere decir que se ejecutará en todos los dispositivos y propondrán una experiencia de usuario más avanzada si es que el dispositivo puede manejarlo.

<iframe src="https://giphy.com/embed/l3q2K5jinAlChoCLS" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-l3q2K5jinAlChoCLS"></a></p>

## Compatibilidad con navegadores

{{< figure src="/blogo/pwa_browser_support.webp" caption="Navegadores compatibles con PWAs" >}}

Las  **[Progressive Web Apps](https://decimodan.com/blog/2019/progressive-web-apps/)** son compatibles con cualquier dispositivo que soporte alguno de los siguientes navegadores:

* **Google Chrome** (v40+)
* **Firefox** (v44+)
* **Safari** (v11.1+)
* **Edge** (v17+)

Adicionalmente, **Google Chrome** agregó una funcionalidad que agrega el soporte para **[Progressive Web Apps](https://decimodan.com/blog/2019/progressive-web-apps/)** en plataformas de escritorio, como:

* **Chrome OS** (Chome 67+)
* **Linux** (Chrome 70+)
* **Windows** (Chrome 70+)
* **macOS** (Chrome 72+)

## ¿Cómo hago esto en mi proyecto?

Manos a la obra, vamos a añadir esta funcionalidad a nuestro proyecto, para ello, utilizaremos las bondades de algo llamado  **[sw-precache](https://github.com/goldhand/sw-precache-webpack-plugin)** que nos permite guardar en caché los archivos estáticos que necesita nuestra aplicación, es decir: HTML, CSS y Javascript que requiere nuestra interface.

De esta manera, no importa qué conectividad de red tenga el usuario, los archivos principales se cargarán y su aplicación estará en funcionamiento. Esto se llama **pre-caching.**

Vamos a utilizar **[sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin)**, pero no hay que instalar nada por qué ya viene configurado con nuestro template, pero debemos configurarlo correctamente.

## Configurando sw-precache

Veamos un poco el archivo **build/webpack.prod.conf.js** (resumido para ver lo importante):

```javascript
 // Service worker caching
new SWPrecacheWebpackPlugin({
    cacheId: 'calculadora',
    filename: 'service-worker.js',
    staticFileGlobs: ['dist/**/*.{js,html,css}'],
    minify: true,
    stripPrefix: 'dist/'
})
```

Como vimos el en **[ejemplo anterior](https://decimodan.com/blog/2019/creando-una-pwa-con-vuejs-parte-1/)**, si corremos esta aplicación no podemos utilizarla offline, entonces modificaremos lo necesario para poder utilizarla offline...

```javascript
 // Service worker caching
new SWPrecacheWebpackPlugin({
    cacheId: 'calculadora',
    filename: 'service-worker.js',
    mergeStaticsConfig: true,
    staticFileGlobs: ['dist/**/*.{js,css}'],
    minify: true,
    stripPrefix: 'dist/',
    runtimeCaching: [
        {
            urlPattern: /\/$/,
            handler: 'cacheFirst'
        }
    ]
})
```

Con esto, le decimos al plugin que queremos que haga un **pre-caching** de los archivos js y css, además que la carpeta **/dist** (que es donde se encuentra nuestro aplicativo productivo) sea el directorio base para leer todos los archivos. Para probar utilizaremos **[Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)**, que nos permitirá revisar nuestros **Service Workers** si están trabajando cómo se debe, para ello haremos lo siguiente:

```bash
npm run build
```

Y usaremos  **[Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)** para mostrar nuestro desarrollo, de la siguiente manera:

{{< figure src="/blogo/web_server_for_chrome.webp" caption="Así configuramos Web Serve for Chrome para nuestro proyecto" >}}

Toca acceder a la dirección: **http://localhost:8887/** desde **Google Chrome** para que se muestre lo siguiente:

{{< figure src="/blogo/prueba_pwa.webp" caption="Nuestra primera App Offline" >}}

Para comprobar que funciona **offline**, nos vamos a las **DevTools de Chrome > Application > Service Workers,** tildamos la opción **Offline** y recargamos la página:

{{< figure src="/blogo/prueba_pwa_2-1.webp" caption="En los recuadros, lo que hay que revisar para comprobar que todo funciona OK" >}}

¡Genial!, ahora sabemos que es un **Service Worker** y como **[sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin)** nos permite configurarlo de una forma muy sencilla (y además potente). Ahora ver cómo es que el navegador realmente almacena en caché los archivos estáticos.

## CacheStorage API

En primer lugar, es importante comprender cómo funciona el almacenamiento de caché en general. **[CacheStorage API](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)** es un tipo bastante nuevo de capa de almacenamiento que nos permite administrar explícitamente el almacenamiento en caché de nuestros archivos. **[CacheStorage](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage) no se parece en nada a [AppCache](https://developer.mozilla.org/es/docs/Web/HTML/Recursos_offline_en_firefox)**, debido a que **CacheStorage** es mucho más avanzado y nos da más libertad.

**CacheStorage** es excelente para nuestro propósito, ya que nos permite administrar en caché nuestros archivos de forma muy granular. Básicamente, podemos decidir individualmente **cómo y cuándo** van a ser entregados nuestros archivos y si debemos hacerlo desde la **memoria caché o desde la red**. A pesar de que podemos idear una estrategia muy personalizada de caché, hay algunas comunes que vale la pena conocer.

Los más comunes son:

* Cache Only
* Cache falling back to network
* Network only
* Network First
* Falling back to cache
* Generic Fallback
* Cache-First

Para este proyecto, utilizaremos la estrategia **Cache-First**...

## La estrategia Cache-First

{{< figure src="/blogo/cache_first-1.webp" caption="Cache First" >}}

Nuestra librería **[sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin)** viene con esta estrategia implementada, esto significa que cuando la aplicación comienza a cargar sus archivos estáticos:

1. El **Service Worker** intercepta las solicitudes.
2. El **Service Worker** intenta entregar los archivos estáticos desde el almacenamiento en caché local
3. **Solamente si no hay archivos disponibles allí,** se conecta a la red para buscarlos
4. Completa la solicitud de la aplicación

En términos generales, **Cache-First** es una buena estrategia para implementaciones básicas offline. Sin embargo, esta estrategia tiene algunas desventajas... Por ejemplo: evita que los usuarios siempre vean la versión más reciente de la aplicación, ya que el **Service Worker** sirve (de preferencia) una versión de la aplicación en caché y esta posiblemente sea obsoleta. En la documentación oficial recomiendan:

> Mostrar una alerta a tus usuarios cuando exista nuevo contenido disponible y dales la oportunidad de recargar la página para mostrar el nuevo contenido

Para nuestro caso no hay problema, debido a que no involucraremos muchos cambios, de otra forma, otra de las estrategias de caché podría ser una mejor opción.

Para profundizar más en este tema recomiendo que entres **[aquí.](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/?hl=es)**

## Ciclo de Vida de un Service Worker

Para implementar con éxito cualquiera de las estrategias de almacenamiento antes descritas es importante estar familiarizado con el ciclo de vida de un **Service Worker.** Simplificando, observamos las siguientes etapas:

* Instalando (Installing)
* Activando/Activado (Activated/Idle)
* Recuperación (Fetch)

Cada una de estas etapas debe completarse durante el ciclo de vida de un **Service Worker.**

{{< figure src="/blogo/ciclo_de_vida_sw.webp" caption="Diagrama Ciclo de Vida de un Service Worker" >}}

Cuando él **Service Worker** entra en una de las etapas emite un evento que podemos obtener. Ahora podemos ver cómo nuestro **Service Worker** está realmente almacenando en caché nuestro archivos estáticos.

### Instalando(Installing)

Evento que generalmente se utiliza para almacenar en caché los archivos que deben estar disponibles antes de que el **Service Worker** esté activo. Por ejemplo: las solicitudes en las que se basa el **Service Worker** para funcionar correctamente. Si algo sale mal, cancelamos la instalación. La próxima vez que el usuario visite la página, el **Service Worker** intentará instalarse nuevamente.

Si hay nuevos archivos estáticos se agregarán a memoria usando lo siguiente:

```javascript
cache.put(cacheKey, responseToCache)
```

De lo contrario, el **Service Worker** pasará a la siguiente etapa:

```javascript
stage.event.waitUntil()
```

Esto se usa mucho en los Service Workers para extender el estado actual hasta la que la **cadena de devoluciones de llamadas (chain of callbacks)** se resuelve.

### Activando (Activated)

Cuando un **Service Worker** es activado, toma el control de nuestra aplicación. Un **Service Worker** necesita ser activado antes de que pueda interceptar solicitudes de búsqueda. Cuando se registra inicialmente, las páginas no lo usarán hasta la próxima vez que se carguen. El método **claim()** obliga a los **Service Workers** a tomar el control de una página de inmediato. También podemos hacer un poco más de gestión de caché aquí y eliminar solicitudes de la caché que ya no forman parte de nuestras URL esperadas.

### Recuperación (Fetch)

**El evento de recuperación (Fetch)** es lo único que no hemos visto y es cómo el **Service Worker** realmente recupera los archivos estáticos almacenados en caché. Esto sucede al escuchar **[eventos de recuperación (fetch events).](https://developer.mozilla.org/es/docs/Web/API/FetchEvent)**

## ¿Qué necesitamos para nuestra Progressive Web App en producción?

Vamos a lo interesante, nuestra aplicación funciona muy bien y todo, pero, necesitamos mostrarla en un entorno en el que podamos usarla en cualquier dispositivo. Los requisitos fundamentales para esto son los siguientes:

1. Conexión HTTPS segura válida
2. __JSON Manifest__ instalado válido
3. Service Workers (cuando menos 1)

Ahora veamos cómo crear un entorno productivo de una forma sencilla con Firebase.

## Creando un entorno de demostración mediante Firebase Hosting

Pasemos a ver cómo mostrar nuestro aplicativo ya realizado y subirlo a un entorno productivo para poder probarlo en nuestros dispositivos móviles, esta parte esta basada en **[este artículo](https://cli.vuejs.org/guide/deployment.html#firebase)**.

### 1) Crear un nuevo proyecto en Firebase

Primero que nada necesitamos iniciar sesión en la **[Consola de Firebase](https://console.firebase.google.com/)** y crear un nuevo proyecto:

{{< figure src="/blog/firebase.png" caption="Creando un nuevo proyecto en Firebase" >}}

### 2. Revisar nuestro "App id" en Firebase

Una vez creado nuestro proyecto, nos vamos a la [**página principal de la consola de Firebase**](https://console.firebase.google.com/) y revisamos lo siguiente:

{{< figure src="/blogo/firebase2.webp" caption="En el recuadro rojo se encuentra tu App Id de Firebase" >}}

### 3) Crear nuestro archivo .firebaserc

Creamos un archivo llamado **.firebaserc** en la raíz de nuestro proyecto e incluimos el siguiente código:

```javascript
{
    "projects": {
        "default": "elappiddetuapp"
    }
}
```

### 4) Creamos nuestro archivo firebase.json

Creamos un archivo llamado **firebase.json** en la raíz de nuestro proyecto e incluimos el siguiente código:

```javascript
{
    "hosting": {
        "public": "dist",
        "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
        ],
        "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
        ]
    }
}
```

En este archivo le decimos a **[Firebase](https://firebase.google.com/)** que en la carpeta **"dist"** se encuentra nuestro aplicativo productivo, que ignore algunos otros archivos y dependencias y que nuestra aplicación inicia en el archivo **"index.html"**.

### 5) Instalamos lo necesario

Instalamos algo llamado **[Firebase CLI](https://github.com/firebase/firebase-tools)** debido a que nos permite hacer nuestros deployments directamente de la consola:

```bash
npm install -g firebase-tools

firebase login

# Si no pueden iniciar sesión con el código anterior, utilizar:
firebase login --no-localhost
```

### 6) Creamos nuestro aplicativo para producción

Esto ya lo habíamos visto, pero necesitamos generar la última versión de nuestro aplicativo antes de subirlo a producción, para esto usamos el siguiente comando:

```bash
npm run build
```

### 7) Subiendo nuestra aplicación a Firebase

Ya tenemos lo necesario, ahora solamente queda subir nuestra aplicación a **[Firebase](https://firebase.google.com/)** usando el siguiente comando:

```bash
firebase deploy --only hosting
```

Terminando este proceso **[Firebase](https://firebase.google.com/)** te proporciona una URL en la que puedes visitar tu aplicación, en nuestro caso es la siguiente:

> [https://calculadora-d3725.firebaseapp.com/](https://calculadora-d3725.firebaseapp.com/)

Veamos como se ve nuestra aplicación en un dispositivo Android, así que entramos a esa URL desde Chrome:

## Auditando nuestra aplicación

Ya que tenemos nuestra aplicación productiva, veamos que tan bien (o mal) cumplimos con los estándares actuales. Para eso utilizaremos [**Ligthouse**](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk), este es el resultado de nuestra aplicación:

{{< figure src="/blog/auditando_nuestra_pwa.png" caption="Resultado de nuestra aplicación con Ligthouse" >}}

## Conclusiones

Como vemos es un poco abrumante al principio, pero es posible llevar nuestra aplicaciones de cero a producción en un tiempo relativamente corto, sin embargo, quedan algunas preguntas en el tintero:

* ¿Qué pasa si quiero montar mi aplicación en mi propio servidor?
* ¿Qué pasa si quiero hacer una aplicación altamente escalable en la nube?
* ¿Cómo puedo establecer todos los elementos de mi aplicación productiva?
* ¿Puedo **[contenerizar](https://www.docker.com/)** mi aplicación?

Algunas de estas dudas serán tratadas en el siguiente artículo donde veremos cómo **[contenerizar](https://www.docker.com/)** nuestra aplicación y la prepararemos para un entorno altamente productivo.

Saludos a todos!

Les dejo bastantes artículos, para que puedas profundizar aún más todos estos temas:

1. [https://auth0.com/blog/vuejs-kanban-board-the-development-process/](https://auth0.com/blog/vuejs-kanban-board-the-development-process/)
2. [https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/](https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/)
3. [https://medium.com/the-web-tub/creating-your-first-vue-js-pwa-project-22f7c552fb34](https://medium.com/the-web-tub/creating-your-first-vue-js-pwa-project-22f7c552fb34)
4. [https://www.monterail.com/blog/pwa-working-offline#targetText=Your%20app%20can%20work%20just,app%20without%20an%20Internet%20connection.](https://www.monterail.com/blog/pwa-working-offline#targetText=Your%20app%20can%20work%20just,app%20without%20an%20Internet%20connection.)
5. [https://laniewski.me/vue/pwa/offline/2019/01/04/creating-offline-first-vue-apps.html](https://laniewski.me/vue/pwa/offline/2019/01/04/creating-offline-first-vue-apps.html)
6. [https://t3chfest.uc3m.es/2018/static/resources/events_slides/Offlinefirst_PWA_con_Firebase_y_Vue.js.pdf?q=1519981612](https://t3chfest.uc3m.es/2018/static/resources/events_slides/Offlinefirst_PWA_con_Firebase_y_Vue.js.pdf?q=1519981612)
7. [https://blog.pusher.com/getting-started-pwa-vue/](https://blog.pusher.com/getting-started-pwa-vue/)
8. [https://github.com/vuejs-templates/pwa/blob/development/docs/prevent_caching.md](https://github.com/vuejs-templates/pwa/blob/development/docs/prevent_caching.md)
9. [https://levelup.gitconnected.com/vue-pwa-example-298a8ea953c9](https://levelup.gitconnected.com/vue-pwa-example-298a8ea953c9)
10. [https://www.monterail.com/blog/pwa-working-offline](https://www.monterail.com/blog/pwa-working-offline)
11. [https://www.monterail.com/blog/pwa-offline-dynamic-data](https://www.monterail.com/blog/pwa-offline-dynamic-data)
12. [https://css-tricks.com/making-your-web-app-work-offline-part-1/](https://css-tricks.com/making-your-web-app-work-offline-part-1/)
13. [https://css-tricks.com/making-web-app-work-offline-part-2-implementation/](https://css-tricks.com/making-web-app-work-offline-part-2-implementation/)
14. [https://www.sicara.ai/blog/2017-06-30-part-three-progressive-web-app-with-vue-js-webpack-material-design](https://www.sicara.ai/blog/2017-06-30-part-three-progressive-web-app-with-vue-js-webpack-material-design)
15. [https://hackernoon.com/build-a-progressive-web-app-in-vuejs-from-zero-to-hero-part-2-the-service-worker-d9babc3d756f](https://hackernoon.com/build-a-progressive-web-app-in-vuejs-from-zero-to-hero-part-2-the-service-worker-d9babc3d756f)
16. [https://medium.com/@n11sh1/how-to-build-pwa-w-vue-cli-3-service-workers-add-to-home-screen-push-notifications-b519c49e142d](https://medium.com/@n11sh1/how-to-build-pwa-w-vue-cli-3-service-workers-add-to-home-screen-push-notifications-b519c49e142d)
17. [https://medium.com/@anuar_harb/service-workers-qu%C3%A9-son-y-c%C3%B3mo-se-comen-a78166b0d88e](https://medium.com/@anuar_harb/service-workers-qu%C3%A9-son-y-c%C3%B3mo-se-comen-a78166b0d88e)
18. [https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=es](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=es)
19. [https://github.com/GoogleChromeLabs/sw-precache](https://github.com/GoogleChromeLabs/sw-precache)
20. [https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook)

