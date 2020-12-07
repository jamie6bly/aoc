import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const expenseReport = input.split(/\s+/).join(',').split('-').join(',').split(':').join(',').split(',').filter(item => item !== '');

let totalValidPasswords = 0
let validPasswordcounter = 0
let letterAppears = 0

const findMatchingLetter = (password, letterRule) => {
    let letter = new RegExp(letterRule, "g");
    if (password.match(letter) == null){
        return letterAppears = 0
    }
    else {
        return letterAppears = password.match(letter).length
    }
}

const letterWithinLimits = (lowerLimit, upperLimit, letterCount) => {
    if (letterCount >= lowerLimit && letterCount <= upperLimit) {
        validPasswordcounter = 1
    }
    else {
        validPasswordcounter = 0
    }
    return validPasswordcounter
}
    
 const passwordChecker = () => {
    for(let i = 0; i < expenseReport.length; i+=4) {
        letterAppears = findMatchingLetter(expenseReport[i+3], expenseReport[i+2])
        validPasswordcounter = letterWithinLimits(expenseReport[i], expenseReport[i+1], letterAppears)
        totalValidPasswords = validPasswordcounter + totalValidPasswords;
   }
    return totalValidPasswords;
 }

passwordChecker()
console.log("The number of total valid passwords is " + totalValidPasswords)
