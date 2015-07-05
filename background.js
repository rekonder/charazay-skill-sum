chrome.browserAction.onClicked.addListener(function(tab){
	chrome.extension.sendMessage({
		type: "sum_skills"
	});
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
	switch(request.type){
		case "sum_skills":
			skills();
		break;
	}
	return true;
});

var skills = function(){
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.sendMessage(tab.id,  {type: "skills"});
	});
}