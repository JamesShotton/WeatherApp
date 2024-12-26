const dark = document.getElementById("dark");
const light = document.getElementById("light");
dark.onclick = function () {
  document.documentElement.classList.add("dark-theme");
  dark.style.setProperty("color", "white");
  light.style.setProperty("color", "var(--color-tertiary)");

  dark.onmouseover = null;
  dark.onmouseout = null;

  light.onmouseover = function () {
    light.style.color = "var(--color-hover)";
  };
  light.onmouseout = function () {
    light.style.color = "var(--color-tertiary)";
  };
};
light.onclick = function () {
  document.documentElement.classList.remove("dark-theme");

  light.onmouseover = null;
  light.onmouseout = null;

  dark.style.color = "var(--color-tertiary)";
  light.style.color = "var(--color-secondary)";
};