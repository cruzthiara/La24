/* ===================================================
   DRUGSTORE LA24 — script.js
   Contiene: productos, navegación, buscador, carrito,
             generador de mensaje WhatsApp
=================================================== */

// ============================================================
// 1. BASE DE DATOS DE PRODUCTOS
// ============================================================
const productos = [

  // --- CERVEZAS ---
  { id: 1,  cat: 'cervezas',   nombre: 'Cerveza Quilmes 1L',            precio: 3500, img: 'img/quilmes1l.png',    emoji: '🍺' },
  { id: 2,  cat: 'cervezas',   nombre: 'Cerveza Quilmes 1,25L',         precio: 3400, img: 'img/quilmes125.png',   emoji: '🍺' },
  { id: 3,  cat: 'cervezas',   nombre: 'Cerveza Salta 1L',              precio: 3500, img: 'img/salta1l.png',      emoji: '🍺' },
  { id: 4,  cat: 'cervezas',   nombre: 'Cerveza Quilmes 1890 1L',       precio: 3500, img: 'img/quilmes1890.png',  emoji: '🍺' },
  { id: 5,  cat: 'cervezas',   nombre: 'Lata Cerveza Quilmes 473cc',    precio: 2000, img: 'img/lata_quilmes.png', emoji: '🍺' },
  { id: 6,  cat: 'cervezas',   nombre: 'Cerveza Quilmes 710cc',         precio: 3000, img: 'img/quilmes710.png',   emoji: '🍺' },
  { id: 7,  cat: 'cervezas',   nombre: 'Lata Cerveza Schneider 710cc',  precio: 3500, img: 'img/lata_schneider.png',emoji:'🍺' },
  { id: 8,  cat: 'cervezas',   nombre: 'Lata Cerveza Salta 473cc',      precio: 3500, img: 'img/lata_salta.png',   emoji: '🍺' },
  { id: 9,  cat: 'cervezas',   nombre: 'Cerveza Corona 710cc',          precio: 3500, img: 'img/corona710.png',    emoji: '🍺' },

  // --- BEBIDAS CON ALCOHOL ---
  { id: 20, cat: 'alcohol',    nombre: 'Vino Toro tinto 1L',            precio: 3500, img: 'img/vino_toro.png',    emoji: '🍷' },
  { id: 21, cat: 'alcohol',    nombre: 'Vino Animaná tinto 1L',         precio: 3500, img: 'img/vino_animana.png', emoji: '🍷' },
  { id: 22, cat: 'alcohol',    nombre: 'Vino Animaná blanco 1L',        precio: 3400, img: 'img/vino_animana_b.png',emoji:'🍷'},
  { id: 23, cat: 'alcohol',    nombre: 'Vino Canciller tinto 1,125cc',  precio: 2000, img: 'img/vino_canciller.png',emoji:'🍷'},
  { id: 24, cat: 'alcohol',    nombre: 'Vino Vieja Mendoza 1,125cc',    precio: 3000, img: 'img/vino_vieja.png',   emoji: '🍷' },
  { id: 25, cat: 'alcohol',    nombre: 'Vino Marqués del Sur tinto 1,125cc', precio: 3500, img: 'img/vino_marques.png', emoji: '🍷' },
  { id: 26, cat: 'alcohol',    nombre: 'Vodka Sernova 700ml varios sabores',  precio: 3500, img: 'img/vodka_sernova.png',emoji:'🥃'},
  { id: 27, cat: 'alcohol',    nombre: 'Vodka Smirnoff 750ml varios sabores', precio: 3500, img: 'img/vodka_smirnoff.png',emoji:'🥃'},
  { id: 28, cat: 'alcohol',    nombre: 'Gancia 950ml',                  precio: 3400, img: 'img/gancia.png',       emoji: '🥂' },
  { id: 29, cat: 'alcohol',    nombre: 'Dr. Lemon Vodka 1L',            precio: 3500, img: 'img/drlemon_vodka.png',emoji: '🍹' },
  { id: 30, cat: 'alcohol',    nombre: 'Dr. Lemon 1L varios sabores',   precio: 3400, img: 'img/drlemon.png',      emoji: '🍹' },
  { id: 31, cat: 'alcohol',    nombre: 'Frizze Blue 1L',                precio: 3500, img: 'img/frizze.png',       emoji: '🍹' },

  // --- BEBIDAS SIN ALCOHOL ---
  { id: 40, cat: 'sinAlcohol', nombre: 'Gaseosa Coca-Cola 3L',           precio: 3500, img: 'img/coca3l.png',     emoji: '🥤' },
  { id: 41, cat: 'sinAlcohol', nombre: 'Gaseosa Fanta 3L',               precio: 3400, img: 'img/fanta3l.png',    emoji: '🥤' },
  { id: 42, cat: 'sinAlcohol', nombre: 'Gaseosa Sprite 3L',              precio: 3500, img: 'img/sprite3l.png',   emoji: '🥤' },
  { id: 43, cat: 'sinAlcohol', nombre: 'Gaseosa Manaos 3L varios sabores',precio: 3500, img: 'img/manaos.png',    emoji: '🥤' },
  { id: 44, cat: 'sinAlcohol', nombre: 'Gaseosa Secco 3L varios sabores', precio: 2000, img: 'img/secco3l.png',   emoji: '🥤' },
  { id: 45, cat: 'sinAlcohol', nombre: 'Gaseosa Pepsi 2L',               precio: 3000, img: 'img/pepsi2l.png',    emoji: '🥤' },
  { id: 46, cat: 'sinAlcohol', nombre: 'Gaseosa 7up 2L',                 precio: 3500, img: 'img/7up2l.png',      emoji: '🥤' },
  { id: 47, cat: 'sinAlcohol', nombre: 'Gaseosa Mirinda manzana 2L',     precio: 3500, img: 'img/mirinda2l.png',  emoji: '🥤' },
  { id: 48, cat: 'sinAlcohol', nombre: 'Gaseosa Coca-Cola 1,5L',         precio: 3500, img: 'img/coca15l.png',    emoji: '🥤' },
  { id: 49, cat: 'sinAlcohol', nombre: 'Gaseosa Secco 1L varios sabores', precio: 3400, img: 'img/secco1l.png',   emoji: '🥤' },
  { id: 50, cat: 'sinAlcohol', nombre: 'Gaseosa Coca-Cola 600cc',        precio: 3500, img: 'img/coca600.png',    emoji: '🥤' },
  { id: 51, cat: 'sinAlcohol', nombre: 'Gaseosa Pepsi 500cc',            precio: 3500, img: 'img/pepsi500.png',   emoji: '🥤' },
  { id: 52, cat: 'sinAlcohol', nombre: 'Gaseosa 7up 500cc',              precio: 2000, img: 'img/7up500.png',     emoji: '🥤' },
  { id: 53, cat: 'sinAlcohol', nombre: 'Gaseosa Mirinda manzana 500cc',  precio: 3000, img: 'img/mirinda500.png', emoji: '🥤' },
  { id: 54, cat: 'sinAlcohol', nombre: 'Lata Coca-Cola 354cc',           precio: 3500, img: 'img/lata_coca.png',  emoji: '🥤' },
  { id: 55, cat: 'sinAlcohol', nombre: 'Lata Pepsi 354cc',               precio: 3500, img: 'img/lata_pepsi.png', emoji: '🥤' },
  { id: 56, cat: 'sinAlcohol', nombre: 'Coca-Cola 1,5L retornable',      precio: 3500, img: 'img/coca15r.png',    emoji: '🥤' },
  { id: 57, cat: 'sinAlcohol', nombre: 'Coca-Cola 2L retornable',        precio: 3500, img: 'img/coca2r.png',     emoji: '🥤' },
  { id: 58, cat: 'sinAlcohol', nombre: 'Coca-Cola 2,5L retornable',      precio: 3000, img: 'img/coca25r.png',    emoji: '🥤' },
  { id: 59, cat: 'sinAlcohol', nombre: 'Jugo Ades 1L varios sabores',    precio: 2000, img: 'img/ades.png',       emoji: '🧃' },
  { id: 60, cat: 'sinAlcohol', nombre: 'Jugo Cepita del Valle 3L',       precio: 3500, img: 'img/cepita3l.png',   emoji: '🧃' },
  { id: 61, cat: 'sinAlcohol', nombre: 'Jugo Cepita del Valle 1L',       precio: 2000, img: 'img/cepita1l.png',   emoji: '🧃' },
  { id: 62, cat: 'sinAlcohol', nombre: 'Jugo Placer 1L varios sabores',  precio: 3000, img: 'img/placer.png',     emoji: '🧃' },
  { id: 63, cat: 'sinAlcohol', nombre: 'Agua saborizada Aquarius 1,5L',  precio: 3500, img: 'img/aquarius.png',   emoji: '💧' },
  { id: 64, cat: 'sinAlcohol', nombre: 'Energizante Speed 473cc',        precio: 3500, img: 'img/speed473.png',   emoji: '⚡' },
  { id: 65, cat: 'sinAlcohol', nombre: 'Energizante Speed 250cc',        precio: 3500, img: 'img/speed250.png',   emoji: '⚡' },
  { id: 66, cat: 'sinAlcohol', nombre: 'Energizante Monster 473cc varios sabores', precio: 3000, img: 'img/monster.png', emoji: '⚡' },
  { id: 67, cat: 'sinAlcohol', nombre: 'Energizante Red Bull 250cc',     precio: 2000, img: 'img/redbull.png',    emoji: '⚡' },
  { id: 68, cat: 'sinAlcohol', nombre: 'Gatorade 500cc varios sabores',  precio: 3000, img: 'img/gatorade.png',   emoji: '🏃' },

  // --- SNACKS Y GOLOSINAS ---
  { id: 80, cat: 'snacks',     nombre: 'Papas fritas Tafí clásicas 310g',    precio: 3500, img: 'img/tafi310.png',   emoji: '🍟' },
  { id: 81, cat: 'snacks',     nombre: 'Papas fritas Tafí clásicas 210g',    precio: 3400, img: 'img/tafi210.png',   emoji: '🍟' },
  { id: 82, cat: 'snacks',     nombre: 'Papas fritas Tafí clásicas 100g',    precio: 3500, img: 'img/tafi100.png',   emoji: '🍟' },
  { id: 83, cat: 'snacks',     nombre: 'Papas fritas Tafí onduladas 100g',   precio: 3500, img: 'img/tafi_ond.png',  emoji: '🍟' },
  { id: 84, cat: 'snacks',     nombre: 'Papas fritas Tafí sabor jamón 100g', precio: 2000, img: 'img/tafi_jam.png',  emoji: '🍟' },
  { id: 85, cat: 'snacks',     nombre: 'Papas fritas Tafí sabor cebolla 100g',precio:3000, img: 'img/tafi_ceb.png',  emoji: '🍟' },
  { id: 86, cat: 'snacks',     nombre: 'Papas fritas Tafí pollo al limón 100g',precio:3500,img: 'img/tafi_pol.png',  emoji: '🍟' },
  { id: 87, cat: 'snacks',     nombre: 'Papas fritas Tafí jalapeño 100g',    precio: 3500, img: 'img/tafi_jal.png',  emoji: '🍟' },
  { id: 88, cat: 'snacks',     nombre: 'Maní salado Tafí 100g',              precio: 3500, img: 'img/mani_tafi.png', emoji: '🥜' },
  { id: 89, cat: 'snacks',     nombre: 'Galletas Rex 125g',                  precio: 3400, img: 'img/rex.png',       emoji: '🍪' },
  { id: 90, cat: 'snacks',     nombre: 'Galletas Saladix 100g varios sabores',precio:3500, img: 'img/saladix.png',   emoji: '🍘' },
  { id: 91, cat: 'snacks',     nombre: 'Galletas Criollitas x3',             precio: 3500, img: 'img/criollitas.png',emoji: '🍘' },
  { id: 92, cat: 'snacks',     nombre: 'Galleta Surtido Bagley',             precio: 2000, img: 'img/bagley.png',    emoji: '🍪' },
  { id: 93, cat: 'snacks',     nombre: 'Galleta Diversión surtida',          precio: 3000, img: 'img/diversion.png', emoji: '🍪' },
  { id: 94, cat: 'snacks',     nombre: 'Galleta Terrabusi Variedad',         precio: 3500, img: 'img/terrabusi.png', emoji: '🍪' },
  { id: 95, cat: 'snacks',     nombre: 'Galleta Recetas de la Abuela 183g',  precio: 3500, img: 'img/abuela.png',    emoji: '🍪' },
  { id: 96, cat: 'snacks',     nombre: 'Galleta Don Satur bizcocho dulce',   precio: 2000, img: 'img/donsatur_d.png',emoji: '🍪' },
  { id: 97, cat: 'snacks',     nombre: 'Galleta Opera 55g',                  precio: 3500, img: 'img/opera.png',     emoji: '🍪' },
  { id: 98, cat: 'snacks',     nombre: 'Galleta Oblita 100g varios sabores', precio: 3500, img: 'img/oblita.png',    emoji: '🍪' },
  { id: 99, cat: 'snacks',     nombre: 'Galleta Don Satur bizcocho salado',  precio: 3000, img: 'img/donsatur_s.png',emoji: '🍪' },
  { id: 100,cat: 'snacks',     nombre: 'Galleta Oreo 118g',                  precio: 2000, img: 'img/oreo.png',      emoji: '🍪' },
  { id: 101,cat: 'snacks',     nombre: 'Galleta Pepitos 119g',               precio: 3000, img: 'img/pepitos.png',   emoji: '🍪' },
  { id: 102,cat: 'snacks',     nombre: 'Galleta Terrabusi Duquesa 115g',     precio: 3500, img: 'img/duquesa.png',   emoji: '🍪' },
  { id: 103,cat: 'snacks',     nombre: 'Galleta Mini Oreo 50g',              precio: 2000, img: 'img/mini_oreo.png', emoji: '🍪' },
  { id: 104,cat: 'snacks',     nombre: 'Galleta Mini Pepitos 50g',           precio: 3000, img: 'img/mini_pepitos.png',emoji:'🍪'},

  // --- CIGARRILLOS ---
  { id: 110,cat: 'cigarrillos',nombre: 'Marlboro Crafted x20 común',         precio: 3500, img: 'img/marlboro_c.png',  emoji: '🚬' },
  { id: 111,cat: 'cigarrillos',nombre: 'Marlboro Crafted x20 común (var)',   precio: 3400, img: 'img/marlboro_c2.png', emoji: '🚬' },
  { id: 112,cat: 'cigarrillos',nombre: 'Marlboro Crafted x20 box',           precio: 3500, img: 'img/marlboro_box.png',emoji: '🚬' },
  { id: 113,cat: 'cigarrillos',nombre: 'Marlboro Crafted Coral x20 box',     precio: 3500, img: 'img/marlboro_coral.png',emoji:'🚬'},
  { id: 114,cat: 'cigarrillos',nombre: 'Marlboro Vista Coral Fusion XL',     precio: 2000, img: 'img/marlboro_vista.png',emoji:'🚬'},
  { id: 115,cat: 'cigarrillos',nombre: 'PhillipMorris convertible x20',      precio: 3000, img: 'img/pm_conv20.png',   emoji: '🚬' },
  { id: 116,cat: 'cigarrillos',nombre: 'PhillipMorris común x20 box',        precio: 3500, img: 'img/pm_box.png',      emoji: '🚬' },
  { id: 117,cat: 'cigarrillos',nombre: 'PhillipMorris Red Select x20 común', precio: 3500, img: 'img/pm_red.png',      emoji: '🚬' },
  { id: 118,cat: 'cigarrillos',nombre: 'PhillipMorris común x20 común',      precio: 3400, img: 'img/pm_com20.png',    emoji: '🚬' },
  { id: 119,cat: 'cigarrillos',nombre: 'PhillipMorris convertible x12',      precio: 3500, img: 'img/pm_conv12.png',   emoji: '🚬' },
  { id: 120,cat: 'cigarrillos',nombre: 'Chesterfield convertible x10',       precio: 2000, img: 'img/ches_conv10.png', emoji: '🚬' },
  { id: 121,cat: 'cigarrillos',nombre: 'Chesterfield común x10',             precio: 3000, img: 'img/ches_com10.png',  emoji: '🚬' },
  { id: 122,cat: 'cigarrillos',nombre: 'Chesterfield común x20 com.',        precio: 3500, img: 'img/ches_com20.png',  emoji: '🚬' },
  { id: 123,cat: 'cigarrillos',nombre: 'Chesterfield convertible x20 com.',  precio: 3500, img: 'img/ches_conv20.png', emoji: '🚬' },
  { id: 124,cat: 'cigarrillos',nombre: 'Lucky Strike convertible x20 com.',  precio: 2000, img: 'img/lucky_conv20.png',emoji: '🚬' },
  { id: 125,cat: 'cigarrillos',nombre: 'Lucky Strike convertible x12',       precio: 3000, img: 'img/lucky_conv12.png',emoji: '🚬' },
  { id: 126,cat: 'cigarrillos',nombre: 'Lucky Strike convertible XL x20',    precio: 3500, img: 'img/lucky_xl.png',    emoji: '🚬' },
  { id: 127,cat: 'cigarrillos',nombre: 'Lucky Strike doble cápsula XL x20',  precio: 3500, img: 'img/lucky_doble.png', emoji: '🚬' },

  // --- HIELO ---
  { id: 130,cat: 'hielo',      nombre: 'Hielo 1Kg',                          precio: 3500, img: 'img/hielo1kg.png',    emoji: '🧊' },
  { id: 131,cat: 'hielo',      nombre: 'Hielo 3Kg',                          precio: 3400, img: 'img/hielo3kg.png',    emoji: '🧊' },
];

