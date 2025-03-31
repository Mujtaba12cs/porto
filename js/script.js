const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", () => {
  hundleMenu();
});
function hundleMenu() {
  menu.classList.toggle("is-active");
  action.classList.toggle("is-active");
}

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // التمرير للأسفل
      navbar.classList.add("navbar-hidden");
    } else {
      // التمرير للأعلى
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = scrollTop;
  });
});
