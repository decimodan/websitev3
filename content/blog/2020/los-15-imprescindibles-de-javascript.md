+++
author = "Daniel Guerrero"
categories = ["Javascript"]
date = 2020-03-28T23:08:26Z
description = ""
draft = false
image = "/blogo/javascript-1.webp"
slug = "los-15-imprescindibles-de-javascript"
summary = "Veamos los 15 métodos que pueden ayudarte a manipular datos correctamente."
tags = ["Javascript"]
title = "Los 15 métodos que debes conocer en Javascript"
thumbnail = "/blogo/javascript-1.webp"
+++


En Javascript un **_array es una variable especial que se utiliza para almacenar diferentes elementos._** Tiene algunas propiedades y métodos integrados que podemos usar para agregar, eliminar, iterar o manipular datos según nuestras necesidades y conocer estos métodos puede mejorar tus habilidades como desarrollador.

Veamos los 15 métodos que pueden ayudarte a manipular datos correctamente.

## some()

Este método "prueba" el **_array_** con una función pasada como parámetro**_. Devolverá verdadero si al menos un elemento coincide con la "prueba" y falso en caso de que no._**

Ejemplo:

```javascript
const arreglo = ["ana", "juan", "daniel, "mariana"]
                 
arreglo.some(prueba => {
    if(prueba === "daniel"){
        return prueba
    }
})
// -----> Output: true

// Existe un metodo "recortado"
arreglo.some(prueba => prueba === "daniel")
// -----> Output: true
```

## reduce()

Este método recibe una función que tiene un acumulador y un valor como argumento, _**aplica la función al acumulador y a cada valor del arreglo para devolver un solo valor.**_

Ejemplo:

```javascript
const arreglo = [2, 4, 6, 8, 10]
                 
arreglo.reduce((total, valor) => {
    return total * valor
})
// -----> Output: 3840

// Existe un metodo "recortado"
arreglo.reduce((total, valor) =>  total * valor)
// -----> Output: 3840
```

## every()

Este método "prueba" el arreglo con una función pasada como parámetro. Devolverá verdadero si cada elemento de la matriz coincide con la prueba y falso en caso contrario.

Ejemplo:

```javascript
const arreglo = ["a", "b", "c"]
                 
arreglo.every(prueba => prueba === "b")
// -----> Output: false

const arreglo2 = ["b", "b", "b"]

arreglo2.every(prueba => prueba === "b")
// -----> Output: true
```

## map()

Este método recibe una función como parámetro y devuelve un nuevo arreglo que contiene una "imagen" de cada elemento del arreglo. _**Siempre devolverá la misma cantidad de elementos.**_

Ejemplo:

```javascript
const arreglo = [1, 2, 3, 4, 5]
                 
arreglo.map(x => x * x)
// -----> Output: 1
//				  4
//				  9
//				 16
//				 25
```

## flat()

Este método crea un nuevo **_array_** que contiene los elementos contenidos en los sub-arreglos. _**Tener en cuenta que este método solo tiene un nivel de profundidad.**_

Ejemplo:

```javascript
const arreglo = [1, [2, 3], [4, 5]]
                 
arreglo.flat()
// -----> Output: [1 , 2, 3, 4, 5]
```

## filter()

Este método recibe una función como parámetro y devuelve un nuevo array que contiene todos los elementos para los cuales la función de filtrado que se haya pasado como argumento devuelva verdadero.

Ejemplo:

```javascript
const arreglo = [
    { id: 1, nombre: "daniel"},
    { id: 2, nombre: "juan"},
    { id: 3, nombre: "javier},
    { id: 4, nombre: "mariana"},
    { id: 1, nombre: "marco},
]
                 
arreglo.filter(elemento => elemento.id === 1)
// -----> Output: 0:{id: 1, nombre: "daniel"}
//				  1:{id: 1, nombre: "marco"}
```

## forEach()

_**Este método aplica una función a cada elemento del arreglo.**_

Ejemplo:

