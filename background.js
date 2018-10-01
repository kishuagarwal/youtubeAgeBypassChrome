chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	    let tabUrl = tabs[0].url;
	    
	    // Check if it's a youtube url
	    let youtubeRegex = /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([-\w]+)/i;
	    let matches = youtubeRegex.exec(tabUrl);
	    
	    if (matches != null && matches.length == 2) {
	    	//Video url
	    	let videoId = matches[1];
	    	// Change the url
	    	let bypassUrl = `https://www.youtube.com/embed/${videoId}`;
	    	chrome.tabs.update(tab.id, {url: bypassUrl});
	    }
	});
});
