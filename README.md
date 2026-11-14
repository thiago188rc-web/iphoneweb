# 📱 iPhone Store Template — Plantilla Web para Tiendas de iPhone

Plantilla web de alta conversión y estética Apple Titanium, diseñada específicamente para tiendas de iPhone y accesorios. 100% estática, ultrarrápida, sin dependencias complejas y optimizada para despliegue directo en **Vercel**.

Incluye un **sistema de materiales dinámicos** (luz, grano y reflejo de acabados sin necesidad obligatoria de fotos), integración con WhatsApp en cada acción de compra, catálogo interactivo con filtros, y un **motor de personalización para demostraciones en vivo**.

---

## 🚀 Estructura del Proyecto

```text
├── index.html            Sitio completo (marcado semántico, diseño responsivo y lógica interactiva)
├── store.config.js       Configuración central de la tienda (datos, WhatsApp, Instagram, catálogo)
├── assets/
│   ├── favicon.png       Favicon / Isotipo para navegador y móviles (Apple Touch Icon)
│   ├── logo.png          Logotipo oficial en alta resolución
│   └── og.png            Imagen Open Graph (1200x630 px) para previsualización en WhatsApp y redes
├── img/
│   └── LEEME.txt         Instrucciones para incorporar fotografías reales de equipos
├── vercel.json           Configuración de caché optimizada y URLs limpias para Vercel
├── robots.txt            Reglas de indexación para buscadores
└── README.md             Documentación completa de uso y despliegue
```

---

## ⚡ Modo Demo Multitienda (Para Ofrecer a Clientes)

Esta plantilla está preparada para ser presentada a diferentes tiendas de iPhone sin tener que editar código en cada reunión. Tenés **dos formas** de personalizarla:

### 1. En Vivo desde el Panel de Gestión (Recomendado para reuniones)
1. Abrí la web (localmente o en Vercel).
2. En el pie de página (footer), hacé clic en el botón discreto **"Ingreso"**.
3. Seleccioná la pestaña **"⚡ Personalizar Tienda / Demo"**.
4. Podés elegir un preset rápido (ej: *IPHONESSTORE Ramos Mejía*, *Palermo Phone*, *Apple Point Belgrano*, *iStore Córdoba*) o ingresar directamente el nombre de la tienda del cliente, su WhatsApp y su usuario de Instagram.
5. Hacé clic en **"Aplicar Cambios en Vivo"**:
   - Se actualizan todos los botones de WhatsApp de la página con el número y nombre del cliente.
   - Se actualizan los textos de la cabecera, pie de página, preguntas frecuentes y ubicación.
   - El cambio queda guardado en el navegador (`localStorage`) para que puedas recargar la página frente al cliente sin perder los datos.

### 2. Desde el archivo `store.config.js` (Para publicar una tienda definitiva)
Modificá los valores del objeto `window.STORE_CONFIG`:
```javascript
window.STORE_CONFIG = {
  store: {
    name: "NOMBRE_DE_LA_TIENDA",
    whatsapp: "54911XXXXXXXX", // Código de país + código de área + número (sin + ni espacios)
    whatsappFormatted: "+54 9 11 XXXX-XXXX",
    instagram: "usuario_instagram",
    location: "Zona o Ciudad, Provincia",
    cityShort: "Ciudad o Barrio",
    ...
  }
};
```

---

## 📸 Fotografías de Productos (`img/`)

- Por defecto, el sitio utiliza un **sistema visual de materiales físicos** (reflejo, grano, brillo y tono titanio) para que se vea impecable sin depender de fotos de catálogo genéricas.
- Cuando la tienda cuente con fotos reales de sus equipos en stock, basta con guardarlas en la carpeta `img/` (en formato WebP o PNG) y asignarlas en `store.config.js` mediante la propiedad `img`:
  ```javascript
  { id: "ip15pm", n: "iPhone 15 Pro Max", img: "img/ip15pm.webp", ... }
  ```
- Para más detalles técnicos de resolución y proporciones, consultá `img/LEEME.txt`.

---

## 🌐 Despliegue en Vercel

El proyecto está vinculado y listo para desplegarse en **Vercel**:

### Despliegue con Vercel CLI (Línea de Comandos)
Desde la carpeta raíz del proyecto:
```bash
vercel --prod
```

### Despliegue mediante Git / GitHub
1. Realizá un `git push` a la rama `main` en tu repositorio.
2. Si el proyecto está conectado en el panel de Vercel, cada commit generará un despliegue automático en segundos.
