
let button = document.querySelector("#button");
button.addEventListener("click", () => {
    determineHeightAndThenDrawPyramid();
   
});
function determineHeightAndThenDrawPyramid(){
  document.querySelector('#pyramid').innerHTML = "";
  
  printPyramid(document.querySelector('#height').value);
}
/* 
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    // height is the number of rows. For each row...
    for (var row = 0; row < height; row++) {
        // figure out how many bricks in this row (aka the '#' characters)
        var numBricks = row + 2;

        // use the information from the user
        // figure out how many space characters
        var numSpaces = height - row - 1;

        // build up a string for this row. Starts empty...
        var rowStr = ".";
        
        // add the spaces
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";    
        }

        // add the bricks
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        
        }

        // print the string
        console.log(rowStr);
      
    let para = document.createElement("p");
      //console.log(rowStr);
      let node = document.createTextNode(rowStr);
      //console.log(node);
      para.appendChild(node);
      let element = document.getElementById("pyramid");
      //console.log(document.getElementById("pumpkin"));
      element.appendChild(para); 
    }
  }