# Preguntas conceptuales

– **1. Explica con un ejemplo la diferencia entre renderizado en el cliente (CSR), del lado del servidor (SSR) y sitios estáticos (SSG). ¿Para un sitio corporativo informativo cuál elegirías y por qué?**

**R/** CSR genera el contenido de la web en el navegador, SSR lo genera en el servidor en cada solicitud, y SSG genera páginas previamente antes de mostrarlas en producción, por ejemplo, al hacer una build estática de la web.

Para un sitio corporativo informátivo escogería SSG, porque esta opción ofrece buena velocidad y seguridad. Además, el contenido cambia poco, por lo que no haría falta hacer un re-build cada poco tiempo.

– **2. Astro, Next.js y Svelte: elige uno con el que te sientas más cómodo y di en qué proyecto real lo usarías frente a los otros dos.**

**R/** Me siento mucho más cómodo con Next.js, porque llevo bastante tiempo utilizándolo y entiendo gran parte de sus ventajas principales. Es mucho más cómodo para aplicaciones que necesiten autenticación, uso de API y sobretodo, contenido dinámico, el cual es prácticamente un estándar hoy en día.

No tengo problema en usar Astro, es una buena opción para aplicación más ligeras. Lo usaría en caso de que se necesite un página sencilla y rápida, con poco contenido dinámico.

Nunca he usado Svelte, pero sé que es una buena opción para dispositivos de gama baja o sitios que puedan cargar con conexiones de internet lentas. Que sea ligero hace que sea una buena alternativa a Astro. Lo tendría en cuenta para servicios online donde la estabilidad de la red y las transacciones sean de vital importancia.

– **3. ¿Cuándo recomendarías un CMS como WordPress y cuándo un sitio hecho a medida? Menciona una ventaja y una desventaja de cada camino.**

**R/** En mi opinión, la principal diferencia es la curva de aprendizaje. Un sitio hecho a medida prácticamente no tiene límite en cuanto a lo que se pueda imaginar, hay infinidad de posibilidades y mucha personalización en la mayoría de aspectos, la desventaja de esto es que se necesitan muchos fundamentos en programación y bases solidas en arquitectura de aplicaciones, una habilidad que no muchas personas poseen. Por este motivo, un CMS es una muy buena alternativa para usuarios que quieras crear algo rápidamente sin invertir mucho tiempo aprendiendo sobre desarrollo o para crear prototipos rápidos, la desventaja es que no ofrece muchas opciones de personalización y a veces están vinculado a subscripciones de pago.

– **4. Para una tienda en línea, ¿qué preguntas le harías al cliente antes de decidir entre Shopify y Magento?**

**R/** Preguntaría sobre la escala del comercio, cuántos productos son y qué tanta variedad hay entre ellos, también presupuesto y número de usuario. Shopify es mejor para comercios pequeños con inventarios manejables, y Magento es mejor para industrias más complejas donde se necesite más control sobre aspectos de la empresa, como seguridad o conocimientos técnicos.

– **5. Describe, paso a paso y con tus palabras, cómo llevarías un cambio de código desde tu computadora hasta producción usando Git y GitHub. Menciona ramas (branches) y Pull Requests.**

**R/** Teniendo acceso al repositorio del proyecto, haría el cambio en una branch aparte, probaría el código y haría un commit para subirlo a GitHub. Después abriría un Pull Request, y suponiendo que no hay cambios necesarios se haría un mege a la branch principal.

– **6. ¿Qué es un “build” y qué crees que pasa cuando conectas un repositorio de GitHub a un servicio como Vercel o Cloudflare Pages?**

**R/** Hacer una build es el proceso de transformación de código fuente en versiones optimizadas y minificadas del proyecto para subirlo a entornos públicos, para que las aplicaciones sean utilizadas por los clientes. Al conectar con Vercel o Cloudflare Pages, normalmente estos servicios detectan los cambios hechos en los repositorios con el código fuente para re-desplegar una nueva build y administrar la versión actualizada a todos los usuarios existentes.

– **7. Menciona 3 cosas que cuidarías para que una landing page cargue rápido y posicione bien (SEO/rendimiento).**

**R/** Principalmente me enfocaría en el uso de HTML semántico, ya que es una de las principales formas que tienen los buscadores (por ejemplo, Google) para verificar que las páginas tienen contenido organizado y relevantes que estén en condiciones de ser mostradas al público. Además, también es importante optimizar las imágenes, con formatos optimos y buenas descripciones para mejorar la accesibilidad, esto mejoraría incluso el rendimiento de la página. Los buscadores también prefieren sitios que sean responsivos, por lo que optimizarlos tanto para usuarios de escritorio como dispositivos móviles es importante. Y finalmente, un buen nivel de meta-descripciones y meta-etiquetas en el <head> ayuda a los buscadores y demás sitios a entender muchísimo más la página, esto es de gran importancia si se requiere un buen posicionamiento frente a otras páginas.

– **8. Cuéntanos de una tecnología que aún no dominas. ¿Cómo aprenderías a usarla si empezaras la próxima semana?**

**R/** No domino la mayoría de frameworks actuales (por ejemplo, Angular o Svelte), pero tampoco me cierro a la idea de tener que usarlos en un futuro debido a alguna ventaja que ofrezcan en comparación a lo que uso actualmente. En caso de tener que aprender a usarlo, usaría sin ninguna duda la documentación oficial de la tecnologías necesitada, y en caso de no ser posible, buscaría en la infinidad de guías y tutoriales que hay en internet para poder conocer más sobre su funcionamiento principal.
