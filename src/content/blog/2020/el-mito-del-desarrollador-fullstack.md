---
author: "Daniel Guerrero"
categories: ["Opiniones"]
pubDate: 2020-10-05T21:44:12Z
description: "El mito del desarrollador FullStack"
draft: false
image: "/blogo/Full-Stack-Developer.webp"
slug: "el-mito-del-desarrollador-fullstack"
summary: "El término Full Stack Developer fue un término acuñado a finales del año 2000 por parte de Facebook y se refiere (básicamente) a una persona con conocimientos suficientes para poder desarrollar una solución completa de manera independiente."
tags: ["Opiniones"]
title: "El mito del desarrollador FullStack"
thumbnail: "/blogo/Full-Stack-Developer.webp"
---

El término **_Full Stack Developer_** fue un término acuñado a finales del año 2000 por parte de _Facebook_ y se refiere (básicamente) a un ser humano que es capaz de desarrollar software por parte del [_**frontend**_](https://es.wikipedia.org/wiki/Front_end_y_back_end) y en el [_**backend**_](https://es.wikipedia.org/wiki/Front_end_y_back_end), es decir, una persona con conocimientos suficientes para poder desarrollar una solución completa de manera independiente.

En esos años, Facebook se refería a desarrolladores que podían hacer uso de _frameworks_ y componentes de acceso a datos, debido a que no tenían que manejar prácticamente nada del lado del servidor. Ademas, debido a que salieron mas y más frameworks que permitían modelar herramientas sin necesidad de grandes habilidades para el frontend, podría lograr que una persona pudiera generar un desarrollo completo (con sus bemoles obviamente).

> Esta es una de las razones por las que, desde mi punto de vista, muchísimos desarrolladores se preocupan más de aprender lenguajes del lado del backend y para el front-end usamos lo que sea... Es por eso que muchos "sistemas" se ven exactamente igual... (Bootstrap, Materialize, etc...)

Cuando el tiempo fue pasando, los sistemas se fueron convirtiendo cada vez en algo más complejo, debido a que las necesidades y problemas (principalmente del lado del negocio) son cada vez más complejas... A día de hoy, para una aplicación medianamente funcional cuando menos se requiere conocimientos en:

* HTML
* CSS
* Javascript
* NodeJS
* Big Data
* Machine Learning
* SQL
* NoSQL (Mongo, Redis, etc.)
* Conceptos de paralelización
* Programación funcional
* Seguridad
* Mobile
* **[PWA](https://decimodan.com/blog/2019/progressive-web-apps/)**
* Cloud
* [**Comunicación**](https://decimodan.com/blog/2020/rsocket/)

Y un gigantesco etcétera que hace que un solo desarrollador tenga que aprender una gran cantidad de lenguajes y _frameworks_; es entonces cuando, volcarse hacia un solo lado de la moneda cada vez se vuelve más difícil...

## Naturaleza del desarrollador

Cualquier persona con algo de tiempo en este negocio entiende que **_el negocio importa,_** de ahí que muchos vean a los desarrolladores en su equipo como una maquinaria funcional encargada de digerir los requerimientos de negocio y entregarlos en forma de software funcional, es decir, _**"el desarrollador no debe conocer el negocio, el solo programa"**_.

> Sí has trabajado en una dualidad con un equipo de negocio, seguramente has escuchado la frase anterior (o algunas muy similares).

Esto tiene que ver, con la evolución en el desarrollo de software por parte de las empresas, es decir, hace unos años:

1. El equipo de análisis de software creaba las especificaciones
2. El equipo de arquitectura diseñaba la solución
3. El equipo de programación lo pasaba a los desarrolladores
4. Etcétera

Para mí, esto esto fue una parte de lo que el desarrollo en cascada nos dejó y se puede sentir en las estructuras organizacionales de muchas empresas hasta el día de hoy.

En resumen, no trabajábamos en equipo, lo que generaba problemas de comunicación importantes, ineficiencia y _**hacía que él programador solamente se dedicara a a programar y no entendiera el valor de lo que generaba**_.

Esto a la larga, impedía que él programador pudiera avanzar sobre sus ideas o proponer soluciones alternativas.

Trabajar de esta forma solo trae problemas... Por tanto un **Desarrollador FullStack** debería conocer muy bien el negocio o cuando menos tener unas bases claras del mismo... He ahí que el papel del **[Product Owner](https://es.wikipedia.org/wiki/Scrum_(desarrollo_de_software))** sea fundamental en estos casos.

## Las consecuencias

Las consecuencias del problema para mí, es en lo que se transformó, es decir, la forma tradicional de trabajo iba del equipo de desarrollo hacía el equipo de [_**QA**_](https://es.wikipedia.org/wiki/Aseguramiento_de_la_calidad) y viceversa, lo que se convertía en vaivén de culpas donde nadie daba su visto bueno.

Si lo vemos desde cierto punto de vista, al equipo de **_[QA](https://es.wikipedia.org/wiki/Aseguramiento_de_la_calidad)_** no le importaba para nada el desarrollo del producto, su misión era verificar que todo estuviera funcionando como ellos _**entendían**_ que debía funcionar.

Por tanto, en cuanto el equipo de desarrollo termina, suele pensar que lo que ocurre después no es problema suyo (aquí podríamos incluir a los equipos de operaciones, bases de datos, etc.) y aquí es donde comienza el ciclo de culpas.

Sin embargo, las nuevas metodologías de trabajo exigen que la calidad se vuelva responsabilidad de todo el equipo, es decir, la calidad interna importa.

Esto convierte a los desarrolladores en el primer filtro de las aplicaciones... Lo que provoca que debamos darle continuidad a los estados del producto.

Creo que es la razón por las cuales las metodologías ágiles como [**SCRUM**](https://es.wikipedia.org/wiki/Scrum_(desarrollo_de_software)) se volvieron intensamente populares debido a que los negocios quieren responder rápido a las necesidades del mercado y para lograr eso necesitamos colaboración, equipos multidisciplinarios y mejorar incrementales del lado del software. Una visión clara y objetivos comunes también deberían formar parte de esto.

Por tanto, el objetivo del _testing_ no es como tal detectar _bugs_, sino que tratar de prevenirlos; por tanto la calidad de un producto empieza en fases muy tempranas del desarrollo del mismo y un _**Desarrollador FullStack**_ debería entender esto a la perfección y hacerlo de forma consciente.

## Aspectos culturales

Gran parte del desarrollo que se hacía antes, estaba enteramente construido para funcionar en arquitecturas cliente/servidor; para mí esto fue lo que marcó fuertemente la división entre los equipos de _frontend_ y _backend_.

Inclusive, es común a día de hoy encontrar personas que dicen dedicarse a hacer _frontend_ y su trabajo diario es crear [**API's**](https://decimodan.com/blog/2020/creando-tu-primer-api-con-nodejs-y-firebase-cloud-functions/) y consumirlas en una [**PWA**](https://decimodan.com/blog/2019/progressive-web-apps/)... Si lo vemos con esa perspectiva el rol del _frontend_ y _backend_ se separaron en su momento para poder atender las necesidades del negocio que en ese momento se tenían, sin embargo, a día de hoy las necesidades son muy distintas.

Hoy en día es impensable generar una solución sin pasar por alguna plataforma móvil para tener una interacción con los usuarios, que tenga la suficiente escalibilidad para que pueda atender millones de usuarios (o solo unos cuantos), bases de datos no estructuradas con millones de datos, comunicación estable, etc.

Por tanto, un **_Desarrollador FullStack_**, debería poder ayudar en todas las fases de desarrollo del software, y entender que lo que da forma a la solución es el conjunto.

Existen problemas asociados a la separación y suele darse mucho en empresas donde está muy separado el desarrollo _frontend_ y _backend_; regularmente muchas nuevas funcionalidades se buscarán atacar como siempre se han resuelto, eso mata la innovación y el crecimiento a largo plazo...

Otro aspecto a considerar es el pensamiento del líder técnico, es decir, muchas veces desarrolló antes en ese mismo equipo y tiene una visión muy marcada en su especialidad. Por esto, mientras mas conocimiento pueda adquirir de forma global, podrá visualizar las diferentes aristas y evitar una sobrecarga entre el equipo de _frontend_ y _backend_.

## Cuestiones de diseño

Regularmente, un equipo con poca experiencia o descaradamente indisciplinado, se pondrá a programar antes de diseñar.

Desarrollar software no significa teclear millones de caracteres raros en un editor, el desarrollo de software deberá representar la realidad a través de un lenguaje.

El principal problema de no entender esto recae en 2 personas fundamentales, el usuario y compañero de equipo.

Para el usuario, debido a que una plataforma sin un ápice de diseño, suele tener problemas fundamentales graves... A poco no has dicho alguna vez, ¿Por qué no pusieron este elemento aquí arriba?

Para el compañero de equipo se convierte en un caos... Entender lo que pensó otra persona a través de un código que no tiene ni pies ni cabeza, se vuelve una tarea titánica.

Por tanto, el **Desarrollador FullStack** debería sentarse a diseñar la solución junto con su equipo de trabajo y entre más interdisciplinario mejor, debido a que se pueden considerar más puntos de vista en el desarrollo.

## El día a día

Otra cosa fundamental a entender, es que **_si no está disponible nuestro software para que los usuarios puedan realizar lo que se supone que nuestro código hace no sirve._**

Esto es un ejercicio de conciencia debido a que regularmente hay un equipo encargado de "velar" por la compatibilidad, automatización, estabilidad, configuraciones, monitorización, etc.

Por tanto, debemos pensar en este punto en el ciclo de vida del desarrollo de software, por tanto, un **_Desarrollador FullStack_** debería conocer completamente como poder llevar su solución al mundo y automatizar la mayor parte del trabajo a las máquinas y no a los miembros de su equipo.

## Conclusiones

En pocas palabras, para mí, los elementos que tiene que reunir un _**Desarrollador FullStack**_ son:

1. Conocimiento del negocio
2. Entender y realizar pruebas a sus soluciones (testing)
3. Debe de poder diseñar la solución antes de programarla
4. Debe poder llevar la solución desarrollada ante el mundo y asegurar lo más posible que pueda ser usada.

Esto explica por que muchas personas no pueden ser _**FullStack**_ simplemente archivando en su arsenal de conocimientos _frameworks_ y _lenguajes_, debido a que _**gran parte del desarrollo del software se compone en darle valor al negocio.**_

Por tanto, esto no significa que no existan especialidades o que nos tengamos que volver expertos en todo; esto significa que necesitamos completitud, es decir, desarrolladores con habilidades humanas que faciliten llegar a los objetivos, buenos comunicando, capaces de aprender rápidamente sin olvidar que si o si, deben tener buenos _skills_ técnicos.

Así que, esto es un camino muy difícil, que no puede ser completado en la misma cantidad de tiempo por todas las personas, por tanto, es algo que deberías plantearte una vez que consideres que tus skills técnicos son lo bastante sólidos como para poder refutar tus ideas con argumentos. Por eso, es tan difícil encontrar buenos _**Desarrolladores FullStack**_...

Saludos.