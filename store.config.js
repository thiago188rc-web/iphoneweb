/**
 * =====================================================================
 * CONFIGURACIÓN CENTRAL DE LA PLANTILLA — IPHONE STORE DEMO
 * =====================================================================
 * Modificá este archivo para cambiar los datos de la tienda al instante,
 * o utilizá el panel de "Gestión / Ingreso" en la web para alternar
 * entre demos en vivo.
 */

window.STORE_CONFIG = {
  // Información principal de la tienda
  store: {
    name: "IPHONESSTORE",
    tagline: "Tu iPhone, en mano.",
    description: "Equipos y accesorios Apple importados. Cinco años vendiendo, más de 5.000 clientes y oficina propia en Ramos Mejía.",
    whatsapp: "5491149386108",
    whatsappFormatted: "+54 9 11 4938-6108",
    instagram: "iphonesstore.ar",
    instagramUrl: "https://www.instagram.com/iphonesstore.ar",
    location: "Ramos Mejía, Buenos Aires",
    cityShort: "Ramos Mejía",
    addressInfo: "Te pasamos la dirección al coordinar",
    years: "Cinco años",
    clients: "+5.000",
    followers: "+52.000"
  },

  // Cinta animada de confianza
  ticker: [
    "Cinco años vendiendo",
    "Más de <b>5.000</b> clientes",
    "Oficina en <b>Ramos Mejía</b>",
    "Equipos y accesorios importados",
    "Más de <b>52.000</b> siguiéndonos",
    "Consultás y te respondemos"
  ],

  // Catálogo de equipos
  products: [
    {
      id: "ip15pm",
      n: "iPhone 15 Pro Max",
      l: "iPhone 15",
      caps: ["256 GB", "512 GB", "1 TB"],
      ac: [
        ["Titanio natural", "#BEB6A9"],
        ["Titanio negro", "#40414A"],
        ["Titanio blanco", "#E4E2DD"],
        ["Titanio azul", "#4A5867"]
      ],
      dest: true,
      vis: true,
      precio: ""
    },
    {
      id: "ip15p",
      n: "iPhone 15 Pro",
      l: "iPhone 15",
      caps: ["128 GB", "256 GB", "512 GB"],
      ac: [
        ["Titanio azul", "#4A5867"],
        ["Titanio natural", "#BEB6A9"],
        ["Titanio negro", "#40414A"]
      ],
      dest: true,
      vis: true,
      precio: ""
    },
    {
      id: "ip15",
      n: "iPhone 15",
      l: "iPhone 15",
      caps: ["128 GB", "256 GB"],
      ac: [
        ["Azul", "#B9C9D2"],
        ["Verde", "#C7D4C4"],
        ["Rosa", "#EEC8CE"],
        ["Negro", "#33353A"]
      ],
      dest: true,
      vis: true,
      precio: ""
    },
    {
      id: "ip14p",
      n: "iPhone 14 Pro",
      l: "iPhone 14",
      caps: ["128 GB", "256 GB", "512 GB"],
      ac: [
        ["Oro", "#DFCBAB"],
        ["Morado oscuro", "#5E5A70"],
        ["Plata", "#DEDFE1"],
        ["Negro espacial", "#2E2F33"]
      ],
      dest: true,
      vis: true,
      precio: ""
    },
    {
      id: "ip14",
      n: "iPhone 14",
      l: "iPhone 14",
      caps: ["128 GB", "256 GB"],
      ac: [
        ["Morado", "#D2CCE6"],
        ["Azul", "#A9C0D6"],
        ["Blanco estelar", "#E9E5DE"],
        ["Medianoche", "#2E323A"]
      ],
      dest: false,
      vis: true,
      precio: ""
    },
    {
      id: "ip13",
      n: "iPhone 13",
      l: "iPhone 13",
      caps: ["128 GB", "256 GB"],
      ac: [
        ["Rosa", "#E7D2CE"],
        ["Verde", "#3E4F48"],
        ["Blanco estelar", "#E9E5DE"],
        ["Medianoche", "#2E323A"]
      ],
      dest: false,
      vis: true,
      precio: ""
    },
    {
      id: "ip12",
      n: "iPhone 12",
      l: "iPhone 12",
      caps: ["64 GB", "128 GB"],
      ac: [
        ["Azul", "#31527C"],
        ["Verde", "#D2E2D6"],
        ["Blanco", "#E9E9E9"],
        ["Negro", "#2C2C2E"]
      ],
      dest: false,
      vis: true,
      precio: ""
    },
    {
      id: "ipse",
      n: "iPhone SE",
      l: "iPhone SE",
      caps: ["64 GB", "128 GB"],
      ac: [
        ["Blanco estelar", "#E9E5DE"],
        ["Medianoche", "#2E323A"]
      ],
      dest: false,
      vis: true,
      precio: ""
    }
  ],

  // Accesorios
  accessories: [
    ["Fundas", "Para el modelo que tengas", "#464A52"],
    ["Vidrios templados", "Protección de pantalla", "#B7C3CB"],
    ["Cargadores y cables", "Carga y conexión", "#E7E5E0"],
    ["Auriculares", "Con cable e inalámbricos", "#D5D1C9"],
    ["Baterías portátiles", "Carga encima", "#2F333A"]
  ]
};
