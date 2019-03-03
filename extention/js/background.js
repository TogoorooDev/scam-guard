browser.contextMenus.create({
  id: "block-js",
  title: "Test Extention"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "block-js") {
    browser.tabs.executeScript({
      file: "block-redirects.js"
    });
  }
});