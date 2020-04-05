$(document).ready(function () {
  $(`.tabs__content.active`).first().css("display", "block");

  const tabLinks = $(".tabs__item > a");
  tabLinks.each((_, link) => {
    $(link).click(function () {
      const activeTabLink = $(".tabs__item > a.active");
      const targetTabLink = $(this);

      activeTabLink.removeClass("active");
      targetTabLink.addClass("active");

      const activeTabContentId = activeTabLink.attr("data-tab-target");
      const targetTabContentId = targetTabLink.attr("data-tab-target");

      const activeTabContent = $(".tabs__content.active");
      const targetTabContent = $(`.tabs__content#${targetTabContentId}`);

      activeTabContent.removeClass("active");
      targetTabContent.addClass("active");

      $(`.tabs__content#${activeTabContentId}`).hide();
      $(`.tabs__content#${targetTabContentId}`).fadeIn();
    });
  });
});
