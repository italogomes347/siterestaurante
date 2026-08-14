const products = [
  { id: 1, name: "Tartare de Atum Fresco", price: 68, oldPrice: 85, category: "frutos-do-mar", rating: 4.9, reviews: 142, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=70", description: "Atum selado com crosta de gergelim, abacate grelhado e azeite trufado. Acompanha chips de wonton.", tag: "Mais Pedido" },
  { id: 2, name: "Prime Ancho Dry Aged", price: 125, oldPrice: 150, category: "carnes", rating: 5.0, reviews: 98, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=70", description: "Corte nobre maturado por 45 dias com mousseline de batata trufada e legumes glaceados.", tag: "Sugestão do Chef" },
  { id: 3, name: "Risotto de Salmão & Aspargos", price: 98, oldPrice: 120, category: "principais", rating: 4.8, reviews: 76, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=70", description: "Arroz arbóreo com açafrão, lascas de salmão grelhado e aspargos frescos." },
  { id: 4, name: "Pizza Artesanal de Cogumelos", price: 72, oldPrice: 90, category: "principais", rating: 4.7, reviews: 112, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=70", description: "Fermentação natural 48h, cogumelos selvagens frescos e queijo gruyère." },
  { id: 5, name: "Esfera de Chocolate Belga", price: 35, oldPrice: 48, category: "sobremesas", rating: 4.9, reviews: 203, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=70", description: "Chocolate 70% cacau recheado com gelato artesanal de baunilha." },
  { id: 6, name: "Vinho Reserva Grand Cru", price: 165, oldPrice: 210, category: "bebidas", rating: 4.8, reviews: 64, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=70", description: "Garrafa 750ml, harmonização perfeita para carnes nobres e massas.", tag: "Carta de Vinhos" },
  { id: 7, name: "Carpaccio de Filet Mignon", price: 58, oldPrice: 75, category: "entradas", rating: 4.7, reviews: 87, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=70", description: "Lâminas finas de mignon, alcaparras, molho de mostarda dijon e parmesão." },
  { id: 8, name: "Camarões Rosa Flambados", price: 138, oldPrice: 160, category: "frutos-do-mar", rating: 4.9, reviews: 91, image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=500&q=70", description: "Camarões salteados no conhaque com arroz de amêndoas e ervas finas." },
  { id: 9, name: "Spaghetti Carbonara Trufado", price: 79, oldPrice: 95, category: "massas", rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=70", description: "Massa fresca, guanciale artesanal, gemas curadas e lascas de trufa preta." },
  { id: 10, name: "Ravioli de Lagostim Artesanal", price: 108, oldPrice: 130, category: "massas", rating: 4.9, reviews: 73, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=70", description: "Massa caseira recheada com lagostim ao molho suave de limão siciliano." },
  { id: 11, name: "Polvo à Lagareiro com Batatas", price: 145, oldPrice: 175, category: "frutos-do-mar", rating: 5.0, reviews: 58, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=70", description: "Tentáculos de polvo grelhados no azeite de oliva, alho assado e batatas murro." },
  { id: 12, name: "Bacalhau Confitado em Ervas", price: 128, oldPrice: 155, category: "frutos-do-mar", rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=70", description: "Lombo de bacalhau cozido lentamente no azeite com azeitonas pretas e pimentões." },
  { id: 13, name: "Carré de Cordeiro Crocante", price: 139, oldPrice: 165, category: "carnes", rating: 4.9, reviews: 67, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=70", description: "Cordeiro em crosta de ervas de Provence servido com risoto de hortelã." },
  { id: 14, name: "Burger Savor Wagyu 200g", price: 49, oldPrice: 65, category: "principais", rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=70", description: "Blend de Wagyu, queijo cheddar inglês, bacon artesanal e maionese trufada." },
  { id: 15, name: "Salada de Burrata Fresca", price: 54, oldPrice: 70, category: "entradas", rating: 4.7, reviews: 95, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=70", description: "Burrata artesanal, tomates confitados, pesto de manjericão e focaccia crocante." },
  { id: 16, name: "Cheesecake de Frutas Vermelhas", price: 32, oldPrice: 42, category: "sobremesas", rating: 4.8, reviews: 178, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=500&q=70", description: "Receita clássica nova-iorquina com calda caseira de framboesa e mirtilos." },
  { id: 17, name: "Petit Gâteau com Sorvete de Creme", price: 36, oldPrice: 45, category: "sobremesas", rating: 4.9, reviews: 145, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=70", description: "Bolo quente de chocolate cremoso com gelato artesanal de baunilha em fava." },
  { id: 18, name: "Tiramisù Italiano Tradicional", price: 30, oldPrice: 40, category: "sobremesas", rating: 4.8, reviews: 167, image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=70", description: "Biscoitos savoiardi embebidos em café espresso, mascarpone e cacau em pó." },
  { id: 19, name: "Cocktail Negroni Artesanal", price: 38, oldPrice: 48, category: "bebidas", rating: 4.7, reviews: 92, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=70", description: "Gin premium, vermute tinto, campari e twist de casca de laranja bahia." },
  { id: 20, name: "Gin Tônica Botanical", price: 36, oldPrice: 46, category: "bebidas", rating: 4.6, reviews: 108, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=70", description: "Gin botânico infusicionado com zimbro, pepino, alecrim fresco e tônica premium." },
  { id: 21, name: "Suco Natural de Frutas 500ml", price: 16, oldPrice: 22, category: "bebidas", rating: 4.5, reviews: 245, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=70", description: "Preparado na hora: escolha entre Laranja, Frutas Vermelhas ou Abacaxi com Hortelã." }
];

let cart = JSON.parse(localStorage.getItem('savor_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('savor_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('savor_user')) || null;
let appliedCoupon = JSON.parse(localStorage.getItem('savor_coupon')) || null;
let orders = JSON.parse(localStorage.getItem('savor_orders')) || [];
const freight = 12.00;

const coupons = {
  'VIP30': { discount: 0.30, label: '30% OFF' },
  'BEMVINDO': { discount: 0.20, label: '20% OFF' },
  'CHEFSPECIAL': { discount: 0.25, label: '25% OFF' },
  'SELECAO': { discount: 0.15, label: '15% OFF' },
  'GOURMET10': { discount: 0.10, label: '10% OFF' },
  'ENTREGAGRATIS': { discount: 0, type: 'free_shipping', label: 'Entrega Grátis' }
};

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden-loader');
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.remove();
    }, 500);
  }, 2000);
});

function showToast(message, type = 'info', title = '') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: 'check-circle', error: 'exclamation-circle', info: 'info-circle' };
  toast.innerHTML = `
    <i class="fas fa-${icons[type]}"></i>
    <div class="toast-content">
      <strong>${title || (type === 'success' ? 'Sucesso!' : type === 'error' ? 'Erro!' : 'Aviso')}</strong>
      <small>${message}</small>
    </div>
    <button class="toast-close"><i class="fas fa-times"></i></button>
  `;
  container.appendChild(toast);
  const remove = () => {
    toast.style.animation = 'slideOutRight 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  };
  toast.querySelector('.toast-close').addEventListener('click', remove);
  setTimeout(remove, 4000);
}

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrolled / total) * 100;
  document.getElementById('scrollProgress').style.width = progress + '%';

  const navbar = document.getElementById('navbar');
  if (scrolled > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  const btn = document.getElementById('backToTop');
  if (scrolled > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const step = target / 60;
      const update = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      update();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

document.getElementById('mobileToggle').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
  });
});

const searchOverlay = document.getElementById('searchOverlay');
document.getElementById('btn-search').addEventListener('click', () => {
  searchOverlay.classList.add('active');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
});
document.getElementById('searchClose').addEventListener('click', () => {
  searchOverlay.classList.remove('active');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const results = document.getElementById('searchResults');
  results.innerHTML = '';
  if (query.length < 2) return;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    results.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 30px;">Nenhum resultado encontrado.</p>';
    return;
  }

  filtered.forEach(p => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="search-result-info">
        <strong>${p.name}</strong>
        <small>R$ ${p.price.toFixed(2).replace('.', ',')}</small>
      </div>
    `;
    item.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      openProductModal(p);
    });
    results.appendChild(item);
  });
});

function renderMenu(filter = 'all', sort = 'default', search = '') {
  const grid = document.getElementById('menuGrid');
  const noResults = document.getElementById('noResults');
  grid.innerHTML = '';

  let filtered = [...products];

  if (filter !== 'all') {
    filtered = filtered.filter(p => p.category === filter);
  }

  if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

  switch (sort) {
    case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'name-asc': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'name-desc': filtered.sort((a, b) => b.name.localeCompare(a.name)); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
  }

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  filtered.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 4) * 100);
    card.innerHTML = `
      <div class="card-img-wrapper">
        ${p.tag ? `<span class="promo-tag">${p.tag}</span>` : ''}
        <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" data-id="${p.id}">
          <i class="fas fa-heart"></i>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="price-box">
          <span class="old-price">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>
          <span class="card-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
      <div class="card-info">
        <div class="card-rating">
          ${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}
          <small>(${p.reviews})</small>
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="card-actions">
          <button class="btn btn-primary btn-add-cart" data-id="${p.id}">
            <i class="fas fa-plus"></i> Adicionar
          </button>
          <button class="btn btn-outline btn-icon btn-view-product" data-id="${p.id}" title="Ver detalhes">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  attachMenuEvents();
  document.querySelectorAll('.menu-card[data-aos]').forEach(el => observer.observe(el));
}

function attachMenuEvents() {
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = +e.currentTarget.getAttribute('data-id');
      addToCart(id);
    });
  });
  document.querySelectorAll('.btn-view-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = +e.currentTarget.getAttribute('data-id');
      const product = products.find(p => p.id === id);
      if (product) openProductModal(product);
    });
  });
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = +e.currentTarget.getAttribute('data-id');
      toggleWishlist(id);
    });
  });
}

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    e.currentTarget.classList.add('active');
    const filter = e.currentTarget.getAttribute('data-filter');
    const sort = document.getElementById('sortSelect').value;
    renderMenu(filter, sort);
  });
});

