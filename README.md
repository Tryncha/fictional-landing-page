# Rowan Evercrest - Landing Page de Autor

Una landing page responsive para **Rowan Evercrest**, un autor ficticio de fantasía épica inspirado en escritores modernos del género. El sitio presenta la biografía del autor, algunos de sus libros más destacados, testimonios y una sección de contacto.

Este proyecto fue desarrollado como parte de una prueba técnica enfocada en desarrollo frontend, diseño responsive, integración de APIs y buenas prácticas de programación.

## Tecnologías Utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react
- react-icons

## Funcionalidades

- Diseño responsive para dispositivos móviles y escritorio
- Hero section para presentar al autor
- Sección "About" con la biografía del autor
- Sección "Notable Books"
- Sección de testimonios
- Sección de contacto
- Integración con la API de Open Library
- Carga dinámica de portadas utilizando la API de Covers de Open Library
- Manejo de errores cuando los servicios externos no están disponibles

---

## Cómo Ejecutar el Proyecto Localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/Tryncha/fictional-landing-page.git
```

### 2. Entrar en la carpeta del proyecto

```bash
cd fictional-landing-page
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 5. Abrir la aplicación

Visita:

```text
http://localhost:3000
```

---

## Decisiones Técnicas

### ¿Por qué Next.js?

Elegí Next.js porque es el framework con el que tengo más experiencia y productividad. Me ofrece una excelente experiencia de desarrollo, un sistema de rutas integrado, capacidades de renderizado del lado del servidor y una estructura escalable para proyectos futuros.

Para una landing page como esta, Next.js me permitió desarrollar rápidamente sin sacrificar organización ni mantenibilidad.

### ¿Por qué TypeScript?

TypeScript facilita la detección temprana de errores y mejora la mantenibilidad del código. Como el proyecto consume datos provenientes de APIs externas, definir tipos me permitió trabajar de forma más segura con las respuestas recibidas.

### ¿Por qué Tailwind CSS?

Tailwind CSS me permite construir interfaces de usuario de manera muy rápida y mantener los estilos cerca de los componentes que los utilizan. Además, simplifica la creación de diseños responsive sin necesidad de escribir grandes archivos CSS.

### Integración con APIs

La sección de libros utiliza la API pública de Open Library para obtener información dinámica sobre libros. Las portadas se cargan utilizando la API de Covers de Open Library.

Debido a que los servicios externos pueden presentar fallos ocasionales, implementé un manejo de errores que evita que la aplicación completa falle si la API no responde correctamente. En esos casos, la sección de libros simplemente no se renderiza, mientras que el resto del sitio continúa funcionando con normalidad.

---

## Retos Encontrados y Soluciones

Uno de los principales retos durante el desarrollo fue trabajar con la API de Open Library. En algunos momentos, la API devolvía errores de conexión que provocaban fallos en tiempo de ejecución al intentar obtener los datos de los libros.

Para solucionar este problema, implementé manejo defensivo de errores y diseñé la página para ocultar la sección de libros cuando la API no está disponible. De esta forma, la experiencia del usuario no se ve afectada y el resto del contenido permanece accesible.

Consideré que esta solución era más adecuada que permitir que toda la página dejara de funcionar por un problema en un servicio de terceros.

---

## Uso de IA

Utilicé herramientas de IA principalmente como apoyo creativo y de productividad.

En concreto, las utilicé para:

- Crear el autor ficticio Rowan Evercrest
- Generar la biografía del autor y parte de su universo narrativo
- Escribir testimonios ficticios
- Generar información de contacto ficticia
- Proponer textos para distintas secciones de la landing page
- Generar algunos recursos visuales utilizados durante el desarrollo
- Explorar ideas de diseño y distribución del contenido

No utilicé IA para generar la aplicación completa. La estructura del proyecto, la implementación de los componentes, los estilos, la integración de APIs, el comportamiento responsive y el manejo de errores fueron desarrollados y ajustados manualmente. Todo el contenido generado por IA fue revisado y adaptado para ajustarse mejor al tema y a los objetivos del proyecto.
