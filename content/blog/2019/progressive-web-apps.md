+++
author = "Daniel Guerrero"
categories = ["Vuejs"]
date = 2019-09-19T00:04:48Z
description = ""
draft = false
image = "/blogo/pwa.webp"
slug = "progressive-web-apps"
summary = "Transformar una aplicación web (o crear una nueva) a una aplicación progresiva es abrir un mundo infinito de posibilidades y así crear un nexo entre nuestros usuarios y la aplicación, ya que mezclamos lo mejor del mundo de la web con lo mejor de las aplicaciones móviles."
tags = ["Vuejs"]
title = "Progressive Web Apps"
thumbnail = "/blogo/pwa.webp"
+++


## ¿Por qué crear una Progressive Web App?

Esta es un pregunta que seguramente te has hecho (por eso llegaste a ese articulo :3) así que mostraremos cuales son algunas de sus ventajas y sus desventajas... La respuesta rápida es: **los beneficios son más que sus contras.**

> Transformar una aplicación web (o crear una nueva) a una aplicación progresiva es abrir un mundo infinito de posibilidades y así crear un nexo entre nuestros usuarios y la aplicación, ya que mezclamos lo mejor del mundo de la web con lo mejor de las aplicaciones móviles.

La idea de las  **[progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)** surgió gracias a **Google (aunque Apple ya tenía esta idea mucho antes de la existencia del AppStore)**, que descubrió lo siguiente:

{{< figure src="/blogo/pwa_datos.webp" caption="Fuente: www.google.com" >}}

El gráfico anterior nos dice que 87% de los usuarios invierten su tiempo en aplicaciones móviles y que el otro 13% lo utilizan para navegar en la web, basado en esos datos, podríamos decir que a la web le está yendo bastante mal, sin embargo, el **80% de ese tiempo los usuarios lo invierten en tres aplicaciones, difieren por rango de edad pero entre estas se encuentran:**

* Instagram
* Twitter
* Whatsapp
* Facebook
* Snapchat

Además Google dice que el promedio de aplicaciones instaladas por usuarios es **0 aplicaciones al mes**, por tanto el enfoque móvil vs web parece más enrevesado que nunca.

## ¿Entonces Web o Móvil?

La respuesta corta es web, ya que (nuevamente) Google dice que en promedio un usuario visita **100 sitios web al mes**, lo que nos indica que la probabilidad de que llegue a un sitio web nuevo es más alta de que llegue a una aplicación nueva, los números nos dan la razón.

La web gana en este aspecto, pero esta lejos de ser perfecta ya que carece de ciertos aspectos que una aplicación de forma nativa hace mucho mejor, que son:

* **Las aplicaciones web son lentas [(aunque ya tenemos ciertos avances en ese aspecto)](https://webassembly.org/)**
* **Sin funcionalidad offline**
* **No hay soporte para Push Notifications**
* **No tienen un icono en nuestro menú (ya sea iOS o Android)**

¿Entonces? Pues las progressive web apps llegaron para solucionar este tipo de fallos...

## ¿Cómo funcionan?

Cuando visitas una progressive web app, tu navegador lo detecta y muestra un mensaje como este:

{{< figure src="/blogo/pwa0.webp" caption="Mensaje que muestra el instalador de una Progressive Web App" >}}

{{< figure src="/blogo/pwa1.webp" caption="Mensaje que muestra una Progressive Web App al instalarse" >}}

Una vez que el usuario agregue nuestra **PWA** a su pantalla de inicio, podemos decir que el teléfono "ya tiene instalada" una **progressive web app**, ya que el sistema operativo añade el icono con su imagen y el usuario percibe a la misma como si fuera una aplicación nativa:

{{< figure src="/blogo/pwa2.webp" caption="Icono de la aplicación en nuestro HomeScreen" >}}

Una vez "instalada" la **progressive web app**, podemos hacer todo lo citado anteriormente como: **enviar notificaciones push, funcionar de forma offline, etc.** Todo esto se logra gracias a una maravilla llamada **"service workers"** (ya hablaremos más adelante de eso en detalle).

> Puedes revisar más ejemplos de progressive web apps en el sitio: [https://pwa.rocks/](https://pwa.rocks/)

Resumiendo, todo esto es muy bueno, pero nos falta un aspecto a mitigar y es la **web es muy lenta...**

> Google dice que en casi todos los casos un usuario va a abandonar tu sitio web si lo haces esperar más de 5 segundos... A nadie le gusta esperar...

Para eso, la recomendación es mejorar el llamado **["critical rendering path"**](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)** que se traduce en mostrar el mínimo de Javascript, CSS e imágenes en la primera vista del usuario, debido a que en este punto no hay cache y todo depende del performance de la página web.

Para medir el nivel de performance se encuentra **[Ligthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)** para realizar un test de tu aplicación. Ya sea que desarrolles en **[React](https://es.reactjs.org/)** o **[Vuejs](https://decimodan.com/tags/vuejs/)**, es recomendable bajar esos tiempos lo más posible.

Otros consejos para mejorar, aunque estos son más generales para cualquier desarrollo web son:

* **Lazyload**
* **Minificar las imágenes**
* **Minificar css, html, etc.**

Como pueden ver esto forma parte de una iniciativa de Google, por tanto, su implementación con Chrome es el estándar, sin embargo, Apple ya está trabajando en su implementación con Safari (recordemos que el primer iPhone quería lograr esto).

## Conclusiones

El futuro de la web, desde el punto de vista de este ser humano es el uso de las **progressive web app** junto a **[WebAssembly](https://webassembly.org/)**, debido a que las aplicaciones nativas se empezaran a utilizar con menor frecuencia (pregúntale a tus familiares ¿Cuantas apps han bajado este último mes?) por tanto, la web esta avanzando a pasos agigantados y crear una **progressive web app**, me parece, que es una excelente decisión. Puedes empezar con un framework como **React** o **[Vuejs](https://decimodan.com/tags/vuejs/)** e ir avanzando poco a poco a partir de ahí...