chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["enabled"], (result) => {
    if (!result.enabled) {
      chrome.tabs.create({ url: "options.html" });
    }
  });
});
