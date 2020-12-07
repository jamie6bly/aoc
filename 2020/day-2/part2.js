import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const expenseReport = input.split(/\s+/).join(',').split('-').join(',').split(':').join(',').split(',').filter(item => item !== '');

let totalValidPasswords = 0
let validPasswordcounter = 0
let splitPassword

const passwordSplitter = (password) => {
return splitPassword = password.split('')
}

const letterChecker = (firstIndex, secondIndex, letter, password) => {
if (password[firstIndex-1] == letter && password[secondIndex-1] !== letter){
    validPasswordcounter = 1
}
else if (password[firstIndex-1] !== letter && password[secondIndex-1] == letter) {
    validPasswordcounter = 1
}
else {
    validPasswordcounter = 0
}
return validPasswordcounter
}

const passwordChecker = () => {
    for(let i = 0; i < expenseReport.length; i+=4) {
        splitPassword = passwordSplitter(expenseReport[i+3])
        validPasswordcounter = letterChecker(expenseReport[i], expenseReport[i+1], expenseReport[i+2], splitPassword)
        totalValidPasswords = validPasswordcounter + totalValidPasswords;
    }
    return totalValidPasswords;
}

passwordChecker()
console.log("The number of total valid passwords is " + totalValidPasswords)
