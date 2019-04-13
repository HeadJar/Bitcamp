//content.js
//The content script is a js file that interacts
// With the webpage
//we tell manifest.json to inject this into
//script with the content_scripts in manifest
//alert("Test Alert");

//Have jquery to log the url we go to.
// content.js
// So what i've done is whenever you click the browser extension it will run the program thus making it safe
// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    var firstHref = $("a[href^='http']")
      .eq(0)
      .attr("href");

    console.log(firstHref);

    // This line is new!
    chrome.runtime.sendMessage({ message: "open_new_tab", url: firstHref });
  }
});
