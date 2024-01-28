function solve(number){
    let numberStr = number.toString();
    let sumOdd= 0;
    let  sumEven= 0;
    for(let digit of numberStr){
        let currentDigit = parseInt(digit,10)
        if(digit % 2 == 0){
            sumEven += currentDigit;
        }
        else {
            sumOdd += currentDigit;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}
solve(3495892137259234)