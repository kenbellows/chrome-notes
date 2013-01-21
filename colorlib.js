Colors = {
	named_colors : {
		"aliceblue": "#F0F8FF",
		"antiquewhite": "#FAEBD7",
		"aqua": "#00FFFF",
		"aquamarine": "#7FFFD4",
		"azure": "#F0FFFF",
		"beige": "#F5F5DC",
		"bisque": "#FFE4C4",
		"black": "#000000",
		"blanchedalmond": "#FFEBCD",
		"blue": "#0000FF",
		"blueviolet": "#8A2BE2",
		"brown": "#A52A2A",
		"burlywood": "#DEB887",
		"cadetblue": "#5F9EA0",
		"chartreuse": "#7FFF00",
		"chocolate": "#D2691E",
		"coral": "#FF7F50",
		"cornflowerblue": "#6495ED",
		"cornsilk": "#FFF8DC",
		"crimson": "#DC143C",
		"cyan": "#00FFFF",
		"darkblue": "#00008B",
		"darkcyan": "#008B8B",
		"darkgoldenrod": "#B8860B",
		"darkgray": "#A9A9A9",
		"darkgrey": "#A9A9A9",
		"darkgreen": "#006400",
		"darkkhaki": "#BDB76B",
		"darkmagenta": "#8B008B",
		"darkolivegreen": "#556B2F",
		"darkorange": "#FF8C00",
		"darkorchid": "#9932CC",
		"darkred": "#8B0000",
		"darksalmon": "#E9967A",
		"darkseagreen": "#8FBC8F",
		"darkslateblue": "#483D8B",
		"darkslategray": "#2F4F4F",
		"darkslategrey": "#2F4F4F",
		"darkturquoise": "#00CED1",
		"darkviolet": "#9400D3",
		"deeppink": "#FF1493",
		"deepskyblue": "#00BFFF",
		"dimgray": "#696969",
		"dimgrey": "#696969",
		"dodgerblue": "#1E90FF",
		"firebrick": "#B22222",
		"floralwhite": "#FFFAF0",
		"forestgreen": "#228B22",
		"fuchsia": "#FF00FF",
		"gainsboro": "#DCDCDC",
		"ghostwhite": "#F8F8FF",
		"gold": "#FFD700",
		"goldenrod": "#DAA520",
		"gray": "#808080",
		"grey": "#808080",
		"green": "#008000",
		"greenyellow": "#ADFF2F",
		"honeydew": "#F0FFF0",
		"hotpink": "#FF69B4",
		"indianred": "#CD5C5C",
		"indigo": "#4B0082",
		"ivory": "#FFFFF0",
		"khaki": "#F0E68C",
		"lavender": "#E6E6FA",
		"lavenderblush": "#FFF0F5",
		"lawngreen": "#7CFC00",
		"lemonchiffon": "#FFFACD",
		"lightblue": "#ADD8E6",
		"lightcoral": "#F08080",
		"lightcyan": "#E0FFFF",
		"lightgoldenrodyellow": "#FAFAD2",
		"lightgray": "#D3D3D3",
		"lightgrey": "#D3D3D3",
		"lightgreen": "#90EE90",
		"lightpink": "#FFB6C1",
		"lightsalmon": "#FFA07A",
		"lightseagreen": "#20B2AA",
		"lightskyblue": "#87CEFA",
		"lightslategray": "#778899",
		"lightslategrey": "#778899",
		"lightsteelblue": "#B0C4DE",
		"lightyellow": "#FFFFE0",
		"lime": "#00FF00",
		"limegreen": "#32CD32",
		"linen": "#FAF0E6",
		"magenta": "#FF00FF",
		"maroon": "#800000",
		"mediumaquamarine": "#66CDAA",
		"mediumblue": "#0000CD",
		"mediumorchid": "#BA55D3",
		"mediumpurple": "#9370DB",
		"mediumseagreen": "#3CB371",
		"mediumslateblue": "#7B68EE",
		"mediumspringgreen": "#00FA9A",
		"mediumturquoise": "#48D1CC",
		"mediumvioletred": "#C71585",
		"midnightblue": "#191970",
		"mintcream": "#F5FFFA",
		"mistyrose": "#FFE4E1",
		"moccasin": "#FFE4B5",
		"navajowhite": "#FFDEAD",
		"navy": "#000080",
		"oldlace": "#FDF5E6",
		"olive": "#808000",
		"olivedrab": "#6B8E23",
		"orange": "#FFA500",
		"orangered": "#FF4500",
		"orchid": "#DA70D6",
		"palegoldenrod": "#EEE8AA",
		"palegreen": "#98FB98",
		"paleturquoise": "#AFEEEE",
		"palevioletred": "#DB7093",
		"papayawhip": "#FFEFD5",
		"peachpuff": "#FFDAB9",
		"peru": "#CD853F",
		"pink": "#FFC0CB",
		"plum": "#DDA0DD",
		"powderblue": "#B0E0E6",
		"purple": "#800080",
		"red": "#FF0000",
		"rosybrown": "#BC8F8F",
		"royalblue": "#4169E1",
		"saddlebrown": "#8B4513",
		"salmon": "#FA8072",
		"sandybrown": "#F4A460",
		"seagreen": "#2E8B57",
		"Seashell": "#FFF5EE",
		"sienna": "#A0522D",
		"silver": "#C0C0C0",
		"skyblue": "#87CEEB",
		"slateblue": "#6A5ACD",
		"slategray": "#708090",
		"slategrey": "#708090",
		"snow": "#FFFAFA",
		"springgreen": "#00FF7F",
		"steelblue": "#4682B4",
		"tan": "#D2B48C",
		"teal": "#008080",
		"thistle": "#D8BFD8",
		"tomato": "#FF6347",
		"turquoise": "#40E0D0",
		"violet": "#EE82EE",
		"wheat": "#F5DEB3",
		"white": "#FFFFFF",
		"whitesmoke": "#F5F5F5",
		"yellow": "#FFFF00",
		"yellowgreen": "#9ACD32"
	},
	toRGB: function (color){
		if (typeof color === "object") {
			if ('r' in color && 'g' in color && 'b' in color) {
				if ('a' in color)
					return {r:color.r, g:color.g, b:color.b, a:color.a};
				return {r:color.r, g:color.g, b:color.b};
			}
			else if ('h' in color && 's' in color && 'v' in color) {
				return this.hsvToRgb(color.h, color.s, color.v);
			}
		}
		else if (typeof color === "string") {
			return this.toRGB(this.getColorObjFromString(color));
		}
		return false;
	},

	toHSV: function (color){
		if (typeof color === "object") {
			if (color.r && color.g && color.b) {
				return this.rgbToHsv(color.r, color.g, color.b);
			}
			else if (color.h && color.s && color.v) {
				return {h:color.h, s:color.s, v:color.v};
			}
		}
		else if (typeof color === "string") {
			return this.toHSV(this.getColorObjFromString(color));
		}
		return false;
	},


	toRGBString: function (color, alphaAllowed) {
		var rgb = this.toRGB(color);
		var alpha = alphaAllowed || false;
		return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + (alpha && rgb.a ? rgb.a + "," : "") + ")";
	},

	toHSVString: function (color) {
		var hsv = this.toHSV(color);
		return "rgb(" + hsv.h + "," + hsv.s + "," + hsv.v + ")";
	},

	/**
	 * The following function was retrieved from 
	 * http://snipplr.com/view/14590/hsv-to-rgb/ 
	 * on 1/15/2013
	 * ==========================================
	 * 
	 * HSV to RGB color conversion
	 *
	 * H runs from 0 to 360 degrees
	 * S and V run from 0 to 100
	 * 
	 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
	 * http://www.cs.rit.edu/~ncs/color/t_convert.html
	 */
	hsvToRgb: function (h, s, v) {
		var r, g, b;
		var i;
		var f, p, q, t;
	 
		// Make sure our arguments stay in-range
		h = Math.max(0, Math.min(360, h));
		s = Math.max(0, Math.min(100, s));
		v = Math.max(0, Math.min(100, v));
	 
		// We accept saturation and value arguments from 0 to 100 because that's
		// how Photoshop represents those values. Internally, however, the
		// saturation and value are calculated from a range of 0 to 1. We make
		// That conversion here.
		s /= 100;
		v /= 100;
	 
		if(s == 0) {
			// Achromatic (grey)
			r = g = b = v;
			return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
		}
	 
		h /= 60; // sector 0 to 5
		i = Math.floor(h);
		f = h - i; // factorial part of h
		p = v * (1 - s);
		q = v * (1 - s * f);
		t = v * (1 - s * (1 - f));
	 
		switch(i) {
			case 0:
				r = v;
				g = t;
				b = p;
				break;
	 
			case 1:
				r = q;
				g = v;
				b = p;
				break;
	 
			case 2:
				r = p;
				g = v;
				b = t;
				break;
	 
			case 3:
				r = p;
				g = q;
				b = v;
				break;
	 
			case 4:
				r = t;
				g = p;
				b = v;
				break;
	 
			default: // case 5:
				r = v;
				g = p;
				b = q;
		}
	 
		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	},


	/**
	 * The following function was retrieved from 
	 * http://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
	 * on 1/15/2013
	 * ==========================================
	 * 
	 * HSV to RGB color conversion
	 *
	 * H runs from 0 to 360 degrees
	 * S and V run from 0 to 100
	 * 
	 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
	 * http://www.cs.rit.edu/~ncs/color/t_convert.html
	 */
	rgbToHsv: function (r, g, b) {
	    var rr, gg, bb,
	        r = r / 255,
	        g = g / 255,
	        b = b / 255,
	        h, s,
	        v = Math.max(r, g, b),
	        diff = v - Math.min(r, g, b),
	        diffc = function(c){
	            return (v - c) / 6 / diff + 1 / 2;
	        };

	    if (diff == 0) {
	        h = s = 0;
	    } else {
	        s = diff / v;
	        rr = diffc(r);
	        gg = diffc(g);
	        bb = diffc(b);

	        if (r === v) {
	            h = bb - gg;
	        }else if (g === v) {
	            h = (1 / 3) + rr - bb;
	        }else if (b === v) {
	            h = (2 / 3) + gg - rr;
	        }
	        if (h < 0) {
	            h += 1;
	        }else if (h > 1) {
	            h -= 1;
	        }
	    }
	    return {
	        h: Math.round(h * 360),
	        s: Math.round(s * 100),
	        v: Math.round(v * 100)
	    };
	},

	getColorObjFromString: function (color) {
		if (typeof color !== "string") return false;
		
		color = color.trim();
		if (color.substring(0, 4) === "hsv(") {
			var color_parts = color.substring(4, color.length-1).split(",");
			return {h: parseFloat(color_parts[0]), s: parseFloat(color_parts[1]), v: parseFloat(color_parts[2])};
		}
		else if (color.substring(0, 4) === "rgb(") {
			var color_parts = color.substring(4, color.length-1).split(",");
			return {r: parseFloat(color_parts[0]), g: parseFloat(color_parts[1]), b: parseFloat(color_parts[2])};
		}
		else if (color.substring(0, 5) === "rgba(") {
			var color_parts = color.substring(5, color.length-1).split(",");
			return {r: parseFloat(color_parts[0]), g: parseFloat(color_parts[1]), b: parseFloat(color_parts[2]), a: parseFloat(color_parts[3])};
		}
		else if (color[0] === "#") {
			if (color.length === 4) {
				return {r: parseInt(color[1], 16), g: parseInt(color[2], 16), b: parseInt(color[3], 16)};
			}
			else if (color.length === 7) {
				return {r: parseInt(color.substring(1,3), 16), g: parseInt(color.substring(3,5), 16), b: parseInt(color.substring(5), 16)};
			}
		}
		else {
			if (color.toLowerCase() in this.named_colors) {
				return this.getColorObjFromString(this.named_colors[color.toLowerCase()]);
			}
		}
		return false;
	},

	hasAlpha: function (color) {
		return (
			( typeof color === "object" && color.a ) ||
			( typeof color === "string" && color.substring(0, 5) === "rgba(" )
		);
	},

	addAlpha: function (color, alphaVal) {
		if (this.hasAlpha(color)) {
			if (alphaVal) {
				if 	    (typeof color === "object") { color.a = Math.min(color.a + alphaVal, 1.0); }
				else if (typeof color === "string") {
					var color_parts = color.substring(5, color.length-1).split(",");
					var alphaOld = parseFloat(color_parts[3]);
					color = "rgba(" + color_parts[0] + ", " + color_parts[1] + ", " + color_parts[2] + ", " + Math.min(alphaOld + alphaVal, 1.0) + ")";
				}
			}
		}
		else {
			if (alphaVal) {
				if (typeof color === "object") {
					color = this.toRGB(color);
					color.a = Math.min(alphaVal, 1.0); 
				}
				else if (typeof color === "string") {
					color = this.toRGBString(color);
					color = "rgba(" + color.substring(4, color.length-1) + ", " + Math.min(alphaVal, 1.0) + ")";
				}
			}
			else {
				if (typeof color === "object") {
					color = this.toRGB(color);
					color.a = 1.0; 
				}
				else if (typeof color === "string") {
					color = this.toRGBString(color);
					color = "rgba(" + color.substring(4, color.length-1) + ", 1.0)";
				}
			}
		}
		return color;
	}
}