document.getElementById('sortSelect').addEventListener('change', (e) => {
  const sort = e.target.value;
  const filter = document.querySelector('.filter-tab.active').getAttribute('data-filter');
  renderMenu(filter, sort);
});

function saveCart() {
  localStorage.setItem('savor_cart', JSON.stringify(cart));
  localStorage.setItem('savor_coupon', JSON.stringify(appliedCoupon));
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} adicionado ao pedido!`, 'success');
}

function changeQty(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }
}

function removeItem(index) {
  const name = cart[index].name;
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`${name} removido do pedido.`, 'info');
}

function updateCartUI() {
  const container = document.getElementById('cartItemsContainer');
  const cartCount = document.getElementById('cart-count');
  container.innerHTML = '';

  let subtotal = 0;
  let totalItems = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p style="font-size:0.85rem; color:var(--text-muted); text-align: center; padding: 40px 0;"><i class="fas fa-shopping-bag" style="font-size: 2rem; display: block; margin-bottom: 12px; color: var(--primary-gold);"></i>Nenhum item selecionado.</p>';
  } else {
    cart.forEach((item, index) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <small style="color: var(--text-muted); font-size: 0.75rem;">R$ ${item.price.toFixed(2).replace('.', ',')} cada</small>
        </div>
        <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
        <div class="cart-item-controls">
          <button class="cart-btn-qty" onclick="changeQty(${index}, -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="cart-btn-qty" onclick="changeQty(${index}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeItem(${index})">Remover</button>
        </div>
      `;
      container.appendChild(div);
    });
  }

  cartCount.textContent = totalItems;
  document.getElementById('summarySubtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

  let discountVal = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'free_shipping') {
      discountVal = 0;
    } else {
      discountVal = subtotal * (appliedCoupon.discount || 0);
    }
  }
  document.getElementById('summaryDiscount').textContent = `- R$ ${discountVal.toFixed(2).replace('.', ',')}`;

  let freightCost = (cart.length > 0 && (!appliedCoupon || appliedCoupon.type !== 'free_shipping')) ? freight : 0;
  document.getElementById('summaryFreight').textContent = `R$ ${freightCost.toFixed(2).replace('.', ',')}`;

  let total = Math.max(0, (subtotal - discountVal) + freightCost);
  document.getElementById('summaryTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const openCart = () => { cartSidebar.classList.add('active'); cartOverlay.classList.add('active'); };
const closeCart = () => { cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active'); };

document.getElementById('btn-open-cart').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.getElementById('btnApplyCoupon').addEventListener('click', () => {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  if (coupons[code]) {
    appliedCoupon = { code, ...coupons[code] };
    saveCart();
    document.getElementById('couponInput').value = '';
    const msg = document.getElementById('couponAppliedMsg');
    msg.innerHTML = `<i class="fas fa-check-circle"></i> Cupom ${code} aplicado (${appliedCoupon.label})`;
    msg.classList.remove('hidden');
    updateCartUI();
    showToast(`Cupom ${code} aplicado com sucesso!`, 'success', 'Cupom Válido');
  } else {
    showToast('Código inválido ou expirado.', 'error', 'Cupom');
  }
});

document.getElementById('btnCheckout').addEventListener('click', () => {
  if (cart.length === 0) {
    showToast('Adicione ao menos um prato ao seu pedido.', 'error');
    return;
  }
  closeCart();
  setTimeout(() => document.getElementById('checkoutModal').classList.add('active'), 400);
});

document.getElementById('closeCheckout').addEventListener('click', () => {
  document.getElementById('checkoutModal').classList.remove('active');
});

document.getElementById('checkoutModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('checkoutModal')) {
    document.getElementById('checkoutModal').classList.remove('active');
  }
});

