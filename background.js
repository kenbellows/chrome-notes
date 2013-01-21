console.log("background.js");

chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.getSelected(null, function(tab) {
		console.log('click!');
		chrome.tabs.sendMessage(tab.id, {greeting: "activate"});
	});
});