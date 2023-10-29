function func1() {
  window.dataLayer = window.dataLayer || [];

  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "//www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-K826VG");
}

function func2() {
  window.jQuery ||
    document.write(
      '<script src="../../assets/js/vendor/jquery.min.js"></script>'
    );
}

function func3() {
  (function ($) {
    fakewaffle.responsiveTabs(["xs"]);
  })(jQuery);
}

function func4() {
  $("#modalVideoLink").click(function () {
    var src = "https://www.youtube.com/embed/dgUGljgbjEA?autoplay=1";
    $(".modal-video iframe").attr("src", src);
  });

  $(".modal-video").on("hidden.bs.modal", function () {
    $(".modal-video iframe").removeAttr("src");
  });
}

function func5() {
  $(".panel-body").matchHeight();
  $(".panel-news-title").matchHeight();
  _linkedin_data_partner_id = "46649";
  (function () {
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  })();
}
