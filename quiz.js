/*1. A key that specifies the height of the pine tree.
2. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
3. A key that specifies which character to use to build the pine tree.
4. The character to use should be from user input in a `<input type="text">` field in the DOM.*/

/*
Once the user enters in a number, and a character, the user can either then just press the
enter key as long as the cursor is in one of the input fields)_, or click a button that is
labeled "Grow your tree" and the tree should be shown in the console. This requires you to add
an event listener to the button, as well as an event listener for the enter/return key.
*/

/*If either of the input fields does not have a value in it when the user presses
the enter key, or presses the button, then display an alert stating that both fields must have a value.*/


var tree = [];
var counter = 0;
var submit = document.getElementById("submit");
var input = document.getElementById("treeSize");
var input1 = document.getElementById("charUsed");

// Create a function to create the tree
function createTree(calculate) { //size, character

    size = parseInt(calculate.size);
    var iniSize = 1;
    for(var h = size; h > 0; h--) {
        tree[counter] = "";
        // adds blank spaces
        for(var i = h; i > 0; i--) {
            tree[counter]+= " "; // I used _ to test for the correct # of spaces
        }
        // add the character entered to the pyramid 1, 3, 5, 7, etc etc "size" times
        for(var j = 0; j < iniSize; j++) {
            tree[counter] += calculate.character;
        }
        console.log(tree[counter]);
        counter++;
        iniSize += 2;
    }
}

function validateInput() {
    var size = document.getElementById("treeSize").value;
    var character = document.getElementById("charUsed").value;
    var calculate = {size: size, character: character};
    // Checks for an empty field and displays an alert
    if(size === "" || character === "") {
        alert("Please enter a value for both input fields");
    } else {
        // Call a function to create the tree
        createTree(calculate);
    }
}

// event listener for click
submit.addEventListener("click", validateInput);

// (Enter)event listener for the first input field
input.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        validateInput();
    }
});
// (Enter)event listener for 2nd input field
input1.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        validateInput();
    }
});







