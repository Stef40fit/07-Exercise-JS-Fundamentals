function solve(inputArray, numRotation){
   for (let index=0;index<numRotation;index++){
       let firsElement=inputArray.shift();
       inputArray.push(firsElement);
   }
   console.log(inputArray.join(" "));
}
solve([51, 47, 32, 61, 21], 2)