// ============================================================
// 2. ESTADO DEL CARRITO
// ============================================================
let carrito = []; // [{ producto, cantidad }]

// ============================================================
// 3. NAVEGACIÓN ENTRE PÁGINAS
// ============================================================
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Limpiar búsqueda si no estamos en búsqueda
  if (pageId !== 'busqueda') {
    document.getElementById('searchInput').value = '';
  }
  // Renderizar grids según la página
  renderGrid(pageId);
}

function renderGrid(pageId) {
  const grids = {
    cervezas:   { el: 'gridCervezas',    cat: 'cervezas'   },
    alcohol:    { el: 'gridAlcohol',     cat: 'alcohol'     },
    sinAlcohol: { el: 'gridSinAlcohol',  cat: 'sinAlcohol'  },
    snacks:     { el: 'gridSnacks',      cat: 'snacks'      },
    cigarrillos:{ el: 'gridCigarrillos', cat: 'cigarrillos' },
    hielo:      { el: 'gridHielo',       cat: 'hielo'       },
  };
  if (grids[pageId]) {
    const filtrados = productos.filter(p => p.cat === grids[pageId].cat);
    renderProductos(filtrados, grids[pageId].el);
  }
  if (pageId === 'catalogo') {
    renderProductos(productos, 'catalogGrid');
  }
}

