+++
author = "Daniel Guerrero"
categories = ["Javascript"]
date = 2019-10-07T18:47:26Z
description = ""
draft = false
image = "/blogo/consola_javascript.webp"
slug = "mejora-tus-habilidades-de-depuracion-en-javascript-con-estos-trucos-de-la-consola"
summary = "Creo que todos (cuando menos en algún punto) empezamos a ver donde está mal nuestro código Javascript utilizando la sentencia console.log (o \"mejor\" aun con alerts), veamos algunas formas de mejorar esto."
tags = ["Javascript"]
title = "Mejora tus habilidades de depuración en Javascript con estos trucos de la consola"
thumbnail = "/blogo/consola_javascript.webp"
+++


Creo que todos (cuando menos en algún punto) empezamos a ver donde está mal nuestro código **Javascript** utilizando la sentencia **console.log** (o "mejor" aun con alerts), esto funciona perfectamente pero no siempre es el modo más optimo de hacer las cosas. Existen algunas otras que vamos a explorar en este artículo.

El objeto  **[[console](https://developer.mozilla.org/es/docs/Web/API/Console)](https://developer.mozilla.org/es/docs/Web/API/Console)**  provee acceso la consola de depuración de los navegadores. Puedes usar **[[console](https://developer.mozilla.org/es/docs/Web/API/Console)](https://developer.mozilla.org/es/docs/Web/API/Console)** solamente si ejecutas codigo Javascript en el navegador, por ejemplo: código del lado del cliente y no código del lado del servidor. Esto funciona diferente dependiendo del navegador, pero pero hay una serie de cosas que son compatibles con (casi) todos los navegadores.

> La mejor parte de depurar de esta manera es que funciona con todas las bibliotecas y frameworks que están integrados en el lenguaje principal.

<iframe src="https://giphy.com/embed/26BRBKqUiq586bRVm" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/americasgottalent-agt-americas-got-talent-26BRBKqUiq586bRVm"></a></p>

El caso más básico de uso es usar **console.log** para mostrar la salida de un código. Veamos el siguiente código:

```javascript
function pintar(nombre){
    console.log(nombre)
}

pintar('Daniel')
```

Si vemos el log de la consola nos muestra lo siguiente:

{{< figure src="/blogo/console2.webp" caption="Imprimimos el nombre pasado a la función" >}}

¿Qué pasa si quiero saber cuantas veces fue llamada la función _pintar_? Existe una forma fácil para eso llamada **console.count()**

## console.count

**count()** muestra el numero de veces que se ha llamado. Si no hay argumentos, count() se comporta como si se hubiera llamado con la etiqueta predeterminada.

```javascript
function pintar(nombre){
    console.count()
    console.log(nombre)
}

pintar('Daniel')
pintar('Guerrero')
```

Este código nos muestra lo siguiente:

{{< figure src="/blogo/console3.webp" caption="Contando las veces que se es llamada la función <strong><em>pintar</em></strong>" >}}

Esto nos sirve para saber cuantas veces es llamada la función, pero que pasa si quiero saber cuantas veces se ejecuta la función con el mismo nombre? La manera de hacer esto es simplemente pasar el  **_nombre_ ** como argumento del metodo **_count_**.

```javascript
function pintar(nombre){
    console.count(nombre)
}

pintar('Daniel')
pintar('Guerrero')
pintar('Juan')
pintar('Daniel')
```

Con esto, la función mantiene un registro de cuantas veces fue llamada nuestra función con cada nombre.

{{< figure src="/blogo/console4.webp" caption="Contando cuantas veces se imprime un nombre" >}}

## console.warn

El siguiente método muestra un mensaje de alerta en la consola. Es muy útil cuando se esta trabajando en cosas donde se tiene que hacer una validación si se omite un argumento o si pasa alguna situación similar.

```javascript
function pintar(nombre){
    if(!nombre){
        console.warn('No hay nombre')
    }
}

pintar()
```

El código superior muestra cuando el nombre es pasado cómo argumento o no. Si ningún nombre es proporcionado, muestra un mensaje de alerta como el siguiente:

{{< figure src="/blogo/console5.webp" caption="Mostrando una alerta si es que no se le pasa un nombre a la función" >}}

## console.table

Si estás trabajando con arreglos u objetos, **console.table** es bastante útil cuando se trata de mostrar los datos. Cada elemento de la matriz será una fila en la tabla. Veamos el siguiente ejemplo donde tenemos una variedad de colores. Si pasamos la matriz de colores al método **console.table** deberíamos ver una tabla impresa en la consola.

```javascript
const colores = ['rojo', 'azul', 'verde', 'amarillo']

console.table(colores)
```

Echando un vistazo a la consola, deberíamos ver una tabla que describe nuestra matriz.

{{< figure src="/blogo/console6.webp" caption="Mostrando nuestro arreglo en forma de tabla" >}}

Esto todavía es más útil cuando trabajamos con matrices de **muchos valores.** 

Trabajar con matrices es bastante sencillo. **¿Qué pasa cuando tenemos objetos?**

```javascript
const recipientes = {
    tipo: 'vaso',
    color: 'blanco'
};

console.table(recipientes)
```

Nótese que ahora tenemos un objeto en lugar de una matriz. El objeto tiene dos claves: el _**tipo**_ y el _**color**_ del recipiente.

{{< figure src="/blogo/console7.webp" caption="Nuestro objeto mostrado con console.table" >}}

Ahora la tabla muestra claves y valores. **¿Qué pasa si tenemos más de un objeto y tratamos de mostrarlo?**

```javascript
const recipientes = {
    tipo: 'vaso',
    color: 'blanco'
};

const persona = {
    nombre: 'Daniel',
    apellido: 'Guerrero'
}

console.table([recipientes, persona])
```

Veremos que nos agrupa nuestros objetos en la misma tabla.

{{< figure src="/blogo/console8-1.webp" caption="Objetos agrupados en la misma tabla" >}}

## console.group

Cuando trabajamos con conjuntos o datos vinculados, usamos grupos anidados para ayudar a organizar la salida asociando visualmente los mensajes relacionados. Para crear un nuevo bloque anidado llamamos a la función **console.group().**

```javascript
console.log("Este es el primer nivel");
console.group();
console.log("Este es el segundo nivel");
console.group();
console.log("Este es el nivel tres");
console.warn("Más allá del nivel tres");
console.groupEnd();
console.log("Volver al nivel dos");
console.groupEnd();
console.log("Volver al primer nivel");
```

El código anterior nos muestra instrucciones anidadas de la consola a nivel de bloque, muy útil cuando se trabaja con datos relacionados.

{{< figure src="/blogo/console9-1-1.webp" caption="Mostrando nuestros mensajes de forma organizada" >}}

Existe un método similar llamado **console.groupCollapsed()**, pero el nuevo bloque es "colapsado", es decir, necesitamos dar click para poder ver algo similar a lo que tenemos aquí arriba.

## Conclusiones

Utiliza todas las herramientas que te da el lenguaje. **_Si tiene sentido usarlo, úsalo._** Omitimos el uso del **debugger** por ahora por que creo que merece un artículo completo para revisar su uso.

Si eres nuevo en **Javascript** y quieres aprender más del lenguaje podrías empezar con **[algo sencillo](https://www.javascript.com/try)** y utilizar las cosas aprendidas en este artículo. También recomiendo **[este sitio donde puedes practicar](https://the-winter.github.io/codingjs/)** y una vez que termines la mayoría de programas inicies aprendiendo algo de **[Vuejs](https://decimodan.com/tags/vuejs/)**.

Saludos.

