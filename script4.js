$("#modalVideoLink").click(function () {
  var src = "https://www.youtube.com/embed/dgUGljgbjEA?autoplay=1";
  $(".modal-video iframe").attr("src", src);
});

$(".modal-video").on("hidden.bs.modal", function () {
  $(".modal-video iframe").removeAttr("src");
});
