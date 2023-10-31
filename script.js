const func1 = () => {
  const dataLayer = window.dataLayer || [];
  dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const firstScript = document.getElementsByTagName("script")[0];
  const scriptElement = document.createElement("script");
  const dataLayerName = dataLayer != "dataLayer" ? "&l=dataLayer" : "";

  scriptElement.async = true;
  scriptElement.src = `//www.googletagmanager.com/gtm.js?id=GTM-K826VG${dataLayerName}`;
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
};

const func2 = () => {
  if (typeof window.jQuery === "undefined") {
    const scriptElement = document.createElement("script");
    scriptElement.src = "../../assets/js/vendor/jquery.min.js";
    document.body.appendChild(scriptElement);
  }
};
  
const func3 = () => {
  const fakewaffle = window.fakewaffle;
  const jQuery = window.jQuery;
  
  if (fakewaffle && jQuery) {
    fakewaffle.responsiveTabs(["xs"]);
  }
};

function func4() {
  $("#modalVideoLink").click(function () {
    const src = "https://www.youtube.com/embed/dgUGljgbjEA?autoplay=1";
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

module.exports = { func2 };