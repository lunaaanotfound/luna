const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


/*==================== education TABS ====================*/
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".about__button");
  const tabContents = document.querySelectorAll(".about__content");

  tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
          const targetId = tab.dataset.target;
          const targetContent = document.querySelector(targetId);

          tabs.forEach((tabItem) => {
              tabItem.classList.remove("about__active");
          });
          tabContents.forEach((contentItem) => {
              contentItem.classList.remove("about__active");
          });

          tab.classList.add("about__active");
          targetContent.classList.add("about__active");
      });
  });
});