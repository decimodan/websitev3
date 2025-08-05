+++
author = "Daniel Guerrero"
categories = ["Javascript"]
date = 2020-09-02T22:47:12Z
description = ""
draft = false
image = "/blogo/javascript2-1.webp"
thumbnail = "/blogo/javascript2-1.webp"
slug = "5-cosas-de-es6-que-deberias-conocer"
tags = ["Javascript"]
title = "5 cosas de ES6 que deberías conocer"
+++


Muchas de las funcionalidades de  **[Javascript](https://decimodan.com/tags/javascript/) ** introducidas con el  **[ES6](https://es.wikipedia.org/wiki/ECMAScript) ** incluidas en los frameworks más populares del momento, como lo es Angular, React o **[Vue](https://decimodan.com/tags/vuejs/),** se están utilizando todos los días por miles de desarrolladores a nivel mundial, sin embargo, hay muchas personas que todavía no hacen uso de ellas...

> Recuerda que: Actualmente todos los navegadores soportan **[ES6](https://es.wikipedia.org/wiki/ECMAScript) de forma nativa**

## 1) El operador Spread

De las mejores funcionalidades (para mí) del ES6 es este operador llamado _spread_. Su sintaxis es de lo mas simple; básicamente con solo tres puntos (...) puedes hacer lo siguiente:

### Convertir arreglos en párametros

En **[ES 5](https://es.wikipedia.org/wiki/ECMAScript)**, para convertir un arreglo en los parámetros de una función debíamos usar una conversión, regularmente con el uso de la función _apply:_

```javascript
// ES5

var mayor = Math.max.apply(Math, [10,20,30,4,51])
console.log(max)

// -----> Output: 51
```

En **[ES6](https://es.wikipedia.org/wiki/ECMAScript)** se puede hacer lo siguiente:

```javascript
// ES6

var mayor = Math.max.apply(...[10,20,30,4,51])
console.log(max)

// -----> Output: 51
```

### Concatenar arreglos

En **[ES6](https://es.wikipedia.org/wiki/ECMAScript)**, se vuelve una alternativa al método _[**concat (que ya vimos aquí)**](__GHOST_URL__/los-15-imprescindibles-de-javascript/),_ se utiliza de la siguiente manera:

```javascript
const primerArreglo = [1,2,3];
const segundoArreglo = [4,5,6]

console.log([...primerArreglo, ...segundoArreglo, ...[7,8,9]]);

// -----> Output: [1,2,3,4,5,6,7,8,9]
```

## 2) Constantes usando _const_

En **[ES6](https://es.wikipedia.org/wiki/ECMAScript)**, ahora se pueden utilizar constantes o (también conocido así en otros lenguajes de programación) variables inmutables. Las constantes las declaramos con mayúsculas (como convención) y se separan con guión bajo, veamos el siguiente ejemplo:

```javascript
const VALOR_CONSTANTE = [1,2,3];
const segundoArreglo = [4,5,6]

console.log([...primerArreglo, ...segundoArreglo, ...[7,8,9]]);

// -----> Output: [1,2,3,4,5,6,7,8,9]
```

Importante: Si le asignamos un objeto (o un array) a una constante, éste no será totalmente inmutable ya que le podremos cambiar los valores de las propiedades y métodos.

## 3) Variables locales a bloques con _let_

**[ES6](https://es.wikipedia.org/wiki/ECMAScript) ** nos brinda una nueva posibilidad con la palabra reservada **_let_**; nos permite declarar variables locales a un bloque, por ejemplo:

```javascript
var a = 1, b = 2;

if(a > 0 && b > 0){
    let total = a * b
    console.log(total)			// -----> Output: 2
}

console.log(total)
// -----> Output: total is not defined
```

## 4) Las funciones arrow

Las funciones _arrow_ nos son de utilidad a la hora de trabajar con funciones anónimas. Un ejemplo:

```javascript
var arreglo = [1,2,3];

// ES5
var triple = arreglo.map(function (a){
    return 3 * a;
}

// ES6
var triple = arreglo.map(a => 3 * a)
```

## 5) Parámetros por defecto en la funciones

Algo de uso muy común en otros lenguajes y que cuando toca usarlo en Javascript nos puede dar un poco de problemas. Se puede utilizar de la siguiente manera:

```javascript
function multiplicacion(a = 1, b = 2){
    return a * b;
}

// Resultado con valores por defecto
console.log( multiplicacion() ); 
// ------> Output: 2

// Resultado con parametros
console.log( multiplicacion(3,4) ) ;
// ------> Output: 12
```

## Conclusiones

Muchas de estas formas de escribir Javascript simplifican mucho la forma en que escribimos nuestro código y por tanto, la manera en que entendemos el código de otros programadores.

Saludos.

