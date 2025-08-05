+++
author = "Daniel Guerrero"
categories = ["Opiniones", "Go"]
date = 2021-09-20T19:59:12Z
description = "Hugo es un generador de sitios web estaticos escrito en Go, con excelente velocidad, flexibilidad y seguridad."
draft = false
image = "/blogo/gohugoio.webp"
thumbnail = "/thumbs/gohugoio.webp"
slug = "por-que-deberias-migrar-a-go"
tags = ["Opiniones", "Go"]
title = "Por que deberías migrar tu blog a Hugo"

+++

A lo largo del tiempo, este website ha sufrido grandes modificaciones en cuanto a su estructura... haciendo un muy breve resumen hemos pasado por lo siguiente:

1) Inicialmente el blog funcionaba con **Ghost** corriendo en **Digital Ocean**
2) Posteriormente migramos a **Ghost** corriendo en **AWS**

No me malentiendan, creo que **Ghost** es un excelente CMS (podría atreverme a decir que es el mejor CMS moderno) y fui bastante feliz mientras mantuve el website con él. Pasando el tiempo me di cuenta de algunas cosas que me gustaría cambiar y ese fue el aliciente a migrar y buscar alternativas; enlistaré los motivos que me "obligaron" a migrar:

1. Precio: Digital Ocean $5 USD / AWS $9 USD al mes
2. Velocidad: A pesar de que Ghost es muy rápido, ya no estaba conforme debido a los estándares actuales.
3. Flexibilidad: Ghost necesita una instancia de NodeJS para que pueda funcionar lo que no permite migrarlo a cualquier parte de forma "sencilla".

Por tanto, empece a buscar alternativas en el mercado y me encontré con Hugo, por lo que decidí migrar.

 ## Alternativas en el mercado

Cuando inicie este website, no había muchas alternativas que permitieran tener un buen website debido a las "limitaciones", por ahora tenemos estás y te contaré un poco de todo lo que me encontré. Los evalué en los siguientes parámetros:

1) Comunidad: qué tan activa es su comunidad de desarrolladores.
2) Velocidad: qué tan rápido es el resultado final.
3) Flexibilidad: qué tan fácil es migrar de servidores con el menor costo posible.

### Gatsby

### ![gatsby](/blogo/gatsby.webp)

Primero me encontré con este popular framework de creación de websites basado en React, así que decidí darle una oportunidad. 

Así se comportó frente a mis parámetros:

1) Comunidad: Bastante buena y llena de documentación, por lo que en este aspecto no había problema.
2) Velocidad: Gatsby es rápido, pero por alguna razón no más que Ghost.
3) Flexibilidad: Gatsby genera websites estáticos, por lo que puede montarse en múltiples servidores.

Desafortunadamente, yo buscaba algo más rápido y Gatsby quedó descartado de mi lista.

## Jekyll

![jekyll](/blogo/jekyll.webp)

El veterano, el que empezó con todo esto y el más amado por la comunidad. En mi experiencia revisándolo esto fue lo que encontré:

1. Comunidad: Parece que poco a poco va en decadencia (en favor de los CMS Javascript), por lo que este aspecto fue el que me hizo descartarlo
2. Velocidad: bastante rápido, nada que reprochar en este aspecto.
3. Flexibilidad: puede montarse en todas partes y gratis.

Desafortunadamente, también tuve que decirle adiós por los temas antes mencionados de la comunidad... Desde mi punto de vista puede que Jekyll desaparezca en algunos años (lo cual es bastante triste).

## Gridsome

![gridsome](/blogo/gridsome.webp)

Soy fan de VueJS, así que busqué una alternativa similar a Gatsby, pero en su sabor verde, mi experiencia fue la siguiente:

1. Comunidad: va en crecimiento y definitivamente creo que le irá muy bien, sin embargo, todavía la considero muy poco madura.
2. Velocidad: bastante rápido (esto la verdad me impresionó).
3. Flexibilidad: puede montarse en todas partes y gratis.

Este iba a ser el ganador y seguramente crearé un mirror de este website con Gridsome para probar durante un tiempo, pero por ahora no fue el ganador.

## Hugo

### ![hugo](/blogo/gohugoio.webp)

Y llegamos al claro ganador (la razón de este post)... Creo que fue muy influenciado por mi actual gusto por el lenguaje Go, pero pasemos a los puntos:

1) Comunidad: muy grande y bastante sana.
2) Velocidad: sin duda el más veloz (a la hora de compilar y probar)
3) Flexibilidad: puede montarse en todas partes y gratis.

Quiero recalcar que la velocidad es su punto más fuerte y para muestra un botón:

![rendimiento_hugo](/blogo/rendimiento_hugo.webp)

Destacar que no he terminado de hacer la optimización del blog, ni de las imágenes, ni nada por el estilo. **Si algo caracteriza a Hugo es la velocidad.**

## Ventajas de Hugo sobre Ghost

Llegamos al punto medular y es donde opino que si tú estás en la misma situación que yo buscarás la respuesta... Bueno te lo pongo muy simple:

1) Seguridad: Hugo es mucho más seguro que Ghost, por tanto, fue un punto importante.
2) Performance: ya lo dije varias veces, pero lo recalco, es **RÁPIDO**
3) Velocidad de compilación: Hugo en mi caso "compila" mi website en 100ms, lo cual se traduce en que puedo probar mucho más rápido.

Por tanto, Hugo se queda conmigo en este website y probablemente tarde un tiempo en irse, definitivamente te recomiendo que lo utilices para tus desarrollos.

## Actualización: 29/NOV/2021

He realizado una optimización del website y obtuve lo siguiente:

#### Rendimiento en móviles

![rendimiento_movil](/blogo/optimizacion_movil.webp)

#### Rendimiento en desktop

![rendimiento_web](/blogo/optimizacion_web.webp)

Por lo tanto, saca tus propias conclusiones... Puedes revisar el rendimiento del website [aquí.](https://pagespeed.web.dev/)

## Conclusiones

Sé que no es una prueba a detalle y muchos datos fueron empíricos, pero te invito a que lo pruebes por ti mismo y saques tus propias conclusiones.

Por cierto, si alguien se lo pregunta, migré él website a Firebase y funciona de maravilla.

Saludos.