// ============================================================
// 4. RENDERIZADO DE PRODUCTO
// ============================================================
function renderProductos(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (lista.length === 0) {
    container.innerHTML = '<p style="color:#888;padding:20px 0;">No se encontraron productos.</p>';
    return;
  }
  container.innerHTML = lista.map(p => `
    <div class="product-card">
      <div class="product-card-inner">
        <img
          class="product-img"
          src="${p.img}"
          alt="${p.nombre}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <div class="product-img-placeholder" style="display:none;">${p.emoji}</div>
        <div class="product-info">
          <div class="product-name">${p.nombre}</div>
          <div class="product-price">$${p.precio.toLocaleString('es-AR')}</div>
        </div>
      </div>
      <button class="add-btn" onclick="agregarAlCarrito(${p.id})">Agregar</button>
    </div>
  `).join('');
}

// ============================================================
// 5. BUSCADOR
// ============================================================
function handleSearch(query) {
  const q = query.trim().toLowerCase();
  if (q === '') {
    // Si buscamos vacío, volvemos a inicio
    showPage('inicio');
    return;
  }
  const resultados = productos.filter(p =>
    p.nombre.toLowerCase().includes(q)
  );
  // Mostrar página de búsqueda
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-busqueda').classList.add('active');
  document.getElementById('searchTitle').textContent =
    resultados.length > 0
      ? `Resultados para "${query}" (${resultados.length})`
      : `Sin resultados para "${query}"`;
  renderProductos(resultados, 'gridSearch');
}

