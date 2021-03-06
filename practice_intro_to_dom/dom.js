
//USE THIS RESOURCE FOR THE EXERCISE
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById


//I want to get the node with id ="intro", and store the value in introParagraph
var introParagraph = document.querySelector('#intro');




//now test this using this
console.log(introParagraph);

// We now have a reference to the DOM node. This DOM
// node represents the intro paragraph.

 // Access single unordered list: [0] index
var unorderedList1 = document.body.querySelectorAll('ul')[0];
console.log(unorderedList1);

// Access single unordered list: [2] index
var unorderedList2 = document.body.querySelectorAll('ul')[2];
console.log(unorderedList2);

// Create Node list of all list items within the UL for unorderedList1:
var allListItems1 = document.querySelectorAll('ul')[0].children[0].children;
console.log(allListItems1);

// Create Node list of all list items within the UL for unorderedList2:
var allListItems2 = document.querySelectorAll('ul')[2].children[0].children;
console.log(allListItems2);


