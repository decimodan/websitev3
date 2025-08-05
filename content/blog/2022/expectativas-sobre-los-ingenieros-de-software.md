+++
author = "Daniel Guerrero"
categories = ["Opiniones"]
date = 2022-10-21T17:36:12Z
description = "Expectativas sobre los ingenieros de software profesionales"
draft = false
image = "/optimized/expectativas-devs.webp"
thumbnail = "/optimized/expectativas-devs.webp"
slug = "expectativas-sobre-los-ingenieros-de-software"
tags = ["Opiniones"]
title = "Expectativas sobre los ingenieros de software profesionales"

+++

En 2019, Mike Acton (quien es un veterano bastante bueno en el mundo de los videojuegos) dio una charla titulada [**"Todos los que miren esto están despedidos"**](https://www.youtube.com/watch?v=cV5HArLYajE) donde recito un conjunto de 50 cosas que espera de los desarrolladores con los que trabaja. El título (de forma irónica) sugería que cualquiera que no cumpla esos requisitos sería despedido de forma inmediata.

Aunque su sentido del humor es muy negro, las sugerencias me parecen valiosas. La lista forma una línea para que los ingenieros de software se comparen.

Espero que la lista de estos puntos te ayude a mejorar como profesional y que hagas un ejercicio de conciencia en cuáles puntos puedes mejorar. 

### 1. Puedo expresar con precisión que problema estoy tratando de resolver

Es muy fácil quedarse atrapado y perder la noción de por qué estás haciendo lo que estás haciendo. Ten en cuenta cuál es el objetivo final real y es posible que encuentres un camino alternativo.

### 2. He expresado con precisión que problema estoy tratando de resolver

Comunica tu problema "en voz alta" a otros miembros de tu equipo, a tu Product Owner, etc. Esto fundamentalmente aumenta su complejidad cuando te toca explicar las cosas en un lenguaje que no dominas.

### 3. He confirmado con alguien más que puedo expresar el problema que estoy tratando de resolver

La clave de todo esto es ¡Comunicación!... Asegúrate que todos están en la misma página y asegúrate que la compresión del problema este completa. 

Esto se vuelve un poco más complicado mientras tu posición en el mundo tech se vuelve más cercana al management.

### 4. Puedo expresar por qué es importante resolver mi problema

Si resuelve el problema en el que se está trabajando, ¿A quién beneficia y cuánto?

### 5. Puedo expresar cuanto vale la pena resolver mi problema

Si dices que vale la pena "el tiempo que sea necesario"... Mike no tiene palabras amistosas para ti. Para __cualquier__ problema, hay una cantidad máxima de tiempo y esfuerzo que vale la pena invertir para resolverlo. Al menos tener una idea del límite esta ok.

### 6. Tengo un Plan B en caso de que la solución a mi problema actual no funcione

Imagina que estás a días u horas antes del deadline y te das cuenta de que completar el plan A será imposible. Tal vez toca desactivar algún feature o utilizar otro algoritmo. Tener más de un plan es algo que siempre deberías tener a mano.

### 7. Ya he implementado mi Plan B en caso de que la solución a mi problema actual no funcione

Mitigue el riesgo escribiendo primero la versión B. Esto significa que siempre tiene una red de seguridad y puede aprender más sobre el espacio del problema para iterar en el Plan A.

### 8. Puedo expresar los pasos necesarios para resolver el problema actual

La programación solo funciona cuando divides los problemas en partes más manejables. Ten un bosquejo mental de los pasos necesarios para lograr tu objetivo antes de comenzar.

### 9. Puedo expresar claramente las incógnitas y los riesgos asociados con mi problema actual

Siempre existirán cosas que no sabes. Debes saber donde se encuentran en tu plan y tener una idea de cómo administrarlas.

Mientras tu experiencia aumenta, esto se vuelve más evidente (o no).

### 10. No he pensado o dicho "Puedo recuperar el tiempo" sin hablar inmediatamente con alguien

Digamos que es miércoles, tienes un proyecto para el viernes y tienes una tarea rezagada. Piensas "Haré lo nuevo ahora y recuperaré el tiempo original de la tarea para el viernes"... ¡Error!.

Comunicar sobre el conflicto el miércoles con tu gerente o manager te ayudará a administrar el tiempo y el riesgo. Recuerda que siempre puedes pedirle una mano a tu equipo.

### 11. He escrito un framework y lo he usado varias veces para resolver un problema que estaba destinado a resolver

Si estás escribiendo una herramienta de algún tipo, debes verificar que funcione en la práctica. Frecuentemente, las personas crean algo de forma aislada y no se termina desplegando en el mundo real.

Así es [**como surgió Django**](https://docs.djangoproject.com/en/stable/faq/general/#why-does-this-project-exist): de un equipo real que crea sitios web reales, con deadlines!

### 12. Puedo expresar cuál es la prueba para completar mi problema actual

Si no sabe cuando parar, es posible que se encuentre cayendo en un agujero de conejo, persiguiendo ganancias marginales sin importancia.

### 13. Puedo expresar la hipótesis relacionada con mi problema y como podría "falsearlo"

Si no se puede demostrar que una hipótesis es incorrecta, no se puede obtener ningún conocimiento. Como demostró Karl Popper, la ciencia solo funciona a través de la [falsificación](https://en.wikipedia.org/wiki/Falsifiability)

### 14. Puedo expresar los requisitos de latencia de mi problema actual

Cada vez que escribas código, debes considerar cuándo se requieren los datos de salida. No todas las peticiones necesitan datos de salida al instante y tampoco tienes una cantidad ilimitada de tiempo para realizarlo todo. Al menos debes tener una idea de los límites sensibles.

### 15. Puedo expresar los requisitos de rendimiento de mi problema actual

- ¿Cuántos datos deben pasar por el sistema?
- ¿Cuántos bytes, request o fps?

### 16. Puedo expresar el caso concreto más común del sistema que estoy desarrollando

Debe saber qué harán los usuarios reales de su sistema la mayor parte del tiempo. Tener una idea vaga no ayuda, ya que saber qué patrones son comunes define de que manera escribir una determinada pieza de código.

### 17. Conozco los valores reales más comunes (de la vida real) de los datos que estoy transformando

Más allá de los casos de uso, debe conocer los datos dentro del sistema. Por ejemplo, imagina una función que solo acepta números enteros, probablemente la escribirás de manera bastante diferente si el 99% de los valores son 0.

### 18. Conozco los rangos de valores aceptables de todos los datos que estoy transformando

Los sistemas siempre tienen límites. Debes conocer los rangos para los tipos de datos con los que estás trabajando.

### 19. Puedo expresar lo que sucederá cuando (de alguna manera) los datos fuera de ese rango ingresen al sistema

La Ley de Murphy dice __que cualquier cosa que pueda salir mal, saldrá mal__. Tienes que saber cómo se comportara el sistema en tales casos y maneja tales problemas si es necesario.

### 20. Puedo expresar una lista de datos de entrada en mi sistema ordenados aproximadamente por probabilidad

Ten una idea del espacio de datos posible, lo que es mas probable, lo segundo más probable, etc. Desarrolla adecuadamente, por ejemplo, verificando primero las condiciones de error comunes.

### 21. Conozco la frecuencia de cambio de los valores reales (de la vida real) de los datos que estoy transformando

Razona sobre la frecuencia de cambio y averigua con qué frecuencia querrás calcular los valores derivados

### 22. He leído (al menos parcialmente) la documentación (disponible) del hardware, la plataforma y las herramientas que uso con más frecuencia

Lee el manual, ve un paso más allá de la referencia diaria e intenta leer la documentación completa para obtener una compresión profunda.

(Jens Oliver Meiert llama a la lectura de la especificación HTML [la peregrinación del desarrollador web](https://meiert.com/en/blog/web-developer-pilgrimage/))

### 23. Me senté y observé a un usuario real de mi sistema

Observa a los usuarios, esto puede cambiar enormemente tu visión de como funciona tu software. ¡Hazlo!

### 24. Conozco la parte más lenta en el flujo de trabajo de los usuarios de mi sistema con mucha confianza

Cualquier desarrollo tiene un cuello de botella. Asegúrate de saber de qué se trata para que puedas concentrar tus esfuerzos allí, si es necesario.

### 25. Sé que información necesitaran los usuarios de mi sistema para hacer un uso eficaz de la solución

Piensa en qué documentación o datos necesitan los usuarios para comprender y utilizar la solución que estás creando.

### 26. Puedo expresar el conjunto finito de hardware para el que estoy diseñando la solución

El software requiere hardware. Tienes que saber a qué hardware apunta tu programa, es decir:

- Arquitectura de CPU
- Requisitos mínimos de memoria, velocidad de la CPU y ancho de banda de red
- Dispositivos de entrada

### 27. Puedo expresar como ese conjunto de hardware afecta específicamente el diseño de mi sistema

Si tienes como objetivo dispositivos de gama baja, ¿Cómo te aseguras de que no se termine la memoria? Si algunos usuarios no tienen dispositivos adecuados, ¿Cómo los adaptas?

### 28. Recientemente, he realizado pruebas de rendimiento de mi sistema

Si estás desarrollando una aplicación local, ejecuta herramientas de creación de perfiles con regularidad para tener una idea del rendimiento a lo largo del tiempo. Con los programas basados en servidor, puedes instalar una herramienta APM en producción y tener datos de creación de perfiles continuos.

### 29. Recientemente, he perfilado el uso de memoria de mi sistema

Debes asegurarte de no estar desperdiciando la memoria.

### 30. He utilizado varios métodos de creación de perfiles diferentes para medir el rendimiento de mi sistema

No existe la herramienta de perfiles perfecta, así que aprende como usar más de una.

### 31. Sé cómo mejorar significativamente el rendimiento de mi sistema sin cambiar la interfaz de entrada/salida del sistema

¿Conoces el siguiente paso para optimizar tu sistema? No es necesario que lo hagas en este momento, ya que puede que no valga la pena, pero debes tener una idea de lo que harías a continuación para que tu código sea más rápido.

Esto también debería guiarte a diseñar interfaces que sean optimizables en primer lugar. Por ejemplo, no te comprometas a devolver resultados costosos de calcular inmediatamente, podrías devolver una promesa.

### 32. Sé específicamente como puedo depurar y depuraré cuando algo falle

Los errores son inevitables. Debes conocer las herramientas que te permitirán resolver estos problemas en producción, es decir: debbugers, shells, etc.

### 33. Sé qué datos estoy leyendo como parte de mi solución y de donde provienen

Debes saber de dónde provienen los datos, en que formato y cómo puedes leerlos.

### 34. Sé con qué frecuencia leo datos que no necesito como parte de mi solución

El acceso a los datos rara vez es óptimo. A menudo te tocará mover datos que no son necesarios para tu solución, como campos innecesarios u objetos que envuelven lo que necesitas. Si no sabes acerca de este desperdicio, no puedes razonar sobre si vale la pena los gastos que se hacen actualmente o no.

### 35. Sé qué datos estoy escribiendo como parte de mi solución y donde se utilizan

Todos los datos de salida están destinados a ser utilizados por un humano u otro programa. Debes ser lo suficientemente organizado para saber cuáles son los consumidores finales de tu producción.

### 36. Sé con qué frecuencia escribo datos que no necesito como parte de mi solución

La salida de datos también rara vez es óptima. ¿Con frecuencia escribes datos que no han cambiado? ¿Estás escribiendo muchos campos cuando solo se usa uno? Una vez más, toca informarse para que se pueda razonar al respecto.

### 37. Puedo expresar como todos los datos que uso se presentan en la memoria

Muchos lenguajes de programación y frameworks pueden manejar la memoria por ti, pero eso no exime tu responsabilidad. Debes conocer como las herramientas distribuyen la memoria, para que puedas sabes cuando tiene sentido otro enfoque.

### 38. Nunca uso la frase "plataforma independiente" cuando me refiero a mi trabajo

Cualquier sistema depende de muchas cosas debajo de él. Conoce cuáles son.

### 39. Nunca uso la frase "future proof" cuando me refiero a mi trabajo

La preparación para el futuro es una tontería la mayor parte del tiempo. **No puedes resolver problemas de lo que no tienes información**.

### 40. Puedo programar bien mi propio tiempo

Eres una persona adulta, aprende a usar un calendario.

### 41. Estoy atento a no perder el tiempo de los demás

No pierdas el tiempo haciendo preguntas que puedes buscar en Google en cinco segundos. Pero tampoco pierdas mucho tiempo luchando solo durante días cuando podrías obtener ayuda de un miembro del equipo en minutos. Encuentra el equilibrio.

### 42. Busco activamente comentarios constructivos y los tomo en serio

Pide feedback a tu equipo y haz algo al respecto.

### 43. No estoy evitando activamente ninguna conversación incómoda (profesional)

Si hay algo mal en el trabajo, habla de ello con quien haga falta.

### 44. No estoy evitando activamente ningún conflicto (profesional)

Si has notado que algo anda mal, ya sea técnicamente o en términos de comunicación, saca esos conflictos a la luz. Dejarlos crecer nunca ayuda.

### 45. Constantemente interactuó con otros profesionales, profesionalmente

Sé cortes y profesional. Mike en este caso bromea sobre poner un listón increíblemente bajo: no gritar, no pegar...

### 46. Puedo expresar lo que creo que los demás deberían esperar de mi

Ten un estándar para ti y debes estar listo para decirles a tus compañeros de trabajo cuál es.

### 47. No necesito múltiples recordatorios para responder a una solicitud o completar el trabajo

Esperar a que alguien más te diga que hacer no es una forma efectiva de hacer tu trabajo.

### 48. Busco oportunidades para devolver valor a los bienes comunes (cuando corresponda)

Todo nuestro trabajo se basa en el trabajo de muchos otros. En algún momento, tendrás la oportunidad de retribuir a la comunidad en general. Por ejemplo, hablar en reuniones, hacer contribuciones de código abierto o simplemente discutir temas con su equipo para mejorar las habilidades de todos.

### 49. Trabajo activamente para aportar valor a las personas con las que trabajo

Eres parte de un equipo, así que trabaja para ayudarlos.

### 50. Trabajo activamente para garantizar que se escuchen las voces subrepresentadas

Has algo para asegurarte que las minorías sean escuchadas. Esto podría significar asegurarse de que la persona de la minoría en el trabajo tenga la oportunidad de hablar, que su proceso de contratación sea imparcial o que su sitio web sea accesible para los usuarios que dependen de los lectores de pantalla.

## Conclusiones

Al final del día esto es para ayudarnos entre todos. Ayuda a mejorar a los demás y eso te ayudará a mejorar tu mismo.

Foto de <a href="https://unsplash.com/@alvarordesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alvaro Reyes</a> en <a href="https://unsplash.com/es/s/fotos/devs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>