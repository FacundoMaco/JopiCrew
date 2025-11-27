# **Product Requirements Document (PRD): JopiCrew Web Experience**

Versión: 6.0 (Final "Clean Professional")  
Estado: Ready for Production  
Concepto Visual: "Modern Airy" (Espacioso, Luminoso, Confiable)  
Objetivo: Crear una landing page de alta conversión para una agencia creativa, priorizando la legibilidad, el contraste elegante y la facilidad de iteración de assets.

## **1\. Identidad Visual (Design System)**

### **1.1 Paleta de Colores (Clean & Bold)**

* **Canvas Principal (Fondo):** Blanco Puro (\#FFFFFF) y Gris Nube (\#F9FAFB) para separar secciones.  
* **Color de Marca (Action & Highlights):** Jopi Teal (\#214A44). Usar para botones primarios, iconos destacados y bordes activos.  
* **Texto Principal:** Negro Carbón (\#111827) para máxima legibilidad.  
* **Texto Secundario:** Gris Pizarra (\#6B7280) para descripciones y subtítulos.  
* **Footer Background:** Deep Forest (\#0d1f1c) para un cierre visual sólido.

### **1.2 Tipografía**

* **Familia:** Poppins (Google Fonts).  
* **Pesos:**  
  * *Headings:* Bold (700) o ExtraBold (800).  
  * *Body:* Regular (400).  
  * *Buttons/Nav:* Medium (500) o SemiBold (600).

### **1.3 Estilos UI**

* **Sombras:** Elevación suave y difusa (shadow-xl con opacidad reducida) en lugar de bordes duros.  
* **Bordes:** Redondeados generosos (rounded-2xl o rounded-full para botones).  
* **Micro-interacciones:** Hover effects que elevan las tarjetas (-translate-y-1) y cambian sutilmente el color de fondo.

## **2\. Arquitectura de Secciones (Layout)**

### **2.1 Navegación (Sticky Header)**

* **Comportamiento:** Transparente al inicio, Blanco sólido \+ Sombra suave al hacer scroll.  
* **Logo Area:** Espacio reservado para \<img\> o SVG. *Placeholder actual: Icono Lucide \+ Texto.*  
* **Links:** La Dupla, Metodología, Paquetes.  
* **CTA:** Botón "Agendar Sesión" (Pill shape, relleno Teal \#214A44).

### **2.2 Hero Section (Impacto)**

* **Fondo:** Blanco con elementos decorativos abstractos (círculos difusos en Teal muy claro) para dar profundidad sin ruido.  
* **Copy:** "DOMINA EL SCROLL". Tipografía gigante.  
* **Subtítulo:** Enfoque en resultados y estrategia.  
* **CTAs:** "Ver Planes" (Primario) y "Conoce al Crew" (Secundario/Outline).

### **2.3 About Us: "La Dupla"**

* **Layout:** Grid de 2 columnas (Tarjetas).  
* **Contenido:**  
  * **Tarjeta 1 (Jose Miguel):** Icono de Monitor/Video. Rol: "El Visual". Enfoque técnico.  
  * **Tarjeta 2 (Maria Veronica):** Icono de Huella/Estrategia. Rol: "La Estratega". Enfoque narrativo.  
* **Estilo:** Tarjetas blancas sobre fondo gris muy suave (bg-gray-50), con borde izquierdo de color Teal (border-l-4).

### **2.4 Metodología (El Proceso)**

* **Formato:** 4 pasos horizontales (Descubrimiento \-\> Estrategia \-\> Producción \-\> Optimización).  
* **Visual:** Números grandes translúcidos de fondo (01, 02...). Iconos minimalistas en color Teal.

### **2.5 Pricing (Core Business)**

* **Fondo:** Oscuro (bg-gray-900) o Teal muy profundo para contrastar con el resto de la página blanca.  
* **Tarjetas:**  
  1. **Clásico (S/. 95):** Estilo Glassmorphism suave.  
  2. **Emprendedor (S/. 255):** **DESTACADO**. Fondo Blanco sólido, escala mayor (scale-105), badge "Recomendado".  
  3. **Premium (S/. 155):** Estilo Glassmorphism suave.  
* **Features:** Listas con checks.

### **2.6 Modern Big Footer**

* **Estilo:** Editorial y masivo.  
* **Sección Superior:** Llamada final a la acción ("Let's create impact") \+ Newsletter/Contacto rápido.  
* **Sección Inferior:** Enlaces organizados en columnas \+ Redes Sociales.  
* **Copyright:** Lima, Perú.

## **3\. Integración de Assets (Guía para el Desarrollador)**

El código debe estar preparado para que el usuario reemplace fácilmente los placeholders.

* **Logotipo:**  
  * *Ubicación:* Navbar y Footer.  
  * *Código:* Dejar comentado TODO: Replace with \<img src="/logo.png" /\> donde va el icono actual.  
* **Imágenes de Fondo/Texturas:**  
  * Usar CSS backgrounds o SVGs en línea por ahora.  
  * Si se requieren fotos reales (ej. foto de Jose y Veronica), usar div con bg-gray-200 y etiqueta de comentario.

## **4\. Stack Tecnológico**

* **Framework:** React 18\.  
* **Estilos:** Tailwind CSS (sin archivos CSS externos, todo utilitario).  
* **Iconos:** lucide-react (Ligeros y consistentes).  
* **Fuentes:** Importación de Google Fonts en \<style\> tag dentro del componente.

Instrucción para Generación:  
Generar un único archivo App.jsx que contenga toda la lógica, estilos y estructura descritos anteriormente. Asegurar que el diseño sea totalmente responsivo (Mobile First).