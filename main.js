// Theme toggle. Defaults to the OS preference, remembers an explicit choice.
(function () {
  "use strict";

  var root = document.documentElement;
  var KEY = "af-theme";

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function remember(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
  }

  function systemPrefersLight() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  }

  function apply(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  var initial = stored() || (systemPrefersLight() ? "light" : "dark");
  apply(initial);

  var button = document.getElementById("themeToggle");
  if (button) {
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      apply(next);
      remember(next);
    });
  }
})();
