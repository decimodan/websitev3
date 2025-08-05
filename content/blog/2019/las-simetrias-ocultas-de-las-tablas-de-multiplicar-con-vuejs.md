+++
author = "Daniel Guerrero"
categories = ["Javascript", "Vuejs"]
date = 2019-10-16T05:55:40Z
description = ""
draft = false
image = "/blogo/patterns.webp"
slug = "las-simetrias-ocultas-de-las-tablas-de-multiplicar-con-vuejs"
summary = "Veamos los patrones que escode la tabla de multiplicar que conocemos de toda la vida..."
tags = ["Javascript", "Vuejs"]
title = "Las simetrías ocultas de las tablas de multiplicar con VueJS"
thumbnail = "/blogo/patterns.webp"
+++


También puedes leer este artículo en **[Medium](https://medium.com/@guerrerodev/las-simetr%C3%ADas-ocultas-de-las-tablas-de-multiplicar-con-vuejs-2bd99ea2a8e7)**.

Hace un tiempo por razones que no recuerdo en este momento encontré un artículo del profesor francés **Zoheir Barka** titulado _The Hidden Symmetries of the Multiplication Table_ (Las simetrías ocultas de la tabla de multiplicar), pues ver este artículo **[aquí](https://www.researchgate.net/publication/313278328_The_Hidden_Symmetries_of_the_Multiplication_Table)**.

La idea de **Zoheir Barka** es crear patrones geométricos planos de color sobre la tabla de multiplicar (si, esa que nos enseñan desde niños), de diferentes tamaños, pintando de colores los múltiplos de algunos números.

El punto de partida es una tabla de multiplicar cuadrada, con cierto número de filas y columnas, en función de la necesidad estética del patrón.

Me pareció que podía ser un excelente ejercicio para representarlo en **[VueJS](https://decimodan.com/tags/vuejs/)**, así que veamos cómo realizar los diferentes patrones descritos en el artículo.

## Iniciando nuestro proyecto

Iniciamos un nuevo proyecto **[VueJS](https://decimodan.com/tags/vuejs/)** de la siguiente forma:

```javascript
vue init webpack tablas
```

Vamos a activar las siguientes opciones:

```bash
? Project name tablas
? Project description Las simetrías ocultas de las tablas de multiplicar
? Author Daniel Guerrero <https://daguerrero.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recom
mended) npm
```

Listo, ya tenemos nuestro proyecto base... Partiremos de la siguiente imagen que muestra una tabla de multiplicar común y corriente, con los productos del 0 al 10, por lo que resulta una tabla de 11 filas y 11 columnas.

{{< figure src="/blogo/reticula.webp" caption="Tabla de multiplicar de la que partiremos" >}}

## Creando esta tabla de multiplicar con VueJS

Manos a la obra, vamos a crear esta tabla de multiplicar en nuestro proyecto, por lo que crearemos un nuevo componente llamado **"Tabla.vue"** con el siguiente código:

```html
<template>
  <div class="tabla">
  </div>
</template>

<script>
export default {
  name: 'tabla'
}
</script>

<style scoped>
</style>
```

Además vamos a modificar nuestro _router_ para que se muestre nuestra tabla, para eso nos vamos al archivo **_"router/index.js"_** y ponemos el siguiente código:

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Tabla from '@/components/Tabla'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabla',
      component: Tabla
    }
  ]
})
```

Vamos a agregar una variable llamada _**"tabla"**_ que va a hacer la encargada de guardar nuestra tabla de multiplicar y vamos a agregar el algoritmo necesario para hacer la tabla de multiplicar. El código es el siguiente:

```javascript
<template>
  <div class="tabla">
    {{tabla}}
  </div>
</template>

<script>
export default {
  name: 'tabla',
  data () {
    return {
      tabla: []
    }
  },
  created(){
    this.calcularTablas()
  },
  methods:{
    calcularTablas(){
      var resultado;
    
        for(var i=0; i<=10; i++){
          var j=1;
          
          for(j=0; j<=10; j++){
            resultado = i * j;
            this.tabla.push(resultado) 
          }
        }
    }
  }
}
</script>

<style scoped>
</style>
```

Este código creará lo siguiente:

{{< figure src="/blogo/tablas_inicial.webp" caption="Ya tenemos nuestras tablas calculadas" >}}

Ahora, tenemos que imprimir nuestra tabla de forma cuadrada, por tanto dividiremos nuestro arreglo en pequeños arreglos para poder tener una estructura similar a como lo vamos a mostrar y lo guardaremos en otra variable llamada _**"partido",**_ el código es el siguiente:

```javascript
<template>
  <div class="tabla">
    {{partido}}
  </div>
