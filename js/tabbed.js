$(document).ready(function () {
  const tabLinks = $(".tabs__item > a");
  tabLinks.each((_, link) => {
    $(link).click(function () {
      const activeLink = $(".tabs__item > a.active");
      activeLink.removeClass("active");

      $(this).addClass("active");
    });
  });
});
