## Objetivo de fidelidad

Este documento define el sistema visual para reproducir la interfaz de Airbnb con máxima fidelidad en Home, Catálogo y Detalle de habitación. La prioridad es replicar layout, proporciones, espaciado, jerarquía tipográfica y color. Los assets protegidos (logo oficial y fotografías originales) se reemplazarán por placeholders propios, manteniendo exactamente el espacio, tamaño y comportamiento que ocupan en pantalla.

## Breakpoints

Base mobile-first en 375px.

- Mobile base: 375px a 639px.
- sm (640px): breakpoint intermedio recomendado para tablet pequeña y móviles en horizontal. Permite pasar de una sola columna a una grilla inicial de 2 columnas sin saltar aún a layout de escritorio.
- md (768px): inicio de escritorio funcional. Aquí se activan las variaciones principales: navegación completa, barra de búsqueda extendida, más columnas de listados y layouts de dos paneles.
- lg (1024px): escritorio amplio. Se aumenta ancho útil, densidad horizontal y se habilitan paneles laterales más estables (mapa en catálogo y reserva en detalle).

## Navbar

### Estructura y distribución exacta observada

En escritorio, la barra superior se compone en tres zonas horizontales:

- Zona izquierda: marca Airbnb (isotipo + palabra), alineada verticalmente al centro.
- Zona central: tabs de navegación con icono superior y etiqueta inferior: Todo, Alojamientos, Experiencias y Servicios. La tab activa muestra subrayado oscuro.
- Zona derecha: texto Conviértete en anfitrión, botón circular de idioma y botón circular de menú de usuario.

### Medidas y espaciados de referencia

- Altura total de franja superior: aproximadamente 96px.
- Padding horizontal de la franja: 48px en desktop estándar; 24px en pantallas más contenidas.
- Separación entre tabs del bloque central: 44px a 52px.
- Espacio vertical icono-etiqueta en cada tab: 6px a 8px.
- Grosor del subrayado de tab activa: 4px.
- Separación entre acciones derechas: 12px a 16px.
- Botones circulares de idioma y menú: 48px de diámetro aproximado.

### Comportamiento mobile (375px)

- Se colapsa la navegación central de tabs.
- Se prioriza una cabecera compacta con marca reducida y acceso a menú/usuario.
- El CTA Conviértete en anfitrión se oculta o pasa a menú secundario para evitar saturación.
- Altura de cabecera mobile objetivo: 64px a 72px.

## Barra de búsqueda

### Estructura exacta

Contenedor horizontal centrado con forma de píldora y cuatro zonas:

- Campo 1: Dónde (label superior) y Explora destinos (texto secundario).
- Separador vertical.
- Campo 2: Fechas (label superior) y Agrega fechas (texto secundario).
- Separador vertical.
- Campo 3: Quién (label superior) y ¿Cuántos? (texto secundario).
- Botón de búsqueda circular coral al extremo derecho con icono de lupa blanco.

### Medidas y estilo

- Alto del contenedor: 84px a 88px.
- Radio del contenedor: 9999px (píldora completa).
- Borde: 1px gris neutro suave.
- Sombra: suave, corta y difusa (profundidad baja).
- Ancho en desktop: alrededor de 52 por ciento del viewport en la captura, con tope visual cercano a 1020px.
- Padding horizontal interno: 24px por campo.
- Separadores verticales: 1px en gris claro, centrados en altura útil.
- Botón de búsqueda: 64px de diámetro aproximado.

### Comportamiento mobile (375px)

- El patrón de tres campos se colapsa en una sola barra resumida de búsqueda principal.
- La información secundaria se reduce a una línea compacta y legible.
- El botón de búsqueda mantiene protagonismo con tamaño táctil mínimo de 44px, ideal 48px a 52px.
- El contenedor conserva forma píldora y sombra suave.

## Tarjeta de alojamiento

### Proporción y estructura

Cada tarjeta se organiza en dos bloques:

- Imagen superior dominante (aprox. 78 por ciento de la altura visible de la tarjeta).
- Texto inferior en 3 líneas: título, precio por noches, rating.

### Jerarquía de contenido

Orden y peso visual:

- Título de alojamiento: primer nivel de lectura.
- Precio y duración: segundo nivel, menor contraste.
- Rating: tercer nivel, más pequeño, con icono estrella.

### Medidas observadas en desktop de referencia

