let cart = [];
let appliedDiscount = 0;
const freight = 12.00;

const authModal = document.getElementById('auth-modal');
const cartModal = document.getElementById('cart-modal');
const btnOpenAuth = document.getElementById('btn-open-auth');
const btnOpenCart = document.getElementById('btn-open-cart');
const btnCloseAuth = document.getElementById('close-auth');
const btnCloseCart = document.getElementById('close-cart');

const tabLoginBtn = document.getElementById('tab-login-btn');
const tabSignupBtn = document.getElementById('tab-signup-btn');
const formLogin = document.getElementById('form-login');
const formSignup = document.getElementById('form-signup');

btnOpenAuth.addEventListener('click', () => authModal.classList.add('active'));
btnCloseAuth.addEventListener('click', () => authModal.classList.remove('active'));

btnOpenCart.addEventListener('click', () => cartModal.classList.add('active'));
btnCloseCart.addEventListener('click', () => cartModal.classList.remove('active'));

authModal.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.classList.remove('active');
});

cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.remove('active');
});

tabLoginBtn.addEventListener('click', () => {
    tabLoginBtn.classList.add('active');
    tabSignupBtn.classList.remove('active');
    formLogin.classList.remove('hidden');
    formSignup.classList.add('hidden');
});

tabSignupBtn.addEventListener('click', () => {
    tabSignupBtn.classList.add('active');
    tabLoginBtn.classList.remove('active');
    formSignup.classList.remove('hidden');
    formLogin.classList.add('hidden');
});

document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        updateCartUI();
    });
});

function updateCartUI() {
    const itemsContainer = document.getElementById('cart-items-container');
    const cartCount = document.getElementById('cart-count');
    itemsContainer.innerHTML = '';

    let subtotal = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="font-size:0.85rem; color:var(--text-muted)">Nenhum item selecionado.</p>';
    } else {
        cart.forEach((item, index) => {
            subtotal += item.price * item.qty;
            totalItems += item.qty;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <span>${item.name}</span>
                    <small style="color: var(--text-muted);">R$ ${item.price.toFixed(2).replace('.', ',')} cada</small>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-btn-qty" onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="cart-btn-qty" onclick="changeQty(${index}, 1)">+</button>
                    <strong>R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</strong>
                    <button class="cart-btn-remove" onclick="removeItem(${index})">Remover</button>
                </div>
            `;
            itemsContainer.appendChild(itemDiv);
        });
    }

    cartCount.textContent = totalItems;
    document.getElementById('summary-subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    let discountVal = subtotal * appliedDiscount;
    document.getElementById('summary-discount').textContent = `- R$ ${discountVal.toFixed(2).replace('.', ',')}`;

    let total = Math.max(0, (subtotal - discountVal) + (cart.length > 0 ? freight : 0));
    document.getElementById('summary-freight').textContent = cart.length > 0 ? `R$ ${freight.toFixed(2).replace('.', ',')}` : 'R$ 0,00';
    document.getElementById('summary-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

window.changeQty = function(index, delta) {
    if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    }
};

window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

document.getElementById('btn-apply-coupon').addEventListener('click', () => {
    const code = document.getElementById('coupon-input').value.trim().toUpperCase();
    if (code === "VIP30") {
        appliedDiscount = 0.30;
        alert("Cupom VIP30 aplicado com sucesso! (30% de desconto).");
    } else if (code === "CHEFSPECIAL") {
        appliedDiscount = 0.25;
        alert("Cupom CHEFSPECIAL aplicado com sucesso! (25% de desconto).");
    } else if (code === "BEMVINDO") {
        appliedDiscount = 0.20;
        alert("Cupom BEMVINDO aplicado! (20% de desconto).");
    } else if (code === "SELECAO") {
        appliedDiscount = 0.15;
        alert("Cupom SELECAO aplicado! (15% de desconto).");
    } else if (code === "ENTREGAGRATIS" || code === "GOURMET10") {
        appliedDiscount = 0.10;
        alert(`Cupom ${code} aplicado com sucesso!`);
    } else {
        alert("Código de cupom inválido ou expirado.");
        appliedDiscount = 0;
    }
    updateCartUI();
});

const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
const paymentDetailsBox = document.getElementById('payment-details-box');

function renderPaymentFields(method) {
    if (method === 'pix') {
        paymentDetailsBox.innerHTML = `
            <p><strong>Pagamento via PIX</strong></p>
            <p style="color:var(--text-muted); margin: 6px 0;">Copie a chave PIX abaixo para concluir:</p>
            <input type="text" value="00020126580014br.gov.bcb.pix0136savor-art-restaurante-pix" readonly style="font-size:0.8rem;">
            <p style="font-size:0.75rem; color:var(--primary-gold); margin-top:8px;">Confirmação automática de pagamento.</p>
        `;
    } else if (method === 'card') {
        paymentDetailsBox.innerHTML = `
            <div class="form-group">
                <label>Número do Cartão</label>
                <input type="text" placeholder="0000 0000 0000 0000" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Validade</label>
                    <input type="text" placeholder="MM/AA" required>
                </div>
                <div class="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" required>
                </div>
            </div>
        `;
    } else if (method === 'paypal') {
        paymentDetailsBox.innerHTML = `
            <p><strong>Pagamento com PayPal</strong></p>
            <p style="color:var(--text-muted); margin-top:4px;">Você será redirecionado para a plataforma do PayPal para concluir o pagamento em um ambiente seguro.</p>
        `;
    } else if (method === 'crypto') {
        paymentDetailsBox.innerHTML = `
            <p><strong>Pagamento via Criptomoeda (BTC / USDT)</strong></p>
            <p style="color:var(--text-muted); margin: 6px 0;">Endereço de transferência:</p>
            <input type="text" value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" readonly style="font-size:0.8rem;">
        `;
    }
}

paymentOptions.forEach(opt => {
    opt.addEventListener('change', (e) => {
        renderPaymentFields(e.target.value);
    });
});

renderPaymentFields('pix');
updateCartUI();

document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (cart.length === 0) {
        alert("Adicione ao menos um prato ao seu pedido.");
        return;
    }
    alert("Pedido confirmado com sucesso! Você receberá o comprovante por e-mail.");
    cart = [];
    updateCartUI();
    cartModal.classList.remove('active');
});