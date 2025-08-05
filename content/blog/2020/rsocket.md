+++
author = "Daniel Guerrero"
categories = ["Opiniones"]
date = 2020-08-17T22:09:56Z
description = ""
draft = false
image = "/blogo/rsocket-1.webp"
slug = "rsocket"
summary = "RSocket es un nuevo protocolo binario basado en mensajes que estandariza el enfoque de la comunicación en la nube. Ayuda a resolver problemas comunes de aplicaciones de una manera coherente, además de tener soporte para múltiples lenguajes de programación y capas de transporte."
tags = ["Opiniones"]
title = "Introducción a RSocket - La próxima revolución para la comunicación en la nube"
thumbnail = "/blogo/rsocket-1.webp"
+++


Este articulo pretende ser un inicio hacia lo que es **[RSocket](https://rsocket.io/),** un nuevo protocolo binario que puede revolucionar la comunicación de máquina a máquina. Este articulo específicamente, pretende centrarse en la comunicación entre micro servicios y el modelo de interacción de **[RSocket](https://rsocket.io/)**.

Nota: Esto está pensando en el lenguaje de programación Java :D

## Los problemas de comunicación en los sistemas distribuidos

Los microservicios están a día de hoy inmersos en la mayoría de aplicaciones productivas de gran escala. Para llegar a esto, pasamos por el "terrible" viaje que era implementar y mantener aplicaciones monolíticas, hasta tener pequeños aplicativos escalables y completamente distribuidos; sin embargo, esto nos trae una serie de inconvenientes.

Para comenzar, una aplicación que quiera resolver una necesidad de un cliente final tiene que intercambiar (si o si) datos y hay veces que estos se vuelven demasiados. En las aplicaciones monolíticas eso no es un problema (tan grande) ya que toda la comunicación se produce dentro de una sola JVM. En la [**arquitectura de microservicios**](https://es.wikipedia.org/wiki/Arquitectura_de_microservicios)**,** donde los "servicios" se implementan en contenedores separados y se comunican a través de una red interna o externa, las redes son un **[ciudadano de primera clase](https://en.wikipedia.org/wiki/First-class_citizen#:~:text=In%20programming%20language%20design%2C%20a,generally%20available%20to%20other%20entities.).**

Las cosas se complican mas si se ejecutan las aplicaciones en la nube, donde los problemas de red y los períodos de mayor latencia son algo que no se puede evitar por completo. En lugar de intentar solucionar los problemas de la red, es mejor hacer que la arquitectura sea resistente y completamente operativa incluso durante un "periodo turbulento",

Profundicemos un poco más en los conceptos de los **microservicios, datos, comunicación y la nube.**

Como ejemplo, analizaremos "un sistema" al que se puede acceder a través de un sitio web (o una **[PWA](https://decimodan.com/blog/2019/progressive-web-apps/))** y una aplicación móvil. El sistema consta de varios microservicios escritos en Java. Obviamente, todos ellos se replican en múltiples zonas de disponibilidad para asegurar que todo el sistema esté siempre disponible.

Para ser independiente del proveedor de **[IaaS](https://www.redhat.com/es/topics/cloud-computing/what-is-iaas)** y mejorar la experiencia del desarrollador (y básicamente hacer su vida más fácil) las aplicaciones se ejecutan sobre **[PaaS](https://www.redhat.com/es/topics/cloud-computing/what-is-paas).** Viéndolo así, tenemos una amplia gama de posibilidades: **[Cloud Foundy](https://www.cloudfoundry.org/)**, **[Kubernetes](https://kubernetes.io/es/docs/concepts/overview/what-is-kubernetes/)** o ambos combinados. En términos de comunicación entre servicios, el diseño es muy simple. Cada componente expone API REST simples, como se muestra en el siguiente diagrama:

{{< figure src="/blogO/diagrama-comunicacion-microservicios.webp" caption="Diagrama - Comunicación entre microservicios" >}}

En una primera instancia, parecería que todo se ve bien. Los componentes se separan y se ejecutan en la nube ¿Que podría fallar?... En realidad, hay dos problemas principales y ambos están relacionados con la comunicación.

**El primer problema es el modelo de solicitud/respuesta de HTTP.** Si bien, tiene muchos casos de uso, no fue diseñado para la comunicación de máquina a máquina. Es muy común que el microservicio envíe algunos datos a otro componente sin preocuparse por el resultado de la operación (en inglés **Fire & Forget**) o transmitir datos automáticamente cuando estén disponibles (transmisión de datos). Estos patrones de comunicación son difíciles de lograr de una manera elegante y eficiente utilizando un modelo de solicitud/respuesta. Incluso... realizar una operación simple de **"Fire & Forget"**tiene efectos secundarios: el servidor tiene que enviar una respuesta al cliente, incluso si el cliente no está interesado en procesarla.

**El segundo problema es el rendimiento.** Supongamos que los clientes utilizan nuestro sistema de forma masiva, el tráfico aumenta y nos hemos dado cuenta que tenemos dificultades para gestionar más de unos pocos cientos de solicitudes por segundo. Gracias a los contenedores y a la nube podemos ampliar nuestros servicios con facilidad. Sin embargo,  **_si hacemos un seguimiento del consumo de recursos un poco más, notaremos que mientras nos estamos quedando sin memoria, las CPU de nuestras VM están casi inactivas._**

El problema proviene del modelo de **[subproceso por solicitud](https://docs.oracle.com/cd/E19146-01/820-7979/geeie/index.html)** que generalmente se usa con [**HTTP 1.x**](https://developer.mozilla.org/es/docs/Web/HTTP/Gestion_de_la_conexion_en_HTTP_1.x), donde cada solicitud tiene su propia [**memoria de pila**](https://es.wikipedia.org/wiki/M%C3%A1quina_virtual_Java). En tal escenario, podemos aprovechar el modelo de **[programación reactiva](https://en.wikipedia.org/wiki/Reactive_programming)** y un  **[enfoque de entrada y salida sin bloqueo (non-blocking IO).](https://en.wikipedia.org/wiki/Non-blocking_I/O_(Java))** Reducirá significativamente el uso de memoria, sin embargo, no reducirá la latencia.

> [**HTTP 1.x**](https://developer.mozilla.org/es/docs/Web/HTTP/Gestion_de_la_conexion_en_HTTP_1.x) **es un protocolo basado en texto, por lo que el tamaño de los datos que deben transferirse es significativamente mayor que en el caso de los protocolos binarios.**

En la comunicación máquina a máquina no debemos limitarnos a HTTP (especialmente 1.x), su modelo de solicitud/respuesta y bajo rendimiento. Existen muchas soluciones más adecuadas (y robustas) en el mercado. La mensajería basada en [**RabbitMQ**](https://www.rabbitmq.com/) **, [gRPC](https://grpc.io/)** o incluso  **[HTTP 2](https://en.wikipedia.org/wiki/HTTP/2)** con su soporte para  **[multiplexación y cargas útiles binarizadas](https://developers.google.com/web/fundamentals/performance/http2)** funcionará mucho mejor en términos de rendimiento y eficiencia que **[HTTP 1.x](https://developer.mozilla.org/es/docs/Web/HTTP/Gestion_de_la_conexion_en_HTTP_1.x)**.

{{< figure src="/blogo/diagrama_comunicacion_microservicios2.webp" caption="Diagrama de comunicación de microservicios - gRPC + HTTP/2" >}}

El uso de múltiples protocolos nos permite vincular los microservicios de la manera más eficiente y adecuada en un escenario determinado. Sin embargo, la adopción de múltiples protocolos nos obliga a reinventar la rueda una y otra vez. Tenemos que enriquecer nuestros datos con información adicional relacionada con la seguridad y crear múltiples adaptadores que manejen la traducción entre protocolos. En algunos casos, el transporte requiere recursos externos (intermediarios, servicios, etc.) que deben estar altamente disponibles. _**Los recursos adicionales implican costos adicionales,**_ a pesar de que todo lo que necesitamos es una operación de simple **"fire and forget"** basada en mensajes. Además, una multitud de protocolos diferentes pueden introducir serios problemas relacionados con la gestión de aplicaciones, especialmente si nuestro sistema consta de cientos de microservicios.

Los problemas mencionados hasta ahora son las razones principales por las que se inventó **[RSocket](https://rsocket.io/)** y por qué puede revolucionar la comunicación en la nube. Por su reactividad y **[modelo de interacción robusto](https://rsocket.io/docs/Protocol)** incorporado, **[RSocket](https://rsocket.io/)** puede aplicarse en varios escenarios comerciales y eventualmente unificar los patrones de comunicación que usamos en sistemas distribuidos.

## ¿Qué es entonces RSocket?

**[RSocket](https://rsocket.io/)** es un nuevo protocolo binario basado en mensajes que estandariza el enfoque de la comunicación en la nube. Ayuda a resolver problemas comunes de aplicaciones de una manera coherente, además de tener soporte para múltiples lenguajes de programación (Java, **[Javascript](https://decimodan.com/tags/javascript/)**, Python, etc.) y capas de transporte (**[TCP](https://es.wikipedia.org/wiki/Protocolo_de_control_de_transmisi%C3%B3n)**, **[WebSocket](https://es.wikipedia.org/wiki/WebSocket)**, **[Aeron](https://github.com/real-logic/aeron/wiki)**, etc).

### Dirigido por mensajes y marcos

La interacción con [**RSocket**](https://rsocket.io/) **se divide en marcos (frames).** Cada trama consta de un encabezado de trama que contiene la identificación del flujo, la definición del tipo de trama y otros datos específicos del tipo de trama. El encabezado del marco va seguido de metadatos y carga útil (meta-data & payload): estas partes contienen datos especificados por el usuario.

```shell
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|						Stream ID							  |
+-----------+-+-+-+--------+----------------------------------+
|   Frame Type  |	Flags  |
+--------------------------+
   				Other frame specific data
+--------------------------+----------------------------------+
                    	Metatada
+--------------------------+----------------------------------+
                    	  Data
```

Hay varios tipos de **frames que representan diferentes acciones y métodos disponibles del modelo de interacción.** No vamos a cubrir todos ellos, pero están descritos [**aquí**](https://rsocket.io/docs/Protocol). Sin embargo, vale la pena señalar algunos.

Uno de ellos es el **_[frame de configuración (Setup Frame)](https://rsocket.io/docs/Protocol#frame-setup)_** que el cliente envía al servidor al comienzo de la comunicación. Este frame se puede personalizar para agregar reglas de seguridad u otra información necesaria durante la inicialización de la conexión. Cabe señalar qué [**RSocket**](https://rsocket.io/) no distingue entre el cliente y el servidor después de la fase de configuración de la conexión. _**Cada lado puede comenzar a enviar los datos al otro, lo que hace que el protocolo sea casi completamente simétrico.**_

### Rendimiento

**_Los frames se envían como un flujo de bytes_**, esto hace que **[RSocket](https://rsocket.io/)** sea mucho más eficiente que los protocolos típicos basados en texto. Desde la perspectiva del desarrollador, es más fácil depurar un sistema mientras los JSON vuelan de un lado a otro a través de la red, pero el impacto en el rendimiento hace que esta conveniencia sea cuestionable. El protocolo no impone ningún mecanismo específico de serialización/deserialización, considera la trama como una "_bolsa de bits"_ que podría convertirse en cualquier cosa. Eso hace posible utilizar la serialización JSON o soluciones mas eficientes como **[Protobuf](https://developers.google.com/protocol-buffers)** o **[AVRO](https://avro.apache.org/)**.

El segundo factor que tiene un gran impacto en el rendimiento de  **[RSocket](https://rsocket.io/)**  es la **[multiplexación](https://developers.google.com/web/fundamentals/performance/http2)**. El protocolo crea flujos lógicos (canales) en la parte superior de la conexión física única. Cada flujo tiene su ID único que, hasta cierto punto, puede interpretarse como una cola que conocemos por los sistemas de mensajería. Dicho diseño se ocupa de los principales problemas conocidos por **[HTTP 1.x](https://developer.mozilla.org/es/docs/Web/HTTP/Gestion_de_la_conexion_en_HTTP_1.x):** conexión por modelo de solicitud y rendimiento deficiente de la "canalización". Además,  **[RSocket](https://rsocket.io/) admite de forma nativa la transferencia de grandes cargas útiles (Payload Frames).** En tal escenario, la trama de carga útil se divide en varias tramas con una bandera adicional: el número ordinal del fragmento dado.

### Reactividad & Control del Flujo

El protocolo **[RSocket](https://rsocket.io/)** adopta completamente los principios del **[Manifiesto Reactivo](https://www.reactivemanifesto.org/)**. Su carácter asincrónico y ahorro en términos de recursos ayuda a disminuir la latencia experimentada por los usuarios finales y los costos de la infraestructura. Gracias a la transmisión, no necesitamos extraer datos de un servicio a otro, sino que los datos se envían cuando están disponibles. Es un mecanismo extremadamente poderoso, pero también puede ser riesgoso.

Consideremos un escenario simple: en nuestro sistema, estamos transmitiendo eventos del servicio 1 al servicio 2. La acción realizada en el lado del receptor no es trivial y requiere algo de tiempo de cálculo. **_Si el servicio 1 envía los eventos más rápido de lo que el servicio 2 es capaz de procesarlos, eventualmente, el servicio 2 se quedará sin recursos: es decir, el remitente matará al receptor._** Dado que  [**RSocket usa Reactor**](https://projectreactor.io/)**,** tiene soporte incorporado para el control de flujo, lo que ayuda a evitar tales situaciones.

Podemos proporcionar fácilmente la implementación del mecanismo de  **[contrapresión (backpressure)](https://www.arquitecturajava.com/rx-back-pressure-un-concepto-importante/)** ajustado a nuestras necesidades. El receptor puede especificar cuántos datos le gustaría consumir y no obtendrá más hasta que notifique al remitente que está listo para procesar más. Por otro lado, para limitar el número de frames entrantes del solicitante, **[RSocket implementa un mecanismo de concesión](https://rsocket.io/docs/Protocol#flow-control-lease)**. El "respondedor" puede especificar cuántas solicitudes puede enviar el solicitante dentro de un período de tiempo definido.

### API

**[RSocket usa Reactor](https://projectreactor.io/)**, por lo que en el nivel de API estamos operando principalmente en objetos **[Mono](https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Mono.html)** y **[Flux](https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Flux.html)**. También tiene soporte completo para señales reactivas; podemos implementar fácilmente la "reacción" en diferentes eventos: onNext, onError, onClose, etc.

De aquí en adelante se detallarán las opciones de interacción disponibles en **[RSocket](https://rsocket.io/),** así como el código de ejemplo.

## Configurar la conexión con RSocketFactory

Configurar la conexión **_RSocket_** entre los "pares" es bastante fácil. El API proporciona la fábrica _**RSocketFactory**_ con "métodos de fábrica" de recepción y conexión para crear instancias de **_RSocket_** y _**CloseableChannel**_ en el lado del cliente y del servidor, respectivamente. La segunda propiedad común presente en ambas partes de la comunicación (el solicitante y el "respondedor") es un transporte. RSocket puede utilizar múltiples soluciones como capa de transporte **[TCP](https://es.wikipedia.org/wiki/Protocolo_de_control_de_transmisi%C3%B3n)**, **[WebSocket](https://es.wikipedia.org/wiki/WebSocket)**, **[Aeron](https://github.com/real-logic/aeron/wiki)**). En cualquier caso, el API proporciona los métodos de fábrica que le permiten modificar y ajustar la conexión.

```java

RSocketFactory.recieve()
		.acceptor(new HolaMundoSocketAcceptor())
        .transport(TcpServerTransport.create(HOST, PORT))
        .start
        .subscribe
        

RSocketFactory.connect()
		.transport(TcpClientTransport.create(HOST, PORT))
        .start()
        .subscribe();
```

En el caso del "respondedor", tenemos que crear una instancia de "aceptador de socket" (socket acceptor). El SocketAcceptor es una interfaz que proporciona el contrato entre los pares. Tiene un solo método **_accept_** que acepta RSocket para enviar solicitudes y devuelve una instancia de RSocket que se utilizará para manejar las solicitudes del par. Además de proporcionar el contrato, SocketAcceptor nos permite acceder al contenido del marco de configuración (Setup Frame Content). En el nivel de API, se refleja en el objeto **_ConnectionSetupPayload_**.

```java
public interface SocketAcceptor{
	Mono<RSocket> accept(ConnectionSetupPayload setup, RSocket sendingSocket);
}
```

Como se muestra arriba, configurar la conexión entre los "pares" es relativamente fácil, especialmente para aquellos de ustedes que ya trabajaron con WebSockets anteriormente; en términos de API, ambas soluciones son bastante similares.

### Modelo de interacción

Después de configurar la conexión, podemos pasar al modelo de interacción. RSocket admite las siguientes operaciones:

* Fire & Forget
* Request - Response
* Request-Stream
* Channel

**Fire & Forget**, fue diseñado para enviar los datos del remitente al receptor. En este caso, al remitente no le importa el resultado de la operación; se refleja en el nivel de API en un return (Mono). La diferencia entre estas acciones está en el frame. Un mensaje tan ligero puede ser útil para enviar notificaciones al dispositivo móvil o dispositivos de tipo IoT.

_**RSocket también puede imitar el comportamiento HTTP.**_ Tiene soporte para la semántica de _solicitud-respuesta_ y probablemente ese será el tipo principal de interacción que se usará con RSocket. En el contexto de los flujos, dicha operación se puede representar como un flujo que consta de un único objeto. En este escenario, el cliente está esperando el frame de respuesta, pero lo hace de una manera totalmente no bloqueante.

En las aplicaciones en la nube, son más interesantes los flujos de **Request-Stream** y las interacciones de **Channel** de solicitudes que operan en los flujos de datos, generalmente infinitos. En el caso de la operación de flujo de solicitudes, el solicitante envía una sola trama al _requester_ y recupera el flujo de datos. Dicho método de interacción permite a los servicios cambiar de la estrategia de extracción de datos a la estrategia de inserción de datos. En lugar de enviar solicitudes periódicas al _requester,_ el solicitante puede suscribirse a la transmisión y reaccionar ante los datos entrantes; llegarán automáticamente cuando estén disponibles.

Gracias al [multiplexado y al soporte de trasnferencia de datos bidireccional](https://developers.google.com/web/fundamentals/performance/http2), podemos ir un paso más allá utilizando el método de _canal de solicitud_. RSocket puede transmitir los datos del solicitante al _requester_ y viceversa utilizando una única conexión física. Esta interacción puede resultar útil cuando el solicitante actualiza la suscripción, por ejemplo, para cambiar los criterios de suscripción. Sin el canal bidireccional, el cliente tendría que cancelar la transmisión y volver a solicitarla con los nuevos parámetros.

En el API, todas las operaciones del modelo de interacción están representadas por métodos de la interfaz **[RSocket](https://rsocket.io/)** que se muestran a continuación:

```java
public interface RSocket extends Availability, Closeable{
	Mono<Void> fireAndForget(Payload payload);
    Mono<Payload> requestResponse(Payload payload);
    Flux<Payload> requestStream(Payload payload);
    Flux<Payload> requestChannel(Publisher<Payload> payloads);
    Mono<Void> metadataPush(Payload payload);
}
```

Para mejorar la experiencia del desarrollador y evitar la necesidad de implementar cada método de interfaz, el API proporciona **_AbstractRSocket_** que podemos heredar. Al juntar _**RSocketAcceptor**_ y **_AbstractRSocket_**_,_ obtenemos la implementación del lado del servidor, que en el escenario básico puede verse así:

```java
@Slf4j
public class HolaMundoSocketAcceptor implements SocketAcceptor{
	
    @Override
    public Mono<RSocket> accept(ConnectionSetupPayload setup, RSocket sendingSocket){
    log.info("Recibida una conexión - Payload: [{}] - Metadata: [{}]", setup.getDataUtf8(), setup.getMetadataUtf8());
    return Mono.just(new AbstractRSocket() {
    	
        @Override
        public Mono<Void> fireAndForget(Payload payload){
        	log.info("Recibido fire&forget - Payload: [{}]", payload.getDataUtf8());
            return Mono.empty();
        }
        
        @Override
        public Mono<Payload> requestResponse(Payload payload){
        	log.info("Recibido requestResponse - Payload: [{}]", payliad.getDataUtf8());
            return Mono.just(DefaultPayload.create("Hola " + payload.getDataUtf8());
        }
        
        @Override
        public Flux<Payload> requestStream(Payload payload){
        	return Flux.interval(Duration.ofMillis(1000))
            		.map(time -> DefaultPayload.create("Hola " + payload.getDataUtf8() + " @ " + Instant.now()));
        }
        
        @Override
        public Flux<Payload> requestChannel(Publisher<Payload> payloads{
        	return Flux.from(payloads)
            		.doOnNext(payload -> {
                    	log.info("Payload recibido: [{}]", payload.getDataUtf8()); 
                    })
                    .map(payload -> DefaultPayload.create("Hola " + payload.getDataUtf8() + " @ " + Instant.now()))
                    .subscribeOn(Schedulers.parallel());
        }
        
        @Override
        public Mono<Void> metadataPush(Payload payload){
        	log.info("Recibido metadataPush - Metadata: [{}]", payload.getMetadataUtf8());
        }
    });
}

```

En el lado del remitente, usar el modelo de interacción es bastante simple, todo lo que tenemos que hacer es invocar un método particular en la instancia de RSocket que hemos creado:

```java
socket.fireAndForget(DefaultPayload.create("Hola Mundo"));
```

Más interesante, del lado del remitente es la implementación del mecanismo de **[contrapresión (backpressure)](https://www.arquitecturajava.com/rx-back-pressure-un-concepto-importante/):**

```java
public class RequestStream{
	
    public static void main(String[] args){
    	RSocket socket = RSocketFactory.connect()
        		.transport(TcpClientTransport.create(HOST, PORT))
                .start()
                .block();
        socket.requestStream(DefaultPayload.create("Daniel", "ejemplo"))
        		.subscribe(new BackPressureSubscriber());
        socket.dispose();
    }
    
    @Slf4j
    private static class BackPressureSubscriber implements Subscriber<Payload>{
    	
        private static final Integer ITEMS_SOLICITADOS = 5;
        private Subscription subscription;
        int itemsRecibidos;
        
        @Override
        public void onSubscribe(Subscription s){
        	this.subscription = s;
            Subscription.request(ITEMS_SOLICITADOS);
        }
        
        @Override
        public void onNext(Payload payload){
        	itemsRecibidos++;
            if(itemsRecibidos % ITEM_SOLICITADOS == 0){
            	log.info("Solicitando los siguientes [{}] elementos", ITEMS_SOLICITADOS);
                subscription.request(ITEMS_SOLICITADOS);
            }
        }
        
        @Override
        public void onError(Throwable t){
        	log.error("Stream error [{}]", t);
        }
        
        @Override
        public void onComplete(){
        	log.info("Subscription complete");
        }
    }
    
}
```

En este ejemplo, estamos solicitando el flujo de datos, pero para asegurarnos que las tramas entrantes no matarán al solicitante, hemos implementado el mecanismo de **[contrapresión (backpressure)](https://www.arquitecturajava.com/rx-back-pressure-un-concepto-importante/).** Para implementar este mecanismo usamos  **[request_n frame](https://rsocket.io/docs/Protocol#frame-request-n)** que en el nivel de API se refleja en el método **subscription.request(n).** Al comienzo de la suscripción (onSuscribe (Subscription s)), estamos solicitando 5 objetos, luego contamos los artículos recibidos en **_onNext(Payload payload)._** Cuándo todos los frames esperados llegaron al solicitante, estamos solicitando los siguientes 5 objetos, nuevamente usando el método **subscription.request(n).** El flujo de este suscriptor se muestra en el siguiente diagrama:

```shell
Requester 												Responder
|						request_n[5]						 |
|----------------------------------------------------------->|
|															 |
|						 payload[1]							 |
|<-----------------------------------------------------------|
|						 payload[2]							 |
|<-----------------------------------------------------------|
|						 payload[3]							 |
|<-----------------------------------------------------------|
|						 payload[4]							 |
|<-----------------------------------------------------------|
|						 payload[5]							 |
|<-----------------------------------------------------------|
|															 |
|															 |
|															 |	
|						request_n[5]						 |
|------------------------------------------------------------|
|															 |
|															 |
|						 payload[1]							 |
|<-----------------------------------------------------------|
|						 payload[2]							 |
|<-----------------------------------------------------------|
|						 payload[3]							 |
|<-----------------------------------------------------------|
|						 payload[4]							 |
|<-----------------------------------------------------------|
|						 payload[5]							 |
|<-----------------------------------------------------------|
```

La implementación del mecanismo de **[contrapresión (backpressure)](https://www.arquitecturajava.com/rx-back-pressure-un-concepto-importante/)** que se presenta en esta sección es muy básica. En producción, deberíamos proporcionar una solución más sofisticada basada en métricas más precisas, por ejemplo, tiempo de cálculo previsto/medio. Después de todo, el mecanismo de **[contrapresión (backpressure)](https://www.arquitecturajava.com/rx-back-pressure-un-concepto-importante/)** no hace que desaparezca el problema de una respuesta excesiva, cambia el problema al lado de la respuesta, donde se puede manejar mejor.

## Conclusiones

Analizamos muy por encima los problemas de comunicación en la arquitectura de microservicios y cómo estos problemas se puede resolver con **[RSocket](https://rsocket.io/)**.

En próximos artículos veremos cómo profundizar más en el código y unos ejemplos más funcionales para poder ver y analizar todo el potencial de esto y sus capas de abstracción sobre Reactor.



* [https://www.baeldung.com/rsocket](https://www.baeldung.com/rsocket)
* [https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7](https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7)
* [https://spring.io/blog/2020/03/02/getting-started-with-rsocket-spring-boot-server](https://spring.io/blog/2020/03/02/getting-started-with-rsocket-spring-boot-server)
* [https://docs.spring.io/spring/docs/current/spring-framework-reference/pdf/rsocket.pdf](https://docs.spring.io/spring/docs/current/spring-framework-reference/pdf/rsocket.pdf)
* [https://grapeup.com/blog/reactive-service-to-service-communication-with-rsocket-introduction/](https://grapeup.com/blog/reactive-service-to-service-communication-with-rsocket-introduction/)

