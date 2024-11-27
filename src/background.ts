chrome.action.onClicked.addListener((tab) => {
    if(tab.url) {
        try {
            const url = new URL(tab.url);
            chrome.tabs.update(tab.id!, { url: url.origin })
        } catch(error) {
            console.error("Invalid URL:", error);
        }
    }
    else {
        console.error("No URL found for the current tab.");
    }
})