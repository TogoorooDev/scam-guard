browser.contextMenus.create({
  id: "block-js",
  title: "Hak This Site"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "block-js") {
    browser.tabs.executeScript({
      file: "js/block-redirects.js"
    });
  }
});