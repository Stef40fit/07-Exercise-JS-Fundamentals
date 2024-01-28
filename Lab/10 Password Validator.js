function solve(password){
    const errors =[];
    const regexLettersAndDigits = /^[A-Za-z0-9]+$/
    const countDigitInString =(word)=>{
        let counter=0
        for(const char of word){
            if(!isNaN(parseInt(char))){
                counter+=1
            }
        }
        return counter
    }
    const numberOfDigitInString =countDigitInString(password)
    if (password.length < 6 || password.length>10){
        errors.push("Password must be between 6 and 10 characters")
    }

    if (!password.match(regexLettersAndDigits)){
        errors.push("Password must consist only of letters and digits")
    }
    if (numberOfDigitInString<2){
        errors.push("Password must have at least 2 digits")
    }
    if (errors.length===0){
console.log('Password is valid')
    }
    else {
        errors.forEach((error)=>console.log(error))
    }
}
solve('logIn')