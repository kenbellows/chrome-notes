var createNote = function(note) {
	/* Note is of the form:
	{
		content: content, // the actual text content
		pos: pos, // position on the screen, in the format {x:<val>, y:<val>}
		size: size, // size of the note, in the format {width:<val>, height:<val>}
		data: data || {} // extra space for additional pieces of data, to allow new features later without a major overhaul, possibly plugins
	}
	*/
	noteDiv = document.createElement('div');
	noteDiv.className = "note_box";
	noteDiv.style.position = "absolute";
	noteDiv.style.left = note.pos.x + "px";
	noteDiv.style.top  = note.pos.y + "px";
	noteDiv.style.zIndex = 2147483647;
	noteDiv.style.backgroundColor = Colors.addAlpha(note.data.backgroundColor || "#CCCC66", 0.4);
	noteDiv.style.width = note.size.width;
	noteDiv.style.width = note.size.height;

	var borderColor = Colors.toRGB(noteDiv.style.backgroundColor);
	borderColor.r = Math.max(borderColor.r - 51, 0);
	borderColor.g = Math.max(borderColor.g - 51, 0);
	borderColor.b = Math.max(borderColor.b - 51, 0);
	noteDiv.style.border = "1px solid " + Colors.toRGBString(borderColor);
	noteDiv.style.border = "1px solid " + Colors.toRGBString(borderColor, true);
	noteDiv.innerHTML = note.content;
	
	document.body.appendChild(noteDiv);

	return noteDiv;
}

var element;
var topleft;
var active = false;
document.onmousedown = function(e) {
	element = createNote({
		pos: {x: e.pageX, y:e.pageY},
		size: {width: "1px", height: "1px"},
		content: "",
		data: {}
	});
	topleft = {x: e.pageX, y:e.pageY};
	active = true;
	return false;
}

document.onmousemove = function(e) {
	if (active) {
		var mpos = {x:e.pageX, y:e.pageY}; // mouse  position
		var cpos = topleft;  // corner position

		element.style.width  = Math.abs(cpos.x - mpos.x) + "px";
		element.style.height = Math.abs(cpos.y - mpos.y) + "px";
		
		if (mpos.x < cpos.x)
			element.style.left = mpos.x + "px";
		if (mpos.y < cpos.y)
			element.style.top  = mpos.y + "px";
	}

}

document.onmouseup = function(e) {
	if (active) {
		active = false;
		//element = null;
	}
	return false;
}

