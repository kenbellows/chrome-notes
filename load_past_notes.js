/* Title:  			load_past_notes.js
 * Author: 			Ken Bellows
 * Description: 	a function load notes once the page is loaded.
 */

Notes.loadPastNotes = function(url) {
	oldnotes = this.store.get("notes")[url || document.URL];
	for (note in oldnotes) {
		if (oldnotes.hasOwnProperty(note)) {
			/* Note is of the form:
			{
				content: content, // the actual text content
				pos: pos, // position on the screen, in the format {x:<val>, y:<val>}
				size: size, // size of the note, in the format {width:<val>, height:<val>}
				data: data || {} // extra space for additional pieces of data, to allow new features later without a major overhaul, possibly plugins
			}
			*/
			noteDiv = document.createElement('div');
			noteDiv.style.position = "absolute";
			noteDiv.style.left = note.pos.x;
			noteDiv.style.top = note.pos.y;
			noteDiv.style.zIndex = 2147483647;
			noteDiv.style.backgroundColor = Colors.addAlpha(note.data.backgroundColor || Notes.randColor(), 0.4);
			noteDiv.style.width = note.size.width;
			noteDiv.style.width = note.size.height;
			noteDiv.innerHTML = note.content;
			document.body.appendChild(noteDiv);
		}
	}
}



chrome.browserAction.onClicked.addListener(function(tab) {

if (document.readyState == "complete") {
  	Notes.loadPastNotes();
} else {
  window.addEventListener("load", function() {
    setTimeout(Notes.loadPastNotes, 0);
  });
}