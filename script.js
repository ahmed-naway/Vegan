const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu-items");
const dropdown = document.querySelector(".services");
const dropmenu = document.querySelector(".services ul");

const addRemoveClass = (name, className) => {
  if (name.classList.contains(className)) {
    name.classList.remove(className);
  } else {
    name.classList.add(className);
  }
};

menuBtn.addEventListener("click", () => {
  addRemoveClass(menuBtn, "close");
  addRemoveClass(menu, "active");
});

dropdown.addEventListener("click", () => {
  if (dropmenu.style.display === "none") {
    dropmenu.style.display = "block";
  } else {
    dropmenu.style.display = "none";
  }
});
