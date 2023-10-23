
// MAINDIV
// <div id="mainDiv">
var mainDivElement = $("<div>", { 
	"id" : "mainDiv" 
});
$("body").append(mainDivElement);

// TEXT (The)
$("#mainDiv").append("The ");

// BOLD
// <b>World Wide Web Consortium</b>
var boldElement = $("<b>").text("World Wide Web Consortium");
$("#mainDiv").append(boldElement);

// TEXT (, abbreviated to)
$("#mainDiv").append(", abbreviated to");

// STRONG
// <strong>W3C</strong>
var strongElement = $("<strong>").text("W3C");
$("#mainDiv").append(strongElement);

// TEXT (, is a)
$("#mainDiv").append(", is a ");

// HYPERLINK (Standards Organization)
// <a href=" http://en.wikipedia.org/wiki/Standards_organization " target="_blank" title="Standards organization">Standards Organization.</a>
var hyperlinkElementStandardsOrganization = $("<a>", {
	"href": "http://en.wikipedia.org/wiki/Standards_organization",
	"target": "_blank",
	"title": "Standards Organization",
	"text": "Standards Organization."
});
$("#mainDiv").append(hyperlinkElementStandardsOrganization);

// TEXT ( A)
$("#mainDiv").append(" A ");

// I 
// <i>non-profit</i> 
var IElement = $("<i>").text("non-profit");
$("#mainDiv").append(IElement);


// TEXT (responsible for promoting the compatibility of the technologies )
$("#mainDiv").append(" responsible for promoting the compatibility of the technologies ");

// HYPERLINK (World Wide Web)
// 	<a href="http://en.wikipedia.org/wiki/World_Wide_Web" target="_blank" title="World Wide Web">World Wide Web</a>
var hyperlinkElementWWW = $("<a>", {
	"href": "http://en.wikipedia.org/wiki/World_Wide_Web",
	"target": "_blank",
	"title": "World Wide Web",
	"text": "World Wide Web"
});
$("#mainDiv").append(hyperlinkElementWWW);


// TEXT (.)
$("#mainDiv").append(".");


// P
// <p style="text-align: right">Your Name Here</p>
var pElement = $("<p>").css(
	"text-align", "right"
	).text("Louis-Olivier Major");
$("#mainDiv").append(pElement);

