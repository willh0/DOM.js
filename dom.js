/**
  
  Tiny DOM templating for javascript. Syntax stolen from MochiKit, because I like the way it looks.

	Looks something like:

	DIV({"class":"somClass"},
		A({"href":"http://google.com"}, my link), SPAN(null,"some text")
	);
 
  @namespace
 */
var DOM = (function() {

	/**
	  Creates a new DOM object.
	  @function
	  @param {String} tag Name of the tag (like, "A", "DIV", "IMG").
	  @param {Object} attrs Attributes for element (in object notation, like: {id:"someId", class:"someClass"})
	  @param {String} txt Text from either previous createDOM's, .
		@returns {String} The text for the HTML element.
	 */
	var createDOM = function(tag, attrs, txt) {

		var args = Array.prototype.slice.call(arguments, 0);

		if (args.length > 0) {
			if (typeof(txt) === "undefined" || !txt) { //This is a singleton element.
				return '<'+tag,attrsToStr(attrs)+' />';
			} else {
				return '<'+tag+attrsToStr(attrs)+'>'+args.slice(2).join("")+'</'+tag+'>';
			}
		}

	};

	/**
	  Turns attributes object to a string.
	  @function
	  @param {Object} attrs Attributes to turn into an object.
		@returns {String} The attributes as a string.
	 */
	var attrsToStr = function(attrs) {
		var str = '';
		for (a in attrs) {
			str += ' '+ a +'="'+ attrs[a]+ '"';
		}
		return str;
	};

	/**
	  Creates a shortcut for creating DOM elements, like A({"href":"http://google.com"}, "link") instead of DOM.createDOM("a",{"href":"http://google.com"}, "link").
	  @function
	  @param {String} tag Name of the tag to create a shortcut for.
	 */
	var DOMShortcut = function(tag) {
		return function() {
			return createDOM.apply(this, [tag].concat(Array.prototype.slice.call(arguments, 0)));
		};
	};

	return {
		createDOM : createDOM,
		DOMShortcut : DOMShortcut
	}

})();

var A      = DOM.DOMShortcut("A"),
    DIV    = DOM.DOMShortcut("DIV"),
    SPAN   = DOM.DOMShortcut("SPAN"),
    INPUT  = DOM.DOMShortcut("INPUT"),
    TR     = DOM.DOMShortcut("TR"),
    TD     = DOM.DOMShortcut("TD"),
    TABLE  = DOM.DOMShortcut("TABLE"),
    THEAD  = DOM.DOMShortcut("THEAD"),
    TBODY  = DOM.DOMShortcut("TBODY"),
    UL     = DOM.DOMShortcut("UL"),
    LI     = DOM.DOMShortcut("LI"),
    OL     = DOM.DOMShortcut("OL"),
    P      = DOM.DOMShortcut("P"),
    STRONG = DOM.DOMShortcut("STRONG"),
    EM     = DOM.DOMShortcut("EM");


