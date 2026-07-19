document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.querySelector("[data-sidebar-toggle]");
  var sidebar = document.querySelector("[data-sidebar]");
  var overlay = document.querySelector("[data-sidebar-overlay]");

  if (!toggleBtn || !sidebar || !overlay) {
    return;
  }

  function openSidebar() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-open");
  }

  function closeSidebar() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
  }

  toggleBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("is-open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener("click", closeSidebar);

  sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeSidebar);
  });
});
