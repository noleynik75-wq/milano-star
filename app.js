(function () {
  'use strict';

  var CFG = window.MSH2_CONFIG || {};
  var LS_SESSION = 'msh2.session';
  var LS_LANG = 'msh2.lang';

  // ---------- Тексты ----------
  var I18N = {
    vi: {
      loading: 'Đang tải…',
      retry: 'Thử lại',
      configTitle: 'Chưa cấu hình',
      configText: 'Ứng dụng chưa được cài đặt xong. Vui lòng báo chủ quán.',
      signInTitle: 'Đăng nhập',
      signInText: 'Đăng nhập bằng tài khoản Google của bạn.',
      pendingTitle: 'Đang chờ duyệt',
      pendingText: 'Tài khoản của bạn đã được ghi nhận. Vui lòng chờ chủ quán phê duyệt.',
      checkAgain: 'Kiểm tra lại',
      blockedTitle: 'Tài khoản bị khóa',
      blockedText: 'Bạn không còn quyền truy cập. Vui lòng liên hệ chủ quán.',
      logout: 'Đăng xuất',
      logoutAll: 'Đăng xuất trên mọi thiết bị',
      hello: 'Xin chào',
      stage1Note: 'Đây là bản thử đăng nhập. Chức năng bán hàng sẽ có ở giai đoạn sau.',
      testAccess: 'Kiểm tra quyền truy cập',
      accessOk: 'Máy chủ xác nhận: bạn có quyền truy cập.',
      serverTime: 'Giờ máy chủ',
      usersTitle: 'Người dùng',
      back: '← Quay lại',
      refresh: 'Làm mới',
      approve: 'Duyệt',
      changeRole: 'Đổi vai trò',
      block: 'Khóa',
      unblock: 'Mở khóa',
      revokeSessions: 'Thoát mọi thiết bị',
      reasonPrompt: 'Lý do khóa:',
      confirmRevoke: 'Đăng xuất người này trên mọi thiết bị?',
      confirmLogoutAll: 'Đăng xuất bạn trên mọi thiết bị?',
      saved: 'Đã lưu',
      you: '(bạn)',
      noUsers: 'Chưa có người dùng.',
      online: 'Đã kết nối',
      offline: 'Mất kết nối',
      role_owner: 'Chủ quán',
      role_admin: 'Quản lý',
      role_senior_cashier: 'Thu ngân chính',
      role_staff: 'Nhân viên',
      role_none: 'Chưa có vai trò',
      status_pending: 'Chờ duyệt',
      status_active: 'Đang hoạt động',
      status_blocked: 'Đã khóa',
      blockedReason: 'Lý do',
      err_NETWORK: 'Không kết nối được máy chủ. Kết quả chưa rõ — bấm lại để kiểm tra.',
      err_SESSION_INVALID: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
      err_AUTH_INVALID_TOKEN: 'Đăng nhập Google không hợp lệ. Thử lại.',
      err_AUTH_EMAIL_UNVERIFIED: 'Email Google chưa được xác minh.',
      err_NOT_ALLOWED: 'Bạn không được phép làm việc này.',
      err_FORBIDDEN: 'Bạn không được phép làm việc này.',
      err_LAST_OWNER: 'Không thể khóa hoặc đổi vai trò chủ quán cuối cùng.',
      err_BUSY: 'Máy chủ đang bận. Thử lại sau vài giây.',
      err_NOT_CONFIGURED: 'Máy chủ chưa được cấu hình.',
      err_generic: 'Có lỗi xảy ra. Thử lại.'
    },
    ru: {
      loading: 'Загрузка…',
      retry: 'Повторить',
      configTitle: 'Не настроено',
      configText: 'В config.js не указаны API_URL и GOOGLE_CLIENT_ID.',
      signInTitle: 'Вход',
      signInText: 'Войдите через свой Google-аккаунт.',
      pendingTitle: 'Ожидание одобрения',
      pendingText: 'Ваш аккаунт зарегистрирован. Дождитесь одобрения владельца.',
      checkAgain: 'Проверить снова',
      blockedTitle: 'Доступ заблокирован',
      blockedText: 'У вас больше нет доступа. Обратитесь к владельцу.',
      logout: 'Выйти',
      logoutAll: 'Выйти на всех устройствах',
      hello: 'Здравствуйте',
      stage1Note: 'Это тестовая версия входа. Касса появится на следующих этапах.',
      testAccess: 'Проверить доступ',
      accessOk: 'Сервер подтвердил доступ.',
      serverTime: 'Время сервера',
      usersTitle: 'Пользователи',
      back: '← Назад',
      refresh: 'Обновить',
      approve: 'Одобрить',
      changeRole: 'Сменить роль',
      block: 'Заблокировать',
      unblock: 'Разблокировать',
      revokeSessions: 'Выйти на всех устройствах',
      reasonPrompt: 'Причина блокировки:',
      confirmRevoke: 'Завершить все сессии этого пользователя?',
      confirmLogoutAll: 'Выйти на всех ваших устройствах?',
      saved: 'Сохранено',
      you: '(вы)',
      noUsers: 'Пользователей пока нет.',
      online: 'Связь есть',
      offline: 'Нет связи',
      role_owner: 'Владелец',
      role_admin: 'Администратор',
      role_senior_cashier: 'Старший кассир',
      role_staff: 'Сотрудник',
      role_none: 'Без роли',
      status_pending: 'Ожидает',
      status_active: 'Активен',
      status_blocked: 'Заблокирован',
      blockedReason: 'Причина',
      err_NETWORK: 'Нет связи с сервером. Результат не известен — нажмите ещё раз, чтобы проверить.',
      err_SESSION_INVALID: 'Сессия истекла. Войдите снова.',
      err_AUTH_INVALID_TOKEN: 'Вход через Google не прошёл проверку. Попробуйте снова.',
      err_AUTH_EMAIL_UNVERIFIED: 'Email Google-аккаунта не подтверждён.',
      err_NOT_ALLOWED: 'Это действие вам не разрешено.',
      err_FORBIDDEN: 'Это действие вам не разрешено.',
      err_LAST_OWNER: 'Нельзя заблокировать или понизить последнего владельца.',
      err_BUSY: 'Сервер занят. Повторите через несколько секунд.',
      err_NOT_CONFIGURED: 'Сервер не настроен.',
      err_generic: 'Произошла ошибка. Повторите.'
    }
  };

  // ---------- Состояние ----------
  var state = {
    lang: lsGet(LS_LANG) === 'ru' ? 'ru' : 'vi',
    session: lsGet(LS_SESSION),
    user: null,
    screen: 'loading',
    online: navigator.onLine,
    usersData: null
  };
  var pendingRequestIds = {};
  var gsiReady = false;
  var pollTimer = null;

  function $(id) { return document.getElementById(id); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* приватный режим */ } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }

  function t(key) {
    var d = I18N[state.lang];
    return (d && d[key]) || I18N.ru[key] || key;
  }
  function errText(code) { return I18N[state.lang]['err_' + code] ? t('err_' + code) : t('err_generic'); }
  function roleLabel(role) { return role ? t('role_' + role) : t('role_none'); }

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    var b = new Uint8Array(16);
    crypto.getRandomValues(b);
    b[6] = (b[6] & 15) | 64;
    b[8] = (b[8] & 63) | 128;
    var h = Array.prototype.map.call(b, function (x) { return (x + 256).toString(16).slice(1); }).join('');
    return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') node.textContent = attrs[k];
      else if (k === 'className') node.className = attrs[k];
      else if (k === 'onclick') node.addEventListener('click', attrs[k]);
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
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

  // ---------- Экраны ----------
  function show(name) {
    state.screen = name;
    document.querySelectorAll('main > section').forEach(function (s) {
      s.hidden = s.id !== 'screen-' + name;
    });
    clearInterval(pollTimer);
    pollTimer = null;
    if (name === 'pending') pollTimer = setInterval(function () { refreshMe(true); }, 30000);
    if (name === 'home' || name === 'users') pollTimer = setInterval(function () { refreshMe(true); }, 60000);
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    $('langBtn').textContent = state.lang === 'vi' ? 'RU' : 'VI';
    renderConn();
    if (state.user) renderUserBits();
    if (state.screen === 'users' && state.usersData) renderUsers();
    if (state.screen === 'login') renderGsiButton();
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
    $('usersBtn').hidden = !(u.permissions && u.permissions.manageUsers);
    $('pendingWho').textContent = u.email;
  }

  function route() {
    var u = state.user;
    if (!u) return showLogin();
    renderUserBits();
    if (u.status === 'pending') return show('pending');
    if (u.status === 'active') {
      if (state.screen !== 'users') show('home');
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
        if (!res) {
          setOnline(false);
          throw makeErr('NETWORK');
        }
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
   * Изменяющий запрос. request_id сохраняется до получения ответа сервера,
   * поэтому повторное нажатие после обрыва связи не создаёт дубль.
   */
  function mutate(action, payload) {
    var key = action + '|' + JSON.stringify(payload || {});
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
    if (code === 'SESSION_INVALID') {
      clearSession();
      showLogin();
      toast(errText(code));
    } else if (code === 'BLOCKED') {
      clearSession();
      show('blocked');
    } else if (code === 'PENDING') {
      if (state.user) state.user.status = 'pending';
      show('pending');
    }
  }

  function clearSession() {
    state.session = null;
    state.user = null;
    state.usersData = null;
    lsDel(LS_SESSION);
  }

  /** Выполнить действие кнопки с защитой от двойного нажатия. */
  function busy(button, fn) {
    if (button.disabled) return;
    button.disabled = true;
    Promise.resolve().then(fn).catch(function (e) {
      if (!['SESSION_INVALID', 'BLOCKED', 'PENDING'].includes(e.code)) toast(errText(e.code));
    }).then(function () { button.disabled = false; });
  }

  function refreshMe(silent) {
    if (!state.session) return Promise.resolve();
    return api('me').then(function (res) {
      setUser(res.user);
      route();
    }, function (e) {
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
      lsSet(LS_LANG, state.lang);
      applyI18n();
    }
  }

  // ---------- Вход через Google ----------
  function showLogin() {
    show('login');
    renderGsiButton();
  }

  function renderGsiButton() {
    if (!(window.google && google.accounts && google.accounts.id)) {
      setTimeout(renderGsiButton, 300);
      return;
    }
    if (!gsiReady) {
      google.accounts.id.initialize({
        client_id: CFG.GOOGLE_CLIENT_ID,
        callback: onGoogleCredential,
        auto_select: false,
        cancel_on_tap_outside: true,
        ux_mode: 'popup'
      });
      gsiReady = true;
    }
    var box = $('gsiButton');
    box.textContent = '';
    google.accounts.id.renderButton(box, {
      theme: 'outline', size: 'large', text: 'signin_with', shape: 'pill', locale: state.lang, width: 300
    });
  }

  function onGoogleCredential(resp) {
    $('loginError').hidden = true;
    show('loading');
    api('auth.login', {
      idToken: resp.credential,
      language: state.lang,
      userAgent: navigator.userAgent.slice(0, 200)
    }).then(function (res) {
      state.session = res.session;
      lsSet(LS_SESSION, res.session);
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
    p.then(function () {
      clearSession();
      if (window.google && google.accounts && google.accounts.id) google.accounts.id.disableAutoSelect();
      showLogin();
    });
  }

  // ---------- Управление пользователями ----------
  function loadUsers() {
    return api('users.list').then(function (res) {
      state.usersData = res;
      renderUsers();
    });
  }

  function renderUsers() {
    var list = $('usersList');
    list.textContent = '';
    var data = state.usersData;
    if (!data.users.length) {
      list.appendChild(el('p', { className: 'muted', text: t('noUsers') }));
      return;
    }
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
    if (u.status === 'blocked' && u.blockReason) {
      card.appendChild(el('div', { className: 'meta', text: t('blockedReason') + ': ' + u.blockReason }));
    }
    var acts = u.actions || [];

    if (acts.indexOf('approve') >= 0 || acts.indexOf('setRole') >= 0) {
      var sel = roleSelect(assignable, u.role);
      var isApprove = acts.indexOf('approve') >= 0;
      var btn = el('button', { className: 'btn btn-primary', type: 'button', text: isApprove ? t('approve') : t('changeRole') });
      btn.addEventListener('click', function () {
        busy(btn, function () {
          return mutate(isApprove ? 'users.approve' : 'users.setRole', { userId: u.userId, role: sel.value })
            .then(afterChange);
        });
      });
      card.appendChild(el('div', { className: 'row' }, [sel, btn]));
    }

    var row = el('div', { className: 'row' });
    if (acts.indexOf('revokeSessions') >= 0) {
      var rb = el('button', { className: 'btn', type: 'button', text: t('revokeSessions') });
      rb.addEventListener('click', function () {
        if (!window.confirm(t('confirmRevoke'))) return;
        busy(rb, function () { return mutate('users.revokeSessions', { userId: u.userId }).then(afterChange); });
      });
      row.appendChild(rb);
    }
    if (acts.indexOf('block') >= 0) {
      var bb = el('button', { className: 'btn btn-danger', type: 'button', text: t('block') });
      bb.addEventListener('click', function () {
        var reason = window.prompt(t('reasonPrompt'));
        if (!reason || !reason.trim()) return;
        busy(bb, function () { return mutate('users.block', { userId: u.userId, reason: reason.trim() }).then(afterChange); });
      });
      row.appendChild(bb);
    }
    if (acts.indexOf('unblock') >= 0) {
      var ub = el('button', { className: 'btn', type: 'button', text: t('unblock') });
      ub.addEventListener('click', function () {
        busy(ub, function () { return mutate('users.unblock', { userId: u.userId }).then(afterChange); });
      });
      row.appendChild(ub);
    }
    if (row.childNodes.length) card.appendChild(row);
    return card;
  }

  function afterChange() {
    toast(t('saved'));
    return loadUsers();
  }

  // ---------- Обработчики ----------
  function wire() {
    $('langBtn').addEventListener('click', function () {
      state.lang = state.lang === 'vi' ? 'ru' : 'vi';
      lsSet(LS_LANG, state.lang);
      applyI18n();
      if (state.user && state.user.status !== 'blocked') {
        mutate('me.setLanguage', { language: state.lang }).catch(function () {});
      }
    });
    document.querySelectorAll('.js-logout').forEach(function (b) {
      b.addEventListener('click', function () { busy(b, logout); });
    });
    $('checkAgainBtn').addEventListener('click', function () {
      var b = this;
      busy(b, function () { return refreshMe(false); });
    });
    $('retryBootBtn').addEventListener('click', function () {
      $('retryBootBtn').hidden = true;
      boot();
    });
    $('pingBtn').addEventListener('click', function () {
      var b = this;
      var out = $('pingResult');
      busy(b, function () {
        return api('protected.ping').then(function (res) {
          out.className = 'result';
          out.textContent = t('accessOk') + ' ' + t('serverTime') + ': ' + new Date(res.serverTime).toLocaleString(state.lang === 'vi' ? 'vi-VN' : 'ru-RU');
          out.hidden = false;
        }, function (e) {
          out.className = 'result bad';
          out.textContent = errText(e.code);
          out.hidden = false;
          throw e;
        });
      });
    });
    $('usersBtn').addEventListener('click', function () {
      var b = this;
      busy(b, function () { return loadUsers().then(function () { show('users'); }); });
    });
    $('reloadUsersBtn').addEventListener('click', function () {
      var b = this;
      busy(b, loadUsers);
    });
    $('backBtn').addEventListener('click', function () { show('home'); });
    $('logoutAllBtn').addEventListener('click', function () {
      var b = this;
      if (!window.confirm(t('confirmLogoutAll'))) return;
      busy(b, function () {
        return mutate('auth.logoutAll', {}).then(function () {
          clearSession();
          showLogin();
        });
      });
    });
    window.addEventListener('online', function () { setOnline(true); });
    window.addEventListener('offline', function () { setOnline(false); });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && state.session) refreshMe(true);
    });
  }

  function boot() {
    applyI18n();
    if (!CFG.API_URL || !CFG.GOOGLE_CLIENT_ID) {
      show('config');
      return;
    }
    if (state.session) {
      show('loading');
      refreshMe(false);
    } else {
      showLogin();
    }
  }

  wire();
  boot();
})();
