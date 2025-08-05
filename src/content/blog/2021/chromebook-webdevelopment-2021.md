---
author: "Daniel Guerrero"
categories: ["Opiniones"]
pubDate: 2021-12-09T10:00:12Z
description: "Tuve la oportunidad de probar un Asus CX1100CNA que es un Chromebook con sistema operativo ChromeOS, te cuento su desempeño en Web Development"
draft: false
image: "https://decimodan.com/blog/chromebook.jpg"
thumbnail: "/blog/chromebook.jpg"
slug: "20-consejos-para-devs"
tags: ["Opiniones", "Chromebook", "Web", "Hugo"]
title: "¿Puede un ChromeBook ser usado para desarrollo web profesional en 2021?"

---

**ChromeOS** es una de esas cosas que ya tenia en el radar pero que nunca le entré de forma significativa. Se trata de un sistema operativo creado por Google en 2009 (si, en serio) y que está basado en el kernel de Linux.

Tiene un aspecto diferenciador muy marcado y es que la idea original del equipo de **ChromeOS** era crear un sistema operativo para las personas que se la pasan haciendo uso de las herramientas en la nube y por lo tanto, es un ecosistema que se acopla mucho a estas necesidades.

Tuve la oportunidad de probar uno hace muchos años y su uso era muy limitado, sin embargo, una promoción de Amazon me hizo replantearme darle una nueva oportunidad y decidí adquirir un [**Asus CX1100CNA**](https://www.amazon.com.mx/gp/product/B08XTB1NNH) que tiene las siguientes características:

- Procesador Intel Celeron N3350 (2 núcleos y 4 hilos)
- 4 GB de RAM (LPDDR4)
- 32 GB de almacenamiento (eMMC)

### Review Ultrarrápido del Asus CX1100CNA

#### Pros

- Buen performance para su hardware
- Muy poco peso
- USB-C

#### Contras

- La calidad de la pantalla
- El touchpad podría ser de mejor calidad
- La calidad de las bocinas no es la mejor

Pero creo que por los $125.00 USD que costó, es un excelente equipo.

## ¿Por qué un Chromebook y no un _________?

Bueno, en realidad no es que fuera buscando un Chromebook... Soy poseedor de un iPad Pro y en realidad quería comprar un teclado para este equipo y poder utilizarla para actualizar los artículos de este blog (tengo [**iAWritter**](https://ia.net/es/writer) en el iPad y me encanta) debido a que era lo que hacía antes al usar [**Ghost**](https://ghost.org/).

Me puse a buscar opciones en el mercado y me encontré con esto:

![Costo Teclado iPad](/blog/teclado_ipad.png)

Y sé que existen teclados bluetooth y otras cosas más baratas (tengo un [**MX Keys**](https://www.logitech.com/es-mx/products/keyboards/mx-keys-wireless-keyboard.920-009296.html) y un [**Logitech K380**](https://www.logitech.com/es-roam/products/keyboards/k380-multi-device.920-007563.html)) y ambos puedo conectarlos sin problema a mi iPad, pero esto con el tiempo no es práctico y algo que he descubierto, es que si quieres escribir más, debes poder hacerlo en cualquier lugar.

La otra razón era el costo, ya tengo un Laptop que uso para trabajar y demás pero que pesa bastante, tengo mi pc en el escritorio que es increíble pero que desafortunadamente solo sirve ahí. Entonces quería algo barato pero realmente funcional que me permitiera crear contenido para este blog y hacer algunos experimentos, aquí el Chromebook hizo un match perfecto.

## ¿Entonces cuál es tu objetivo con el Chromebook?

Ya definiendo objetivos, mi blog esta construido sobre [**Hugo**](https://decimodan.com/blog/2021/por-que-deberias-migrar-a-go/) + [**Firebase**](https://firebase.google.com/) pero uso algunos plugins de [**Javascript**](https://decimodan.com/tags/javascript/) para la construcción por lo que tengo que instalar [**Node**](https://nodejs.org/es/) + [**npm**](https://www.npmjs.com/). 

Por tanto, necesito poder instalar:

- La versión extended de [**Hugo**](https://decimodan.com/categories/go/)
- Git
- Node (LTS)
- NPM
- Algún editor de código
- Un programa que me permita escribir Markdown (además, multiplataforma para poder hacerlo en otros lugares cuando no esté usando el Chromebook)
- Las herramientas de Firebase para hacer deploy

Aquí te preguntarás... ¿Que no un Chromebook solo tiene Chrome OS? ¿Le vas a instalar Windows? ¿Le vas a instalar Linux? ¿Entonces para que te lo compraste?

## Prework Chromebook + Hugo

Pues vamos a instalar todo lo necesario para poder trabajar en el equipo, empezamos prendiendo y configurando el Chromebook y nos quedará una pantalla muy similar a esta:

![Escritorio Chromebook](/blog/escritorio_chromebook.png)



Con esto ya tenemos un sistema operativo funcional que nos permite (entre otras cosas):

- Navegar por internet usando Chrome
- Instalar aplicaciones Android usando Google Play
- Ver Youtube, Gmail, etc

#### Instalando Linux en el Chromebook

Mi pensamiento inicial era borrar ChromeOS e instalar una distro de Linux, sin embargo, vi que a partir de las versiones recientes de Chrome OS ya se puede utilizar de forma "nativa", para poder usar esto toca actualizar tu Chromebook a la última versión disponible que en mi caso es la 94.0.4606.124. 

![Version de ChromeOS](/blog/version_chromeos.png)

En la ventana de configuración del Chromebook encontrarás una pestaña llamada "Configuración Avanzada" y dentro de ella "Desarrolladores". Aquí es donde encontrarás la opción "Instalar Linux" donde solo queda darle a siguiente, siguiente y asignarle un espacio. Una vez que termines tendrás acceso a una terminal como esta:

![Version de ChromeOS](/blog/terminal_chromeos.png)

A todo esto, **¿Qué versión de Linux me ha instalado y que distribución?** Vamos a descubrirlo con el siguiente comando:

```shell
lsb_release -a
```

![Version de Linux](/blog/terminal_versionlinux.png)

Como podemos ver, nos instala un **Debian 10** (que no puedo asegurarlo pero creo que es el Linux en el que esta basado ChromeOS), por tanto todo lo que podamos instalar para Debian debe ser compatible para este Chromebook, vamos a instalar todo lo que necesitamos:

#### 1/7 Instalando la version Extended de Hugo

[**Hugo**](https://decimodan.com/categories/go/) es la base de este blog y lo uso para generar todo el website. La instalación de [**Hugo Extended**](https://decimodan.com/categories/go/) es muy sencilla debido a que existe un paquete de [**Hugo Extended**](https://decimodan.com/categories/go/) para **Debian** en su [repositorio oficial](https://github.com/gohugoio/hugo/releases/download/v0.90.0/hugo_extended_0.90.0_Linux-64bit.deb), solo hace falta descargarlo, darle doble click y lo instalará. Para comprobar que lo hemos hecho bien, en el terminal introduce este comando:

```shell
hugo version
```

![Version de Hugo](/blog/version_hugo.png)

#### 2/7 Instalando Git

Git lo uso para llevar un control de cambios del website y todo lo tengo sincronizado con GitHub, así puedo seguir trabajando en diferentes computadoras. La instalación de Git igualmente es muy sencilla, en el terminal introduce el siguiente comando:

```shell
sudo apt-get install git
```

Esto nos instala la versión 2.20.1, como podemos ver en la siguiente imagen:

![Version de Git](/blog/version_git.png)

#### 3/7 Instalando NodeJS

NodeJS lo utilizo para poder generar algunas cosas del blog. Para instalarlo abrimos una terminal e ingresamos el siguiente comando:

```shell
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
# Luego este comando
sudo apt install nodejs
```

Esto nos instalará la versión 14.18.2 de NodeJS:

![Version de Node](/blog/version_node.png)

#### 4/7 Instalando NPM

NPM lo uso para bajar las dependencias del blog. Ingresamos el siguiente comando para instalarlo:

```shell
sudo apt install npm
```

Esto nos instalará la versión 6.14.15 de npm.

![Version de npm](/blog/version_npm.png)

#### 5/7 Instalando algún editor de código

El editor de código lo utilizo para realizar algunos cambios al blog y también para inicializar el servidor de desarrollo de Hugo. Solo por probar el rendimiento del Chromebook me decidí a instalar Visual Studio Code. Es muy sencillo de instalar, [puedes bajarlo del sitio oficial](https://code.visualstudio.com/docs/?dv=linux64_deb) y darle doble click para instalarlo.

Al terminar de instalarlo, se nos abre una ventana con el editor y listo.

![Visual Studio Code en ChromeOS](/blog/vscode_chromeos.png)

#### 6/7 Instalando un programa multiplataforma que me permita escribir Markdown 

En mi caso personal trabajo a diario con diferentes sistemas operativos (Linux, MacOS, Windows) y ahora le agrego uno nuevo ChromeOS, eso por mencionar los sistemas operativos de escritorio. 

La alternativa que encontré fue [**Typora**](https://typora.io/) que puede instalarse en todos los sistemas operativos mencionados, pero para instalarlo en ChomeOS hay que ingresar los siguientes comandos

```shell
# Instalaremos Typora mediante un repositorio
sudo apt-get install software-properties-common

# Importamos la clave publica del repositorio de Typora
wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -

# Agregamos el repositorio de Typora a ChromeOS
sudo add-apt-repository 'deb https://typora.io/linux ./'

# Actualizamos
sudo apt update

#Instalamos
sudo apt install typora
```

Con esto ya tendremos todo listo y podremos editar los artículos sin problema:

![Typora en ChromeOS](/blog/typora_chromeos.png)

#### 7/7 Instalando las herramientas de Firebase

Ya solo nos falta terminar de instalar las herramientas de **Firebase** para poder hacer deploy de mi website... Esto lo instalamos de la siguiente manera:

 ```shell
# Instalar las herramientas de Firebase
npm install -g firebase-tools
 ```

![Firebase en ChromeOS](/blog/firebase_chromeos.png)



## ¿Cuál fue la experiencia?

La verdad muy buena, la muestra de que funciona es este mismo post, pero también lo que no comenté fue el cómo lo hice. Cómo no sabía si iba a funcionar intenté usar un Hub USB C ([**tengo este**](https://www.hypershop.com/collections/usb-c-hubs/products/hyperdrive-gen2-6-in-1-usb-c-hub)) para conectar un monitor externo, un teclado y un mouse. Todo funcionó sin problema..

Ahora usarlo en el día a día con las herramientas que normalmente usamos en el flujo del desarrollo web a full, no creo que sea la mejor decisión.

Personalmente para trabajar en desarrollo prefiero utilizar **Linux** por lo que el Chromebook hizo buen match con mis necesidades, pero tiene sus grandes "peros", que para mí son:

- Debes conocer bien Linux
- Debes saber usar la terminal
- Debes tener mucha paciencia (a veces las cosas se rompen y toca arreglarlas)

Por lo que no creo que sea el laptop para todos, pero el costo/beneficio es increíble, la verdad es que sigo asombrado de lo que pueden hacer $125.00 USD dedicándole un poco de tiempo.

## Conclusiones

Definitivamente recomiendo que le des una oportunidad a un Chromebook pero igualmente recomiendo que este no sea tu computadora principal, por que limitará un poco tu avance, pero, si vas iniciando en el mundo del desarrollo (o tienes un blog como este) te va perfecto y puedes cargar con este laptop para todas partes sin miedo a que se rompa o se pierda.

Oficialmente se quedará como parte de mi arsenal para resolver proyectos de software.