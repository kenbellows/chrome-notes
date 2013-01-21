/* Title:  			init_notes.js
 * Author: 			Ken Bellows
 * Description: 	Initialize the global namespace to be used by all scripts in the extension.
 */

// Notes namespace to hold note handling functions
Notes = {
	// Shorthand for the Chrome Storage API
	storage: chrome.storage.sync,
	// Sets of background colors for notes
	color_schemes:  {
		// Subset of the color scheme from: http://www.colorschemer.com/schemes/viewscheme.php?id=2719
		resolutions: {
	 		bg: [
		 		"#CCCC66",
		 		"#F7F7D4",
		 		"#99CC66",
		 		"#B5CCE3",
		 		"#E3CCB5"
			],
			font: "#003F7D"
		},
		// Adapted from the color scheme from: http://www.colorschemer.com/schemes/viewscheme.php?id=9951
		petal_pusher: {
			bg: [
	 			"#C2E5EB",
	 			"#42B4C4",
	 			"#9CCA56",
	 			"#EA9150",
	 			"#DF697F",
	 			"#81789E"
			],
			font: "#515151"
		},
		// Ethan Schoonover's awesome theme, adapted from: http://ethanschoonover.com/solarized
		solarized: {
			bg: [
	 			"#B58900",
	 			"#CB4B16",
	 			"#DC322F",
	 			"#D33682",
	 			"#6C71C4",
	 			"#268BD2",
	 			"#2AA198",
	 			"#859900"
			],
			font: "#002B36"
		}
	},
	// Current color scheme
	colors: "solarized",

	// Flag indicating whether the extension is currently "active", meaning whether boxes can currently be drawn
	active: false,
	
	// Object holding the box currently being drawn or edited
	current: {active: false, element: null, topleft: {x: -1, y: -1}},
	

	// Choose a random color from the scheme above
	randColor: function() {
		return this.color_schemes[this.colors].bg[Math.floor((Math.random()*this.color_schemes[this.colors].bg.length))];
	},
	
	// Create a new note
	createNote: function(note) {
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
		noteDiv.style.left = note.pos.x;
		noteDiv.style.top = note.pos.y;
		noteDiv.style.zIndex = 2147483647;
		noteDiv.style.width = note.size.width;
		noteDiv.style.height = note.size.height;

		var backgroundColor = note.data.backgroundColor || Notes.randColor();
		if (!Colors.hasAlpha(backgroundColor))
			backgroundColor = Colors.addAlpha(backgroundColor, 0.4);
		noteDiv.style.backgroundColor = backgroundColor;
		
		// Set the border color to be the background color - #333
		var borderColor = Colors.toRGB(backgroundColor);
		borderColor.r = Math.max(borderColor.r - 51, 0) ;
		borderColor.g = Math.max(borderColor.g - 51, 0) ;
		borderColor.b = Math.max(borderColor.b - 51, 0) ;
		// Set the border color opaquely first. Then try setting it semi-transparently.
		// If the browser supports transparency in borders, it will work; otherwise, it will stay opaque.
		noteDiv.style.border = "1px solid " + Colors.toRGBString(borderColor);
		noteDiv.style.border = "1px solid " + Colors.toRGBString(borderColor, true);


		noteDiv.innerHTML = note.content;
		
		var xDiv = document.createElement("div");
		xDiv.className       = "x_box";
		xDiv.innerHTML       = "X";
		xDiv.style.width     = "15px";
		xDiv.style.height    = "15px";
		xDiv.style.border    = noteDiv.style.border;
		xDiv.style.position  = "absolute";
		xDiv.style.left      = "0px";
		xDiv.style.top       = "0px";
		xDiv.style.textAlign = "center";
		console.log(xDiv);
		noteDiv.appendChild(xDiv);
		document.body.appendChild(noteDiv);


		xDiv.addEventListener("click", function() {
  			var p = this.parentElement;
  			Notes.destroyNote(
				null, // force default to current document.URL
				p.innerHTML, // save the content of the note
				{ // position object
					x: p.style.left,
					y: p.style.top
				},
				{ // size object
					width:  p.style.width,
					height: p.style.height
				}
			);
  			document.body.removeChild(p);
		});



		return noteDiv;
	},

	// Add a new note to the storage with url, content, position, size, and extraneous data (optional)
	saveNote: function(url, content, pos, size, data) {
		url = url || document.URL;
		getobj = {};
		getobj[url] = []; // default value if this url is new
		this.storage.get(getobj, function(notes) {
			var urlnotes = notes[url] || [];
			urlnotes.push({
				content: content, // the actual text/html content
				pos: pos, // position on the screen, in the format {x:<val>, y:<val>}
				size: size, // size of the note, in the format {width:<val>, height:<val>}
				data: data || {} // extra space for additional pieces of data, to allow new features later without a major overhaul, possibly plugins
			});
			setobj = {};
			setobj[url] = urlnotes;
			Notes.storage.set(setobj);
		});

		this.storage.get(url, function(notes) {
		});
	},

	// Add a new note to the storage with url, content, position, size, and extraneous data (optional)
	destroyNote: function(url, content, pos, size) {
		url = url || document.URL;
		getobj = {};
		getobj[url] = []; // default value if this url is new
		this.storage.get(getobj, function(notes) {
			var urlnotes = notes[url] || [];

			for (var i=0; i< urlnotes.length; i++) {
				var found = true;
				unote = urlnotes[i];
				for (prop in unote) {
					if (unote.hasOwnProperty(prop)) {
						if (
							//["content", "pos", "size", "data"].indexOf(prop) === -1 ||
							(prop === "content" && unote[prop] !== content)         ||
							(prop === "pos"     && unote[prop] !== pos)             ||
							(prop === "size"    && unote[prop] !== size)
						) {
							found = false;
							break;
						}
					}
				}

				if (found) {
					urlnotes.splice(i, 1);
					break;
				}
			}
			
			setobj = {};
			setobj[url] = urlnotes;
			Notes.storage.set(setobj);
		});

		this.storage.get(url, function(notes) {
		});
	},

	// Load past notes from storage
	loadNotes: function(url) {
		this.storage.get(null, function(obj) {
		});

		url = url || document.URL;
		getobj = {};
		getobj[url] = []; // default value if this url is new
		this.storage.get(getobj, function(notes) {
			var oldnotes = notes[url] || [];
			for (note in oldnotes) {
				if (oldnotes.hasOwnProperty(note)) {
					Notes.createNote(oldnotes[note]);
				}
			}
		});
	}
};


if (document.readyState == "complete") {
  	Notes.loadNotes();
}
else {
  window.addEventListener("load", function() {
    setTimeout(function(){Notes.loadNotes()}, 0);
  });
}
