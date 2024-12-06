/* hamburger functionality*/
const hamMenu = document.querySelector(".hamBtn");
const navUl = document.querySelector(".nav-ul");

hamMenu.addEventListener("click", () => {
  const isExpanded = hamMenu.getAttribute("aria-expanded");
  if (isExpanded === "true") {
    hamMenu.setAttribute("aria-expanded", "false");
    navUl.classList.remove("show");
  } else {
    hamMenu.setAttribute("aria-expanded", "true");
    navUl.classList.add("show");
  }
});
/* hamburger functionality*/
