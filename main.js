const elements = [...document.querySelectorAll("[data-ref]")].reduce(
  (acc, item) => {
    acc[item.dataset.ref] = item;
    return acc;
  },
  {}
);

const openSidebar = () => {
  elements.navbar.dataset.status = "open";
  elements.toggleBtnIcon.src = "/images/icon-close.svg";
};

const closeSidebar = () => {
  elements.navbar.dataset.status = "closed";
  elements.toggleBtnIcon.src = "/images/icon-hamburger.svg";
};

elements.toggleSidebarBtn.addEventListener("click", () => {
  elements.navbar.dataset.status === "open" ? closeSidebar() : openSidebar();
});

elements.navbarBackdrop.addEventListener("click", closeSidebar);
