# IPHONESSTORE — sitio web

Sitio estático. HTML, CSS y JavaScript en un solo archivo, sin build, sin
dependencias y sin backend. Se despliega tal cual está.

## Estructura

```
index.html            todo el sitio (marcado, estilos y comportamiento)
assets/logo.png       logo oficial de IPHONESSTORE
assets/favicon.png    isotipo sobre negro, para la pestaña del navegador
assets/og.png         1200x630, la miniatura que se ve al compartir el link
img/                  carpeta para las fotos reales (ver img/LEEME.txt)
vercel.json           cache de assets y URLs limpias
robots.txt            indexación abierta
```

## Deploy en Vercel

**Opción rápida.** Entrar a vercel.com, "Add New… → Project → Deploy",
arrastrar esta carpeta. Vercel la detecta como sitio estático, no hay que
elegir framework ni configurar comando de build.

**Opción con Git.** Subir la carpeta a un repositorio, importarlo desde
Vercel y dejar todo en blanco: Framework Preset "Other", Build Command
vacío, Output Directory vacío. Cada push publica.

## Pendiente para cuando haya dominio

Dos cosas hay que tocar en el `<head>` de `index.html` una vez que la URL
definitiva esté conectada:

1. Agregar la etiqueta canonical con esa URL.
2. Cambiar `og:image` y `twitter:image` de `/assets/og.png` a la ruta
   absoluta `https://TUDOMINIO/assets/og.png`. La ruta relativa funciona
   en la mayoría de los lectores de enlaces, pero la especificación pide
   una URL absoluta y algunos la exigen.

Después de cambiarlo, verificar la miniatura enviándose el link a uno
mismo por WhatsApp. WhatsApp cachea la vista previa: si ya compartiste el
link antes del cambio, agregarle `?v=2` al final para forzar la relectura.

## Probarlo localmente

Abrir `index.html` con doble clic alcanza. Para servirlo por HTTP:

```
npx serve .
```

## Fotos

No hay ninguna fotografía en el sitio. Los productos se muestran con un
sistema de materiales generado por código (color de acabado, reflejo y
grano). Cuando lleguen las fotos reales de IPHONESSTORE se agregan en
`img/` siguiendo las instrucciones de `img/LEEME.txt`, sin rehacer nada.

No usar fotos de banco de imágenes ni de otras tiendas.

## Datos a confirmar con el cliente

El sitio está escrito para no afirmar nada que no esté verificado. Estos
puntos hoy se resuelven derivando la respuesta a WhatsApp, y conviene
reemplazarlos por la información real:

- formas de pago
- condiciones de garantía
- envíos o entregas fuera de Ramos Mejía
- plan canje
- horarios de atención
- dirección exacta de la oficina
- condición de cada equipo (nuevo, usado, estado de batería)
- precios

Todo eso se administra desde el catálogo del archivo, en el bloque de
datos que está al principio del `<script>`.

## Contacto de la tienda

WhatsApp +54 9 11 4938-6108 · Instagram @iphonesstore.ar · Ramos Mejía,
Buenos Aires.
