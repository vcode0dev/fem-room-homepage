/**GET ELEMENTS */
const elements = [...document.querySelectorAll("[data-ref]")].reduce(
  (acc, item) => {
    acc[item.dataset.ref] = item;
    return acc;
  },
  {}
);

/**NAVBAR */

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

/**SLIDER */
const SLIDER_DATA = [
  {
    image: "1",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing  your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: "2",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: "3",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const sliderState = {
  current: 0,
  setNext() {
    this.current = (this.current + 1) % 3;
    this.changeSlide();
  },

  setPrevious() {
    this.current = (this.current + 2) % 3;
    this.changeSlide();
  },

  changeSlide() {
    elements.sliderTitle.textContent = SLIDER_DATA[this.current].title;
    elements.sliderDescription.textContent =
      SLIDER_DATA[this.current].description;
    elements.sliderDesktopImage.srcset = `/images/desktop-image-hero-${
      SLIDER_DATA[this.current].image
    }.jpg`;
    elements.sliderMobileImage.src = `/images/mobile-image-hero-${
      SLIDER_DATA[this.current].image
    }.jpg`;
  },
};

elements.sliderBtnLeft.addEventListener("click", () =>
  sliderState.setPrevious()
);
elements.sliderBtnRight.addEventListener("click", () => sliderState.setNext());
