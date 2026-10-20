$(document).ready(function () {
  var app = $.spapp({
    defaultView: "home",
    templateDir: "./",
    pageNotFound: "home"
  });

  app.run();

  $(".navbar-nav .nav-link").on("click", function () {
    var menu = bootstrap.Collapse.getInstance(document.getElementById("nav"));
    if (menu) menu.hide();
  });

  function markActive() {
  var hash = location.hash || "#home";
  $(".navbar-nav .nav-link").each(function () {
    $(this).toggleClass("active", $(this).attr("href") === hash);
  });
}

  $(window).on("hashchange", markActive);
  markActive();
});