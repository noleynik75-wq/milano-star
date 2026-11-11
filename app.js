(function () {
  'use strict';

  var APP_VERSION = '202611111625'; // подставляется при публикации (tools/release-web.js)
  var CFG = window.MSH2_CONFIG || {};
  var LS = { session: 'msh2.session', lang: 'msh2.lang', products: 'msh2.products', cart: 'msh2.cart' };

  // ---------- Тексты ----------
  var I18N = {
    vi: {
      loading: 'Đang tải…', retry: 'Thử lại', configTitle: 'Chưa cấu hình',
      configText: 'Ứng dụng chưa được cài đặt xong. Vui lòng báo chủ quán.',
      signInTitle: 'Đăng nhập', signInText: 'Đăng nhập bằng tài khoản Google của bạn.',
      pendingTitle: 'Đang chờ duyệt', pendingText: 'Tài khoản của bạn đã được ghi nhận. Vui lòng chờ chủ quán phê duyệt.',
      checkAgain: 'Kiểm tra lại', blockedTitle: 'Tài khoản bị khóa', blockedText: 'Bạn không còn quyền truy cập. Vui lòng liên hệ chủ quán.',
      logout: 'Đăng xuất', logoutAll: 'Đăng xuất trên mọi thiết bị', hello: 'Xin chào',
      testAccess: 'Kiểm tra kết nối', accessOk: 'Máy chủ xác nhận: bạn có quyền truy cập.', serverTime: 'Giờ máy chủ',
      usersTitle: 'Người dùng', back: '← Quay lại', refresh: 'Làm mới', approve: 'Duyệt', changeRole: 'Đổi vai trò',
      block: 'Khóa', unblock: 'Mở khóa', revokeSessions: 'Thoát mọi thiết bị', reasonPrompt: 'Lý do khóa',
      confirmRevoke: 'Đăng xuất người này trên mọi thiết bị?', confirmLogoutAll: 'Đăng xuất bạn trên mọi thiết bị?',
      saved: 'Đã lưu', you: '(bạn)', noUsers: 'Chưa có người dùng.', online: 'Đã kết nối', offline: 'Mất kết nối',
      role_owner: 'Chủ quán', role_admin: 'Quản lý', role_senior_cashier: 'Thu ngân chính', role_staff: 'Nhân viên', role_none: 'Chưa có vai trò',
      status_pending: 'Chờ duyệt', status_active: 'Đang hoạt động', status_blocked: 'Đã khóa', blockedReason: 'Lý do',
      inAppText: 'Bạn đang mở trang trong ứng dụng nhắn tin (Zalo, Messenger…). Đăng nhập Google không hoạt động ở đây. Hãy mở trang bằng Chrome hoặc Safari.',
      openInChrome: 'Mở bằng Chrome', copyLink: 'Sao chép liên kết', linkCopied: 'Đã sao chép. Dán vào Chrome hoặc Safari.',
      tabSell: 'Bán hàng', tabTables: 'Bàn', tabReceipts: 'Hóa đơn', tabMore: 'Thêm',
      all: 'Tất cả', noProducts: 'Chưa có sản phẩm.', items: 'món', clear: 'Xóa giỏ', cancel: 'Hủy', ok: 'OK',
      payCash: '💵 Tiền mặt', payQr: '📱 QR', cash: 'Tiền mặt', qr: 'QR',
      confirmPay: 'Xác nhận thanh toán', confirm: 'Xác nhận', saving: 'Đang lưu…',
      saleSaved: 'Đã lưu hóa đơn', receiptNo: 'Hóa đơn #',
      unknownTitle: 'Chưa rõ kết quả', unknownText: 'Mất kết nối khi đang lưu. Hóa đơn có thể đã được lưu. Bấm "Kiểm tra lại" — sẽ không bị lưu hai lần.',
      checkResult: 'Kiểm tra lại', chooseVariant: 'Chọn loại', clearCart: 'Xóa toàn bộ giỏ hàng?',
      helpTitle: '📖 Hướng dẫn', ownerTitle: '📊 Dành cho chủ quán', soon: 'Sắp có', available: 'Đã có', open: 'Mở',
      receiptsTitle: 'Hóa đơn', today: 'Hôm nay', yesterday: 'Hôm qua', total: 'Tổng', count: 'Số hóa đơn',
      scopeOwn: 'Chỉ hóa đơn của bạn', scopeAll: 'Tất cả nhân viên', noSales: 'Chưa có hóa đơn.', table: 'Bàn',
      productsTitle: 'Sản phẩm & giá', addProduct: '+ Thêm', productsHint: 'Giá mới chỉ áp dụng cho hóa đơn mới. Hóa đơn cũ giữ giá cũ.',
      draft: 'Nháp', off: 'Tắt', editProduct: 'Sửa sản phẩm', nameVi: 'Tên (tiếng Việt)', nameRu: 'Tên (tiếng Nga)',
      category: 'Nhóm', price: 'Giá (VND)', unit: 'Đơn vị', variants: 'Loại (cách nhau bằng dấu phẩy)',
      confirmed: 'Đã kiểm tra (tên và giá đúng)', active: 'Đang bán', note: 'Ghi chú', save: 'Lưu',
      err_NETWORK: 'Không kết nối được máy chủ. Thử lại.',
      err_SESSION_INVALID: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
      err_AUTH_INVALID_TOKEN: 'Đăng nhập Google không hợp lệ. Thử lại.', err_AUTH_EMAIL_UNVERIFIED: 'Email Google chưa được xác minh.',
      err_NOT_ALLOWED: 'Bạn không được phép làm việc này.', err_FORBIDDEN: 'Bạn không được phép làm việc này.',
      err_LAST_OWNER: 'Không thể khóa hoặc đổi vai trò chủ quán cuối cùng.', err_BUSY: 'Máy chủ đang bận. Thử lại sau vài giây.',
      err_NOT_CONFIGURED: 'Máy chủ chưa được cấu hình.',
      err_PRICE_CHANGED: 'Giá đã thay đổi. Giỏ hàng đã được cập nhật — kiểm tra lại tổng tiền.',
      err_PRODUCT_UNAVAILABLE: 'Có món không còn bán. Danh sách đã được cập nhật.',
      err_TABLE_BUSY: 'Bàn này đang mở. Hãy thêm món vào bàn đó.', err_ORDER_CHANGED: 'Bàn vừa được thay đổi trên máy khác. Kiểm tra lại tổng tiền.',
      err_ORDER_CLOSED: 'Bàn này đã được thanh toán hoặc hủy.', err_ORDER_EMPTY: 'Bàn chưa có món.',
      err_VERSION_CONFLICT: 'Sản phẩm vừa được sửa trên máy khác. Mở lại và sửa lần nữa.',
      err_PRODUCT_NOT_READY: 'Chỉ bật bán khi đã kiểm tra và có giá.', err_BAD_REQUEST: 'Dữ liệu không hợp lệ.',
      err_generic: 'Có lỗi xảy ra. Thử lại.'
    },
    ru: {
      loading: 'Загрузка…', retry: 'Повторить', configTitle: 'Не настроено', configText: 'В config.js не указаны API_URL и GOOGLE_CLIENT_ID.',
      signInTitle: 'Вход', signInText: 'Войдите через свой Google-аккаунт.',
      pendingTitle: 'Ожидание одобрения', pendingText: 'Ваш аккаунт зарегистрирован. Дождитесь одобрения владельца.',
      checkAgain: 'Проверить снова', blockedTitle: 'Доступ заблокирован', blockedText: 'У вас больше нет доступа. Обратитесь к владельцу.',
      logout: 'Выйти', logoutAll: 'Выйти на всех устройствах', hello: 'Здравствуйте',
      testAccess: 'Проверить связь', accessOk: 'Сервер подтвердил доступ.', serverTime: 'Время сервера',
      usersTitle: 'Пользователи', back: '← Назад', refresh: 'Обновить', approve: 'Одобрить', changeRole: 'Сменить роль',
      block: 'Заблокировать', unblock: 'Разблокировать', revokeSessions: 'Выйти на всех устройствах', reasonPrompt: 'Причина блокировки',
      confirmRevoke: 'Завершить все сессии этого пользователя?', confirmLogoutAll: 'Выйти на всех ваших устройствах?',
      saved: 'Сохранено', you: '(вы)', noUsers: 'Пользователей пока нет.', online: 'Связь есть', offline: 'Нет связи',
      role_owner: 'Владелец', role_admin: 'Администратор', role_senior_cashier: 'Старший кассир', role_staff: 'Сотрудник', role_none: 'Без роли',
      status_pending: 'Ожидает', status_active: 'Активен', status_blocked: 'Заблокирован', blockedReason: 'Причина',
      inAppText: 'Страница открыта внутри мессенджера (Zalo, Messenger, Telegram…). Вход через Google здесь не работает. Откройте страницу в Chrome или Safari.',
      openInChrome: 'Открыть в Chrome', copyLink: 'Скопировать ссылку', linkCopied: 'Ссылка скопирована. Вставьте её в Chrome или Safari.',
      tabSell: 'Касса', tabTables: 'Столики', tabReceipts: 'Чеки', tabMore: 'Ещё',
      all: 'Все', noProducts: 'Товаров нет.', items: 'поз.', clear: 'Очистить', cancel: 'Отмена', ok: 'OK',
      payCash: '💵 Наличные', payQr: '📱 QR', cash: 'Наличные', qr: 'QR',
      confirmPay: 'Подтвердите оплату', confirm: 'Подтвердить', saving: 'Сохранение…',
      saleSaved: 'Чек сохранён', receiptNo: 'Чек №',
      unknownTitle: 'Результат не известен', unknownText: 'Связь прервалась во время сохранения. Чек мог сохраниться. Нажмите «Проверить» — дубля не будет.',
      checkResult: 'Проверить', chooseVariant: 'Выберите вариант', clearCart: 'Очистить корзину?',
      helpTitle: '📖 Инструкция', ownerTitle: '📊 Раздел владельца', soon: 'Скоро', available: 'Уже есть', open: 'Открыть',
      receiptsTitle: 'Чеки', today: 'Сегодня', yesterday: 'Вчера', total: 'Итого', count: 'Чеков',
      scopeOwn: 'Только ваши чеки', scopeAll: 'Все сотрудники', noSales: 'Чеков пока нет.', table: 'Стол',
      productsTitle: 'Товары и цены', addProduct: '+ Добавить', productsHint: 'Новая цена действует только для новых чеков. Старые чеки сохраняют прежнюю цену.',
      draft: 'Черновик', off: 'Выкл.', editProduct: 'Товар', nameVi: 'Название (вьетнамское)', nameRu: 'Название (русское)',
      category: 'Категория', price: 'Цена (VND)', unit: 'Единица', variants: 'Варианты (через запятую)',
      confirmed: 'Проверено (название и цена верны)', active: 'В продаже', note: 'Примечание', save: 'Сохранить',
      err_NETWORK: 'Нет связи с сервером. Повторите.',
      err_SESSION_INVALID: 'Сессия истекла. Войдите снова.',
      err_AUTH_INVALID_TOKEN: 'Вход через Google не прошёл проверку. Попробуйте снова.', err_AUTH_EMAIL_UNVERIFIED: 'Email Google-аккаунта не подтверждён.',
      err_NOT_ALLOWED: 'Это действие вам не разрешено.', err_FORBIDDEN: 'Это действие вам не разрешено.',
      err_LAST_OWNER: 'Нельзя заблокировать или понизить последнего владельца.', err_BUSY: 'Сервер занят. Повторите через несколько секунд.',
      err_NOT_CONFIGURED: 'Сервер не настроен.',
      err_PRICE_CHANGED: 'Цены изменились. Корзина обновлена — проверьте итог.',
      err_PRODUCT_UNAVAILABLE: 'Какой-то товар снят с продажи. Список обновлён.',
      err_TABLE_BUSY: 'Этот столик уже открыт. Добавьте позиции к нему.', err_ORDER_CHANGED: 'Столик только что изменили с другого телефона. Проверьте сумму.',
      err_ORDER_CLOSED: 'Столик уже оплачен или отменён.', err_ORDER_EMPTY: 'На столике нет позиций.',
      err_VERSION_CONFLICT: 'Товар только что изменили с другого телефона. Откройте и измените снова.',
      err_PRODUCT_NOT_READY: 'Включить продажу можно только после проверки и с ценой.', err_BAD_REQUEST: 'Неверные данные.',
      err_generic: 'Произошла ошибка. Повторите.'
    }
  };

  // ---------- Состояние ----------
  var state = {
    lang: lsGet(LS.lang) === 'ru' ? 'ru' : 'vi',
    session: lsGet(LS.session),
    user: null,
    screen: 'loading',
    view: 'sell',
    online: navigator.onLine,
    products: readJson(LS.products) || [],
    category: '',
    cart: readJson(LS.cart) || [],
    cartOpen: false,
    salesDay: 'today',
    salesData: null,
    usersData: null,
    adminProducts: null
  };
  var pendingRequestIds = {};
  var gsiReady = false;
  var pollTimer = null;

  function $(id) { return document.getElementById(id); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* приватный режим */ } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }
  function readJson(k) { try { return JSON.parse(lsGet(k) || 'null'); } catch (e) { return null; } }

  function t(key) { var d = I18N[state.lang]; return (d && d[key]) || I18N.ru[key] || key; }
  function errText(code) { return I18N[state.lang]['err_' + code] ? t('err_' + code) : t('err_generic'); }
  function roleLabel(role) { return role ? t('role_' + role) : t('role_none'); }
  function money(n) { return Number(n || 0).toLocaleString('vi-VN') + 'đ'; }
  function timeOf(iso) {
    var d = new Date(iso);
    return isNaN(d) ? '' : d.toLocaleTimeString(state.lang === 'vi' ? 'vi-VN' : 'ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' });
  }
  function productName(p) { return state.lang === 'ru' && p.nameRu ? p.nameRu : p.nameVi; }
  function isAdmin() { return !!(state.user && state.user.permissions && state.user.permissions.manageUsers); }

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    var b = new Uint8Array(16);
    crypto.getRandomValues(b);
    b[6] = (b[6] & 15) | 64;
    b[8] = (b[8] & 63) | 128;
    var h = Array.prototype.map.call(b, function (x) { return (x + 256).toString(16).slice(1); }).join('');
    return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
  }

  /** Создать элемент. Текст пользователя вставляется только через textContent. */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === undefined || v === null || v === false) return;
      if (k === 'text') node.textContent = v;
      else if (k === 'className') node.className = v;
      else if (k === 'onclick') node.addEventListener('click', v);
      else node.setAttribute(k, v === true ? '' : v);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return node;
  }

  var toastTimer = null;
  function toast(msg) {
    var box = $('toast');
    box.textContent = msg;
    box.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.hidden = true; }, 3500);
  }

  // ---------- Модальные окна ----------
  /**
   * opts: { title, body: [nodes], buttons: [{label, kind, value, onClick}] , dismissable }
   * Возвращает объект с close(). onClick может вернуть Promise; кнопка блокируется на время.
   */
  function modal(opts) {
    var root = $('modalRoot');
    var back = el('div', { className: 'modal-back' });
    var box = el('div', { className: 'modal', role: 'dialog', 'aria-modal': 'true' });
    if (opts.title) box.appendChild(el('h2', { text: opts.title }));
    (opts.body || []).forEach(function (n) { if (n) box.appendChild(n); });
    var btns = el('div', { className: 'btns' });
    var handle = {
      close: function () { if (back.parentNode) back.parentNode.removeChild(back); },
      box: box
    };
    (opts.buttons || []).forEach(function (b) {
      var btn = el('button', { className: 'btn ' + (b.kind || ''), type: 'button', text: b.label });
      btn.addEventListener('click', function () {
        if (btn.disabled) return;
        if (!b.onClick) return handle.close();
        var all = btns.querySelectorAll('button');
        Array.prototype.forEach.call(all, function (x) { x.disabled = true; });
        Promise.resolve().then(function () { return b.onClick(handle); }).catch(function () { /* показано внутри */ })
          .then(function () { Array.prototype.forEach.call(all, function (x) { x.disabled = false; }); });
      });
      btns.appendChild(btn);
    });
    box.appendChild(btns);
    back.appendChild(box);
    if (opts.dismissable !== false) {
      back.addEventListener('click', function (e) { if (e.target === back) handle.close(); });
    }
    root.appendChild(back);
    var first = box.querySelector('input');
    if (first) setTimeout(function () { first.focus(); }, 50);
    return handle;
  }

  function confirmBox(text, okLabel, danger) {
    return new Promise(function (resolve) {
      var h = modal({
        title: text,
        buttons: [
          { label: okLabel || t('confirm'), kind: danger ? 'btn-danger' : 'btn-primary', onClick: function () { h.close(); resolve(true); } },
          { label: t('cancel'), kind: 'btn-ghost', onClick: function () { h.close(); resolve(false); } }
        ]
      });
    });
  }

  function promptBox(title, label, initial) {
    return new Promise(function (resolve) {
      var inp = el('input', { className: 'inp', type: 'text', maxlength: '200' });
      inp.value = initial || '';
      var h = modal({
        title: title,
        body: [el('label', {}, [label || '', inp])],
        buttons: [
          { label: t('ok'), kind: 'btn-primary', onClick: function () { var v = inp.value.trim(); if (!v) return; h.close(); resolve(v); } },
          { label: t('cancel'), kind: 'btn-ghost', onClick: function () { h.close(); resolve(null); } }
        ]
      });
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { var v = inp.value.trim(); if (v) { h.close(); resolve(v); } } });
    });
  }

  // ---------- Экраны ----------
  function show(name) {
    state.screen = name;
    document.querySelectorAll('main > section').forEach(function (s) { s.hidden = s.id !== 'screen-' + name; });
    var inApp = name === 'app';
    document.body.classList.toggle('in-app', inApp);
    $('tabbar').hidden = !inApp;
    clearInterval(pollTimer);
    pollTimer = null;
    if (name === 'pending') pollTimer = setInterval(function () { refreshMe(true); }, 30000);
    if (inApp) pollTimer = setInterval(function () { refreshMe(true); }, 60000);
    renderCart();
  }

  /**
   * Автообновление «Чеков» и раздела владельца раз в 30 секунд, пока экран открыт
   * и виден: новые чеки с других телефонов появляются сами. Не трогаем экран,
   * если открыто окно (ввод суммы и т.п.) или приложение свёрнуто.
   */
  var autoRefreshTimer = null;
  var AUTO_REFRESH_MS = 30000;
  function startAutoRefresh(name) {
    clearInterval(autoRefreshTimer);
    autoRefreshTimer = null;
    if (name !== 'receipts' && name !== 'owner') return;
    autoRefreshTimer = setInterval(function () {
      if (document.hidden || document.querySelector('.modal-back') || state.view !== name) return;
      if (name === 'receipts') loadSales().catch(function () {});
      else if (owner.tab === 'dash' || owner.tab === 'exp') loadOwner();
    }, AUTO_REFRESH_MS);
  }

  function setView(name) {
    state.view = name;
    startAutoRefresh(name);
    document.querySelectorAll('#screen-app .view').forEach(function (v) { v.hidden = v.id !== 'view-' + name; });
    var tabName = ['users', 'products', 'help', 'cashday'].indexOf(name) >= 0 ? 'more' : name;
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-view') === tabName); });
    if (name === 'receipts') loadSales().catch(function () {});
    if (name === 'help') renderHelp();
    if (name === 'owner') loadOwner();
    if (name === 'more') loadShift().catch(function () {});
    if (name === 'cashday') loadCashDay();
    if (name === 'sell') renderSell();
    renderCart();
    window.scrollTo(0, 0);
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    $('langBtn').textContent = state.lang === 'vi' ? 'RU' : 'VI';
    renderConn();
    if (state.user) renderUserBits();
    if (state.screen === 'login') renderGsiButton();
    if (state.screen === 'app') {
      renderSell();
      renderCart();
      if (state.view === 'help') renderHelp();
      if (state.view === 'owner') { renderPeriodBar(); if (owner.tab === 'dash' && owner.dash) renderDash(); if (owner.tab === 'exp' && owner.exp) renderExpenses(); if (owner.tab === 'bak' && owner.bak) renderBackups(); if (owner.tab === 'stock' && owner.stock) renderStock(); }
      if (state.view === 'receipts' && state.salesData) renderSales();
      if (state.view === 'users' && state.usersData) renderUsers();
      if (state.view === 'products' && state.adminProducts) renderAdminProducts();
    }
  }

  function renderConn() {
    var c = $('conn');
    c.textContent = state.online ? t('online') : t('offline');
    c.classList.toggle('offline', !state.online);
  }
  function setOnline(v) { if (state.online !== v) { state.online = v; renderConn(); } }

  function renderUserBits() {
    var u = state.user;
    $('homeHello').textContent = t('hello') + ', ' + (u.name || u.email);
    $('homeRole').textContent = roleLabel(u.role);
    $('whoTop').textContent = u.status === 'active' ? (u.name || '') : '';
    $('usersBtn').hidden = !isAdmin();
    $('productsBtn').hidden = !isAdmin();
    $('ownerTab').hidden = !isAdmin();
    $('pendingWho').textContent = u.email;
  }

  function route() {
    var u = state.user;
    if (!u) return showLogin();
    renderUserBits();
    if (u.status === 'pending') return show('pending');
    if (u.status === 'active') {
      if (state.screen !== 'app') {
        show('app');
        setView(state.view || 'sell');
        loadProducts().catch(function () {});
        loadShift().catch(function () {});
      }
      return;
    }
    show('blocked');
  }

  // ---------- API ----------
  function api(action, payload, requestId) {
    var body = { action: action, payload: payload || {} };
    if (state.session) body.session = state.session;
    if (requestId) body.request_id = requestId;
    return fetch(CFG.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
      redirect: 'follow',
      cache: 'no-store'
    }).then(function (r) { return r.json(); }, function () { return null; })
      .then(function (res) {
        if (!res) { setOnline(false); throw makeErr('NETWORK'); }
        setOnline(true);
        if (!res.ok) {
          var err = makeErr(res.error || 'INTERNAL');
          handleAuthError(err.code);
          throw err;
        }
        return res;
      }, function (e) {
        if (e && e.code) throw e;
        setOnline(false);
        throw makeErr('NETWORK');
      });
  }
  function makeErr(code) { var e = new Error(code); e.code = code; return e; }

  /**
   * Изменяющий запрос. request_id хранится до ответа сервера: повторное
   * нажатие после обрыва связи отправляет тот же id — дубля не будет.
   */
  function mutate(action, payload, key) {
    key = key || action + '|' + JSON.stringify(payload || {});
    if (!pendingRequestIds[key]) pendingRequestIds[key] = uuid();
    return api(action, payload, pendingRequestIds[key]).then(function (res) {
      delete pendingRequestIds[key];
      return res;
    }, function (e) {
      if (e.code !== 'NETWORK') delete pendingRequestIds[key];
      throw e;
    });
  }

  function handleAuthError(code) {
    if (code === 'SESSION_INVALID') { clearSession(); showLogin(); toast(errText(code)); }
    else if (code === 'BLOCKED') { clearSession(); show('blocked'); }
    else if (code === 'PENDING') { if (state.user) state.user.status = 'pending'; show('pending'); }
  }
  function isAuthErr(e) { return ['SESSION_INVALID', 'BLOCKED', 'PENDING'].indexOf(e && e.code) >= 0; }

  function clearSession() {
    state.session = null;
    state.user = null;
    state.usersData = null;
    state.salesData = null;
    state.adminProducts = null;
    lsDel(LS.session);
  }

  /** Действие кнопки с защитой от двойного нажатия. */
  function busy(button, fn) {
    if (button.disabled) return;
    button.disabled = true;
    Promise.resolve().then(fn).catch(function (e) {
      if (!isAuthErr(e)) toast(errText(e && e.code));
    }).then(function () { button.disabled = false; });
  }

  function refreshMe(silent) {
    if (!state.session) return Promise.resolve();
    return api('me').then(function (res) { setUser(res.user); route(); }, function (e) {
      if (!silent && e.code === 'NETWORK') {
        show('loading');
        $('retryBootBtn').hidden = false;
        toast(errText('NETWORK'));
      }
    });
  }

  function setUser(u) {
    state.user = u;
    if (u.language && u.language !== state.lang && (u.language === 'vi' || u.language === 'ru')) {
      state.lang = u.language;
      lsSet(LS.lang, state.lang);
      applyI18n();
    }
  }

  // ---------- Вход через Google ----------
  function isInAppBrowser() {
    return /FBAN|FBAV|FB_IAB|FBIOS|Instagram|Messenger|Zalo|Line\/|MicroMessenger|TikTok|musical_ly|Telegram|; wv\)/i.test(navigator.userAgent || '');
  }
  function isAndroid() { return /Android/i.test(navigator.userAgent || ''); }

  function renderInAppNote() {
    var inApp = isInAppBrowser();
    $('inAppNote').hidden = !inApp;
    if (inApp && isAndroid()) {
      $('openBrowserBtn').href = 'intent://' + location.href.replace(/^https?:\/\//, '') + '#Intent;scheme=https;package=com.android.chrome;end';
      $('openBrowserBtn').hidden = false;
    }
  }

  function showLogin() {
    show('login');
    renderInAppNote();
    renderGsiButton();
  }

  var gsiTimer = null;
  var gsiRenderSeq = 0;
  function renderGsiButton() {
    clearTimeout(gsiTimer);
    if (!(window.google && google.accounts && google.accounts.id)) {
      gsiTimer = setTimeout(renderGsiButton, 300);
      return;
    }
    if (!gsiReady) {
      google.accounts.id.initialize({
        client_id: CFG.GOOGLE_CLIENT_ID, callback: onGoogleCredential,
        auto_select: false, cancel_on_tap_outside: true, ux_mode: 'popup'
      });
      gsiReady = true;
    }
    var box = $('gsiButton');
    var seq = ++gsiRenderSeq;
    var holder = document.createElement('div');
    box.textContent = '';
    box.appendChild(holder);
    google.accounts.id.renderButton(holder, { theme: 'outline', size: 'large', text: 'signin_with', shape: 'pill', locale: state.lang, width: 300 });
    if (seq !== gsiRenderSeq && holder.parentNode) holder.parentNode.removeChild(holder);
  }

  function onGoogleCredential(resp) {
    $('loginError').hidden = true;
    show('loading');
    api('auth.login', { idToken: resp.credential, language: state.lang, userAgent: navigator.userAgent.slice(0, 200) })
      .then(function (res) {
        state.session = res.session;
        lsSet(LS.session, res.session);
        setUser(res.user);
        route();
      }, function (e) {
        if (e.code === 'BLOCKED') return;
        showLogin();
        $('loginError').textContent = errText(e.code);
        $('loginError').hidden = false;
      });
  }

  function logout() {
    var p = state.session ? api('auth.logout').catch(function () {}) : Promise.resolve();
    return p.then(function () {
      clearSession();
      if (window.google && google.accounts && google.accounts.id) google.accounts.id.disableAutoSelect();
      showLogin();
    });
  }

  // ---------- Каталог и экран продажи ----------
  function loadProducts() {
    return api('products.list').then(function (res) {
      state.products = res.products.filter(function (p) { return p.price > 0; });
      if (!isAdmin()) lsSet(LS.products, JSON.stringify(state.products));
      else lsSet(LS.products, JSON.stringify(state.products.filter(function (p) { return p.active && p.confirmed; })));
      if (isAdmin()) state.products = state.products.filter(function (p) { return p.active && p.confirmed; });
      repriceCart();
      renderSell();
      renderCart();
    });
  }

  function productById(id) {
    for (var i = 0; i < state.products.length; i++) if (state.products[i].productId === id) return state.products[i];
    return null;
  }

  function categories() {
    var seen = {};
    var out = [];
    state.products.forEach(function (p) { if (!seen[p.category]) { seen[p.category] = true; out.push(p.category); } });
    return out;
  }

  function renderSell() {
    if (state.screen !== 'app') return;
    // Без открытой смены продавать нельзя — вместо меню кнопка «Начать смену».
    var gated = !hasShift();
    $('shiftGate').hidden = !gated;
    $('catBar').hidden = gated;
    $('productGrid').hidden = gated;
    if (gated) { $('noProducts').hidden = true; renderShiftGate(); return; }
    var cats = categories();
    if (state.category && cats.indexOf(state.category) < 0) state.category = '';
    var bar = $('catBar');
    bar.textContent = '';
    [''].concat(cats).forEach(function (c) {
      bar.appendChild(el('button', {
        className: 'cat' + (c === state.category ? ' active' : ''), type: 'button', text: c || t('all'),
        onclick: function () { state.category = c; renderSell(); }
      }));
    });
    var grid = $('productGrid');
    grid.textContent = '';
    // Самое ходовое за 30 дней — первым (при равенстве — порядок меню).
    var list = state.products.filter(function (p) { return !state.category || p.category === state.category; })
      .map(function (p, i) { return { p: p, i: i }; })
      .sort(function (a, b) { return ((b.p.sold30 || 0) - (a.p.sold30 || 0)) || (a.i - b.i); })
      .map(function (x) { return x.p; });
    $('noProducts').hidden = list.length > 0;
    var inCart = {};
    state.cart.forEach(function (l) { inCart[l.productId] = (inCart[l.productId] || 0) + l.qty; });
    list.forEach(function (p) {
      var tile = el('button', { className: 'tile', type: 'button' }, [
        el('span', { className: 'ico', text: productIcon(p), 'aria-hidden': 'true' }),
        el('span', { className: 'nm', text: productName(p) }),
        el('span', { className: 'price', text: money(p.price) })
      ]);
      if (inCart[p.productId]) tile.appendChild(el('span', { className: 'qty-badge', text: String(inCart[p.productId]) }));
      tile.addEventListener('click', function () { onProductTap(p); });
      grid.appendChild(tile);
    });
  }

  /**
   * Значок товара по названию, затем по категории. Это не фото конкретного
   * бренда, а общий символ — так быстрее узнать позицию глазами.
   */
  var ICONS = [
    [/cacao/i, '🍫'], [/matcha/i, '🍵'], [/sâm dứa/i, '🧋'], [/ổi/i, '🍐'], [/chanh dây/i, '🍹'],
    [/chanh/i, '🍋'], [/cà chua/i, '🍅'], [/cà rốt/i, '🥕'], [/(^|\s)cam(\s|$)/i, '🍊'], [/gừng|lipton|trà/i, '🫖'],
    [/yaourt dâu/i, '🍓'], [/yaourt/i, '🥛'], [/nha đam/i, '🌿'], [/bò húc|sting|number one/i, '⚡'],
    [/yến/i, '🥫'], [/bí đao/i, '🍈'], [/bạc xỉu|sữa tươi/i, '🥛'], [/cà phê|phin/i, '☕']
  ];
  var CATEGORY_ICONS = [[/thuốc/i, '🚬'], [/giải khát/i, '🥤'], [/nước ép/i, '🧃'], [/cà phê|phin/i, '☕']];
  function productIcon(p) {
    var name = p.nameVi || '';
    for (var i = 0; i < ICONS.length; i++) if (ICONS[i][0].test(name)) return ICONS[i][1];
    if (/thuốc/i.test(p.category)) return '🚬';
    for (var j = 0; j < CATEGORY_ICONS.length; j++) if (CATEGORY_ICONS[j][0].test(p.category || '')) return CATEGORY_ICONS[j][1];
    return '🍽️';
  }

  function onProductTap(p) {
    if (state.pendingSale) return;
    if (p.variants && p.variants.length) {
      var chips = el('div', { className: 'chips' });
      var h = modal({ title: productName(p) + ' — ' + t('chooseVariant'), body: [chips], buttons: [{ label: t('cancel'), kind: 'btn-ghost' }] });
      p.variants.forEach(function (v) {
        chips.appendChild(el('button', { className: 'btn btn-primary', type: 'button', text: v, onclick: function () { h.close(); addToCart(p, v); } }));
      });
      return;
    }
    addToCart(p, '');
  }

  function saveCart() { lsSet(LS.cart, JSON.stringify(state.cart)); }

  function addToCart(p, variant) {
    var line = state.cart.find(function (l) { return l.productId === p.productId && l.variant === variant; });
    if (line) line.qty = Math.min(99, line.qty + 1);
    else state.cart.push({ productId: p.productId, variant: variant, qty: 1, name: p.nameVi, nameRu: p.nameRu, price: p.price });
    saveCart();
    renderSell();
    renderCart();
  }

  /** Обновить цены в корзине по свежему каталогу; снятые товары убрать. */
  function repriceCart() {
    var before = JSON.stringify(state.cart);
    state.cart = state.cart.filter(function (l) { return !!productById(l.productId); }).map(function (l) {
      var p = productById(l.productId);
      return { productId: l.productId, variant: l.variant, qty: l.qty, name: p.nameVi, nameRu: p.nameRu, price: p.price };
    });
    if (JSON.stringify(state.cart) !== before) saveCart();
  }

  function cartTotal() { return state.cart.reduce(function (s, l) { return s + l.price * l.qty; }, 0); }
  function cartCount() { return state.cart.reduce(function (s, l) { return s + l.qty; }, 0); }
  function cartItemsPayload() { return state.cart.map(function (l) { return { productId: l.productId, qty: l.qty, variant: l.variant }; }); }

  function renderCart() {
    var panel = $('cartPanel');
    var visible = state.screen === 'app' && state.view === 'sell' && state.cart.length > 0 && hasShift();
    panel.hidden = !visible;
    if (!visible) return;
    $('cartCount').textContent = cartCount() + ' ' + t('items') + (state.cartOpen ? ' ▾' : ' ▴');
    $('cartTotal').textContent = money(cartTotal());
    var lines = $('cartLines');
    lines.hidden = !state.cartOpen;
    lines.textContent = '';
    if (state.cartOpen) {
      state.cart.forEach(function (l, idx) {
        var nm = el('div', { className: 'nm' }, [
          (state.lang === 'ru' && l.nameRu ? l.nameRu : l.name) + (l.variant ? ' (' + l.variant + ')' : ''),
          el('small', { text: money(l.price) + ' × ' + l.qty + ' = ' + money(l.price * l.qty) })
        ]);
        lines.appendChild(el('div', { className: 'cart-line' }, [
          nm,
          el('button', { className: 'qbtn', type: 'button', text: '−', 'aria-label': '-', onclick: function () { changeQty(idx, -1); } }),
          el('span', { className: 'q', text: String(l.qty) }),
          el('button', { className: 'qbtn', type: 'button', text: '+', 'aria-label': '+', onclick: function () { changeQty(idx, 1); } })
        ]));
      });
    }
  }

  function changeQty(idx, d) {
    if (state.pendingSale) return;
    var l = state.cart[idx];
    if (!l) return;
    l.qty += d;
    if (l.qty <= 0) state.cart.splice(idx, 1);
    if (l.qty > 99) l.qty = 99;
    saveCart();
    renderSell();
    renderCart();
  }

  function clearCart() {
    state.cart = [];
    state.cartOpen = false;
    saveCart();
    renderSell();
    renderCart();
  }

  /** После ошибки цены/наличия — обновить каталог и показать новую сумму. */
  function handleCatalogError(e) {
    if (e && (e.code === 'PRICE_CHANGED' || e.code === 'PRODUCT_UNAVAILABLE')) {
      return loadProducts().catch(function () {}).then(function () { toast(errText(e.code)); throw e; });
    }
    throw e;
  }

  // ---------- Оплата ----------
  function payFlow(method) {
    if (!state.cart.length || state.pendingSale) return;
    var total = cartTotal();
    var payload = { items: cartItemsPayload(), paymentMethod: method, clientTotal: total };
    var key = 'sale|' + JSON.stringify(payload);
    var h = modal({
      title: t('confirmPay'),
      body: [
        el('div', { className: 'big-amount', text: money(total) }),
        el('p', { className: 'muted', text: (method === 'cash' ? '💵 ' : '📱 ') + t(method) + ' · ' + cartCount() + ' ' + t('items') })
      ],
      buttons: [
        { label: t('confirm'), kind: 'btn-primary', onClick: function () { return submitSale(h, payload, key); } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  function submitSale(h, payload, key) {
    state.pendingSale = true;
    return mutate('sales.create', payload, key).then(function (res) {
      state.pendingSale = false;
      h.close();
      clearCart();
      saleDone(res.sale);
    }, function (e) {
      if (e.code === 'NETWORK') {
        // Результат неизвестен: корзина заблокирована, повтор — тем же request_id.
        h.close();
        unknownResult(function () { return submitSale(unknownResult.handle, payload, key); });
        throw e;
      }
      state.pendingSale = false;
      h.close();
      if (e.code === 'NO_SHIFT' || e.code === 'DAY_CLOSED') { toast(errText(e.code)); return loadShift().catch(function () {}); }
      if (!isAuthErr(e)) return handleCatalogError(e).catch(function (err) { if (err.code !== 'PRICE_CHANGED' && err.code !== 'PRODUCT_UNAVAILABLE') toast(errText(err.code)); });
    });
  }

  function unknownResult(retry) {
    unknownResult.handle = modal({
      title: '⚠️ ' + t('unknownTitle'),
      body: [el('p', { text: t('unknownText') })],
      dismissable: false,
      buttons: [{ label: t('checkResult'), kind: 'btn-primary', onClick: function () { return retry(); } }]
    });
  }

  function saleDone(sale) {
    var h = modal({
      title: '✅ ' + t('saleSaved'),
      body: [
        el('div', { className: 'big-amount', text: money(sale.total) }),
        el('p', { className: 'muted', text: t('receiptNo') + sale.no + ' · ' + t(sale.paymentMethod) + (sale.tableLabel ? ' · ' + sale.tableLabel : '') })
      ],
      buttons: [{ label: t('ok'), kind: 'btn-primary' }]
    });
    setTimeout(function () { h.close(); }, 4000);
    if (state.salesData) state.salesData = null;
  }

  // ---------- Инструкция ----------
  var HELP = {
    vi: [
      ['1. Mở ứng dụng', 'Mở trang bằng Chrome (Android) hoặc Safari (iPhone), KHÔNG mở trong Zalo/Messenger. Lần đầu: thêm vào màn hình chính (Chrome: ⋮ → "Thêm vào màn hình chính"; iPhone: Chia sẻ → "Thêm vào MH chính").'],
      ['2. Đăng nhập', 'Bấm "Đăng nhập bằng Google" và chọn tài khoản của bạn. Lần đầu tiên phải chờ chủ quán duyệt. Sau đó không cần duyệt lại.'],
      ['3. Bán hàng', 'Tab 🛒 Bán hàng → chọn nhóm → bấm vào món (bấm 2 lần = 2 ly). Bấm vào giỏ hàng ở dưới để sửa số lượng (− / +).'],
      ['4. Thanh toán', 'Khách trả tiền mặt → bấm 💵 Tiền mặt. Khách chuyển khoản → bấm 📱 QR, nhưng CHỈ sau khi đã thấy tiền vào tài khoản. Kiểm tra số tiền → Xác nhận.'],
      ['5. Đã lưu chưa?', 'Hóa đơn chỉ được lưu khi thấy "✅ Đã lưu hóa đơn #…". Nếu hiện "Chưa rõ kết quả" (mất mạng) — KHÔNG bán lại, bấm "Kiểm tra lại". Hóa đơn sẽ không bị lưu hai lần.'],
      ['6. Xem hóa đơn', 'Tab 🧾 Hóa đơn: tổng tiền hôm nay, tiền mặt và QR riêng, danh sách hóa đơn.'],
      ['7. Ghi sai hóa đơn', 'Trong 15 phút: tab 🧾 Hóa đơn → "Hủy hóa đơn" → ghi lý do. Quá 15 phút hoặc hóa đơn của người khác: báo chủ quán. Nếu đã trả tiền lại cho khách — chủ quán làm "Hoàn tiền".'],
      ['8. Bắt đầu và kết thúc ca', 'Đầu giờ: 🛒 Bán hàng → "▶ Bắt đầu ca". Người đầu tiên trong ngày đếm tiền trong két và nhập số tiền. Hết giờ: Thêm → "⏹ Kết thúc ca". Cuối ngày người phụ trách (mẹ / chủ quán): Thêm → "💰 Két tiền & đóng ngày" → đếm tiền → "Đóng sổ ngày".'],
      ['9. Lấy tiền từ két', 'Lấy tiền trong két để mua đồ cho quán (sữa, đá…) hoặc việc khác: Thêm → "💸 Lấy tiền từ két" → số tiền, mua gì, ghi chú. Bắt buộc ghi lại — nếu không cuối ngày tiền trong két sẽ không khớp.'],
      ['10. Mất điện thoại', 'Báo ngay cho chủ quán — chủ quán sẽ đăng xuất tài khoản của bạn trên mọi thiết bị.'],
      ['11. Cập nhật ứng dụng', 'Ứng dụng tự cập nhật khi mở. Nếu thấy dòng xanh "Có phiên bản mới" — bấm vào đó. Hoặc: Thêm → "🔄 Cập nhật ứng dụng".']
    ],
    ru: [
      ['1. Открыть приложение', 'Открывайте сайт в Chrome (Android) или Safari (iPhone), НЕ внутри Zalo/Messenger. В первый раз добавьте ярлык на главный экран (Chrome: ⋮ → «Добавить на главный экран»; iPhone: «Поделиться» → «На экран „Домой“»).'],
      ['2. Вход', 'Нажмите «Войти через Google» и выберите свой аккаунт. В первый раз нужно дождаться одобрения владельца, дальше повторно одобрять не нужно.'],
      ['3. Продажа', 'Вкладка 🛒 Касса → категория → нажмите на товар (два нажатия = две порции). Нажмите на корзину внизу, чтобы изменить количество (− / +).'],
      ['4. Оплата', 'Наличные → 💵 Наличные. Перевод → 📱 QR, но ТОЛЬКО после того, как деньги пришли на счёт (приложение банк не проверяет). Проверьте сумму → Подтвердить.'],
      ['5. Сохранилось ли?', 'Чек сохранён, только когда видно «✅ Чек сохранён №…». Если «Результат не известен» (пропала связь) — НЕ пробивайте заново, нажмите «Проверить». Дубля не будет.'],
      ['6. Чеки', 'Вкладка 🧾 Чеки: итог за сегодня, отдельно наличные и QR, список чеков.'],
      ['7. Ошибочный чек', 'В течение 15 минут: вкладка 🧾 Чеки → «Отменить чек» → причина. Позже или чужой чек — через владельца. Если деньги гостю уже вернули — владелец оформляет «Возврат».'],
      ['8. Начало и конец смены', 'В начале: 🛒 Касса → «▶ Начать смену». Первый за день пересчитывает деньги в кассе и вводит сумму. В конце: Ещё → «⏹ Закончить смену». Вечером ответственный (мама / владелец): Ещё → «💰 Касса дня и закрытие» → пересчитать деньги → «Закрыть день».'],
      ['9. Взято из кассы', 'Если взяли деньги из ящика — на покупку для кофейни (молоко, лёд…) или по другой причине: Ещё → «💸 Взято из кассы» → сумма, что купили, комментарий. Обязательно — иначе вечером касса не сойдётся.'],
      ['10. Потерян телефон', 'Сразу сообщите владельцу — он завершит ваш вход на всех устройствах.'],
      ['11. Обновление приложения', 'Приложение обновляется само при открытии. Если вверху синяя полоса «Есть новая версия» — нажмите её. Или: Ещё → «🔄 Обновить приложение».']
    ]
  };

  function renderHelp() {
    var body = $('helpBody');
    body.textContent = '';
    HELP[state.lang].forEach(function (s) {
      body.appendChild(el('div', { className: 'card' }, [el('div', { className: 'name', text: s[0] }), el('div', { text: s[1] })]));
    });
  }

  // ---------- Раздел владельца: дашборд и расходы ----------
  var OWN = {
    vi: {
      tabOwner: 'Chủ quán', dashboard: '📈 Báo cáo', expensesTitle: '💸 Chi phí',
      p_today: 'Hôm nay', p_yesterday: 'Hôm qua', p_7d: '7 ngày', p_month: 'Tháng này', p_prevMonth: 'Tháng trước', p_custom: 'Chọn ngày…',
      from: 'Từ ngày', to: 'Đến ngày', updated: 'Cập nhật',
      revenue: 'Doanh thu', checks: 'Số hóa đơn', avgCheck: 'Trung bình / hóa đơn', noData: 'chưa có dữ liệu',
      purchases: 'Nhập hàng', opex: 'Chi phí', cashResult: 'Tiền còn lại (thu − nhập − chi)', notProfit: 'chưa phải lợi nhuận: chưa có giá vốn',
      byDay: 'Doanh thu theo ngày', byHour: 'Doanh thu theo giờ', topProducts: 'Món bán chạy', byCategory: 'Theo nhóm món',
      spendByCat: 'Chi tiêu theo loại', byCashier: 'Theo nhân viên', tapHint: 'Chạm vào cột để xem số liệu',
      payback: 'Hoàn vốn', lifeRevenue: 'Tổng doanh thu', lifeSpend: 'Tổng nhập hàng + chi phí', lifeResult: 'Tiền còn lại', investments: 'Vốn đầu tư',
      withdrawals: 'Chủ quán rút', paybackNone: 'Chưa đủ dữ liệu: hãy nhập vốn đầu tư (loại "Đầu tư").',
      profitNote: 'Lợi nhuận và ROI chính xác sẽ có khi nhập giá vốn (công thức món). Hiện tại chỉ tính dòng tiền.',
      noExpensesYet: 'Chưa nhập chi phí nào — kết quả chỉ là doanh thu.',
      addExpense: '+ Nhập chi phí', kind: 'Loại', amount: 'Số tiền (VND)', date: 'Ngày', paidFrom: 'Trả từ', supplier: 'Nhà cung cấp / người nhận',
      noteReq: 'Ghi chú (bắt buộc với "Khác")', noExpenses: 'Không có khoản chi nào trong thời gian này.', voidQ: 'Hủy khoản này?',
      voidReason: 'Lý do hủy', voided: 'Đã hủy', total: 'Tổng',
      k_purchase: 'Nhập hàng', k_expense: 'Chi phí', k_investment: 'Đầu tư', k_withdrawal: 'Chủ rút tiền',
      c_coffee: 'Cà phê', c_milk: 'Sữa', c_sugar_syrup: 'Đường, siro', c_fruit: 'Trái cây', c_drinks: 'Nước đóng chai/lon', c_cigarettes: 'Thuốc lá',
      c_ice: 'Đá', c_cups: 'Ly, ống hút, túi', c_other: 'Khác', c_rent: 'Thuê mặt bằng', c_electricity: 'Điện', c_water: 'Nước', c_internet: 'Internet',
      c_salary: 'Lương', c_repair: 'Sửa chữa', c_cleaning: 'Vệ sinh', c_equipment: 'Thiết bị', c_renovation: 'Sửa sang quán', c_furniture: 'Bàn ghế',
      c_deposit: 'Tiền cọc', c_owner: 'Chủ quán rút',
      pf_cash_register: 'Tiền quầy', pf_bank: 'Ngân hàng', pf_owner_personal: 'Tiền riêng', payerQ: 'Tiền của ai?', payerOther: 'Người khác…', fundingTitle: 'Tiền từ đâu', fundingAll: 'Từ đầu kinh doanh', fundingPeriod: 'Trong thời gian này', src_personal: 'Tiền riêng'
    },
    ru: {
      tabOwner: 'Владелец', dashboard: '📈 Дашборд', expensesTitle: '💸 Расходы',
      p_today: 'Сегодня', p_yesterday: 'Вчера', p_7d: '7 дней', p_month: 'Этот месяц', p_prevMonth: 'Прошлый месяц', p_custom: 'Период…',
      from: 'С', to: 'По', updated: 'Обновлено',
      revenue: 'Выручка', checks: 'Чеков', avgCheck: 'Средний чек', noData: 'нет данных',
      purchases: 'Закупки', opex: 'Расходы', cashResult: 'Денежный результат (выручка − закупки − расходы)', notProfit: 'это ещё не прибыль: нет себестоимости',
      byDay: 'Выручка по дням', byHour: 'Выручка по часам', topProducts: 'Популярные товары', byCategory: 'По категориям',
      spendByCat: 'Траты по статьям', byCashier: 'По сотрудникам', tapHint: 'Нажмите на столбец, чтобы увидеть цифры',
      payback: 'Окупаемость', lifeRevenue: 'Выручка за всё время', lifeSpend: 'Закупки + расходы за всё время', lifeResult: 'Денежный результат', investments: 'Вложения',
      withdrawals: 'Изъято владельцем', paybackNone: 'Недостаточно данных: внесите вложения (вид «Вложение»).',
      profitNote: 'Точная прибыль и ROI появятся после ввода себестоимости (рецептур). Сейчас считается движение денег.',
      noExpensesYet: 'Расходы ещё не вносились — результат равен выручке.',
      addExpense: '+ Внести расход', kind: 'Вид', amount: 'Сумма (VND)', date: 'Дата', paidFrom: 'Откуда деньги', supplier: 'Поставщик / получатель',
      noteReq: 'Примечание (обязательно для «Другое»)', noExpenses: 'За этот период записей нет.', voidQ: 'Отменить эту запись?',
      voidReason: 'Причина отмены', voided: 'Отменено', total: 'Итого',
      k_purchase: 'Закупка', k_expense: 'Расход', k_investment: 'Вложение', k_withdrawal: 'Изъятие владельцем',
      c_coffee: 'Кофе', c_milk: 'Молоко', c_sugar_syrup: 'Сахар, сиропы', c_fruit: 'Фрукты', c_drinks: 'Напитки в банках/бутылках', c_cigarettes: 'Сигареты',
      c_ice: 'Лёд', c_cups: 'Стаканы, трубочки, пакеты', c_other: 'Другое', c_rent: 'Аренда', c_electricity: 'Электричество', c_water: 'Вода', c_internet: 'Интернет',
      c_salary: 'Зарплата', c_repair: 'Ремонт', c_cleaning: 'Уборка', c_equipment: 'Оборудование', c_renovation: 'Ремонт помещения', c_furniture: 'Мебель',
      c_deposit: 'Депозит', c_owner: 'Изъятие владельцем',
      pf_cash_register: 'Из кассы', pf_bank: 'Банк', pf_owner_personal: 'Личные деньги', payerQ: 'Чьи деньги?', payerOther: 'Другой человек…', fundingTitle: 'Откуда деньги', fundingAll: 'С начала бизнеса', fundingPeriod: 'За выбранный период', src_personal: 'Личные'
    }
  };
  Object.keys(OWN).forEach(function (l) { Object.keys(OWN[l]).forEach(function (k) { I18N[l][k] = OWN[l][k]; }); });

  var KINDS = {
    purchase: ['coffee', 'milk', 'sugar_syrup', 'fruit', 'drinks', 'cigarettes', 'ice', 'cups', 'other'],
    expense: ['rent', 'electricity', 'water', 'internet', 'salary', 'repair', 'cleaning', 'other'],
    investment: ['equipment', 'renovation', 'furniture', 'deposit', 'other'],
    withdrawal: ['owner']
  };
  var PERIODS = ['today', 'yesterday', '7d', 'month', 'prevMonth', 'custom'];
  var owner = { tab: 'dash', period: 'month', from: null, to: null, dash: null, exp: null };

  function todayVN() { return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date()); }
  function shiftDay(s, n) { var d = new Date(s + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function shortDate(s) { return s.slice(8, 10) + '.' + s.slice(5, 7); }

  function periodRange() {
    var td = todayVN();
    switch (owner.period) {
      case 'today': return { from: td, to: td };
      case 'yesterday': var y = shiftDay(td, -1); return { from: y, to: y };
      case '7d': return { from: shiftDay(td, -6), to: td };
      case 'month': return { from: td.slice(0, 8) + '01', to: td };
      case 'prevMonth':
        var first = td.slice(0, 8) + '01';
        var lastPrev = shiftDay(first, -1);
        return { from: lastPrev.slice(0, 8) + '01', to: lastPrev };
      default: return { from: owner.from || td, to: owner.to || td };
    }
  }

  function renderPeriodBar() {
    var bar = $('periodBar');
    bar.textContent = '';
    PERIODS.forEach(function (p) {
      bar.appendChild(el('button', {
        className: 'cat' + (p === owner.period ? ' active' : ''), type: 'button', text: t('p_' + p),
        onclick: function () { if (p === 'custom') return pickCustom(); owner.period = p; loadOwner(); }
      }));
    });
    var r = periodRange();
    $('periodLine').textContent = (r.from === r.to ? r.from : r.from + ' → ' + r.to) +
      (owner.tab === 'dash' && owner.dash ? ' · ' + t('updated') + ' ' + timeOf(owner.dash.generatedAt) : '');
    $('segDash').classList.toggle('active', owner.tab === 'dash');
    $('segExp').classList.toggle('active', owner.tab === 'exp');
    $('segBak').classList.toggle('active', owner.tab === 'bak');
    $('dashBody').hidden = owner.tab !== 'dash';
    $('expBody').hidden = owner.tab !== 'exp';
    $('bakBody').hidden = owner.tab !== 'bak';
    $('stockBody').hidden = owner.tab !== 'stock';
    $('segStock').classList.toggle('active', owner.tab === 'stock');
    // У копий и склада нет периода.
    bar.hidden = owner.tab === 'bak' || owner.tab === 'stock';
    $('periodLine').hidden = bar.hidden;
  }

  function pickCustom() {
    var r = periodRange();
    var f = field(t('from'), r.from, 'date');
    var to = field(t('to'), r.to, 'date');
    var h = modal({
      title: t('p_custom'), body: [f.node, to.node],
      buttons: [
        { label: t('ok'), kind: 'btn-primary', onClick: function () {
          if (!f.input.value || !to.input.value || f.input.value > to.input.value) return;
          owner.period = 'custom'; owner.from = f.input.value; owner.to = to.input.value; h.close(); loadOwner();
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  function loadOwner() {
    renderPeriodBar();
    var r = periodRange();
    var req = owner.tab === 'dash'
      ? api('dashboard.get', r).then(function (d) { owner.dash = d; renderDash(); })
      : owner.tab === 'bak'
        ? api('backups.list').then(function (d) { owner.bak = d; renderBackups(); })
      : owner.tab === 'stock'
        ? api('stock.list').then(function (d) { owner.stock = d; renderStock(); })
        : api('expenses.list', r).then(function (d) { owner.exp = d; renderExpenses(); });
    return req.then(renderPeriodBar).catch(function (e) { if (!isAuthErr(e)) toast(errText(e.code)); });
  }

  function kpi(label, value, sub, hero) {
    return el('div', { className: 'kpi' + (hero ? ' hero' : '') }, [
      el('div', { className: 'k', text: label }), el('div', { className: 'v', text: value }), sub ? el('div', { className: 's', text: sub }) : null
    ]);
  }

  var SVGNS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, attrs) {
    var n = document.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  /** Прямоугольник со скруглёнными только верхними углами (r ≤ 4). */
  function topRounded(x, y, w, h, r) {
    r = Math.min(r, w / 2, h);
    return 'M' + x + ',' + (y + h) + 'V' + (y + r) + 'Q' + x + ',' + y + ' ' + (x + r) + ',' + y +
      'H' + (x + w - r) + 'Q' + (x + w) + ',' + y + ' ' + (x + w) + ',' + (y + r) + 'V' + (y + h) + 'Z';
  }
  function compact(n) {
    var ru = state.lang === 'ru';
    if (n >= 1e6) return (Math.round(n / 1e5) / 10) + (ru ? ' млн' : 'tr');
    if (n >= 1e3) return Math.round(n / 1e3) + (ru ? ' тыс' : 'k');
    return String(n);
  }

  /**
   * Столбчатая диаграмма. series: [{key, color}] — сегменты снизу вверх.
   * rows: [{label, values:{key:n}, detail}] ; нажатие на столбец показывает detail.
   */
  function barChart(title, series, rows, legend) {
    var card = el('div', { className: 'chart-card' }, [el('h3', { text: title })]);
    if (legend) {
      card.appendChild(el('div', { className: 'legend' }, legend.map(function (l) {
        return el('span', {}, [el('i', { style: 'background:' + l.color }), l.label]);
      })));
    }
    var W = 340, H = 170, padL = 4, padB = 22, padT = 18;
    var n = rows.length || 1;
    var slot = (W - padL) / n;
    var bw = Math.max(2, Math.min(28, slot - 3));
    var max = Math.max.apply(null, rows.map(function (r) { return series.reduce(function (s, se) { return s + (r.values[se.key] || 0); }, 0); }).concat([1]));
    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': title });
    svg.appendChild(svgEl('line', { x1: 0, x2: W, y1: H - padB + 0.5, y2: H - padB + 0.5, stroke: 'var(--grid)', 'stroke-width': 1 }));
    var maxLbl = svgEl('text', { x: W, y: 11, 'text-anchor': 'end', 'font-size': 11, fill: 'var(--muted)' });
    maxLbl.textContent = compact(max);
    svg.appendChild(maxLbl);
    var detail = el('div', { className: 'detail muted', text: t('tapHint') });
    var plotH = H - padB - padT;
    var selected = null;
    rows.forEach(function (r, i) {
      var x = padL + i * slot + (slot - bw) / 2;
      var y = H - padB;
      var g = svgEl('g', {});
      var drawn = series.filter(function (se) { return (r.values[se.key] || 0) > 0; });
      drawn.forEach(function (se, j) {
        var h = (r.values[se.key] / max) * plotH;
        var gap = j > 0 ? 2 : 0;
        var top = j === drawn.length - 1;
        var hh = Math.max(1, h - gap);
        y -= h;
        g.appendChild(top
          ? svgEl('path', { d: topRounded(x, y, bw, hh, 4), fill: se.color })
          : svgEl('rect', { x: x, y: y + gap, width: bw, height: hh, fill: se.color }));
      });
      // Зона нажатия больше столбца
      var hit = svgEl('rect', { x: padL + i * slot, y: 0, width: slot, height: H - padB, fill: 'transparent', style: 'cursor:pointer' });
      var pick = function () {
        // Выбранный столбец остаётся ярким, остальные приглушаются.
        Array.prototype.forEach.call(svg.querySelectorAll('g'), function (x) { x.setAttribute('opacity', x === g ? '1' : '0.45'); });
        detail.textContent = r.detail;
        detail.classList.remove('muted');
        selected = g;
      };
      hit.addEventListener('click', pick);
      hit.addEventListener('mouseenter', pick);
      g.appendChild(hit);
      svg.appendChild(g);
      if (r.showLabel) {
        var tx = svgEl('text', { x: x + bw / 2, y: H - 6, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--muted)' });
        tx.textContent = r.label;
        svg.appendChild(tx);
      }
    });
    card.appendChild(svg);
    card.appendChild(detail);
    return card;
  }

  function hbars(title, rows, color) {
    var card = el('div', { className: 'chart-card' }, [el('h3', { text: title })]);
    var max = Math.max.apply(null, rows.map(function (r) { return r.value; }).concat([1]));
    rows.forEach(function (r) {
      card.appendChild(el('div', { className: 'hbar' }, [
        el('div', { className: 'lbl' }, [el('span', { text: r.label }), el('b', { text: r.text })]),
        el('div', { className: 'track' }, [el('div', { className: 'fill', style: 'width:' + Math.max(1, r.value / max * 100) + '%;background:' + color })])
      ]));
    });
    if (!rows.length) card.appendChild(el('p', { className: 'muted', text: t('noData') }));
    return card;
  }

  // ---------- Склад ----------
  var STK = {
    vi: {
      stockTitle: '📦 Kho', stockIntro: 'Tồn kho thuốc lá và nước đóng lon/chai. Bán hàng tự trừ kho; hủy hóa đơn tự cộng lại.',
      stockAdd: '+ Mặt hàng kho', stockAutoDrinks: 'Tạo kho cho nước đóng lon/chai', stockNone: 'Chưa có mặt hàng kho.',
      stockUnknown: 'Chưa kiểm kê — bấm "Kiểm kê" để nhập số tồn ban đầu', stockLow: 'Sắp hết', stockNeg: 'Âm — kiểm tra lại',
      stockSince: 'Từ lần kiểm kê', stockRecv: 'Nhập', stockSold: 'Bán', stockWo: 'Hủy/hỏng',
      stockReceive: '+ Nhập hàng', stockWriteoff: '− Hủy hàng', stockCount: '🔢 Kiểm kê', stockEdit: 'Sửa', stockHistory: 'Lịch sử',
      stName: 'Tên mặt hàng kho', stBase: 'Đơn vị nhỏ nhất (điếu, lon…)', stPack: 'Số đơn vị trong 1 gói/thùng (để trống nếu không có)',
      stPackUnit: 'Tên gói (gói, thùng…)', stLow: 'Báo sắp hết khi còn ≤', stLinks: 'Món bán trừ vào kho này (số đơn vị cho 1 lần bán)',
      stQty: 'Số lượng', stPacks: 'Số gói', stSingles: 'Số lẻ', stAmount: 'Số tiền mua (để trống nếu chưa trả)',
      stCountHint: 'Đếm thực tế trong kho và nhập. Số này sẽ là tồn kho hiện tại.', stReason: 'Lý do',
      stHistoryTitle: 'Lịch sử', mv_count: 'Kiểm kê', mv_receipt: 'Nhập', mv_writeoff: 'Hủy', stVoid: 'Hủy dòng này', stSalesDays: 'Bán 14 ngày qua',
      lowStockBanner: 'Hàng sắp hết:'
    },
    ru: {
      stockTitle: '📦 Склад', stockIntro: 'Остатки сигарет и напитков в банках/бутылках. Продажи сами уменьшают остаток, отмена чека — возвращает.',
      stockAdd: '+ Складская позиция', stockAutoDrinks: 'Создать позиции для напитков в банках', stockNone: 'Складских позиций пока нет.',
      stockUnknown: 'Остаток неизвестен — сделайте «Пересчёт» и введите начальное количество', stockLow: 'Заканчивается', stockNeg: 'Ниже нуля — проверьте',
      stockSince: 'С последнего пересчёта', stockRecv: 'Приход', stockSold: 'Продано', stockWo: 'Списано',
      stockReceive: '+ Приход', stockWriteoff: '− Списание', stockCount: '🔢 Пересчёт', stockEdit: 'Изменить', stockHistory: 'История',
      stName: 'Название позиции', stBase: 'Базовая единица (штука, банка…)', stPack: 'Сколько штук в пачке/упаковке (пусто — если упаковки нет)',
      stPackUnit: 'Название упаковки (пачка, блок…)', stLow: 'Предупреждать, когда осталось ≤', stLinks: 'Какие товары списывают эту позицию (сколько единиц за 1 продажу)',
      stQty: 'Количество', stPacks: 'Пачек', stSingles: 'Штук отдельно', stAmount: 'Сумма закупки (пусто — если не оплачивали)',
      stCountHint: 'Пересчитайте фактическое количество и введите. Оно станет текущим остатком.', stReason: 'Причина',
      stHistoryTitle: 'История', mv_count: 'Пересчёт', mv_receipt: 'Приход', mv_writeoff: 'Списание', stVoid: 'Отменить запись', stSalesDays: 'Продано за 14 дней',
      lowStockBanner: 'Заканчивается:'
    }
  };
  Object.keys(STK).forEach(function (l) { Object.keys(STK[l]).forEach(function (k) { I18N[l][k] = STK[l][k]; }); });

  /** 65 штук при пачке 20 → «3 gói + 5 điếu (65)». */
  function fmtStock(n, it) {
    if (n === null || n === undefined) return '?';
    if (it.packSize && Math.abs(n) >= it.packSize) {
      var packs = Math.trunc(n / it.packSize), rest = n - packs * it.packSize;
      return packs + ' ' + (it.packUnit || '') + (rest ? ' + ' + rest + ' ' + it.baseUnit : '') + ' (' + n + ')';
    }
    return n + ' ' + it.baseUnit;
  }

  function renderStock() {
    var d = owner.stock;
    var body = $('stockBody');
    body.textContent = '';
    body.appendChild(el('p', { className: 'note-sm', text: t('stockIntro') }));
    var row = el('div', { className: 'row' }, [
      el('button', { className: 'btn btn-primary', type: 'button', text: t('stockAdd'), onclick: function () { stockItemForm(null); } })
    ]);
    var unlinkedDrinks = d.products.some(function (p) { return /giải khát/i.test(p.category) && !p.stockItemId && p.active; });
    if (unlinkedDrinks) {
      row.appendChild(el('button', { className: 'btn', type: 'button', text: t('stockAutoDrinks'), onclick: function (ev) {
        var b = ev.currentTarget;
        busy(b, function () { return mutate('stock.autoDrinks', {}).then(function (r) { toast(t('saved') + ': ' + r.created.length); return loadOwner(); }); });
      } }));
    }
    body.appendChild(row);
    if (!d.items.length) { body.appendChild(el('p', { className: 'muted', text: t('stockNone') })); return; }
    d.items.forEach(function (it) {
      var cls = it.level === null ? 'lvl unknown' : (it.low || it.negative ? 'lvl bad' : 'lvl');
      var card = el('div', { className: 'card' }, [
        el('div', { className: 'rc-head' }, [
          el('span', { className: 'name', text: it.name }),
          it.negative ? el('span', { className: 'pill off', text: t('stockNeg') }) : it.low ? el('span', { className: 'pill draft', text: t('stockLow') }) : null
        ]),
        el('div', { className: cls, text: it.level === null ? t('stockUnknown') : fmtStock(it.level, it) }),
        it.level !== null ? el('div', { className: 'items-mini', text: t('stockSince') + ' ' + dateTime(it.lastCountAt) + ': ' + fmtStock(it.lastCountQty, it) +
          ' · ' + t('stockRecv') + ' +' + it.sinceCount.received + ' · ' + t('stockSold') + ' −' + it.sinceCount.sold + ' · ' + t('stockWo') + ' −' + it.sinceCount.writtenOff }) : null,
        it.links.length ? el('div', { className: 'items-mini', text: it.links.map(function (l) { return l.name + ' ×' + l.factor; }).join(' · ') }) : null
      ]);
      card.appendChild(el('div', { className: 'row' }, [
        el('button', { className: 'btn btn-small', type: 'button', text: t('stockReceive'), onclick: function () { stockQtyForm(it, 'receive'); } }),
        el('button', { className: 'btn btn-small', type: 'button', text: t('stockWriteoff'), onclick: function () { stockQtyForm(it, 'writeoff'); } }),
        el('button', { className: 'btn btn-small', type: 'button', text: t('stockCount'), onclick: function () { stockQtyForm(it, 'count'); } })
      ]));
      card.appendChild(el('div', { className: 'row' }, [
        el('button', { className: 'btn btn-small btn-ghost', type: 'button', text: t('stockHistory'), onclick: function () { stockHistory(it); } }),
        el('button', { className: 'btn btn-small btn-ghost', type: 'button', text: t('stockEdit'), onclick: function () { stockItemForm(it); } })
      ]));
      body.appendChild(card);
    });
  }

  /** Поле количества: для позиций с пачкой — «пачек» + «штук отдельно». */
  function qtyInputs(it) {
    var a = field(it.packSize ? t('stPacks') + ' (' + (it.packUnit || '') + ' × ' + it.packSize + ')' : t('stQty') + ' (' + it.baseUnit + ')', '', 'text');
    a.input.setAttribute('inputmode', 'numeric');
    var b = it.packSize ? field(t('stSingles') + ' (' + it.baseUnit + ')', '', 'text') : null;
    if (b) b.input.setAttribute('inputmode', 'numeric');
    var total = el('div', { className: 'note-sm' });
    var read = function () {
      var x = Number(a.input.value.replace(/[^\d]/g, '')) || 0;
      var y = b ? Number(b.input.value.replace(/[^\d]/g, '')) || 0 : 0;
      return it.packSize ? x * it.packSize + y : x;
    };
    var upd = function () { total.textContent = (a.input.value || (b && b.input.value)) ? '= ' + read() + ' ' + it.baseUnit : ''; };
    a.input.addEventListener('input', upd);
    if (b) b.input.addEventListener('input', upd);
    return { nodes: [a.node, b ? b.node : null, total], read: read, empty: function () { return !a.input.value && !(b && b.input.value); } };
  }

  function stockQtyForm(it, kind) {
    var q = qtyInputs(it);
    var extra = [];
    var reason = field(t('stReason'), '');
    var amount, supplier, paid = 'cash_register';
    if (kind === 'receive') {
      amount = field(t('stAmount'), '', 'text');
      amount.input.setAttribute('inputmode', 'numeric');
      supplier = field(t('supplier'), '');
      extra = [amount.node, el('div', { className: 'k' }, [t('paidFrom')]),
        chipGroup(['cash_register', 'bank', 'owner_personal'], function (p) { return t('pf_' + p); }, paid, function (p) { paid = p; }), supplier.node];
    }
    var title = kind === 'receive' ? t('stockReceive') : kind === 'writeoff' ? t('stockWriteoff') : t('stockCount');
    var h = modal({
      title: title + ' · ' + it.name,
      body: [kind === 'count' ? el('p', { className: 'muted', text: t('stCountHint') }) : null].concat(q.nodes, extra, kind !== 'count' ? [reason.node] : []),
      buttons: [
        { label: t('confirm'), kind: 'btn-primary', onClick: function () {
          if (q.empty()) return;
          var n = q.read();
          var payload = { stockItemId: it.stockItemId, qty: n };
          var action = kind === 'receive' ? 'stock.receive' : kind === 'writeoff' ? 'stock.writeoff' : 'stock.count';
          if (kind !== 'count') payload.reason = reason.input.value.trim();
          if (kind === 'writeoff' && !payload.reason) { toast(t('stReason')); return; }
          if (kind === 'receive') {
            var amt = Number(amount.input.value.replace(/[^\d]/g, ''));
            if (amt) { payload.amount = amt; payload.paidFrom = paid; payload.supplier = supplier.input.value.trim(); payload.category = /thuốc|điếu|gói/i.test(it.name + it.baseUnit) ? 'cigarettes' : 'drinks'; }
          }
          return mutate(action, payload).then(function () { h.close(); toast(t('saved')); return loadOwner(); },
            function (e) { if (!isAuthErr(e)) toast(errText(e.code)); throw e; });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  function stockItemForm(it) {
    var isNew = !it;
    it = it || { name: '', baseUnit: '', packSize: null, packUnit: '', lowLevel: 0, links: [] };
    var f = {
      name: field(t('stName'), it.name), base: field(t('stBase'), it.baseUnit), pack: field(t('stPack'), it.packSize || '', 'text'),
      packUnit: field(t('stPackUnit'), it.packUnit || ''), low: field(t('stLow'), it.lowLevel || '', 'text')
    };
    f.pack.input.setAttribute('inputmode', 'numeric');
    f.low.input.setAttribute('inputmode', 'numeric');
    var linked = {};
    it.links.forEach(function (l) { linked[l.productId] = l.factor; });
    var linkBox = el('div', { className: 'list' });
    var rows = [];
    owner.stock.products
      .filter(function (p) { return !p.stockItemId || p.stockItemId === it.stockItemId; })
      .sort(function (a, b) { return (/thuốc|giải khát/i.test(b.category) ? 1 : 0) - (/thuốc|giải khát/i.test(a.category) ? 1 : 0); })
      .forEach(function (p) {
        var c = check(p.name, linked[p.productId] !== undefined);
        var factor = el('input', { className: 'inp', type: 'text', inputmode: 'numeric' });
        factor.value = linked[p.productId] || (/gói/i.test(p.name) && it.packSize ? it.packSize : 1);
        rows.push({ p: p, c: c.input, factor: factor });
        linkBox.appendChild(el('div', { className: 'link-row' }, [c.node, el('span', { text: '×' }), factor]));
      });
    var h = modal({
      title: isNew ? t('stockAdd') : t('stockEdit') + ' · ' + it.name,
      body: [f.name.node, f.base.node, f.pack.node, f.packUnit.node, f.low.node, el('div', { className: 'k', text: t('stLinks') }), linkBox],
      buttons: [
        { label: t('save'), kind: 'btn-primary', onClick: function () {
          var pack = f.pack.input.value.replace(/[^\d]/g, '');
          var payload = {
            name: f.name.input.value.trim(), baseUnit: f.base.input.value.trim(),
            packSize: pack ? Number(pack) : null, packUnit: f.packUnit.input.value.trim(),
            lowLevel: Number(f.low.input.value.replace(/[^\d]/g, '')) || 0,
            links: rows.filter(function (r) { return r.c.checked; }).map(function (r) { return { productId: r.p.productId, factor: Number(r.factor.value.replace(/[^\d]/g, '')) || 0 }; })
          };
          if (!isNew) payload.stockItemId = it.stockItemId;
          if (!payload.name || !payload.baseUnit) { toast(errText('BAD_REQUEST')); return; }
          return mutate('stock.saveItem', payload).then(function () { h.close(); toast(t('saved')); return loadOwner(); },
            function (e) { if (!isAuthErr(e)) toast(errText(e.code)); throw e; });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  function stockHistory(it) {
    api('stock.history', { stockItemId: it.stockItemId }).then(function (d) {
      var list = el('div', { className: 'list' });
      d.movements.forEach(function (m) {
        var voided = m.status === 'voided';
        var line = el('div', { className: 'card' + (voided ? ' voided-card' : '') }, [
          el('div', { className: 'rc-head' }, [
            el('span', { className: 'name', text: t('mv_' + m.type) }),
            el('span', { className: 'amt', text: (m.type === 'writeoff' ? '−' : m.type === 'receipt' ? '+' : '= ') + fmtStock(m.qty, it) })
          ]),
          el('div', { className: 'items-mini', text: dateTime(m.at) + ' · ' + m.by + (m.reason ? ' · ' + m.reason : '') + (voided && m.voidReason ? ' · ↩️ ' + m.voidReason : '') })
        ]);
        if (!voided) {
          line.appendChild(el('button', { className: 'btn btn-small btn-ghost', type: 'button', text: '↩️ ' + t('stVoid'), onclick: function (ev) {
            var b = ev.currentTarget;
            promptBox(t('stVoid'), t('stReason')).then(function (r) {
              if (r) busy(b, function () { return mutate('stock.voidMovement', { movementId: m.movementId, reason: r }).then(function () { h.close(); toast(t('saved')); return loadOwner(); }); });
            });
          } }));
        }
        list.appendChild(line);
      });
      var sales = d.salesByDay.length ? d.salesByDay.map(function (x) { return shortDate(x.date) + ': ' + x.qty; }).join(' · ') : t('noData');
      var h = modal({
        title: t('stHistoryTitle') + ' · ' + it.name,
        body: [el('p', { className: 'items-mini', text: t('stSalesDays') + ': ' + sales }), list],
        buttons: [{ label: t('ok'), kind: 'btn-primary' }]
      });
    }).catch(function (e) { if (!isAuthErr(e)) toast(errText(e.code)); });
  }

  // ---------- Резервные копии ----------
  var BK = {
    vi: {
      backupsTitle: '🗄 Sao lưu', bakOk: 'Sao lưu gần nhất', bakNone: 'Chưa có bản sao lưu nào.', bakProblem: '⚠️ Sao lưu có vấn đề',
      bakNow: '💾 Sao lưu ngay', bakDone: 'Đã sao lưu và kiểm tra', bakSchedule: 'Tự động mỗi ngày lúc 3:00', bakNoSchedule: 'Chưa bật sao lưu tự động',
      bakChecked: 'đã kiểm tra: số hóa đơn và tổng tiền khớp', bakOpen: 'Mở', bakKeep: 'Giữ: 30 bản hằng ngày, 12 bản hằng tháng',
      k_daily: 'hằng ngày', k_monthly: 'hằng tháng', k_manual: 'thủ công', 'k_pre-update': 'trước cập nhật',
      s_ok: '✓ OK', s_failed: '✗ Lỗi', s_mismatch: '✗ Không khớp', bakRestore: 'Cách khôi phục: xem hướng dẫn chủ quán, mục "Sao lưu".',
      bakBanner: 'Sao lưu dữ liệu có vấn đề — mở tab Sao lưu.'
    },
    ru: {
      backupsTitle: '🗄 Копии', bakOk: 'Последняя копия', bakNone: 'Резервных копий пока нет.', bakProblem: '⚠️ Проблема с резервными копиями',
      bakNow: '💾 Сделать копию сейчас', bakDone: 'Копия сделана и проверена', bakSchedule: 'Автоматически каждый день в 3:00', bakNoSchedule: 'Ежедневная копия не включена',
      bakChecked: 'проверена: число чеков и сумма совпадают', bakOpen: 'Открыть', bakKeep: 'Хранится: 30 ежедневных и 12 месячных копий',
      k_daily: 'ежедневная', k_monthly: 'месячная', k_manual: 'ручная', 'k_pre-update': 'перед обновлением',
      s_ok: '✓ OK', s_failed: '✗ Ошибка', s_mismatch: '✗ Не совпала', bakRestore: 'Как восстановить данные — в инструкции владельца, раздел «Резервные копии».',
      bakBanner: 'Проблема с резервными копиями — откройте вкладку «Копии».'
    }
  };
  Object.keys(BK).forEach(function (l) { Object.keys(BK[l]).forEach(function (k) { I18N[l][k] = BK[l][k]; }); });

  function dateTime(iso) {
    var d = new Date(iso);
    return isNaN(d) ? '' : d.toLocaleString(state.lang === 'vi' ? 'vi-VN' : 'ru-RU', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  function renderBackups() {
    var d = owner.bak;
    var body = $('bakBody');
    body.textContent = '';
    var h = d.health;
    var head = el('div', { className: 'card' }, [
      el('div', { className: 'name', text: h.problem ? t('bakProblem') : '✅ ' + t('bakOk') + ': ' + dateTime(h.lastOkAt) }),
      h.problem && h.lastOkAt ? el('div', { className: 'items-mini', text: t('bakOk') + ': ' + dateTime(h.lastOkAt) }) : null,
      !h.lastOkAt ? el('div', { className: 'items-mini', text: t('bakNone') }) : null,
      h.lastError ? el('div', { className: 'items-mini', text: h.lastError }) : null,
      el('div', { className: 'items-mini', text: (d.scheduled === false ? '⚠️ ' + t('bakNoSchedule') : '🕒 ' + t('bakSchedule')) + ' · ' + t('bakKeep') })
    ]);
    body.appendChild(head);
    var now = el('button', { className: 'btn btn-primary', type: 'button', text: t('bakNow') });
    now.addEventListener('click', function () {
      busy(now, function () {
        return api('backups.create').then(function (res) {
          toast(res.backup.status === 'ok' ? '✅ ' + t('bakDone') : t('s_' + res.backup.status) + ' ' + (res.backup.error || ''));
          return loadOwner();
        });
      });
    });
    body.appendChild(now);
    d.backups.forEach(function (b) {
      var card = el('div', { className: 'card' + (b.trashed ? ' voided-card' : '') }, [
        el('div', { className: 'rc-head' }, [
          el('span', { className: 'name', text: dateTime(b.createdAt) }),
          el('span', { className: 'pill ' + (b.status === 'ok' ? 'cash' : 'off'), text: t('s_' + b.status) })
        ]),
        el('div', { className: 'meta', text: t('k_' + b.kind) + (b.status === 'ok' ? ' · ' + b.salesCount + ' ' + t('salesCountL') + ' · ' + money(b.salesTotal) : '') }),
        b.status === 'ok' ? el('div', { className: 'items-mini', text: '✓ ' + t('bakChecked') }) : null,
        b.error ? el('div', { className: 'items-mini', text: b.error }) : null
      ]);
      if (b.fileId) {
        card.appendChild(el('a', { className: 'btn btn-small link-btn', href: 'https://docs.google.com/spreadsheets/d/' + encodeURIComponent(b.fileId) + '/edit', target: '_blank', rel: 'noopener', text: t('bakOpen') + ' ↗' }));
      }
      body.appendChild(card);
    });
    body.appendChild(el('p', { className: 'note-sm', text: t('bakRestore') }));
  }

  function renderDash() {
    var d = owner.dash;
    var body = $('dashBody');
    body.textContent = '';
    var C1 = 'var(--series-1)', C2 = 'var(--series-2)', C3 = 'var(--series-3)';
    if (d.backup && d.backup.problem) {
      body.appendChild(el('button', { className: 'warn-box', type: 'button', style: 'text-align:left;border:0;width:100%', text: '⚠️ ' + t('bakBanner'),
        onclick: function () { owner.tab = 'bak'; loadOwner(); } }));
    }
    if (d.lowStock && d.lowStock.length) {
      body.appendChild(el('button', { className: 'warn-box', type: 'button', style: 'text-align:left;border:0;width:100%',
        text: '📦 ' + t('lowStockBanner') + ' ' + d.lowStock.map(function (x) { return x.name + ' (' + x.level + ' ' + x.unit + ')'; }).join(', '),
        onclick: function () { owner.tab = 'stock'; loadOwner(); } }));
    }

    var k = el('div', { className: 'kpis' });
    k.appendChild(kpi(t('revenue'), money(d.revenue.total), '💵 ' + money(d.revenue.cash) + ' · 📱 ' + money(d.revenue.qr) +
      (d.revenue.refunds ? ' · ' + t('refunds') + ' −' + money(d.revenue.refunds) + ' → ' + money(d.revenue.net) : ''), true));
    k.appendChild(kpi(t('checks'), String(d.revenue.count)));
    k.appendChild(kpi(t('avgCheck'), d.revenue.avg === null ? t('noData') : money(d.revenue.avg)));
    k.appendChild(kpi(t('purchases'), money(d.spend.purchase)));
    k.appendChild(kpi(t('opex'), money(d.spend.expense)));
    k.appendChild(kpi(t('cashResult'), money(d.cashResult), d.dataQuality.expensesEntered ? t('notProfit') : t('noExpensesYet'), true));
    body.appendChild(k);

    var cashLbl = t('cash'), qrLbl = t('qr');
    if (d.days.length > 1) {
      var every = Math.ceil(d.days.length / 6);
      body.appendChild(barChart(t('byDay'), [{ key: 'cash', color: C1 }, { key: 'qr', color: C2 }], d.days.map(function (x, i) {
        return {
          label: shortDate(x.date), showLabel: i % every === 0 || i === d.days.length - 1,
          values: { cash: x.cash, qr: x.qr },
          detail: shortDate(x.date) + ': ' + money(x.cash + x.qr) + ' · 💵 ' + money(x.cash) + ' · 📱 ' + money(x.qr) + ' · ' + x.count + ' ' + t('checks').toLowerCase()
        };
      }), [{ color: C1, label: cashLbl }, { color: C2, label: qrLbl }]));
    }

    var hrs = d.hours.filter(function (h) { return h.count > 0; });
    if (hrs.length) {
      var h0 = Math.max(0, hrs[0].hour - 1), h1 = Math.min(23, hrs[hrs.length - 1].hour + 1);
      var range = d.hours.slice(h0, h1 + 1);
      var everyH = Math.ceil(range.length / 8);
      body.appendChild(barChart(t('byHour'), [{ key: 'v', color: C1 }], range.map(function (h, i) {
        return { label: h.hour + 'h', showLabel: i % everyH === 0, values: { v: h.total }, detail: h.hour + ':00–' + h.hour + ':59 · ' + money(h.total) + ' · ' + h.count + ' ' + t('checks').toLowerCase() };
      })));
    }

    body.appendChild(hbars(t('topProducts'), d.topProducts.map(function (p) {
      return { label: p.name + ' ×' + p.qty, value: p.total, text: money(p.total) };
    }), C1));
    body.appendChild(hbars(t('byCategory'), d.categories.map(function (c) {
      return { label: c.category + ' ×' + c.qty, value: c.total, text: money(c.total) };
    }), C1));
    var spendRows = d.spendCategories.filter(function (s) { return s.kind === 'purchase' || s.kind === 'expense'; });
    body.appendChild(hbars(t('spendByCat'), spendRows.map(function (s) {
      return { label: t('k_' + s.kind) + ': ' + t('c_' + s.category), value: s.total, text: money(s.total) };
    }), C3));
    if (d.cashiers.length) {
      body.appendChild(hbars(t('byCashier'), d.cashiers.map(function (c) {
        return { label: c.name + ' · ' + c.count, value: c.total, text: money(c.total) };
      }), C1));
    }

    if (d.fundingAll && d.fundingAll.length) body.appendChild(fundingCard('💰 ' + t('fundingTitle') + ' · ' + t('fundingAll'), d.fundingAll));
    var L = d.lifetime;
    var pb = el('div', { className: 'chart-card' }, [el('h3', { text: '🎯 ' + t('payback') })]);
    [[t('lifeRevenue'), L.revenue], [t('lifeSpend'), L.purchase + L.expense], [t('lifeResult'), L.result], [t('investments'), L.investment], [t('withdrawals'), L.withdrawal]]
      .forEach(function (r) { pb.appendChild(el('div', { className: 'hbar' }, [el('div', { className: 'lbl' }, [el('span', { text: r[0] }), el('b', { text: money(r[1]) })])])); });
    if (L.payback === null) {
      pb.appendChild(el('p', { className: 'note-sm', text: t('paybackNone') }));
    } else {
      var pct = Math.max(0, Math.min(100, L.payback));
      pb.appendChild(el('div', { className: 'kpi hero' }, [el('div', { className: 'k', text: t('payback') }), el('div', { className: 'v', text: L.payback + '%' })]));
      pb.appendChild(el('div', { className: 'track', style: 'background:var(--grid);border-radius:4px;height:10px' }, [el('div', { className: 'fill', style: 'width:' + pct + '%;background:var(--series-1);height:10px;border-radius:0 4px 4px 0' })]));
    }
    pb.appendChild(el('p', { className: 'note-sm', text: t('profitNote') }));
    body.appendChild(pb);
  }

  /** «Откуда деньги»: касса, банк и личные деньги по людям (Уэн, Анастасия…). */
  function fundingCard(title, rows) {
    var total = (rows || []).reduce(function (s, r) { return s + r.total; }, 0);
    return hbars(title, (rows || []).map(function (r) {
      var who = r.payer && r.payer !== '?' ? r.payer : (state.lang === 'ru' ? 'не указано' : 'chưa ghi');
      var label = r.source === 'personal' ? '👤 ' + t('src_personal') + ': ' + who : (r.source === 'cash_register' ? '💵 ' : '🏦 ') + t('pf_' + r.source);
      return { label: label + ' · ' + (total ? Math.round(r.total / total * 100) : 0) + '%', value: r.total, text: money(r.total) };
    }), 'var(--series-3)');
  }

  function renderExpenses() {
    var d = owner.exp;
    var body = $('expBody');
    body.textContent = '';
    body.appendChild(el('button', { className: 'btn btn-primary', type: 'button', text: t('addExpense'), onclick: function () { expenseForm(); } }));
    var k = el('div', { className: 'kpis' });
    ['purchase', 'expense', 'investment', 'withdrawal'].forEach(function (kind) { k.appendChild(kpi(t('k_' + kind), money(d.totals[kind]))); });
    body.appendChild(k);
    body.appendChild(fundingCard(t('fundingTitle') + ' · ' + t('fundingPeriod'), d.funding));
    body.appendChild(fundingCard(t('fundingTitle') + ' · ' + t('fundingAll'), d.fundingAll));
    if (!d.expenses.length) { body.appendChild(el('p', { className: 'muted', text: t('noExpenses') })); return; }
    d.expenses.forEach(function (e) {
      var voided = e.status !== 'active';
      var card = el('div', { className: 'card', style: voided ? 'opacity:.6' : null }, [
        el('div', { className: 'rc-head' }, [
          el('span', { className: 'name', text: t('c_' + e.category) }),
          el('span', { className: 'pill ' + (voided ? 'off' : e.kind === 'investment' ? 'qr' : e.kind === 'withdrawal' ? '' : 'draft'), text: voided ? t('voided') : t('k_' + e.kind) }),
          el('span', { className: 'amt', text: money(e.amount), style: voided ? 'text-decoration:line-through' : null })
        ]),
        el('div', { className: 'meta', text: shortDate(e.date) + ' · ' + t('pf_' + e.paidFrom) + (e.payer ? ': ' + e.payer : '') + (e.supplier ? ' · ' + e.supplier : '') + (e.createdBy ? ' · ' + e.createdBy : '') }),
        e.note ? el('div', { className: 'items-mini', text: e.note }) : null,
        voided && e.voidReason ? el('div', { className: 'items-mini', text: '↩️ ' + e.voidReason }) : null
      ]);
      if (!voided) {
        var vb = el('button', { className: 'btn btn-small btn-ghost', type: 'button', text: '↩️ ' + t('voidQ') });
        vb.addEventListener('click', function () {
          promptBox(t('voidQ') + ' ' + money(e.amount), t('voidReason')).then(function (reason) {
            if (reason) busy(vb, function () { return mutate('expenses.void', { expenseId: e.expenseId, reason: reason }).then(function () { toast(t('saved')); return loadOwner(); }); });
          });
        });
        card.appendChild(vb);
      }
      body.appendChild(card);
    });
  }

  function chipGroup(values, labelOf, current, onPick) {
    var box = el('div', { className: 'chips' });
    values.forEach(function (v) {
      var b = el('button', { className: 'btn' + (v === current ? ' sel' : ''), type: 'button', text: labelOf(v) });
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(box.children, function (c) { c.classList.remove('sel'); });
        b.classList.add('sel');
        onPick(v);
      });
      box.appendChild(b);
    });
    return box;
  }

  function expenseForm() {
    var st = { kind: 'purchase', category: 'coffee', paidFrom: 'cash_register', payer: '' };
    var catWrap = el('div', {});
    var drawCats = function () {
      catWrap.textContent = '';
      catWrap.appendChild(chipGroup(KINDS[st.kind], function (c) { return t('c_' + c); }, st.category, function (c) { st.category = c; }));
    };
    var kinds = chipGroup(['purchase', 'expense', 'investment', 'withdrawal'], function (k) { return t('k_' + k); }, st.kind, function (k) {
      st.kind = k; st.category = KINDS[k][0]; drawCats();
    });
    drawCats();
    var amount = field(t('amount'), '', 'text');
    amount.input.setAttribute('inputmode', 'numeric');
    var preview = el('div', { className: 'note-sm' });
    amount.input.addEventListener('input', function () {
      var n = Number(amount.input.value.replace(/[^\d]/g, ''));
      preview.textContent = n ? '= ' + money(n) : '';
    });
    var date = field(t('date'), todayVN(), 'date');
    var payerWrap = el('div', {});
    var payerOther = field(t('payerOther'), '');
    var drawPayer = function () {
      payerWrap.textContent = '';
      if (st.paidFrom !== 'owner_personal') return;
      var names = (owner.exp && owner.exp.payers && owner.exp.payers.length) ? owner.exp.payers : [];
      if (!st.payer && names.length) st.payer = names[0];
      payerWrap.appendChild(el('div', { className: 'k', text: t('payerQ') }));
      payerWrap.appendChild(chipGroup(names.concat(['…']), function (n) { return n === '…' ? t('payerOther') : n; }, st.payer, function (n) { st.payer = n; payerOther.node.hidden = n !== '…'; }));
      payerOther.node.hidden = st.payer !== '…' && names.length > 0;
      if (!names.length) st.payer = '…';
      payerWrap.appendChild(payerOther.node);
    };
    var paid = chipGroup(['cash_register', 'bank', 'owner_personal'], function (p) { return t('pf_' + p); }, st.paidFrom, function (p) { st.paidFrom = p; drawPayer(); });
    var supplier = field(t('supplier'), '');
    var note = field(t('noteReq'), '');
    var payloadKey = null;
    var h = modal({
      title: t('addExpense'),
      body: [el('div', { className: 'k' }, [t('kind')]), kinds, catWrap, amount.node, preview, date.node, el('div', { className: 'k' }, [t('paidFrom')]), paid, payerWrap, supplier.node, note.node],
      buttons: [
        { label: t('save'), kind: 'btn-primary', onClick: function () {
          var n = Number(amount.input.value.replace(/[^\d]/g, ''));
          if (!n) { toast(errText('BAD_REQUEST') + ' — ' + t('amount')); return; }
          if (st.category === 'other' && !note.input.value.trim()) { toast(t('noteReq')); return; }
          var payload = { kind: st.kind, category: st.category, amount: n, date: date.input.value, paidFrom: st.paidFrom, supplier: supplier.input.value.trim(), note: note.input.value.trim() };
          if (st.paidFrom === 'owner_personal') {
            payload.payer = st.payer === '…' ? payerOther.input.value.trim() : st.payer;
            if (!payload.payer) { toast(t('payerQ')); return; }
          }
          payloadKey = 'exp|' + JSON.stringify(payload);
          return mutate('expenses.create', payload, payloadKey).then(function () {
            h.close();
            toast(t('saved') + ': ' + money(n));
            owner.tab = 'exp';
            return loadOwner();
          }, function (e) { if (!isAuthErr(e)) toast(errText(e.code)); throw e; });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  // ---------- Смены и касса дня ----------
  var SH = {
    vi: {
      shiftNone: 'Chưa bắt đầu ca', shiftStart: '▶ Bắt đầu ca', shiftOpenSince: 'Ca đang mở từ', shiftEnd: '⏹ Kết thúc ca',
      shiftEndQ: 'Kết thúc ca làm việc của bạn?', shiftEnded: 'Đã kết thúc ca', shiftLoading: 'Đang kiểm tra ca…',
      dayClosedGate: 'Ngày hôm nay đã đóng sổ. Liên hệ chủ quán nếu cần bán tiếp.',
      gateText: 'Bấm "Bắt đầu ca" trước khi bán hàng.', openingCashQ: 'Tiền mặt trong két lúc mở quán (VND)',
      openingHint: 'Bạn là người đầu tiên hôm nay — hãy đếm tiền trong két và nhập số tiền.',
      staleShift: 'Ca hôm trước chưa kết thúc — sẽ tự kết thúc khi bắt đầu ca mới.',
      unclosedDays: 'Có ngày chưa đóng sổ:', cashDayTitle: '💰 Két tiền & đóng ngày',
      opening: 'Tiền đầu ngày', cashSalesL: '+ Bán tiền mặt', cashRefundsL: '− Hoàn tiền mặt', movInL: '+ Nộp thêm vào két',
      movOutL: '− Rút khỏi két', cashExpL: '− Chi từ két', expectedL: '= Tiền phải có trong két', qrInfo: 'QR (không vào két)',
      openShiftsL: 'Ca đang mở', noneOpen: 'không có', movIn: '+ Nộp tiền', movOut: '− Rút tiền', movReason: 'Lý do',
      closeDay: '🔒 Đóng sổ ngày', actualCash: 'Tiền thực tế đếm được (VND)', difference: 'Chênh lệch', diffNote: 'Giải thích chênh lệch',
      dayClosedInfo: 'Đã đóng sổ', reopenDay: 'Mở lại ngày', reopenReason: 'Lý do mở lại', dayNotOpened: 'Hôm nay chưa ai bắt đầu ca.',
      voidSale: 'Hủy hóa đơn', voidReasonQ: 'Lý do', refundSale: 'Hoàn tiền', refundAmount: 'Số tiền hoàn (VND)',
      refundHint: 'Chỉ dùng khi đã trả lại tiền cho khách. Hoàn tiền mặt sẽ trừ vào két hôm nay.',
      voidedN: 'Đã hủy', voidedOne: 'Đã hủy', refunds: 'Hoàn tiền', netRevenue: 'Doanh thu thực', refunded: 'Đã hoàn',
      salesCountL: 'hóa đơn', shiftTotals: 'Kết quả ca của bạn',
      err_NO_SHIFT: 'Bạn chưa bắt đầu ca. Bấm "Bắt đầu ca".', err_DAY_CLOSED: 'Ngày đã đóng sổ.', err_DAY_CHANGED: 'Vừa có giao dịch mới — số tiền đã được cập nhật, kiểm tra lại.',
      err_NOTE_REQUIRED: 'Có chênh lệch — hãy ghi giải thích.', err_VOID_WINDOW_PASSED: 'Đã quá thời gian tự hủy. Báo chủ quán.',
      err_ALREADY_VOIDED: 'Đã hủy trước đó.', err_REFUND_TOO_BIG: 'Số tiền hoàn lớn hơn số đã trả.', err_DAY_NOT_OPEN: 'Hôm nay chưa mở két.',
      err_HAS_REFUNDS: 'Hóa đơn đã có hoàn tiền — không hủy được.', err_OPENING_CASH_REQUIRED: 'Cần nhập tiền đầu ngày.'
    },
    ru: {
      shiftNone: 'Смена не начата', shiftStart: '▶ Начать смену', shiftOpenSince: 'Смена открыта с', shiftEnd: '⏹ Закончить смену',
      shiftEndQ: 'Закончить вашу смену?', shiftEnded: 'Смена закончена', shiftLoading: 'Проверяю смену…',
      dayClosedGate: 'Сегодняшний день уже закрыт. Если нужно продавать дальше — обратитесь к владельцу.',
      gateText: 'Перед продажей нажмите «Начать смену».', openingCashQ: 'Наличные в кассе при открытии (VND)',
      openingHint: 'Вы первый сегодня — пересчитайте деньги в кассе и введите сумму.',
      staleShift: 'Вчерашняя смена не закрыта — она закроется автоматически при начале новой.',
      unclosedDays: 'Есть незакрытые дни:', cashDayTitle: '💰 Касса дня и закрытие',
      opening: 'Начальная наличность', cashSalesL: '+ Наличные продажи', cashRefundsL: '− Наличные возвраты', movInL: '+ Внесения',
      movOutL: '− Изъятия', cashExpL: '− Траты из кассы', expectedL: '= Должно быть в кассе', qrInfo: 'QR (в кассу не попадает)',
      openShiftsL: 'Открытые смены', noneOpen: 'нет', movIn: '+ Внесение', movOut: '− Изъятие', movReason: 'Причина',
      closeDay: '🔒 Закрыть день', actualCash: 'Фактически в кассе (VND)', difference: 'Расхождение', diffNote: 'Объяснение расхождения',
      dayClosedInfo: 'День закрыт', reopenDay: 'Открыть день заново', reopenReason: 'Причина', dayNotOpened: 'Сегодня смену ещё никто не начинал.',
      voidSale: 'Отменить чек', voidReasonQ: 'Причина', refundSale: 'Возврат', refundAmount: 'Сумма возврата (VND)',
      refundHint: 'Только если деньги действительно вернули гостю. Наличный возврат уменьшит сегодняшнюю кассу.',
      voidedN: 'Отменено', voidedOne: 'Отменён', refunds: 'Возвраты', netRevenue: 'Чистая выручка', refunded: 'Возвращено',
      salesCountL: 'чеков', shiftTotals: 'Итоги вашей смены',
      err_NO_SHIFT: 'Смена не начата. Нажмите «Начать смену».', err_DAY_CLOSED: 'День уже закрыт.', err_DAY_CHANGED: 'Только что прошла новая операция — сумма обновлена, проверьте ещё раз.',
      err_NOTE_REQUIRED: 'Есть расхождение — напишите объяснение.', err_VOID_WINDOW_PASSED: 'Время на самостоятельную отмену прошло. Обратитесь к владельцу.',
      err_ALREADY_VOIDED: 'Уже отменено.', err_REFUND_TOO_BIG: 'Сумма возврата больше оплаченной.', err_DAY_NOT_OPEN: 'Сегодня касса ещё не открыта.',
      err_HAS_REFUNDS: 'По чеку уже был возврат — отменить нельзя.', err_OPENING_CASH_REQUIRED: 'Нужно ввести начальную наличность.'
    }
  };
  Object.keys(SH).forEach(function (l) { Object.keys(SH[l]).forEach(function (k) { I18N[l][k] = SH[l][k]; }); });

  var CASH_ROLES_UI = ['owner', 'admin', 'senior_cashier'];
  function canCash() { return !!(state.user && CASH_ROLES_UI.indexOf(state.user.role) >= 0); }
  function hasShift() { return !!(state.shiftInfo && state.shiftInfo.shift); }

  function loadShift() {
    return api('shift.status').then(function (res) {
      state.shiftInfo = res;
      renderSell();
      renderCart();
      renderShiftCard();
    });
  }

  function renderShiftGate() {
    var g = $('shiftGate');
    g.textContent = '';
    var info = state.shiftInfo;
    if (!info) { g.appendChild(el('p', { className: 'muted', text: t('shiftLoading') })); return; }
    if (info.day.status === 'closed') {
      g.appendChild(el('div', { className: 'big', text: '🔒' }));
      g.appendChild(el('p', { text: t('dayClosedGate') }));
      return;
    }
    g.appendChild(el('div', { className: 'big', text: '☕' }));
    g.appendChild(el('h2', { text: t('shiftNone'), style: 'margin:0' }));
    g.appendChild(el('p', { className: 'muted', text: t('gateText') }));
    if (info.staleShift) g.appendChild(el('div', { className: 'warn-box', text: t('staleShift') }));
    g.appendChild(el('button', { className: 'btn btn-primary', type: 'button', text: t('shiftStart'), onclick: function (ev) { startShiftFlow(ev.currentTarget); } }));
  }

  function startShiftFlow(btn) {
    var info = state.shiftInfo;
    if (info && info.day.status === 'none') return openingCashFlow();
    busy(btn, function () {
      return mutate('shift.open', {}).then(function () { return loadShift(); }, function (e) {
        if (e.code === 'OPENING_CASH_REQUIRED') { openingCashFlow(); return; }
        throw e;
      });
    });
  }

  function openingCashFlow() {
    var f = field(t('openingCashQ'), '', 'text');
    f.input.setAttribute('inputmode', 'numeric');
    var prev = el('div', { className: 'note-sm' });
    f.input.addEventListener('input', function () { var n = Number(f.input.value.replace(/[^\d]/g, '')); prev.textContent = f.input.value ? '= ' + money(n) : ''; });
    var h = modal({
      title: t('shiftStart'),
      body: [el('p', { className: 'muted', text: t('openingHint') }), f.node, prev],
      buttons: [
        { label: t('confirm'), kind: 'btn-primary', onClick: function () {
          if (f.input.value.trim() === '') return;
          var n = Number(f.input.value.replace(/[^\d]/g, ''));
          return mutate('shift.open', { openingCash: n }).then(function () { h.close(); return loadShift(); },
            function (e) { if (!isAuthErr(e)) toast(errText(e.code)); throw e; });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  function renderShiftCard() {
    var c = $('shiftCard');
    if (!c) return;
    c.textContent = '';
    var info = state.shiftInfo;
    $('cashDayBtn').hidden = !canCash();
    if (!info) return;
    if (info.shift) {
      c.appendChild(el('div', { className: 'name', text: '🟢 ' + t('shiftOpenSince') + ' ' + timeOf(info.shift.openedAt) }));
      c.appendChild(el('button', { className: 'btn btn-primary', type: 'button', text: t('cashTake'), onclick: cashTakeFlow }));
      c.appendChild(el('button', { className: 'btn', type: 'button', text: t('shiftEnd'), onclick: function (ev) { endShiftFlow(ev.currentTarget); } }));
    } else {
      c.appendChild(el('div', { className: 'name', text: '⚪ ' + t('shiftNone') }));
      if (info.day.status !== 'closed') c.appendChild(el('button', { className: 'btn btn-primary', type: 'button', text: t('shiftStart'), onclick: function (ev) { startShiftFlow(ev.currentTarget); } }));
    }
    if (info.unclosedDays && info.unclosedDays.length) {
      c.appendChild(el('div', { className: 'warn-box', text: '⚠️ ' + t('unclosedDays') + ' ' + info.unclosedDays.join(', ') }));
    }
  }

  function endShiftFlow(btn) {
    confirmBox(t('shiftEndQ')).then(function (ok) {
      if (!ok) return;
      busy(btn, function () {
        return mutate('shift.close', {}).then(function (res) {
          var tt = res.totals;
          modal({
            title: '✅ ' + t('shiftEnded'),
            body: [
              el('p', { className: 'muted', text: t('shiftTotals') }),
              el('div', { className: 'big-amount', text: money(tt.total) }),
              el('p', { text: '💵 ' + money(tt.cash) + ' · 📱 ' + money(tt.qr) + ' · ' + tt.count + ' ' + t('salesCountL') + (tt.voided ? ' · ↩️ ' + tt.voided : '') })
            ],
            buttons: [{ label: t('ok'), kind: 'btn-primary' }]
          });
          return loadShift();
        });
      });
    });
  }

  // Касса дня
  var cashDay = { date: null, sum: null };

  function loadCashDay() {
    var info = state.shiftInfo;
    var dates = [(info && info.today) || null].concat((info && info.unclosedDays) || []).filter(Boolean);
    if (!cashDay.date || dates.indexOf(cashDay.date) < 0) cashDay.date = dates[0] || null;
    var bar = $('cashDayDates');
    bar.textContent = '';
    if (dates.length > 1) {
      dates.forEach(function (d, i) {
        bar.appendChild(el('button', {
          className: 'cat' + (d === cashDay.date ? ' active' : ''), type: 'button', text: (i === 0 ? t('today') + ' ' : '⚠️ ') + shortDate(d),
          onclick: function () { cashDay.date = d; loadCashDay(); }
        }));
      });
    }
    return api('cashday.summary', cashDay.date ? { date: cashDay.date } : {}).then(function (res) {
      cashDay.sum = res.summary;
      renderCashDay();
    }).catch(function (e) { if (!isAuthErr(e)) toast(errText(e.code)); });
  }

  function line(label, value, cls) {
    return el('div', { className: 'ln' + (cls ? ' ' + cls : '') }, [el('span', { text: label }), el('b', { text: value })]);
  }

  function renderCashDay() {
    var s = cashDay.sum;
    var body = $('cashDayBody');
    body.textContent = '';
    if (s.status === 'none') { body.appendChild(el('p', { className: 'muted', text: t('dayNotOpened') })); return; }
    var calc = el('div', { className: 'card calc' }, [
      line(t('opening'), money(s.openingCash)),
      line(t('cashSalesL'), money(s.cashSales)),
      s.cashRefunds ? line(t('cashRefundsL'), money(s.cashRefunds)) : null,
      s.movementsIn ? line(t('movInL'), money(s.movementsIn)) : null,
      s.movementsOut ? line(t('movOutL'), money(s.movementsOut)) : null,
      s.cashExpenses ? line(t('cashExpL'), money(s.cashExpenses)) : null,
      line(t('expectedL'), money(s.expected), 'total')
    ]);
    body.appendChild(calc);
    body.appendChild(el('div', { className: 'card calc' }, [
      line(t('qrInfo'), money(s.qrSales)),
      line(t('count'), String(s.salesCount) + (s.voidedCount ? ' · ↩️ ' + s.voidedCount : '')),
      line(t('openShiftsL'), s.openShifts.length ? s.openShifts.map(function (x) { return x.name; }).join(', ') : t('noneOpen'))
    ]));
    if (s.movements.length) {
      body.appendChild(el('div', { className: 'card' }, s.movements.map(function (m) {
        return el('div', { className: 'items-mini', text: (m.type === 'in' ? '＋ ' : '－ ') + money(m.amount) + ' · ' + m.reason + ' · ' + m.by + ' ' + timeOf(m.at) });
      })));
    }
    if (s.status === 'closed') {
      var c = s.closed;
      body.appendChild(el('div', { className: 'card calc' }, [
        el('div', { className: 'name', text: '🔒 ' + t('dayClosedInfo') + ' · ' + c.by + ' ' + timeOf(c.at) }),
        line(t('expectedL'), money(c.expected)),
        line(t('actualCash'), money(c.actual)),
        el('div', { className: 'ln' }, [el('span', { text: t('difference') }), el('b', { className: c.difference === 0 ? 'diff-ok' : 'diff-bad', text: (c.difference > 0 ? '+' : '') + money(c.difference) })]),
        c.note ? el('div', { className: 'items-mini', text: c.note }) : null
      ]));
      if (isAdmin()) {
        body.appendChild(el('button', { className: 'btn btn-ghost', type: 'button', text: t('reopenDay'), onclick: function (ev) {
          var b = ev.currentTarget;
          promptBox(t('reopenDay') + ' ' + s.date, t('reopenReason')).then(function (r) {
            if (r) busy(b, function () { return mutate('cashday.reopen', { date: s.date, reason: r }).then(function () { toast(t('saved')); return loadShift().then(loadCashDay); }); });
          });
        } }));
      }
      return;
    }
    var isToday = state.shiftInfo && s.date === state.shiftInfo.today;
    if (isToday) {
      body.appendChild(el('div', { className: 'row' }, [
        el('button', { className: 'btn', type: 'button', text: t('movIn'), onclick: function () { movementFlow('in'); } }),
        el('button', { className: 'btn', type: 'button', text: t('movOut'), onclick: function () { movementFlow('out'); } })
      ]));
    }
    body.appendChild(el('button', { className: 'btn btn-primary', type: 'button', text: t('closeDay'), onclick: closeDayFlow }));
  }

  function movementFlow(type) {
    var amount = field(t('amount'), '', 'text');
    amount.input.setAttribute('inputmode', 'numeric');
    var reason = field(t('movReason'), '');
    var h = modal({
      title: type === 'in' ? t('movIn') : t('movOut'),
      body: [amount.node, reason.node],
      buttons: [
        { label: t('confirm'), kind: 'btn-primary', onClick: function () {
          var n = Number(amount.input.value.replace(/[^\d]/g, ''));
          var r = reason.input.value.trim();
          if (!n || !r) { toast(errText('BAD_REQUEST')); return; }
          return mutate('cashday.movement', { type: type, amount: n, reason: r }).then(function () { h.close(); toast(t('saved')); return loadCashDay(); },
            function (e) { if (!isAuthErr(e)) toast(errText(e.code)); throw e; });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  function closeDayFlow() {
    var s = cashDay.sum;
    var actual = field(t('actualCash'), '', 'text');
    actual.input.setAttribute('inputmode', 'numeric');
    var diffBox = el('div', { className: 'ln' });
    var note = field(t('diffNote'), '');
    var upd = function () {
      diffBox.textContent = '';
      if (actual.input.value.trim() === '') return;
      var d = Number(actual.input.value.replace(/[^\d]/g, '')) - s.expected;
      diffBox.appendChild(el('span', { text: t('difference') + ': ' }));
      diffBox.appendChild(el('b', { className: d === 0 ? 'diff-ok' : 'diff-bad', text: (d > 0 ? '+' : '') + money(d) + (d === 0 ? ' ✓' : '') }));
    };
    actual.input.addEventListener('input', upd);
    var h = modal({
      title: t('closeDay') + ' · ' + shortDate(s.date),
      body: [el('p', { className: 'muted', text: t('expectedL') }), el('div', { className: 'big-amount', text: money(s.expected) }), actual.node, diffBox, note.node],
      buttons: [
        { label: t('confirm'), kind: 'btn-primary', onClick: function () {
          if (actual.input.value.trim() === '') return;
          var n = Number(actual.input.value.replace(/[^\d]/g, ''));
          if (n !== s.expected && !note.input.value.trim()) { toast(errText('NOTE_REQUIRED')); return; }
          return mutate('cashday.close', { date: s.date, expectedCash: s.expected, actualCash: n, note: note.input.value.trim() }).then(function () {
            h.close(); toast('🔒 ' + t('dayClosedInfo')); return loadShift().then(loadCashDay);
          }, function (e) {
            if (!isAuthErr(e)) toast(errText(e.code));
            if (e.code === 'DAY_CHANGED' || e.code === 'DAY_CLOSED') { h.close(); loadCashDay(); }
            throw e;
          });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  // ---------- «Взято из кассы» (для всех со сменой) ----------
  var TK = {
    vi: {
      cashTake: '💸 Lấy tiền từ két', takeWhat: 'Lấy để làm gì?', takeBuy: '🛒 Mua đồ cho quán', takeOther: 'Việc khác',
      takeWhatBought: 'Mua gì?', takeNote: 'Ghi chú (bắt buộc): mua gì, ở đâu, đưa cho ai…', takeDone: 'Đã ghi: lấy từ két',
      appUpdate: '🔄 Cập nhật ứng dụng', appVersion: 'Phiên bản', updateReady: 'Có phiên bản mới — bấm để cập nhật'
    },
    ru: {
      cashTake: '💸 Взято из кассы', takeWhat: 'На что взяли?', takeBuy: '🛒 Купили для кофейни', takeOther: 'Другое',
      takeWhatBought: 'Что купили?', takeNote: 'Комментарий (обязательно): что купили, где, кому отдали…', takeDone: 'Записано: взято из кассы',
      appUpdate: '🔄 Обновить приложение', appVersion: 'Версия', updateReady: 'Есть новая версия — нажмите, чтобы обновить'
    }
  };
  Object.keys(TK).forEach(function (l) { Object.keys(TK[l]).forEach(function (k) { I18N[l][k] = TK[l][k]; }); });

  var TAKE_CATS = ['milk', 'ice', 'fruit', 'sugar_syrup', 'cups', 'coffee', 'drinks', 'other'];

  function cashTakeFlow() {
    var st = { purpose: 'purchase', category: 'milk' };
    var amount = field(t('amount'), '', 'text');
    amount.input.setAttribute('inputmode', 'numeric');
    var preview = el('div', { className: 'note-sm' });
    amount.input.addEventListener('input', function () { var n = Number(amount.input.value.replace(/[^\d]/g, '')); preview.textContent = n ? '= ' + money(n) : ''; });
    var catWrap = el('div', {}, [el('div', { className: 'k', text: t('takeWhatBought') }),
      chipGroup(TAKE_CATS, function (c) { return t('c_' + c); }, st.category, function (c) { st.category = c; })]);
    var purpose = chipGroup(['purchase', 'other'], function (p) { return p === 'purchase' ? t('takeBuy') : t('takeOther'); }, st.purpose,
      function (p) { st.purpose = p; catWrap.hidden = p !== 'purchase'; });
    var note = field(t('takeNote'), '');
    var h = modal({
      title: t('cashTake'),
      body: [amount.node, preview, el('div', { className: 'k', text: t('takeWhat') }), purpose, catWrap, note.node],
      buttons: [
        { label: t('confirm'), kind: 'btn-primary', onClick: function () {
          var n = Number(amount.input.value.replace(/[^\d]/g, ''));
          var c = note.input.value.trim();
          if (!n) { toast(t('amount')); return; }
          if (!c) { toast(t('takeNote')); return; }
          var payload = { amount: n, purpose: st.purpose, note: c };
          if (st.purpose === 'purchase') payload.category = st.category;
          return mutate('cash.take', payload).then(function () { h.close(); toast('✅ ' + t('takeDone') + ' ' + money(n)); },
            function (e) { if (!isAuthErr(e)) toast(errText(e.code)); throw e; });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  // ---------- Обновление приложения (ярлык на телефоне не перезагружается сам) ----------
  /**
   * Версия публикуется в version.json. Если на сервере новее — при открытии
   * приложения оно перезагружается само (если не идёт продажа), иначе показывается
   * полоса «Есть новая версия». Адрес меняется (?v=…), поэтому телефон не берёт
   * старые файлы из кэша.
   */
  function reloadApp(v) {
    location.replace(location.pathname + '?v=' + encodeURIComponent(v || String(Date.now())));
  }

  function isBusyForUpdate() {
    return state.pendingSale || state.cart.length > 0 || document.querySelector('.modal-back');
  }

  function checkForUpdate() {
    return fetch('version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (v) {
      if (!v || !v.version || v.version === APP_VERSION) return;
      // Защита от бесконечной перезагрузки: автоматически — не больше одного раза на версию.
      var tried = null;
      try { tried = sessionStorage.getItem('msh2.reloadedTo'); } catch (e) { /* ignore */ }
      if (!isBusyForUpdate() && tried !== v.version) {
        try { sessionStorage.setItem('msh2.reloadedTo', v.version); } catch (e) { /* ignore */ }
        return reloadApp(v.version);
      }
      var bar = $('updateBar');
      bar.textContent = '🔄 ' + t('updateReady');
      bar.hidden = false;
      bar.onclick = function () { reloadApp(v.version); };
    }).catch(function () { /* нет связи — проверим позже */ });
  }

  // ---------- Чеки ----------
  function salesDate() {
    if (state.salesDay === 'today' || !state.salesData) return undefined;
    var d = new Date(state.salesData.today + 'T12:00:00Z');
    d.setUTCDate(d.getUTCDate() - 1);
    return d.toISOString().slice(0, 10);
  }

  function loadSales() {
    var date = state.salesDay === 'yesterday' ? salesDate() : undefined;
    var p = state.salesDay === 'yesterday' && !state.salesData
      ? api('sales.list').then(function (r) { state.salesData = r; return api('sales.list', { date: salesDate() }); })
      : api('sales.list', date ? { date: date } : {});
    return p.then(function (res) {
      if (state.salesData && res.today !== state.salesData.today) state.salesData = null;
      state.salesData = res;
      renderSales();
    });
  }

  function renderSales() {
    var data = state.salesData;
    $('dayToday').classList.toggle('active', state.salesDay === 'today');
    $('dayYesterday').classList.toggle('active', state.salesDay === 'yesterday');
    $('salesScope').textContent = data.date + ' · ' + (data.scope === 'all' ? t('scopeAll') : t('scopeOwn')) +
      ' · ' + t('updated') + ' ' + new Date().toLocaleTimeString(state.lang === 'vi' ? 'vi-VN' : 'ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    var st = $('salesTotals');
    st.textContent = '';
    st.appendChild(el('div', { className: 'stat big' }, [el('div', { className: 'k', text: t('total') }), el('div', { className: 'v', text: money(data.totals.total) })]));
    st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: '💵 ' + t('cash') }), el('div', { className: 'v', text: money(data.totals.cash) })]));
    st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: '📱 ' + t('qr') }), el('div', { className: 'v', text: money(data.totals.qr) })]));
    st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: t('count') }), el('div', { className: 'v', text: String(data.totals.count) })]));
    st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: '↩️ ' + t('voidedN') }), el('div', { className: 'v', text: String(data.totals.voided || 0) })]));
    if (data.totals.refunds) {
      st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: t('refunds') }), el('div', { className: 'v', text: '−' + money(data.totals.refunds) })]));
      st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: t('netRevenue') }), el('div', { className: 'v', text: money(data.totals.net) })]));
    }
    var list = $('salesList');
    list.textContent = '';
    if (!data.sales.length) { list.appendChild(el('p', { className: 'muted', text: t('noSales') })); return; }
    data.sales.forEach(function (s) {
      var voided = s.status === 'voided';
      var meta = timeOf(s.createdAt) + (s.tableLabel ? ' · 🪑 ' + s.tableLabel : '') + (s.cashier ? ' · ' + s.cashier : '');
      var items = s.items.map(function (i) { return i.name + (i.variant ? ' (' + i.variant + ')' : '') + ' ×' + i.qty; }).join(', ');
      var card = el('div', { className: 'card' + (voided ? ' voided-card' : '') }, [
        el('div', { className: 'rc-head' }, [
          el('span', { className: 'name', text: '#' + s.no }),
          el('span', { className: 'pill ' + (voided ? 'off' : s.paymentMethod), text: voided ? t('voidedOne') : t(s.paymentMethod) }),
          el('span', { className: 'amt', text: money(s.total) })
        ]),
        el('div', { className: 'meta', text: meta }),
        el('div', { className: 'items-mini', text: items }),
        voided && s.voidReason ? el('div', { className: 'items-mini', text: '↩️ ' + s.voidReason }) : null,
        s.refunded ? el('div', { className: 'items-mini', text: t('refunded') + ': ' + money(s.refunded) }) : null
      ]);
      var row = el('div', { className: 'row' });
      if (s.canVoid) row.appendChild(el('button', { className: 'btn btn-small btn-danger', type: 'button', text: t('voidSale'), onclick: function (ev) { voidSaleFlow(s, ev.currentTarget); } }));
      if (s.canRefund) row.appendChild(el('button', { className: 'btn btn-small', type: 'button', text: t('refundSale'), onclick: function () { refundFlow(s); } }));
      if (row.childNodes.length) card.appendChild(row);
      list.appendChild(card);
    });
  }

  function voidSaleFlow(s, btn) {
    promptBox(t('voidSale') + ' #' + s.no + ' · ' + money(s.total), t('voidReasonQ')).then(function (reason) {
      if (!reason) return;
      busy(btn, function () {
        return mutate('sales.void', { saleId: s.saleId, reason: reason }).then(function () { toast(t('saved')); return loadSales(); });
      });
    });
  }

  function refundFlow(s) {
    var left = s.total - (s.refunded || 0);
    var amount = field(t('refundAmount'), String(left), 'text');
    amount.input.setAttribute('inputmode', 'numeric');
    var method = 'cash';
    var methods = chipGroup(['cash', 'qr'], function (m) { return t(m); }, method, function (m) { method = m; });
    var reason = field(t('voidReasonQ'), '');
    var h = modal({
      title: t('refundSale') + ' #' + s.no,
      body: [el('p', { className: 'muted', text: t('refundHint') }), amount.node, methods, reason.node],
      buttons: [
        { label: t('confirm'), kind: 'btn-primary', onClick: function () {
          var n = Number(amount.input.value.replace(/[^\d]/g, ''));
          var r = reason.input.value.trim();
          if (!n || !r) { toast(errText('BAD_REQUEST')); return; }
          return mutate('sales.refund', { saleId: s.saleId, amount: n, method: method, reason: r }).then(function () {
            h.close(); toast(t('saved')); return loadSales();
          }, function (e) { if (!isAuthErr(e)) toast(errText(e.code)); throw e; });
        } },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  // ---------- Товары (владелец/муж) ----------
  function loadAdminProducts() {
    return api('products.list').then(function (res) { state.adminProducts = res.products; renderAdminProducts(); });
  }

  function renderAdminProducts() {
    var list = $('productsAdminList');
    list.textContent = '';
    var lastCat = null;
    state.adminProducts.forEach(function (p) {
      if (p.category !== lastCat) { lastCat = p.category; list.appendChild(el('h2', { className: 'small', text: p.category, style: 'margin:8px 0 0' })); }
      var pills = [];
      if (!p.confirmed) pills.push(el('span', { className: 'pill draft', text: t('draft') }));
      if (!p.active) pills.push(el('span', { className: 'pill off', text: t('off') }));
      var card = el('button', { className: 'card', type: 'button', style: 'text-align:left' }, [
        el('div', { className: 'rc-head' }, [
          el('span', { className: 'name', text: p.nameVi + (p.variants.length ? ' (' + p.variants.join('/') + ')' : '') }),
          el('span', { className: 'amt', text: p.price ? money(p.price) : '—' })
        ]),
        pills.length ? el('div', { className: 'row' }, pills) : null,
        p.note ? el('div', { className: 'items-mini', text: p.note }) : null
      ]);
      card.addEventListener('click', function () { editProduct(p); });
      list.appendChild(card);
    });
  }

  function field(label, value, type) {
    var inp = el('input', { className: 'inp', type: type || 'text', inputmode: type === 'number' ? 'numeric' : null });
    inp.value = value === null || value === undefined ? '' : value;
    return { node: el('label', {}, [label, inp]), input: inp };
  }
  function check(label, value) {
    var inp = el('input', { type: 'checkbox' });
    inp.checked = !!value;
    return { node: el('label', { className: 'check' }, [inp, label]), input: inp };
  }

  function editProduct(p) {
    var isNew = !p;
    p = p || { category: state.adminProducts && state.adminProducts.length ? state.adminProducts[state.adminProducts.length - 1].category : '', nameVi: '', nameRu: '', unit: '', price: null, variants: [], confirmed: false, active: false, note: '' };
    var f = {
      nameVi: field(t('nameVi'), p.nameVi), nameRu: field(t('nameRu'), p.nameRu), category: field(t('category'), p.category),
      price: field(t('price'), p.price, 'number'), unit: field(t('unit'), p.unit), variants: field(t('variants'), p.variants.join(', ')),
      note: field(t('note'), p.note), confirmed: check(t('confirmed'), p.confirmed), active: check(t('active'), p.active)
    };
    var h = modal({
      title: isNew ? t('addProduct') : t('editProduct'),
      body: Object.keys(f).map(function (k) { return f[k].node; }),
      buttons: [
        {
          label: t('save'), kind: 'btn-primary', onClick: function () {
            var priceRaw = f.price.input.value.replace(/[^\d]/g, '');
            var changes = {
              nameVi: f.nameVi.input.value.trim(), nameRu: f.nameRu.input.value.trim(), category: f.category.input.value.trim(),
              unit: f.unit.input.value.trim(), note: f.note.input.value.trim(),
              price: priceRaw ? Number(priceRaw) : null,
              variants: f.variants.input.value.split(',').map(function (s) { return s.trim(); }).filter(Boolean),
              confirmed: f.confirmed.input.checked, active: f.active.input.checked
            };
            var req = isNew ? mutate('products.create', changes) : mutate('products.update', { productId: p.productId, expectedVersion: p.version, changes: changes });
            return req.then(function () {
              h.close();
              toast(t('saved'));
              loadProducts().catch(function () {});
              return loadAdminProducts();
            }, function (e) {
              if (!isAuthErr(e)) toast(errText(e.code));
              if (e.code === 'VERSION_CONFLICT') { h.close(); loadAdminProducts().catch(function () {}); }
              throw e;
            });
          }
        },
        { label: t('cancel'), kind: 'btn-ghost' }
      ]
    });
  }

  // ---------- Пользователи ----------
  function loadUsers() {
    return api('users.list').then(function (res) { state.usersData = res; renderUsers(); });
  }

  function renderUsers() {
    var list = $('usersList');
    list.textContent = '';
    var data = state.usersData;
    if (!data.users.length) { list.appendChild(el('p', { className: 'muted', text: t('noUsers') })); return; }
    data.users.forEach(function (u) { list.appendChild(userCard(u, data.assignableRoles)); });
  }

  function roleSelect(roles, current) {
    var sel = el('select');
    roles.forEach(function (r) {
      var o = el('option', { value: r, text: roleLabel(r) });
      if (r === current || (!current && r === 'staff')) o.selected = true;
      sel.appendChild(o);
    });
    return sel;
  }

  function userCard(u, assignable) {
    var card = el('div', { className: 'card' }, [
      el('div', { className: 'name', text: (u.name || u.email) + (u.isSelf ? ' ' + t('you') : '') }),
      el('div', { className: 'meta', text: u.email }),
      el('div', { className: 'status status-' + u.status, text: t('status_' + u.status) + ' · ' + roleLabel(u.role) })
    ]);
    if (u.status === 'blocked' && u.blockReason) card.appendChild(el('div', { className: 'meta', text: t('blockedReason') + ': ' + u.blockReason }));
    var acts = u.actions || [];
    if (acts.indexOf('approve') >= 0 || acts.indexOf('setRole') >= 0) {
      var sel = roleSelect(assignable, u.role);
      var isApprove = acts.indexOf('approve') >= 0;
      var btn = el('button', { className: 'btn btn-primary', type: 'button', text: isApprove ? t('approve') : t('changeRole') });
      btn.addEventListener('click', function () {
        busy(btn, function () {
          return mutate(isApprove ? 'users.approve' : 'users.setRole', { userId: u.userId, role: sel.value }).then(afterUserChange);
        });
      });
      card.appendChild(el('div', { className: 'row' }, [sel, btn]));
    }
    var row = el('div', { className: 'row' });
    if (acts.indexOf('revokeSessions') >= 0) {
      var rb = el('button', { className: 'btn', type: 'button', text: t('revokeSessions') });
      rb.addEventListener('click', function () {
        confirmBox(t('confirmRevoke')).then(function (ok) {
          if (ok) busy(rb, function () { return mutate('users.revokeSessions', { userId: u.userId }).then(afterUserChange); });
        });
      });
      row.appendChild(rb);
    }
    if (acts.indexOf('block') >= 0) {
      var bb = el('button', { className: 'btn btn-danger', type: 'button', text: t('block') });
      bb.addEventListener('click', function () {
        promptBox(t('block') + ': ' + (u.name || u.email), t('reasonPrompt')).then(function (reason) {
          if (reason) busy(bb, function () { return mutate('users.block', { userId: u.userId, reason: reason }).then(afterUserChange); });
        });
      });
      row.appendChild(bb);
    }
    if (acts.indexOf('unblock') >= 0) {
      var ub = el('button', { className: 'btn', type: 'button', text: t('unblock') });
      ub.addEventListener('click', function () { busy(ub, function () { return mutate('users.unblock', { userId: u.userId }).then(afterUserChange); }); });
      row.appendChild(ub);
    }
    if (row.childNodes.length) card.appendChild(row);
    return card;
  }

  function afterUserChange() { toast(t('saved')); return loadUsers(); }

  // ---------- Обработчики ----------
  function wire() {
    $('langBtn').addEventListener('click', function () {
      state.lang = state.lang === 'vi' ? 'ru' : 'vi';
      lsSet(LS.lang, state.lang);
      applyI18n();
      if (state.user && state.user.status !== 'blocked') mutate('me.setLanguage', { language: state.lang }).catch(function () {});
    });
    document.querySelectorAll('.js-logout').forEach(function (b) { b.addEventListener('click', function () { busy(b, logout); }); });
    document.querySelectorAll('.js-back-more').forEach(function (b) { b.addEventListener('click', function () { setView('more'); }); });
    document.querySelectorAll('.tab').forEach(function (b) {
      b.addEventListener('click', function () { setView(b.getAttribute('data-view')); });
    });
    $('checkAgainBtn').addEventListener('click', function () { var b = this; busy(b, function () { return refreshMe(false); }); });
    $('retryBootBtn').addEventListener('click', function () { $('retryBootBtn').hidden = true; boot(); });
    $('copyLinkBtn').addEventListener('click', function () {
      var link = location.origin + location.pathname;
      var done = function () { toast(t('linkCopied')); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(done, function () { window.prompt(t('copyLink'), link); });
      else window.prompt(t('copyLink'), link);
    });

    // Касса
    $('cartToggle').addEventListener('click', function () { state.cartOpen = !state.cartOpen; renderCart(); });
    $('cartClear').addEventListener('click', function () {
      if (state.pendingSale) return;
      confirmBox(t('clearCart'), t('clear'), true).then(function (ok) { if (ok) clearCart(); });
    });
    $('payCashBtn').addEventListener('click', function () { payFlow('cash'); });
    $('payQrBtn').addEventListener('click', function () { payFlow('qr'); });

    // Чеки
    $('reloadSalesBtn').addEventListener('click', function () { var b = this; busy(b, loadSales); });
    $('dayToday').addEventListener('click', function () { state.salesDay = 'today'; loadSales().catch(function (e) { toast(errText(e.code)); }); });
    $('dayYesterday').addEventListener('click', function () { state.salesDay = 'yesterday'; loadSales().catch(function (e) { toast(errText(e.code)); }); });

    // Ещё
    $('pingBtn').addEventListener('click', function () {
      var b = this;
      var out = $('pingResult');
      busy(b, function () {
        return api('protected.ping').then(function (res) {
          out.className = 'result';
          out.textContent = t('accessOk') + ' ' + t('serverTime') + ': ' + new Date(res.serverTime).toLocaleString(state.lang === 'vi' ? 'vi-VN' : 'ru-RU');
          out.hidden = false;
          $('versionLine').textContent = 'v' + res.version;
        }, function (e) { out.className = 'result bad'; out.textContent = errText(e.code); out.hidden = false; throw e; });
      });
    });
    $('usersBtn').addEventListener('click', function () { var b = this; busy(b, function () { return loadUsers().then(function () { setView('users'); }); }); });
    $('reloadUsersBtn').addEventListener('click', function () { var b = this; busy(b, loadUsers); });
    $('productsBtn').addEventListener('click', function () { var b = this; busy(b, function () { return loadAdminProducts().then(function () { setView('products'); }); }); });
    $('addProductBtn').addEventListener('click', function () { editProduct(null); });
    $('helpBtn').addEventListener('click', function () { setView('help'); });
    $('cashDayBtn').addEventListener('click', function () { setView('cashday'); });
    $('reloadCashDayBtn').addEventListener('click', function () { var b = this; busy(b, function () { return loadShift().then(loadCashDay); }); });
    $('segDash').addEventListener('click', function () { owner.tab = 'dash'; loadOwner(); });
    $('segExp').addEventListener('click', function () { owner.tab = 'exp'; loadOwner(); });
    $('segBak').addEventListener('click', function () { owner.tab = 'bak'; loadOwner(); });
    $('segStock').addEventListener('click', function () { owner.tab = 'stock'; loadOwner(); });
    $('logoutAllBtn').addEventListener('click', function () {
      var b = this;
      confirmBox(t('confirmLogoutAll')).then(function (ok) {
        if (ok) busy(b, function () { return mutate('auth.logoutAll', {}).then(function () { clearSession(); showLogin(); }); });
      });
    });

    window.addEventListener('online', function () { setOnline(true); });
    window.addEventListener('offline', function () { setOnline(false); });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && state.session) {
        refreshMe(true);
        if (state.screen === 'app') { loadProducts().catch(function () {}); loadShift().catch(function () {}); }
      }
    });
  }

  function boot() {
    applyI18n();
    if (!CFG.API_URL || !CFG.GOOGLE_CLIENT_ID) { show('config'); return; }
    if (state.session) { show('loading'); refreshMe(false); }
    else showLogin();
  }

  wire();
  boot();
  setTimeout(checkForUpdate, 1500);
  setInterval(function () { if (!document.hidden) checkForUpdate(); }, 5 * 60000);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') checkForUpdate(); });
  $('appUpdateBtn').addEventListener('click', function () { reloadApp(); });
  $('appVersionLine').textContent = t('appVersion') + ': ' + APP_VERSION;
})();
