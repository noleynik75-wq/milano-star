(function () {
  'use strict';

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

  function setView(name) {
    state.view = name;
    document.querySelectorAll('#screen-app .view').forEach(function (v) { v.hidden = v.id !== 'view-' + name; });
    var tabName = ['users', 'products', 'help', 'owner'].indexOf(name) >= 0 ? 'more' : name;
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-view') === tabName); });
    if (name === 'receipts') loadSales().catch(function () {});
    if (name === 'help') renderHelp();
    if (name === 'owner') renderOwner();
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
      if (state.view === 'owner') renderOwner();
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
    $('ownerBtn').hidden = !isAdmin();
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
    var list = state.products.filter(function (p) { return !state.category || p.category === state.category; });
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
    var visible = state.screen === 'app' && state.view === 'sell' && state.cart.length > 0;
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
      ['7. Ghi sai hóa đơn', 'Hiện chưa hủy được trong ứng dụng. Báo ngay cho chủ quán số hóa đơn (#) và lý do. Chức năng hủy sẽ có trong bản sau.'],
      ['8. Hết giờ làm', 'Hiện chưa có mở/đóng ca trong ứng dụng — sẽ có trong bản sau. Khi đổi người, bấm Thêm → Đăng xuất nếu dùng chung điện thoại.'],
      ['9. Mất điện thoại', 'Báo ngay cho chủ quán — chủ quán sẽ đăng xuất tài khoản của bạn trên mọi thiết bị.']
    ],
    ru: [
      ['1. Открыть приложение', 'Открывайте сайт в Chrome (Android) или Safari (iPhone), НЕ внутри Zalo/Messenger. В первый раз добавьте ярлык на главный экран (Chrome: ⋮ → «Добавить на главный экран»; iPhone: «Поделиться» → «На экран „Домой“»).'],
      ['2. Вход', 'Нажмите «Войти через Google» и выберите свой аккаунт. В первый раз нужно дождаться одобрения владельца, дальше повторно одобрять не нужно.'],
      ['3. Продажа', 'Вкладка 🛒 Касса → категория → нажмите на товар (два нажатия = две порции). Нажмите на корзину внизу, чтобы изменить количество (− / +).'],
      ['4. Оплата', 'Наличные → 💵 Наличные. Перевод → 📱 QR, но ТОЛЬКО после того, как деньги пришли на счёт (приложение банк не проверяет). Проверьте сумму → Подтвердить.'],
      ['5. Сохранилось ли?', 'Чек сохранён, только когда видно «✅ Чек сохранён №…». Если «Результат не известен» (пропала связь) — НЕ пробивайте заново, нажмите «Проверить». Дубля не будет.'],
      ['6. Чеки', 'Вкладка 🧾 Чеки: итог за сегодня, отдельно наличные и QR, список чеков.'],
      ['7. Ошибочный чек', 'Пока отменить в приложении нельзя. Сразу сообщите владельцу номер чека (#) и причину. Отмена появится в следующей версии.'],
      ['8. Конец смены', 'Открытия и закрытия смены пока нет — появится в следующей версии. Если телефон общий, при смене человека: Ещё → Выйти.'],
      ['9. Потерян телефон', 'Сразу сообщите владельцу — он завершит ваш вход на всех устройствах.']
    ]
  };

  function renderHelp() {
    var body = $('helpBody');
    body.textContent = '';
    HELP[state.lang].forEach(function (s) {
      body.appendChild(el('div', { className: 'card' }, [el('div', { className: 'name', text: s[0] }), el('div', { text: s[1] })]));
    });
  }

  // ---------- Раздел владельца ----------
  /** Что уже есть и что появится (этапы ТЗ). Кнопки ведут в готовые разделы. */
  function renderOwner() {
    var body = $('ownerBody');
    body.textContent = '';
    var ru = state.lang === 'ru';
    var items = [
      { ok: true, title: ru ? '🧾 Выручка за день' : '🧾 Doanh thu trong ngày', text: ru ? 'Все чеки, итог, наличные и QR отдельно.' : 'Tất cả hóa đơn, tổng, tiền mặt và QR.', go: function () { setView('receipts'); } },
      { ok: true, title: ru ? '🏷️ Товары и цены' : '🏷️ Sản phẩm & giá', text: ru ? 'Изменить цену, включить или выключить товар, добавить новый.' : 'Sửa giá, bật/tắt, thêm món mới.', go: function () { $('productsBtn').click(); } },
      { ok: true, title: ru ? '👥 Сотрудники' : '👥 Nhân viên', text: ru ? 'Одобрение, роли, блокировка, выход на всех устройствах.' : 'Duyệt, vai trò, khóa.', go: function () { $('usersBtn').click(); } },
      { ok: false, title: ru ? '↩️ Отмены, смены, закрытие дня' : '↩️ Hủy hóa đơn, ca, đóng ngày', text: ru ? 'Отмена чека с причиной, начальная наличность, сверка кассы, расхождения.' : 'Hủy hóa đơn, tiền đầu ca, đối chiếu tiền mặt.' },
      { ok: false, title: ru ? '💸 Закупки и расходы' : '💸 Nhập hàng & chi phí', text: ru ? 'Закупки у поставщиков, расходы (аренда, свет…), вложения, остатки сигарет и банок.' : 'Nhập hàng, chi phí, vốn đầu tư, tồn kho.' },
      { ok: false, title: ru ? '🧮 Себестоимость' : '🧮 Giá vốn', text: ru ? 'Рецептуры напитков и себестоимость — для расчёта прибыли.' : 'Công thức và giá vốn để tính lãi.' },
      { ok: false, title: ru ? '📈 Дашборд: прибыль, ROI, графики' : '📈 Báo cáo: lãi, ROI, biểu đồ', text: ru ? 'Продажи по дням, популярные товары, расходы, прибыль и окупаемость — когда будут данные о расходах и вложениях.' : 'Doanh thu theo ngày, món bán chạy, chi phí, lãi.' }
    ];
    items.forEach(function (it) {
      var card = el('div', { className: 'card' }, [
        el('div', { className: 'rc-head' }, [el('span', { className: 'name', text: it.title }), el('span', { className: 'pill ' + (it.ok ? 'cash' : 'draft'), text: it.ok ? t('available') : t('soon') })]),
        el('div', { className: 'items-mini', text: it.text })
      ]);
      if (it.go) card.appendChild(el('button', { className: 'btn btn-small', type: 'button', text: t('open') + ' →', onclick: it.go }));
      body.appendChild(card);
    });
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
    $('salesScope').textContent = data.date + ' · ' + (data.scope === 'all' ? t('scopeAll') : t('scopeOwn'));
    var st = $('salesTotals');
    st.textContent = '';
    st.appendChild(el('div', { className: 'stat big' }, [el('div', { className: 'k', text: t('total') }), el('div', { className: 'v', text: money(data.totals.total) })]));
    st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: '💵 ' + t('cash') }), el('div', { className: 'v', text: money(data.totals.cash) })]));
    st.appendChild(el('div', { className: 'stat' }, [el('div', { className: 'k', text: '📱 ' + t('qr') }), el('div', { className: 'v', text: money(data.totals.qr) })]));
    st.appendChild(el('div', { className: 'stat big' }, [el('div', { className: 'k', text: t('count') }), el('div', { className: 'v', text: String(data.totals.count) })]));
    var list = $('salesList');
    list.textContent = '';
    if (!data.sales.length) { list.appendChild(el('p', { className: 'muted', text: t('noSales') })); return; }
    data.sales.forEach(function (s) {
      var meta = timeOf(s.createdAt) + (s.tableLabel ? ' · 🪑 ' + s.tableLabel : '') + (s.cashier ? ' · ' + s.cashier : '');
      var items = s.items.map(function (i) { return i.name + (i.variant ? ' (' + i.variant + ')' : '') + ' ×' + i.qty; }).join(', ');
      list.appendChild(el('div', { className: 'card' }, [
        el('div', { className: 'rc-head' }, [
          el('span', { className: 'name', text: '#' + s.no }),
          el('span', { className: 'pill ' + s.paymentMethod, text: t(s.paymentMethod) }),
          el('span', { className: 'amt', text: money(s.total) })
        ]),
        el('div', { className: 'meta', text: meta }),
        el('div', { className: 'items-mini', text: items })
      ]));
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
    $('ownerBtn').addEventListener('click', function () { setView('owner'); });
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
        if (state.screen === 'app') loadProducts().catch(function () {});
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
})();
