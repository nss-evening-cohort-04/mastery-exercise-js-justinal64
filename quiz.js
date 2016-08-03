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
var line = "";
var counter = 0;

// Create a function to create the tree
// write to an array and then output the array
function createTree(size, character) {
    // attempt number 2
    size = parseInt(size);
    var iniSize = ((parseInt(size) + 1) - parseInt(size));
    for(var h = size; h > 0; h--) {
        tree[counter] = "";
        for(var i = h; i > 0; i--) {
            tree[counter]+= "_";
        }
        for(var j = 0; j < iniSize; j++) {
            tree[counter] += character;
        }
        console.log(tree[counter]);
        counter++;
        iniSize += 2;
    }
}

// Event listener for the 2 inputs
// add event listener for user hitting enter
document.getElementById("submit").addEventListener("click", function() {
    // add logic to display an alert if either field is empty
    var size = document.getElementById("treeSize").value;
    var character = document.getElementById("charUsed").value;
// Call a function to create the tree
    createTree(size, character);
});
