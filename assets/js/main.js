(function () {
  var c = window.ECOL_CONFIG || {};
  var map = {
    reuse: c.reuseUrl,
    line: c.lineUrl,
    form: c.formUrl,
    tel: c.tel ? "tel:" + c.tel.replace(/-/g, "") : ""
  };
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var v = map[a.getAttribute("data-link")];
    if (v) a.setAttribute("href", v);
  });
  document.querySelectorAll("[data-tel]").forEach(function (el) {
    if (c.tel) el.textContent = c.tel;
  });

  // スマホ下部の固定バー：ヒーロー直下のCTAが見えている間は隠す
  var bar = document.querySelector(".sticky-cta");
  var anchor = document.getElementById("contact-top");
  if (bar && anchor && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      var visible = es[0].isIntersecting;
      var passed = es[0].boundingClientRect.top < 0;
      bar.classList.toggle("is-on", !visible && passed);
    }, { threshold: 0 }).observe(anchor);
  } else if (bar) {
    bar.classList.add("is-on");
  }
})();