</template>

<script>
export default {
  name: 'tabla',
  data () {
    return {
      tabla: [],
      partido: []
    }
  },
  created(){
    this.calcularTablas(),
    this.convertir()
  },
  methods:{
    calcularTablas(){
      var resultado;
    
        for(var i=0; i<=10; i++){
          var j=1;
          
          for(j=0; j<=10; j++){
            resultado = i * j;
            this.tabla.push(resultado) 
          }
        }
    },
    convertir(){   
      while(this.tabla.length){
        this.partido.push(this.tabla.splice(0,11));
      }
    }
  }
}
</script>
```

Este código creará lo siguiente:

{{< figure src="/blogo/tablas_partido-1.webp" caption="Nuestra tabla, ahora con arreglos" >}}

Ya tenemos listos nuestros datos, ahora toca darles estilo, para hacer eso vamos a utilizar el siguiente código:

```css
<style scoped>
.tabla{
  box-sizing: border-box;
  max-width: 600px;
  margin: 0 auto;
}

table{
  align-content: center;
  border-collapse: collapse;
  width: 100%;
}

td{
  height: 50px; 
  width: 50px;
  text-align: center;
  vertical-align: center;
}
</style>
```

Este código creará lo siguiente:

{{< figure src="/blogo/tablas_estilo.webp" caption="Nuestra reticula ya lista" >}}

Ahora vamos a empezar; lo que haremos será colorear todas las casillas que son **múltiplos de 2** y dejar sin color las otras, con lo cuál obtenemos el siguiente patrón:

{{< figure src="/blogo/patron1.webp" caption="Patron con múltiplos de 2" >}}

Este patrón lo conseguimos con el siguiente código:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 2 == 0">
              <button class="pintar">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

Además del siguiente código CSS:

```css
<style scoped>
.tabla{
  box-sizing: border-box;
  margin: 0 auto;
}

table{
  align-content: center;
  border-collapse: collapse;
  width: 100%;
}

td{
  text-align: center;
  vertical-align: center;
}

.pintar{
  border: none;
  background-color: #008CBA;
  color: black;
  font-weight: bold;
}

.sinpintar{
  border: none;
  background-color: white;
  color: black;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  td{
    height: 40px; 
    width: 40px;
  }

  .pintar{
    height: 40px; 
    width: 40px;
  }

  .sinpintar{
    height: 40px; 
    width: 40px;
  }
}

@media only screen and (min-width: 600px) {
  td{
    height: 50px; 
    width: 50px;
  }

  .pintar{
    height: 50px; 
    width: 50px;
  }

  .sinpintar{
    height: 50px; 
    width: 50px;
  }
}

@media only screen and (min-width: 768px) {
  td{
    height: 60px; 
    width: 60px;
  }

  .pintar{
    height: 60px; 
    width: 60px;
  }

  .sinpintar{
    height: 60px; 
    width: 60px;
  }
} 

@media only screen and (min-width: 992px) {
  .tabla{
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  }

  td{
    height: 60px; 
    width: 60px;
  }

  .pintar{
    height: 60px; 
    width: 60px;
  }

  .sinpintar{
    height: 60px; 
    width: 60px;
  }
} 
</style>
```

A grandes rasgos, si tomamos los múltiplos de cualquier número primo, lo patrones serán como el anterior, pero con las zonas blancas más grandes.

Pero, si consideramos los múltiplos de números no primos, como el 4, la estructura se complica...

## Patrón con múltiplos de 4

Vamos a colorear todas las cifras que sean múltiplos de 4 y vamos a ajustar nuestra cuadricula (12x12), el resultado es el siguiente:

{{< figure src="/blogo/patron2.webp" caption="Patrón con múltiplos de 4" >}}

Como podemos observar, el patrón se modificó bastante... El código es el siguiente:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 4 == 0">
              <button class="pintar">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

Además de una ligera modificación a nuestros _métodos_ que ahora quedan de la siguiente manera:

```javascript
methods:{
    calcularTablas(){
      var resultado;
    
        for(var i=0; i<=12; i++){
          var j=1;
          
          for(j=0; j<=12; j++){
            resultado = i * j;
            this.tabla.push(resultado) 
          }
        }
    },
    convertir(){   
      while(this.tabla.length){
        this.partido.push(this.tabla.splice(0,13));
      }
    }
  }
