import { Plugin } from "vue";

const keyPressPlugin: Plugin = {
  install() {
    // Track key presses for tab, esc
    window.addEventListener("keydown", (e) => {
      if (e.repeat) return;

      if (e.key === "Tab") {
        e.preventDefault();
        closeInventory();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeInventory();
      }
    });
  },
};

function closeInventory() {
  window.postMessage({
    action: "close",
  });
}

export { keyPressPlugin };