```javascript
const arreglo = [
    { id: 1, nombre: "daniel"},
    { id: 2, nombre: "juan"},
    { id: 3, nombre: "javier},
]
                 
arreglo.forEach(elemento => console.log(arreglo.nombre)
// -----> Output: 0: daniel
//				  1: juan
//				  2: javier
```

## findIndex()

Este método recibe una función como parámetro y la aplicará al arreglo. **_Devuelve el índice del elemento encontrado que satisface la función de prueba como argumento o -1 en caso contrario._**

Ejemplo:

```javascript
const arreglo = [
    { id: 1, nombre: "daniel"},
    { id: 2, nombre: "juan"},
    { id: 3, nombre: "javier},
]
                 
arreglo.findIndex(elemento => elemento.id === 2)
// -----> Output: 2
    
arreglo.findIndex(elemento => elemento.id === 10)
// -----> Output: -1
```

# find()

Este método recibe una función como argumento y la aplicará al arreglo. _**Devuelve el valor de un elemento encontrado en el arreglo que satisfaga la función, en caso contrario devuelve undefined.**_

Ejemplo:

```javascript
const arreglo = [
    { id: 1, nombre: "daniel"},
    { id: 2, nombre: "juan"},
    { id: 3, nombre: "javier},
]
                 
arreglo.find(elemento => elemento.id === 2)
// -----> Output: { id: 2, nombre: "juan"}
    
arreglo.findIndex(elemento => elemento.id === 20)
// -----> Output: undefined
```

# sort()

Este método recibe una función como parámetro. **_Literal, orderna los elementos del arreglo y los devuelve._**

Ejemplo:

```javascript
const arreglo = [1, 2, 3, 4, 5]

// Ordenando del menor al mayor
arreglo.sort((a,b) => a - b)
// -----> Output: [1, 2, 3, 4, 5]
    
// Ordenando del mayor a menor
arreglo.sort((a,b) => b - a)
// -----> Output: [5, 4, 3, 2, 1]
```

# concat()

Este método fusionará dos o más _**arrays al concatenarlo. Devuelve un nuevo array con los elementos.**_

Ejemplo:

```javascript
const arreglo = [1, 2, 3, 4, 5]
const arreglo2 = [6, 7, 8, 9, 10]

arreglo.concat(arreglo2)
// -----> Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# fill()

Este método llena todos los elementos de un array dado con el mismo valor, desde un indice inicial (0 por defecto) hasta un indice final (array.length por defecto).

Ejemplo:

```javascript
const arreglo = [1, 2, 3, 4, 5]

// El primer argumento (0) es el valor
// El segundo argumento (1) es el indice inicial
// El tercer argumento (2) es el indice final
arreglo.fill(0, 1, 2)
// -----> Output: [1, 0, 3, 4, 5]
```

# includes()

Este método devolverá verdadero si la matriz contiene un cierto elemento y falso si no.

Ejemplo:

```javascript
const arreglo = [1, 2, 3, 4, 5]

arreglo.includes(2)
// -----> Output: true

arreglo.includes(5)
// -----> Output: false
```

# reverse()

Este método invierte un **_array_**. _**El primer elemento se convierte en el último y el último elemento será el primero.**_

Ejemplo:

```javascript
const arreglo = ["a", "b", "c"]

arreglo.reverse()
// -----> Output: "c", "b", "a"
```

# flatMap()

El método aplica una función a cada elemento del **_array y luego "aplana" el resultado en un array. En palabras mas simples, es una combinación de flat() y map() en una sola función._**

Ejemplo:

```javascript
const arreglo = [[1], [2], [3]]

arreglo.flatMap(a => a * 20)
// -----> Output: 20, 40, 60

// .flat() + .map()
arreglo.flat().map(a => a * 20)
// -----> Output: 20, 40, 60
```

# Conclusiones

Y esto es todo por ahora, te recomiendo que si no habías usado ninguno de estos métodos, los empieces a utilizar ya que van a volver tu vida más fácil.

