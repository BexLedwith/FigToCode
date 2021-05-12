const menuBtb = document.querySelector(".menu");
panel = document.querySelector(".filter");
panelStyles = window.getComputedStyle(panel);

menuBtn.addEventListener("click", () => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%") {
    panel.style.clipPath = "circle(100% at 50% 50%)";
  }
});
