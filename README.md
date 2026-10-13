# ☕ Coffee Shop - Sitio Web de Cafetería

¡Bienvenido/a al repositorio de **Coffee Shop**! Una landing page moderna, minimalista y elegante diseñada estratégicamente para una cafetería gourmet. El sitio web está enfocado en brindar una experiencia visual atractiva y en facilitar la consulta del menú y la reserva de espacios para los clientes.

---

## 🎯 Objetivo del Proyecto
El propósito principal de esta página es atraer a amantes del buen café y comensales locales a través de:
*   **Presentación de Productos:** Un menú digital escaneable con precios y descripciones detalladas de repostería y cafés.
*   **Identidad Local:** Resaltar el valor del café 100% mexicano proveniente de Oaxaca, Puebla y Veracruz.
*   **Llamado a la Acción (CTA):** Canales claros para realizar pedidos, consultar horarios o reservar espacios favoritos.

---

## 🛠️ Tecnologías y Herramientas Utilizadas
*   **Maquetación:** HTML5 semántico para una estructura sólida y accesible.
*   **Estilos:** CSS3 / SASS (SCSS) personalizado con una paleta de colores cálida inspirada en granos de café y un diseño responsivo.
*   **Despliegue (Hosting):** Netlify.

---

## 📖 Estructura del Sitio Web
La landing page está dividida en las siguientes secciones clave para una navegación intuitiva:

*   **🏠 Inicio:** Encabezado principal que introduce la filosofía de la cafetería (*"Una nueva experiencia cada semana"*).
*   **📜 Acerca de:** Sección informativa sobre la procedencia de las variedades de café gourmet (ácidos, suaves, perfumados) y pastelillos especiales.
*   **🍰 Menú Digital:** 
    *   *Pastelillos:* Cheesecake, Rollos de canela, Bagels y Pasteles de frutas.
    *   *Cafés y Frappés:* Espresso, Capuchino, Frappuccino y Mocha.
*   **🖼️ Galería:** Espacio visual interactivo para mostrar los productos y el ambiente del local.
*   **📍 Ubicación y Contacto:** Dirección física (Av. José López Portillo), horarios de atención (semana y fines de semana), teléfono de pedidos y correo electrónico.

---

## ⚙️ Interactividad y Efectos Dinámicos (jQuery)

El sitio web incorpora múltiples efectos visuales y de navegación controlados a través de **jQuery** para ofrecer una experiencia fluida, inmersiva y profesional:

### 1. 🎬 Animaciones de Entrada Secuenciales (Staggered Animations)
Para lograr un impacto visual inmediato al cargar la página, se programaron dos efectos de introducción controlados por código:

*   **Menú Desplegable Escalonado:** Utilizando el método `.each()`, el script posiciona inicialmente todos los enlaces de navegación (`.menu a`) fuera de la pantalla (`top: -200px`). Posteriormente, los desplaza de arriba a abajo de manera progresiva calculando un retraso multiplicador basado en su índice (`2000 + (index * 500)`). Esto hace que los botones del menú caigan uno por uno de forma elegante.
*   **Aparición del Header (Fade-in & Slide-up):** Si la pantalla del usuario es mayor a `800px` (dispositivos de escritorio), el contenedor de textos principales de la cafetería (`header .textos`) se oculta mediante opacidad cero y se desplaza suavemente hacia su posición final (`marginTop: -52px`) con una transición fluida de 2 segundos.

### 🧭 2. Desplazamiento Suave (Smooth Scroll) Inteligente
El archivo gestiona la navegación interna de la landing page calculando las coordenadas exactas (`.offset().top`) de cada sección en la pantalla. Al hacer clic en los enlaces de navegación, la página realiza un desplazamiento suave de 500 milisegundos:

*   `#btn-acerca-de` ➡️ Desplazamiento a la sección **Acerca de** (con un ajuste compensatorio de `-100px` para un encuadre estético óptimo).
*   `#btn-menu` ➡️ Desplazamiento a la sección **Menú / Platillos**.
*   `#btn-galeria` ➡️ Desplazamiento a la sección **Galería**.
*   `#btn-ubicacion` ➡️ Desplazamiento a la sección **Ubicación / Contacto**.

### 🌌 3. Efecto Parallax Bidireccional (Efecto de Profundidad 3D)
Para elevar la calidad visual del sitio en pantallas de escritorio, se programó un sistema de **Parallax personalizado** que reacciona dinámicamente al scroll del usuario:

*   **Movimiento Asíncrono Multi-velocidad:** Al detectar el desplazamiento vertical (`.scrollTop()`), el script manipula las propiedades de transformación CSS (`translate`) de dos elementos a ritmos diferentes:
    *   **Textos del Header:** Se desplazan hacia abajo a la mitad de la velocidad del scroll (`scroll / 2 %`), logrando que el título se desvanezca de fondo lentamente.
    *   **Artículo "Acerca de":** Se desplaza de forma inversa (hacia arriba) a una sexta parte de la velocidad (`-scroll / 6 %`), provocando que el contenido flote sobre el fondo.
*   **Optimización Responsiva y Reseteo Dinámico:** El efecto solo se ejecuta en pantallas mayores a `800px` para no afectar el rendimiento en móviles. Adicionalmente, mediante el evento `.resize()`, el script monitorea constantemente el tamaño de la ventana; si el usuario reduce el tamaño de su pantalla por debajo del límite establecido, el efecto se anula por completo devolviendo los elementos a su posición original (`translate(0px, 0px)`).


---

## 📸 Vista Previa del Proyecto

*(Opcional: puedes tomar una captura completa de la web e indexarla aquí siguiendo los pasos anteriores)*
<div align="center">
  <img width="796" height="3655" alt="cooffeeshopdemo netlify app_" src="https://github.com/user-attachments/assets/ad58847f-7faf-47e1-a588-4a8697cf57da" />
</div>

---

## 🔗 Enlaces del Proyecto
Puedes explorar el sitio en producción o revisar el código fuente mediante los siguientes enlaces:

*   **Sitio Web en Vivo:** [Visitar Coffee Shop en Netlify](https://cooffeeshopdemo.netlify.app)
*   **Código Fuente:** [Repositorio en GitHub](https://github.com/LandsCode/Cooffeeshopdemo) 

---
<div align="center">
  Diseñado con ☕ por <b>LandsCodeStudio</b> | Copyright © Coffee Shop
</div>
