document.addEventListener("DOMNodeInserted", function () {
  if (window && !window.$) {
    window.$ = window.jQuery = require("jquery");
  }
});
