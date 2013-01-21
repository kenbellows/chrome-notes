/* Title:  			take_notes.js
 * Author: 			Ken Bellows
 * Description: 	Initialize the global namespace to be used by all scripts in the extension.
 */


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.greeting == "activate") {
		// TODO: change cursor to something app-specific/provided
		Notes.active = true;
	}
	sendResponse({});
});


document.onmousedown = function(e) {
	if (Notes.active) {
		Notes.current.element = Notes.createNote({
			pos: {x: e.pageX-1 + "px", y:e.pageY-1 + "px"},
			size: {width: "1px", height: "1px"},
			content: "",
			data: {}
		});
		Notes.current.topleft = {x: e.pageX, y:e.pageY};
		Notes.current.active = true;
		return false;
	}
}

document.onmousemove = function(e) {
	if (Notes.current.active) {
		var mpos = {x:e.pageX, y:e.pageY}; // mouse  position
		var cpos = Notes.current.topleft;  // corner position
		
		Notes.current.element.style.width  = Math.abs(cpos.x - mpos.x) + "px";
		Notes.current.element.style.height = Math.abs(cpos.y - mpos.y) + "px";
		
		if (mpos.x < cpos.x)
			Notes.current.element.style.left = mpos.x + "px";
		if (mpos.y < cpos.y)
			Notes.current.element.style.top  = mpos.y + "px";
	}
}

document.onmouseup = function(e) {
	if (Notes.active) {
		if (Notes.current.active) {
			Notes.saveNote(
				null, // force default to current document.URL
				Notes.current.element.innerHTML, // save the content of the note
				{ // position object
					x: Notes.current.element.style.left,
					y: Notes.current.element.style.top
				},
				{ // size object
					width:  Notes.current.element.style.width,
					height: Notes.current.element.style.height
				},
				{ // data object
					backgroundColor: Notes.current.element.style.backgroundColor
				}
			);

			Notes.active = false;
			Notes.current.active = false;
			Notes.current.element = null;
		}
		return false;
	}


}

document.onclick = function(e) {
	if (Notes.active) {
		/* 
		TODO:
		if (activeNote) {
			if (click point outside of activeNote) {
				deactivate activeNote;
			}
		}
		if (click was inside another note) {
			activate div;
		}
		*/
		return false;
	}
}

