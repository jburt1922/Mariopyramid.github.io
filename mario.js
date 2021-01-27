
printPyramid(5);


let space = " ";
let brick = "#";
let layer1 = space+space+space+space+space+space+brick+brick
let layer2 = space+space+space+space+space+brick+brick+brick
let layer3 = space+space+space+space+brick+brick+brick+brick
let layer4 = space+space+space+brick+brick+brick+brick+brick
let layer5 = space+space+brick+brick+brick+brick+brick+brick
let layer6 = space+brick+brick+brick+brick+brick+brick+brick
let layer7 = brick+brick+brick+brick+brick+brick+brick+brick

let rows = 3
//start by declaring an empty string outside the loop
let str = '';

//you will need to use a for loop nested inside another for loop.
for(let i=0; i<rows; i++){  //outer loop
  str = "";
  for(let j=0; j<rows+1; j++){//inner loop

    str += "#"; //this adds a # to the end of the string.

  }

}
console.log("Where is Mario? Peach is in need of some assitance!"+"\n")
  console.log(layer1) //once a row is done we print it out
  console.log(layer2)
  console.log(layer3)
  console.log(layer4)
  console.log(layer5)
  console.log(layer6)
  console.log(layer7)
function printPyramid(height) {

    // TODO
    // print that pyramid!

}