function renderPaymentFields(method) {
  const box = document.getElementById('paymentDetailsBox');
  if (method === 'pix') {
    box.innerHTML = `
      <p><strong><i class="fas fa-qrcode"></i> Pagamento via PIX</strong></p>
      <p style="margin: 8px 0; color: var(--text-muted);">Copie a chave PIX abaixo para concluir o pagamento:</p>
      <input type="text" value="00020126580014br.gov.bcb.pix0136savor-art-restaurante-pix" readonly>
      <p style="font-size: 0.75rem; color: var(--success); margin-top: 8px;"><i class="fas fa-check"></i> Confirmação automática em segundos.</p>
    `;
  } else if (method === 'card') {
    box.innerHTML = `
      <div class="form-group"><label>Número do Cartão</label><input type="text" placeholder="0000 0000 0000 0000" maxlength="19" required></div>
      <div class="form-row">
        <div class="form-group"><label>Validade</label><input type="text" placeholder="MM/AA" maxlength="5" required></div>
        <div class="form-group"><label>CVV</label><input type="text" placeholder="123" maxlength="4" required></div>
      </div>
      <div class="form-group"><label>Nome no Cartão</label><input type="text" placeholder="Como aparece no cartão" required></div>
      <div class="form-group"><label>Parcelas</label>
        <select>
          <option>1x de R$ ${getTotal()} sem juros</option>
          <option>2x de R$ ${(getTotal()/2).toFixed(2).replace('.', ',')} sem juros</option>
          <option>3x de R$ ${(getTotal()/3).toFixed(2).replace('.', ',')} sem juros</option>
        </select>
      </div>
    `;
  } else if (method === 'paypal') {
    box.innerHTML = `<p><strong><i class="fab fa-paypal"></i> PayPal</strong></p><p style="color: var(--text-muted); margin-top: 6px;">Você será redirecionado para o ambiente seguro do PayPal para finalizar o pagamento.</p>`;
  } else if (method === 'crypto') {
    box.innerHTML = `
      <p><strong><i class="fab fa-bitcoin"></i> Pagamento via Cripto</strong></p>
      <p style="color: var(--text-muted); margin: 6px 0;">Endereço BTC:</p>
      <input type="text" value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" readonly>
      <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 8px;">Aceitamos também USDT (TRC20) e ETH.</p>
    `;
  }
}