- Radio de imagen: 20px a 24px.
- Etiqueta flotante Favorito entre huéspedes: píldora clara, radio alto, ubicada en esquina superior izquierda.
- Icono corazón: esquina superior derecha sobre la imagen.
- Espacio imagen a título: 12px.
- Espacio entre líneas de texto: 4px a 6px.
- Separación horizontal entre tarjetas en grilla: 16px a 20px.

## Colores

Paleta fiel al estilo mostrado:

- Acento principal Airbnb: #FF385C.
  Uso: botón de búsqueda, CTA primario y estados activos destacados.
- Acento activo oscuro: #E31C5F.
  Uso: hover y pressed del acento principal.
- Texto principal: #222222.
  Uso: títulos, tabs activas, contenido clave.
- Texto secundario: #6A6A6A.
  Uso: descripciones, metadatos, precio complementario.
- Borde claro: #DDDDDD.
  Uso: separadores, borde de search bar y contornos suaves.
- Fondo base: #FFFFFF.
  Uso: superficie principal.
- Fondo neutro de sección: #F7F7F7.
  Uso: bloques de contenido intermedios y contraste suave entre franjas.

## Tipografía

Familia recomendada para aproximación fiel en implementación:

- Primary UI font: Circular-like fallback usando fuente disponible con métrica similar (por ejemplo, Inter vía next/font) ajustando pesos para acercar el ritmo visual.

Escala tipográfica y pesos relativos:

- Marca/elementos de identidad: 38px a 42px visual equivalente, peso 700.
- Tabs de navegación: 32px a 35px visual equivalente, peso 500; activa en 600.
- Título de sección (ejemplo: Alojamientos populares...): 56px visual equivalente, peso 600.
- Título de tarjeta: 39px visual equivalente, peso 600.
- Precio de tarjeta: 36px visual equivalente, peso 400 a 500.
- Rating y metadatos: 32px visual equivalente, peso 400.

Nota de implementación: esos valores equivalen a una captura en alta resolución; en CSS real deben escalarse proporcionalmente para mantener la jerarquía, no el píxel absoluto de la imagen exportada.

## Espaciado general

Sistema en múltiplos de 4px para Tailwind, afinado a los ritmos observados.

- Márgenes laterales de página:
  - Mobile: 16px.
  - Desktop md: 40px a 48px.
  - Desktop lg: 64px.
- Separación vertical entre navbar y search bar: 20px a 24px.
- Separación vertical entre bloque superior y sección de tarjetas: 56px a 72px.
- Padding interno de tarjeta (bloque de texto): 0px horizontal y 8px a 12px superior.
- Separación entre secciones principales de página: 48px en desktop, 32px en mobile.

## Reglas de layout por vista

### Home

Mobile (375px):

- Header compacto.
- Barra de búsqueda resumida en una sola fila.
- Carruseles/listados en una columna, scroll vertical continuo.
- Tarjetas full width con imagen dominante.

Desktop (desde md):

- Header completo de 3 zonas con tabs centrales.
- Barra de búsqueda completa de 3 campos + CTA circular.
- Grilla principal de alojamientos en 6 a 7 tarjetas visibles por fila en ancho amplio, conservando separación uniforme.
- Controles de carrusel alineados al extremo derecho del título de sección.

### Catálogo

Mobile (375px):

- Bloque de filtros sobre resultados.
- Mapa debajo del listado o accesible mediante botón flotante.
- Lista en 1 columna con foco en lectura rápida y comparación.

Desktop (desde md):

- Layout de dos paneles: resultados a la izquierda, mapa a la derecha.
- Mapa persistente con ancho aproximado 38 por ciento a 42 por ciento.
- Lista de resultados con grilla de 2 a 3 columnas según ancho útil.

### Detalle de habitación

Mobile (375px):

- Orden de lectura: galería, datos clave, amenities, reseñas, reserva.
- Tarjeta de reserva se integra al flujo vertical.

Desktop (desde md):

- Galería amplia en bloque superior.
- Columna principal para contenido descriptivo.
- Tarjeta de reserva fija o sticky en columna derecha.
- Proporción sugerida: 65 por ciento contenido, 35 por ciento reserva.

## Nota de assets y propiedad intelectual

Para mantener cumplimiento legal, no se usarán los assets propietarios exactos de Airbnb (logo oficial, isotipos propietarios y fotografías originales). En su lugar se emplearán placeholders propios para logo e imágenes. Sí se replicarán con fidelidad el sistema de color, tipografía, espaciado, proporciones y layout para fines de arquitectura y validación de componentes.