```

## Patrón con múltiplos de 6

En este caso, se nos crea el siguiente patrón:

{{< figure src="/blogo/patron3.webp" caption="Patrón con múltiplos de 6" >}}

El código que crea este patrón es el siguiente:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 6 == 0">
              <button class="pintar">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

## Patrón con múltiplos de 10

En este caso, se nos crea el siguiente patrón:

{{< figure src="/blogo/patron4.webp" caption="Patrón con múltiplos de 10" >}}

El código que crea este patrón es el siguiente:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 10 == 0">
              <button class="pintar">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

## Patrón con múltiplos de 12

En este caso, se nos crea el siguiente patrón:

{{< figure src="/blogo/patron5.webp" caption="Patrón con múltiplos de 12" >}}

El código que crea este patrón es el siguiente:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 12 == 0">
              <button class="pintar">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

> Por lo que vemos que cuando se consideran números que son múltiplos de dos primos (iguales o distintos), los patrones son los anteriores.

El siguiente paso, según **Zoheir Barka,** es considerar los múltiplos de dos o más números, utilizando diferentes colores.

## Patrón con múltiplos de 2 y 3

Veamos qué pasa con los múltiplos de 2 y 3. Pintaremos los múltiplos de 2 de verde y los múltiplos de 3 de azul. En este caso particular, los números que sean múltiplos de los dos los pintaremos igual de azul:

{{< figure src="/blogo/patron6.webp" caption="Patrón con múltiplos de 2 y 3" >}}

El código que crea este patrón es el siguiente:

```html
<template>
  <div class="tablas">
    <h1>Múltiplos de 2 y 3</h1>
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 2 == 0 && col % 3 == 0">
              <button class="azul">{{ col }}</button>
            </div>
            <div v-else-if="col % 3 == 0">
              <button class="azul">{{ col }}</button>
            </div>
            <div v-else-if="col % 2 == 0">
              <button class="verde">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

## Patrón con múltiplos de 3 y 2

Veamos que pasa con el caso contrario:

{{< figure src=/blogo/patron7.webp" caption="Patrón con múltiplos de 3 y 2" >}}

El código que crea este patrón es el siguiente:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 2 == 0 && col % 3 == 0">
              <button class="verde">{{ col }}</button>
            </div>
            <div v-else-if="col % 3 == 0">
              <button class="azul">{{ col }}</button>
            </div>
            <div v-else-if="col % 2 == 0">
              <button class="verde">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

## Patrón con múltiplos de 2,3 y 6

Similar al caso anterior, pero ahora pintaremos los múltiplos de los 2 de otro color (en este caso amarillo), el resultado es el siguiente:

{{< figure src="/blogo/patron8.webp" caption="Patrón con múltiplos de 2,3 y 6" >}}

El código que crea este patrón es el siguiente:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 2 == 0 && col % 3 == 0">
              <button class="amarillo">{{ col }}</button>
            </div>
            <div v-else-if="col % 3 == 0">
              <button class="azul">{{ col }}</button>
            </div>
            <div v-else-if="col % 2 == 0">
              <button class="verde">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

## Patrón con múltiplos de 6 y 12

Para terminar, en el ejemplo siguiente veamos que pasa cuando usamos números donde uno es múltiplo del otro:

{{< figure src="/blogo/patron9.webp" caption="Patrón con múltiplos de 6 y 12" >}}

El código que crea este patrón es el siguiente:

```html
<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 6 == 0 && col % 12 == 0">
              <button class="azul">{{ col }}</button>
            </div>
            <div v-else-if="col % 6 == 0">
              <button class="amarillo">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

## Finalizando

Lo que falta por hacer es un menú donde puedas acceder a todos estos ejemplos, terminando se ve así:

{{< figure src="/blog/menu.png" caption="Menu para nuestros ejemplos" >}}

Además vamos a **[subirla a Firebase](https://decimodan.com/blog/2019/creando-una-progressive-web-app-desde-cero-con-vuejs-parte-2/),** para poder verla en cualquier dispositivo...

> [Puedes ver la aplicación desde este link](https://tablas-de-multiplicar-322f6.firebaseapp.com)

Además puedes ver el repositorio de este **[artículo aquí.](https://github.com/daguerrero/simetria_tablas_multiplicar)**

## Conclusiones

**Las simetrías ocultas de la tabla de multiplicar** me parece una de esas actividades que enlaza las matemáticas con el arte, inclusive, constituyen una herramienta de creación artística.

Saludos.