function getTotal() {
  return parseFloat(document.getElementById('summaryTotal').textContent.replace('R$', '').replace(',', '.').trim());
}

document.querySelectorAll('input[name="payment-method"]').forEach(opt => {
  opt.addEventListener('change', (e) => renderPaymentFields(e.target.value));
});

document.getElementById('checkoutForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    showToast('Adicione ao menos um prato ao seu pedido.', 'error');
    return;
  }
  const order = {
    id: Date.now(),
    items: [...cart],
    total: getTotal(),
    date: new Date().toLocaleString('pt-BR'),
    status: 'Confirmado',
    coupon: appliedCoupon
  };
  orders.push(order);
  localStorage.setItem('savor_orders', JSON.stringify(orders));

  cart = [];
  appliedCoupon = null;
  saveCart();
  updateCartUI();
  document.getElementById('checkoutModal').classList.remove('active');
  showToast(`Pedido #${order.id} confirmado! Você receberá o comprovante por e-mail.`, 'success', '🎉 Pedido Confirmado');
  if (currentUser) {
    addLoyaltyPoints(Math.floor(order.total));
  }
});

document.getElementById('cepInput').addEventListener('blur', async (e) => {
  const cep = e.target.value.replace(/\D/g, '');
  const status = document.getElementById('cepStatus');
  if (cep.length !== 8) return;
  status.className = 'form-hint';
  status.textContent = 'Buscando CEP...';
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
      status.className = 'form-hint error';
      status.textContent = 'CEP não encontrado.';
    } else {
      document.getElementById('cityInput').value = `${data.localidade} / ${data.uf}`;
      document.getElementById('neighborhoodInput').value = data.bairro;
      document.getElementById('streetInput').value = data.logradouro;
      status.className = 'form-hint success';
      status.textContent = '✓ CEP encontrado!';
    }
  } catch (err) {
    status.className = 'form-hint error';
    status.textContent = 'Erro ao buscar CEP.';
  }
});

