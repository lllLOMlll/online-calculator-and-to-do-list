// DIV
// <div id="divExo2">
var divExo2 = $("<div>", {
    "id" : "divExo2"
});
$('body').append(divExo2);

// H2
// <h2>Languages base on ECMAScript :</h2>
var h2Element = $("<h2>").text("Languages base on ECMAScript :");
divExo2.append(h2Element);


// UL
var ulElement = $("<ul>");
divExo2.append(ulElement);

// LI
var liElement = $("<li>");
ulElement.append(liElement);

// SPAN
// <span class="prettyJavaScrip" style="color: green;text-decoration: underline;">
var spanElement = $("<span>", {
    "class": "ulElement"
}).css({
    "color": "green",
    "text-decoration": "underline"
});
liElement.append(spanElement);



// BOLD
// <b>JavaScript</b>
var boldElement = $("<b>").text("JavaScript");
spanElement.append(boldElement);


// LI (JScript)
//<li>JScript</li>
var liJScriptElement = $("<li>").text("JScript");
ulElement.append(liJScriptElement);


// LI (ActionScript)
// <li>ActionScript</li>
var liActionScriptElement = $("<li>").text("ActionScript");
ulElement.append(liActionScriptElement);


// LI (mushu)
var liMushuElement = $("<li>");
ulElement.append(liMushuElement);


// BOLD (mushu)
// <b>MushuScript</b>
var boldMushuElement = $("<b>").text("MushuScript");
liMushuElement.append(boldMushuElement); 


// LI (EX4)
// <li>EX4</li>
var liEX4Element = $("<li>").text("EX4");
ulElement.append(liEX4Element);


// P (Other languages to come!)
var pElement = $("<p>");
divExo2.append(pElement);


// I (Other languages)
// <i>Other languages to come!</i>
var iElement = $("<i>").text("Other languages to come!");
pElement.append(iElement);
// var iElement = document.createElement("i");
// iElement.textContent = "Other languages to come!";
// pElement.appendChild(iElement);