// ============================================================
// 6. CARRITO DE COMPRAS
// ============================================================
function agregarAlCarrito(productoId) {
  const producto = productos.find(p => p.id === productoId);
  if (!producto) return;

  const existente = carrito.find(item => item.producto.id === productoId);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ producto, cantidad: 1 });
  }

  actualizarCarritoUI();
  showToast(`✓ ${producto.nombre} agregado`);
}

function quitarDelCarrito(productoId) {
  const idx = carrito.findIndex(item => item.producto.id === productoId);
  if (idx === -1) return;
  if (carrito[idx].cantidad > 1) {
    carrito[idx].cantidad--;
  } else {
    carrito.splice(idx, 1);
  }
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);

  // Badge del carrito
  document.getElementById('cartCount').textContent = totalItems;

  // Lista de items
  const cartItemsEl = document.getElementById('cartItems');
  if (carrito.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
  } else {
    cartItemsEl.innerHTML = carrito.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.producto.nombre}</div>
          <div class="cart-item-price">$${(item.producto.precio * item.cantidad).toLocaleString('es-AR')}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="quitarDelCarrito(${item.producto.id})">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="qty-btn" onclick="agregarAlCarrito(${item.producto.id})">+</button>
        </div>
      </div>
    `).join('');
  }

  // Total
  document.getElementById('cartTotal').textContent = `$${totalPrecio.toLocaleString('es-AR')}`;
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  panel.classList.toggle('open');
  overlay.classList.toggle('open');
}

// ============================================================
// 7. BOTÓN PEDIR → WHATSAPP
// ============================================================
function pedirPorWhatsApp() {
  if (carrito.length === 0) {
    showToast('⚠ Tu carrito está vacío');
    return;
  }

  const numero = '543838470284'; // formato internacional sin +
  let mensaje = 'Hola, quiero hacer un pedido:\n\n';
  carrito.forEach(item => {
    mensaje += `• ${item.producto.nombre} x${item.cantidad} — $${(item.producto.precio * item.cantidad).toLocaleString('es-AR')}\n`;
  });
  const total = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  mensaje += `\n*Total: $${total.toLocaleString('es-AR')}*`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Botón WhatsApp del header (contacto directo sin pedido)
function openWhatsApp() {
  window.open('https://wa.me/543838470284', '_blank');
}

// ============================================================
// 8. NOSOTROS — BOTÓN "CÓMO LLEGAR"
// ============================================================
function openMaps() {
  // Coordenadas de El Cerrito, Santa María, Catamarca
  const url = 'https://maps.app.goo.gl/Hn1zMc5gcNsoLCQ87';
  window.open(url, '_blank');
}

// ============================================================
// 9. CATÁLOGO — FILTRO POR CATEGORÍA
// ============================================================
function filterCatalog(cat, linkEl) {
  // Marcar activo
  document.querySelectorAll('#page-catalogo .cf-link').forEach(l => l.classList.remove('active'));
  if (linkEl) linkEl.classList.add('active');

  const filtrados = cat === 'all' ? productos : productos.filter(p => p.cat === cat);
  renderProductos(filtrados, 'catalogGrid');
  return false; // evitar navegación
}

// ============================================================
// 10. TOAST NOTIFICATION
// ============================================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ============================================================
// 11. INIT — pre-renderizar todos los grids al cargar
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Pre-renderizar todos los grids
  ['cervezas','alcohol','sinAlcohol','snacks','cigarrillos','hielo'].forEach(cat => {
    renderGrid(cat);
  });
  renderProductos(productos, 'catalogGrid');
  // Mostrar página de inicio
  showPage('inicio');
  // Inicializar carrito vacío
  actualizarCarritoUI();
});
