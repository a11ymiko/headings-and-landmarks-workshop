// Wires the "Show page structure" button on the demo pages.
// The inspector starts hidden so the first exercise is done with a screen reader only.
window.HL_INSPECTOR_HIDDEN = true;

document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector("[data-toggle-inspector]");
  if (!button) return;
  button.addEventListener("click", function () {
    window.hlInspector.toggle();
    var open = !document.querySelector("div[data-hl-inspector]").hidden;
    button.setAttribute("aria-expanded", String(open));
  });

  // Every link and button on the demo is fake except the workshop controls.
  document.querySelectorAll("a[href='#'], form").forEach(function (n) {
    n.addEventListener(n.tagName === "FORM" ? "submit" : "click", function (e) { e.preventDefault(); });
  });
});
