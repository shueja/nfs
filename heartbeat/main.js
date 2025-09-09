window.onload = () => {
    "use strict";
  if ("serviceWorker" in navigator) {
  navigator.serviceWorker.unregister("./sw.js");
  }
  };