document.getElementById('cepInput').addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '');
  v = v.replace(/^(\d{5})(\d)/, '$1-$2');
  e.target.value = v;
});

document.getElementById('signupCpf')?.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = v;
});

function phoneMask(input) {
  if (!input) return;
  input.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
    v = v.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = v;
  });
}
phoneMask(document.getElementById('signupPhone'));
phoneMask(document.getElementById('reservationPhone'));

document.getElementById('signupPassword')?.addEventListener('input', (e) => {
  const val = e.target.value;
  const strength = document.getElementById('passwordStrength');
  let score = 0;
  if (val.length >= 8) score++;
  if (/[a-z]/.test(val) && /[A-Z]/.test(val)) score++;
  if (/\d/.test(val)) score++;
  if (/[^a-zA-Z\d]/.test(val)) score++;

  let color = '#ef4444', width = '25%', text = 'Fraca';
  if (score === 2) { color = '#f59e0b'; width = '50%'; text = 'Razoável'; }
  else if (score === 3) { color = '#3b82f6'; width = '75%'; text = 'Boa'; }
  else if (score >= 4) { color = '#22c55e'; width = '100%'; text = 'Forte'; }

  strength.classList.add('show');
  strength.innerHTML = `<div class="password-strength-fill" style="width: ${width}; background: ${color};"></div>`;
});

const authModal = document.getElementById('authModal');
document.getElementById('btn-open-auth').addEventListener('click', () => authModal.classList.add('active'));
document.getElementById('closeAuth').addEventListener('click', () => authModal.classList.remove('active'));
authModal.addEventListener('click', (e) => { if (e.target === authModal) authModal.classList.remove('active'); });

document.getElementById('tabLoginBtn').addEventListener('click', () => {
  document.getElementById('tabLoginBtn').classList.add('active');
  document.getElementById('tabSignupBtn').classList.remove('active');
  document.getElementById('formLogin').classList.remove('hidden');
  document.getElementById('formSignup').classList.add('hidden');
});
document.getElementById('tabSignupBtn').addEventListener('click', () => {
  document.getElementById('tabSignupBtn').classList.add('active');
  document.getElementById('tabLoginBtn').classList.remove('active');
  document.getElementById('formSignup').classList.remove('hidden');
  document.getElementById('formLogin').classList.add('hidden');
});

document.getElementById('formLogin').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  currentUser = { name: email.split('@')[0], email, loggedInAt: new Date().toISOString() };
  localStorage.setItem('savor_user', JSON.stringify(currentUser));
  authModal.classList.remove('active');
  updateUserUI();
  showToast(`Bem-vindo de volta, ${currentUser.name}!`, 'success');
});

document.getElementById('formSignup').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  currentUser = { name, email, points: 0, loggedInAt: new Date().toISOString() };
  localStorage.setItem('savor_user', JSON.stringify(currentUser));
  authModal.classList.remove('active');
  updateUserUI();
  showToast(`Conta criada com sucesso! Bem-vindo, ${name}!`, 'success', '🎉 Cadastro');
});

function addLoyaltyPoints(points) {
  if (currentUser) {
    currentUser.points = (currentUser.points || 0) + points;
    localStorage.setItem('savor_user', JSON.stringify(currentUser));
    updateUserUI();
  }
}

function updateUserUI() {
  const userMenu = document.getElementById('userMenu');
  if (currentUser) {
    const points = currentUser.points || 0;
    userMenu.innerHTML = `
      <div class="user-info" style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; background: var(--bg-card); border-radius: 4px; border: 1px solid var(--border-color);">
        <i class="fas fa-user-circle" style="color: var(--primary-gold); font-size: 1.2rem;"></i>
        <div style="text-align: left;">
          <strong style="font-size: 0.85rem; display: block;">${currentUser.name}</strong>
          <small style="color: var(--primary-gold); font-size: 0.7rem;">${points} pts</small>
        </div>
        <button id="btn-logout" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; margin-left: 8px;" title="Sair"><i class="fas fa-sign-out-alt"></i></button>
      </div>
    `;
    document.getElementById('btn-logout').addEventListener('click', () => {
      currentUser = null;
      localStorage.removeItem('savor_user');
      updateUserUI();
      showToast('Você saiu da conta.', 'info');
    });
  } else {
    userMenu.innerHTML = '<button class="btn btn-outline nav-btn" id="btn-open-auth">Entrar</button>';
    document.getElementById('btn-open-auth').addEventListener('click', () => authModal.classList.add('active'));
  }
}

