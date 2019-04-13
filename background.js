// background.js

/**
 * Listen for a click on the browser action in background.js. When it’s clicked, send a clicked_browser_action event to content.js.
When content.js receives the event, it grabs the URL of the first link on the page. Then it sends open_new_tab back to background.js with the URL to open.
background.js listens for open_new_tab and opens a new tab with the given URL when it receives the message.
 */
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action"
    });
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "open_new_tab") {
    chrome.tabs.create({ url: request.url });
  }
});
