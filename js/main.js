/* ============================================================
   交互逻辑（v2 重写）
   - 全部使用事件委托：动态内容也能响应，绝不出现"点了没反应"
   - 锚点滚动带 offset 补偿，导航不再遮挡目标
   - reveal 动画带兜底：所有元素最终必定可见
   ============================================================ */
(function () {
  "use strict";

  var doc = document;

  function ready(fn) {
    if (doc.readyState === "loading") {
      doc.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    initNav();
    initSmoothAnchors();
    initReveal();
    initCounters();
    renderStagePanels();
    renderResources();
    renderCalendar();
    renderFAQ();
    initBackTop();

    // 用事件委托统一接管所有带 data-action 的按钮（含动态渲染的）
    doc.addEventListener("click", delegate);
  });

  /* ---------- 导航：滚动状态 + 移动端菜单 ---------- */
  function initNav() {
    var navbar = doc.getElementById("navbar");
    var toggle = doc.getElementById("navToggle");
    var links = doc.querySelector(".nav-links");

    function onScroll() {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
      var btn = doc.getElementById("backTop");
      if (btn) btn.classList.toggle("show", window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && links) {
      toggle.addEventListener("click", function () {
        links.classList.toggle("open");
      });
      // 点击导航链接后收起菜单
      links.addEventListener("click", function (e) {
        if (e.target.closest && e.target.closest("a")) {
          links.classList.remove("open");
        }
      });
    }
  }

  /* ---------- 锚点平滑滚动 + 头部偏移 ---------- */
  function initSmoothAnchors() {
    doc.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = doc.getElementById(id.slice(1));
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 74;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  /* ---------- 滚动渐入（带兜底） ---------- */
  function initReveal() {
    var items = doc.querySelectorAll(
      ".road-node, .stage-tab, .topic-card, .res-card, .cal-month, .faq-item, .section-head"
    );
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
    // 兜底：5 秒后仍未 visible 的一律显示，防止任何元素永久隐藏
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add("visible"); });
    }, 5000);
  }

  /* ---------- 数字计数 ---------- */
  function initCounters() {
    var counters = doc.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window)) {
      counters.forEach(function (c) { c.textContent = c.getAttribute("data-count"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        var target = parseInt(el.getAttribute("data-count"), 10);
        var dur = 1200;
        var t0 = performance.now();
        function tick(now) {
          var p = Math.min((now - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* ---------- 阶段面板渲染 ---------- */
  function renderStagePanels() {
    var container = doc.getElementById("stagePanels");
    if (!container || !window.STAGES) return;
    container.innerHTML = window.STAGES.map(function (s) {
      var goals = (s.goals || []).map(function (g) {
        return '<div class="goal-item"><b>' + g.k + '</b><span>' + g.v + '</span></div>';
      }).join("");
      var topics = (s.topics || []).map(function (t) {
        var items = (t.items || []).map(function (it) { return "<li>" + it + "</li>"; }).join("");
        const demoHtml = t.demo ? codeBlockHtml(t.demo) : '';
        return '<div class="topic-card">' +
          '<span class="topic-tag">' + t.tag + '</span>' +
          '<h4><span class="t-icon">' + t.icon + '</span>' + t.title + '</h4>' +
          "<ul>" + items + "</ul>" +
          demoHtml +
          "</div>";
      }).join("");
      var books = (s.books || []).map(function (b) {
        return '<div class="book-item"><span class="b-emoji">' + b.emoji + '</span>' +
          '<div><b>' + b.name + '</b><span>' + b.note + '</span></div></div>';
      }).join("");
      return '<div class="stage-panel" id="' + s.id + '">' +
        '<div class="panel-hero">' +
          '<span class="difficulty d' + s.id.slice(-1) + '">' + s.badge + '</span> ' +
          '<h3>' + s.name + '</h3>' +
          '<p>' + s.desc + '</p>' +
          '<div class="panel-goal">' + goals + '</div>' +
        '</div>' +
        '<div class="panel-grid">' + topics + '</div>' +
        '<div class="panel-books"><h4>📚 配套书籍与资源</h4><div class="book-list">' + books + '</div></div>' +
      '</div>';
    }).join("");
    // 默认显示第一个
    var first = container.querySelector(".stage-panel");
    if (first) first.classList.add("active");
  }

  /* ---------- 资源卡片渲染 ---------- */
  function renderResources() {
    var grid = doc.getElementById("resourceGrid");
    if (!grid || !window.RESOURCES) return;
    grid.innerHTML = window.RESOURCES.map(function (r) {
      return '<div class="res-card" data-type="' + r.type + '">' +
        '<span class="res-type ' + r.type + '">' + typeLabel(r.type) + '</span>' +
        '<h4>' + r.name + '</h4>' +
        '<p>' + r.desc + '</p>' +
        '<a class="res-link" href="' + r.link + '" target="_blank" rel="noopener">' + r.link + '</a>' +
      '</div>';
    }).join("");
  }

  function codeBlockHtml(code) {
    var esc = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var lines = esc.split('\n').map(function (l) {
      var strs = [];
      var cms = [];
      // 1. 字符串占位
      l = l.replace(/&quot;[^&]*?&quot;/g, function (m) {
        strs.push(m);
        return '\u0000S' + (strs.length - 1) + '\u0000';
      });
      // 2. 注释占位（#include 行 / // 注释 / /* */ 块）
      l = l.replace(/(#include[^\u0000]*|\/\/.*|\/\*[\s\S]*?\*\/)/g, function (m) {
        cms.push(m);
        return '\u0000C' + (cms.length - 1) + '\u0000';
      });
      // 3. 关键字（占位符不含字母数字，安全）
      l = l.replace(/(\b(?:int|long|char|double|bool|void|return|if|else|for|while|using|namespace|const|unsigned|string|auto|struct|class)\b)/g, '<span class="tk-kw">$1</span>');
      // 4. 函数名
      l = l.replace(/(\b(?:cout|cin|endl|main|printf|scanf)\b)/g, '<span class="tk-fn">$1</span>');
      // 5. 数字
      l = l.replace(/(\b(?:0x[0-9a-fA-F]+|\d+)\b)/g, '<span class="tk-num">$1</span>');
      // 6. 恢复注释（包 span）
      l = l.replace(/\u0000C(\d+)\u0000/g, function (_, i) { return '<span class="tk-cm">' + cms[+i] + '</span>'; });
      // 7. 恢复字符串（包 span）
      l = l.replace(/\u0000S(\d+)\u0000/g, function (_, i) { return '<span class="tk-str">' + strs[+i] + '</span>'; });
      return l;
    });
    return '<div class="code-block"><div class="cb-head">⌨ main.cpp</div><pre>' + lines.join('\n') + '</pre></div>';
  }

  function typeLabel(t) {
    var map = { oj: "在线题库", book: "经典书籍", wiki: "知识库", video: "视频课程", tool: "效率工具" };
    return map[t] || t;
  }

  /* ---------- 日历渲染 ---------- */
  function renderCalendar() {
    var container = doc.getElementById("calendar");
    if (!container || !window.CALENDAR) return;
    container.innerHTML = window.CALENDAR.map(function (c) {
      return '<div class="cal-month' + (c.hot ? " hot" : "") + '">' +
        '<div class="cal-date">' + c.date + '</div>' +
        '<h4>' + (c.hot ? "🔥 " : "") + c.title + '</h4>' +
        '<p>' + c.desc + '</p>' +
      '</div>';
    }).join("");
  }

  /* ---------- FAQ 渲染 ---------- */
  function renderFAQ() {
    var container = doc.getElementById("faqList");
    if (!container || !window.FAQ) return;
    container.innerHTML = window.FAQ.map(function (f, i) {
      return '<div class="faq-item">' +
        '<button type="button" class="faq-q" data-action="faq" aria-expanded="false">' +
          '<span>' + (i + 1).toString().padStart(2, "0") + '. ' + f.q + '</span>' +
          '<span class="faq-icon">+</span>' +
        '</button>' +
        '<div class="faq-a"><p>' + f.a + '</p></div>' +
      '</div>';
    }).join("");
  }

  /* ---------- 返回顶部 ---------- */
  function initBackTop() {
    var btn = doc.getElementById("backTop");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 全局事件委托（唯一入口，杜绝漏绑定） ---------- */
  function delegate(e) {
    var el = e.target;
    // FAQ 折叠
    if (el.closest('[data-action="faq"]')) {
      e.preventDefault();
      var item = el.closest(".faq-item");
      var q = item.querySelector(".faq-q");
      var a = item.querySelector(".faq-a");
      var open = item.classList.contains("open");
      doc.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
        o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("open");
        // 用足够大的 maxHeight 触发过渡，避免 scrollHeight 为 0 导致看不到展开
        a.style.maxHeight = "2000px";
        q.setAttribute("aria-expanded", "true");
      }
      return;
    }
    // 阶段 Tab
    var tab = el.closest(".stage-tab");
    if (tab) {
      var id = tab.getAttribute("data-tab");
      doc.querySelectorAll(".stage-tab").forEach(function (t) { t.classList.remove("active"); });
      doc.querySelectorAll(".stage-panel").forEach(function (p) { p.classList.remove("active"); });
      tab.classList.add("active");
      var panel = doc.getElementById(id);
      if (panel) panel.classList.add("active");
      return;
    }
    // 资源筛选
    var filter = el.closest(".res-filter");
    if (filter) {
      var f = filter.getAttribute("data-filter");
      doc.querySelectorAll(".res-filter").forEach(function (x) { x.classList.remove("active"); });
      filter.classList.add("active");
      doc.querySelectorAll(".res-card").forEach(function (c) {
        var show = f === "all" || c.getAttribute("data-type") === f;
        c.style.display = show ? "" : "none";
      });
      return;
    }
  }
})();