function toggleWishlist(id) {
  const product = products.find(p => p.id === id);
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`${product.name} removido dos favoritos.`, 'info');
  } else {
    wishlist.push(id);
    showToast(`${product.name} adicionado aos favoritos!`, 'success');
  }
  localStorage.setItem('savor_wishlist', JSON.stringify(wishlist));
  document.getElementById('wishlist-count').textContent = wishlist.length;
  document.querySelectorAll(`.wishlist-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active');
  });
}

document.getElementById('btn-wishlist').addEventListener('click', () => {
  if (wishlist.length === 0) {
    showToast('Você ainda não tem favoritos.', 'info');
    return;
  }
  renderMenu('all', 'default');
  showToast(`Você tem ${wishlist.length} favorito(s).`, 'info');
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

function openProductModal(product) {
  const modal = document.getElementById('productModal');
  const detail = document.getElementById('productDetail');
  detail.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div>
      <h2>${product.name}</h2>
      <div class="card-rating" style="color: var(--primary-gold); margin: 8px 0;">
        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
        <small style="color: var(--text-muted);">(${product.reviews} avaliações)</small>
      </div>
      <div class="price">R$ ${product.price.toFixed(2).replace('.', ',')} <span style="color: #666; font-size: 1rem; text-decoration: line-through; font-weight: 400; margin-left: 8px;">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span></div>
      <p class="description">${product.description}</p>
      <p style="color: var(--text-muted); font-size: 0.85rem;"><strong style="color: var(--primary-gold);">Categoria:</strong> ${product.category}</p>
      <div class="qty-control">
        <button onclick="changeModalQty(-1)">−</button>
        <input type="text" id="modalQty" value="1" readonly>
        <button onclick="changeModalQty(1)">+</button>
      </div>
      <button class="btn btn-primary btn-block btn-lg" onclick="addFromModal(${product.id})">
        <i class="fas fa-shopping-bag"></i> Adicionar ao Pedido
      </button>
    </div>
  `;
  modal.classList.add('active');
}

window.changeModalQty = function(delta) {
  const input = document.getElementById('modalQty');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
};

window.addFromModal = function(id) {
  const qty = parseInt(document.getElementById('modalQty').value);
  for (let i = 0; i < qty; i++) addToCart(id);
  document.getElementById('productModal').classList.remove('active');
};

document.getElementById('closeProduct').addEventListener('click', () => {
  document.getElementById('productModal').classList.remove('active');
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
  });
});

let testimonialIndex = 0;
const track = document.getElementById('testimonialsTrack');
const cards = track.children.length;
const visibleCards = window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1;
const maxIndex = Math.max(0, cards - visibleCards);

function moveTestimonial(dir) {
  testimonialIndex = Math.max(0, Math.min(maxIndex, testimonialIndex + dir));
  const offset = -(testimonialIndex * (100 / visibleCards));
  track.style.transform = `translateX(${offset}%)`;
}

document.getElementById('prevTestimonial').addEventListener('click', () => moveTestimonial(-1));
document.getElementById('nextTestimonial').addEventListener('click', () => moveTestimonial(1));

setInterval(() => {
  testimonialIndex = testimonialIndex >= maxIndex ? 0 : testimonialIndex + 1;
  moveTestimonial(0);
}, 5000);

document.getElementById('reservationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  showToast(`Reserva confirmada para ${data.name} - ${data.date} às ${data.time} (${data.people})`, 'success', '🎉 Reserva Confirmada');
  e.target.reset();
});

const dateInput = document.getElementById('reservationDate');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}

document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Inscrição realizada! Use o cupom NEWS15 para 15% OFF.', 'success', '📧 Inscrito');
  e.target.reset();
});

renderMenu();
updateCartUI();
updateUserUI();
document.getElementById('wishlist-count').textContent = wishlist.length;
renderPaymentFields('pix');
