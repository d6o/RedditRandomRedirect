browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.update(tab.id, {url: "https://www.reddit.com/r/random"});
});
