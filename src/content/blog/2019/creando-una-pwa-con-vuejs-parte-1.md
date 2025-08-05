---
author: "Daniel Guerrero"
categories: ["Vuejs", "Tutoriales", "Javascript"]
pubDate: 2019-09-29T03:40:31Z
description: "Creando una Progressive Web App desde cero con VueJS - Parte 1"
draft: false
image: "/blogo/vue_pwa.webp"
slug: "creando-una-pwa-con-vuejs-parte-1"
summary: "En este tutorial crearemos una calculadora que nos sirva para entender el concepto de las Progressive Web Apps y su implementación desde cero con VueJS."
tags: ["Vuejs", "Tutoriales", "Javascript"]
title: "Creando una Progressive Web App desde cero con VueJS - Parte 1"
thumbnail: "/blogo/vue_pwa.webp"
---

Poco a poco la brecha entre las aplicaciones móviles nativas y las aplicaciones web se va "cerrando" hasta llegar al punto donde las [**Progressive Web Apps (PWAs)**](https://decimodan.com/blog/2019/progressive-web-apps/) están tomando parte del mercado mainstream.

En 2018 muchas empresas se enfocaron en adaptarse a esta tendencia tales como: [**Uber**](https://eng.uber.com/m-uber/), [**Starbucks**](https://formidable.com/work/starbucks-progressive-web-app/), [**Pinterest**](https://medium.com/pinterest-engineering/a-one-year-pwa-retrospective-f4a2f4129e05), etc.  y ya tienen creadas sus [**PWAs**](https://decimodan.com/blog/2019/progressive-web-apps/) de  forma paralela a sus aplicaciones móviles.

Las razones son obvias y algunos ejemplos son impresionantes; tal es el caso de [**Trivago**](https://www.thinkwithgoogle.com/intl/en-gb/consumer-insights/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/) que nos muestra un impresionante **97%** de incremento en sus conversiones, entonces...

> ¿Por qué deberíamos iniciar a desarrollar [**PWAs**](https://decimodan.com/blog/2019/progressive-web-apps/) ahora?

2018 fue el año donde la mayoría de las empresas que desarrollan navegadores web empezaron a apoyar la tecnología detrás de los [**PWAs**](https://decimodan.com/blog/2019/progressive-web-apps/). Particularmente hablando, [**Microsoft**](https://blogs.windows.com/msedgedev/2018/02/06/welcoming-progressive-web-apps-edge-windows-10/#rIjLorwLmuyl75qL.97) nos dice que está comprometida en llevar las [**PWAs**](https://decimodan.com/blog/2019/progressive-web-apps/)** a mas de 500 millones de dispositivos corriendo Windows 10. Por otro lado, Google se aventuró a llamarlo "el futuro del desarrollo de aplicaciones", por eso vemos como herramientas como [**Lighthouse**](https://developers.google.com/web/tools/lighthouse/), encargada de mejorar la calidad de las páginas web, ahora "audite" el concepto de [**PWA**](https://decimodan.com/blog/2019/progressive-web-apps/) por igual que el **SEO** o la **accesibilidad**.

> Finalmente, Apple, ha empezando a aceptar que las PWA son claramente una amenaza al modelo de negocios del Apple App Store.

Este articulo es el primero de la serie que enseñará como desarrollar una [**PWA**](https://decimodan.com/blog/2019/progressive-web-apps/) desde cero con [**VueJS**](https://decimodan.com/blog/2019/que-es-vuejs/)

**Parte 1: Cómo crear una Calculadora con VueJS.**

[**Parte 2: Haciendo que nuestra aplicación trabaje Offline**](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/)

## Nuestra calculadora

{{< figure src="/blog/calculadora_pwa-1.png" caption="La calculadora que vamos a construir en este tutorial" alt="La calculadora que vamos a construir en este tutorial" >}}

Creo que iniciar con una calculadora es muy sencillo debido a que muchas universidades utilizan este ejemplo para iniciarse en algunos lenguajes de programación.

Usaremos [**VueJS**](https://decimodan.com/blog/2019/que-es-vuejs/) para este tutorial debido a que viene con un gran template que hace mucho más fácil iniciar con un proyecto para una PWA. Otras razones por las que fue elegido, pueden encontrarse [**aquí**](https://decimodan.com/blog/2019/que-es-vuejs/).

Resumen de herramientas a utilizar:

* Editor de código: [**Visual Studio Code**](https://code.visualstudio.com/)
* Framework: [**VueJS**](https://vuejs.org/)
* Lenguaje de programación: [**Javascript**](https://www.javascript.com/)
* Otros: [**NodeJS**](https://nodejs.org/es/)

Puedes bajar el proyecto desde [**Github**](https://github.com/daguerrero/pwa-calculadora-vuejs) si prefieres o seguir el tutorial a continuación.

## Creando el esqueleto del proyecto

Iniciaremos desde una estructura básica de carpetas para nuestra aplicación. Para acelerar un poco las cosas utilizaremos **[vue-cli](https://cli.vuejs.org/). Vamos a instalarlo de forma global.**

```bash
npm install -g @vue/cli
```

Ahora vamos a utilizar el siguiente template:

```bash
vue init pwa calculadora
```

Nos aparecerá una serie de opciones a elegir, se recomienda la siguiente configuración:

```bash
? Project name calculadora
? Project short name: fewer than 12 characters to not be truncated on homescreen
s (default: same as name) calculadora
? Project description Una calculadora simple creada con VueJS
? Author Daniel Guerrero <https://decimodan.com>
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No
```

No agregamos la parte de test unitarios para hacer más breve este articulo, pero si vas a hacer un proyecto productivo deberías de agregarlo.

Siguiente, vamos a agregar las dependencias necesarias para el proyecto, eso lo hacemos de la siguiente manera:

```bash
npm install
```

Por ahora no hay que confundirse con la mayoría de archivos en el proyecto, ya que no modicaremos la mayoría de ellos. Si deseas aprender más de la estructura de este proyecto te recomiendo que revises la [**documentación oficial**](https://vuejs-templates.github.io/webpack/structure.html).

Solamente quedaría inicializar el proyecto:

```bash
npm run dev
```

Una vez iniciando este proyecto veremos lo siguiente:

{{< figure src="/blog/image-2--1-.png" caption="Proyecto inicializado" alt="Proyecto inicializado" >}}

Este es el árbol de directorios que utilizaremos para este tutorial, está resumido a lo más importante y es el que se crea por defecto:

```bash
.
|____build
|____config
|____node_modules
|____src
||____assets
||____components
	- Hello.vue
 App.vue
|____static
```

Cómo vemos, tenemos 2 componentes principales que conformarán a nuestra aplicación. Para nuestra aplicación necesitaremos solamente 1 componente y ahí realizaremos lo necesario. Para esto, renombraremos el archivo **'Hello.vue'** por **'Calculadora.vue'** y lo añadiremos al archivo principal de **'App.vue'**...

<iframe src="https://giphy.com/embed/l3q2K5jinAlChoCLS" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-l3q2K5jinAlChoCLS"></a></p>

Es decir, nuestra estructura del proyecto quedará de la siguiente manera:

```bash
.
|____build
|____config
|____node_modules
|____src
||____assets
||____components
	- Calculadora.vue
 App.vue
|____static
```

Y nuestro archivo **'App.vue'** quedará de la siguiente forma: (le hice unas pequeñas modificaciones al estilo para que marcar el cambio 😌)

```Javascript
<template>
  <div id="app">
    <header>
      <span>PWA - Calculadora - Vuejs</span>
    </header>
    <main>
      <calculadora></calculadora>
    </main>
  </div>
</template>

<script>
import Calculadora from './components/Calculadora'

export default {
  name: 'app',
  components: {
    Calculadora
  }
}
</script>

<style>
body {
  margin: 0;
  background: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  text-align: center;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
```

Con todo esto nuestra aplicación se verá así:

{{< figure src="/blog/image-3--1-.png" caption="Proyecto inicializado" alt="Proyecto inicializado" >}}

## Creando la interface

Manos a la obra ahora si, vamos a modificar el archivo **'Calculadora.vue'** con lo siguiente:

```Javascript
<template>
    <div class="calculadora" onselectstart='return false'>
        <div class="resultado">{{resultado}}</div>
        <div @click="borrar()" class='btn oscuro'>C</div>
        <div @click="signo()" class='btn oscuro'>+/-</div>
        <div @click="porcentaje()" class='btn oscuro'>%</div>
        <div @click="dividir()" class='btn operador'>/</div>
        <div @click="agregar(7)" class='btn'>7</div>
        <div @click="agregar(8)" class='btn'>8</div>
        <div @click="agregar(9)" class='btn'>9</div>
        <div @click="multiplicar()" class='btn operador'>*</div>
        <div @click="agregar(4)" class='btn'>4</div>
        <div @click="agregar(5)" class='btn'>5</div>
        <div @click="agregar(6)" class='btn'>6</div>
        <div @click="restar()" class='btn operador'>-</div>
        <div @click="agregar(1)" class='btn'>1</div>
        <div @click="agregar(2)" class='btn'>2</div>
        <div @click="agregar(3)" class='btn'>3</div>
        <div @click="sumar()" class='btn operador'>+</div>
        <div @click='agregar(0)' class='btn cero btn-abajo'>0</div>
        <div @click='puntoDecimal()' class='btn btn-abajo'>.</div>
        <div @click='igual()' class='btn operador btn-abajo'>=</div>
    </div>
</template>
```

Como vemos solamente agregamos el marcado que nos ayudará a crear la interface, además, agregamos las funciones necesarias para poder hacer las funcionalidades que la calculadora necesita... Terminando esto nuestra aplicación debería verse así:

{{< figure src="/blog/image-4--1-.png" caption="Calculadora todavía sin estilos" alt="Calculadora todavía sin estilos" >}}

Como vemos, se ve de una forma algo rara... Así que vamos a arreglar eso...

Nuevamente nos vamos al archivo **'Calculadora.vue'** y modificamos la parte del estilo agregando lo siguiente:

```html
style>
body {
  margin: 0;
  background-color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  text-align: center;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
```

Este estilo convertirá lo que teníamos antes, a esto: (también borré el logo de VueJS por que ya no tenía mucho sentido dejarlo...)

{{< figure src="/blog/image-5--1-.png" caption="El estilo de nuestra calculadora" alt="El estilo de nuestra calculadora" >}}

## Creando la funcionalidad

Usaremos Javascript para esto, en esta parte agradezco bastante a  **[Rose](http://linkedin.com/in/rosa-graciela-chavez-barrera-60559418b) ** que me ayudó a encontrar y resolver algunos bugs que fuimos encontrando en el camino 😅). Entramos nuevamente al archivo **'Calculadora.vue'** y añadimos lo siguiente:

```Javascript
<script>
export default {
  data () {
    return {
      resultado: 0,
      operadorClick: false,
      operador: null,
      anterior: null,
      puntito: false
    }
  },
  methods: {
    borrar () {
      this.resultado = 0
    },
    signo () {
      this.resultado =
        this.resultado < 0
          ? (this.resultado = this.resultado - this.resultado * 2)
          : (this.resultado = this.resultado - this.resultado * 2)
    },
    porcentaje () {
      this.resultado = this.resultado / 100
    },
    agregar (numero) {
      if (this.operadorClick && !this.puntito) {
        this.resultado = numero
        this.operadorClick = false
      } else {
        if (this.operadorClick && this.puntito) {
          this.resultado = '' + this.resultado + numero
          this.puntito = false
          this.operadorClick = false
        } else {
          this.resultado =
          this.resultado === 0
            ? (this.resultado = numero)
            : '' + this.resultado + numero
        }
      }
    },
    puntoDecimal () {
      if (this.operadorClick) {
        this.resultado = '0.'
        this.puntito = true
      }
      if (/\d+\.+/g.test(this.resultado)) {
      } else {
        this.resultado = this.resultado + '.'
      }
    },
    dividir () {
      this.operador = (a, b) => a / b
      this.anterior = this.resultado
      this.operadorClick = true
    },
    multiplicar () {
      this.operador = (a, b) => a * b
      this.anterior = this.resultado
      this.operadorClick = true
    },
    restar () {
      this.operador = (a, b) => a - b
      this.anterior = this.resultado
      this.operadorClick = true
    },
    sumar () {
      this.operador = (a, b) => a + b
      this.anterior = this.resultado
      this.operadorClick = true
    },
    igual () {
      this.resultado = this.operador(Number(this.anterior), Number(this.resultado))
      this.anterior = null
      this.operadorClick = true
    }
  }
}
</script>
```

Este código todavía se puede optimizar, pero creo que muestra bastante de la funcionalidad y así es bastante más fácil de entender... Una vez agregando esto podremos observar lo siguiente:

{{< figure src="/blog/calculadora_funcionando.gif" caption="Nuestra calculadora funcionando" alt="Nuestra calculadora funcionando" >}}

## Auditando nuestra aplicación

Ahora que ya tenemos algo funcionando pasaremos a la auditoría de nuestra aplicación y para ello utilizaremos [**Lighthouse**](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es) que funciona perfecto cómo extensión en Chrome. El reporte inicial que obtenemos de esta aplicación con [**Lighthouse**](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es) es el siguiente:

{{< figure src="/blog/image-7.png" caption="Reporte inicial de Lighthouse para nuestra aplicación" alt="Reporte inicial de Lighthouse para nuestra aplicación" >}}

Por lo que vemos aquí todavía tenemos mucho que mejorar, para ello, necesitamos crear nuestro aplicativo para producción, eso lo haremos de la siguiente forma:

```bash
npm run build
```

Finalmente, cuando este proceso termine necesitaremos verlo, una forma práctica de verlo es con la herramienta  [**serve**](https://www.npmjs.com/package/serve) de [**NodeJS**](https://nodejs.org/es/), por lo que pasaremos a instalarlo de la siguiente forma:

```bash
npm install -g serve
```

Y procedemos a utilizarlo para 'levantar' nuestro aplicativo de producción, esto se hace de la siguiente forma:

```bash
serve dist
```

Con esto se levantará por defecto un servidor en el puerto 5000 donde podremos ver nuestra aplicación funcionando, ahora usaremos nuevamente [**Lighthouse**](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es) para ver si hubo algún cambio:

{{< figure src="/blog/image-7.png" caption="Reporte de Lighthouse usando el modo producción" alt="Reporte inicial de Lighthouse" >}}

Como vemos, el cambio es bastante... Lo que hizo a grandes rasgos fue **minificar los archivos html, css y js,** lo que permitió mejorar casi en 5x el rendimiento de nuestra aplicación en términos de performance, por lo que recomiendo siempre utilizar este modo para producción.

## ¿Entonces ya tengo mi PWA?

**Respuesta corta: NO**

## **¿Entonces?**

Nos falta considerar una serie de cosas para poder considerar a nuestra aplicación una verdadera **PWA,** cómo son:

* Hacer que nuestra aplicación pueda funcionar offline
* Dockerizar nuestra aplicación para poder escalarla en la nube
* Configurar correctamente el servidor para poder servir nuestra PWA
* Y bastantes más para tener una app de calidad, **[aquí más información.](https://developers.google.com/web/progressive-web-apps/checklist)**

Todo eso lo veremos en los siguientes artículos, debido a que se necesitan abordar otros temas más a detalle... Lo bueno que era una simple calculadora...

## Conclusiones

Como vimos, ya pudimos iniciar nuestra **PWA** desde cero utilizando **VueJS** y con esto ya podemos irnos familiarizando con el concepto, además, vimos que utilizar este framework nos ayuda un poco con la curva de aprendizaje técnica (por que ya vimos que no son sólo cuestiones del código lo que hay que aprender)...

Les dejo el código de la aplicación: **[Código](https://github.com/daguerrero/pwa-calculadora-vuejs)**

Y les dejo algunos artículos que les podrían ayudar a profundizar más acerca de ciertos temas vistos aquí:

* Información general sobre las PWA: [https://developers.google.com/web/progressive-web-apps/](https://developers.google.com/web/progressive-web-apps/)
* Otra app inicial: [https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* Artículo muy completo que habla de esto: [https://boundstatesoftware.com/blog/progressive-web-apps-ready-for-primetime](https://boundstatesoftware.com/blog/progressive-web-apps-ready-for-primetime)
* El caso de TicketMaster: [https://tech.ticketmaster.com/2017/05/18/ticketmaster-demonstrates-cutting-edge-android-instant-apps-technology-at-google-io/](https://tech.ticketmaster.com/2017/05/18/ticketmaster-demonstrates-cutting-edge-android-instant-apps-technology-at-google-io/)

Y eso es todo. Saludos a todos!