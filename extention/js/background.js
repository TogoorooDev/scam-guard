browser.contextMenus.create({
  id: "block-meta",
  title: "Demetaify"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "block-meta") {
    browser.tabs.executeScript({
      file: "js/block-redirects.js"
    });
  }
});