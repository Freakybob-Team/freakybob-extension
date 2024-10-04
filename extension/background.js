chrome.contextMenus.create({
  id: "freakmode",
  title: "Enter FREAKY MODE",
  contexts: ["all"]
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "freakmode") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["freakmode.js"]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    });
  }
});