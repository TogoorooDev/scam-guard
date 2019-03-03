browser.contextMenus.create({
  id: "block-js",
  title: "Extention Test"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "block-js") {
    browser.tabs.executeScript({
      file: "block-redirects.js"
    });
  }
});