javascript: (function () {
  createMenu();
  function createMenu() {
    if (document.getElementById("cursor-menu")) {
      document.body.removeChild(document.getElementById(`cursor-menu`));
      createMenu();
    } else {
      let menu = document.createElement("div");
      menu.setAttribute(
        "style",
        "background:#0d1117;z-index:9998;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);position:fixed;top:3px;right:3px;width:513px;height:600px;overflow-y:scroll;"
      );
      menu.id = "cursor-menu";
      menu.innerHTML =
        '<div id="cursor-menu-header" style="background:#333333; color:#1f2120;position:fixed;width:513px;"><table><th><a href="https://customcursor.glitch.me/"><img src="https://cdn.glitch.global/77a0082b-63ce-4b67-8ab3-eeaff9db979a/menu-logo.png?v=1681746042981" height="40px" width="100px"></a></th><th><button style="cursor:pointer;right:40px;top:3px;position:absolute;border-radius:90px;height:35px;width:35px;color:black;border:none;background:#800000;font-size:25px;font-weight:bold;padding:inherit;" onclick="resetCursor()">↻</button></th><th><button style="cursor:pointer;right:3px;top:3px;position:absolute;border-radius:90px;height:35px;width:35px;color:black;border:none;background:#800000;font-size:25px;font-weight:bold;padding:inherit;" onclick="document.body.removeChild(document.getElementById(%60cursor-menu%60));">X</button></th></table></div><br /><br /><br /><div id="cursor-menu-body" style="height:100%;"><iframe id="cf" src="https://customcursor.glitch.me/app" style="flex-grow:1;border:none;margin:0;padding:0;width:100%;height:100%;"></iframe></div>';
      document.body.appendChild(menu);
    }
  }
})();
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function setMouse(a, b, c) {
  var id = window.setTimeout(function () {}, 0);
  while (id--) {
    window.clearTimeout(id);
  }
  doMouse();
  async function doMouse() {
    
    document.querySelectorAll("*").forEach(function (node3) {
      if (window.getComputedStyle(node3).cursor === "pointer") {
        node3.setAttribute("cursor", "pointer");
      }
    });
    document
      .querySelectorAll('*:not([cursor="pointer"])')
      .forEach(function (node) {
      if (canTypeInElement(node)) {
        node.style.cursor = "url(" + c + "),text";
      } else {
        node.style.cursor = "url(" + a + "),default";
      }
      });
    document.querySelectorAll('*[cursor="pointer"]').forEach(function (node2) {
      node2.style.cursor = "url(" + b + "),pointer";
    });
    await sleep(20);
    setMouse(a, b, c);
  }
}
function resetCursor() {
  document.querySelectorAll("*").forEach(function (node) {
    node.style.cursor = "default";
  });
}
window.addEventListener("message", function (item) {
  if (item.data.toString().startsWith("https://") == true) {
    setMouse(item.data[0], item.data[1], item.data[2]);
  } else if (item.data.toString().startsWith("javascript:") == true){
    simulateClick(item.data);
  }
});
function simulateClick(bookmarklet) {
  var link = document.createElement('a');
  link.href = bookmarklet;
  document.body.appendChild(link);
  link.click();
}
function canTypeInElement(element) {
  if ((element instanceof HTMLInputElement && element.type !== "hidden") || 
      element instanceof HTMLTextAreaElement || 
      element.contentEditable === "true") {
    return true;
  }
  if (element instanceof HTMLSelectElement || element instanceof HTMLOptionElement) {
    return true;
  }
  if (element instanceof HTMLButtonElement || (element.tagName.toLowerCase() === "button" && element.getAttribute("type") === "submit")) {
    return true;
  }
  return false;
}