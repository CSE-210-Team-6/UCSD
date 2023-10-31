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

function matchHeights() {

  $(".panel-body").matchHeight();
  $(".panel-news-title").matchHeight();

}

// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ) {
      this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
  }
};
jQuery.event.special.touchmove = {
  setup: function( _, ns, handle ) {
      this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
  }
};