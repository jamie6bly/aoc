import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const expenseReport = input.split("\n").map(Number);

for(let i = 0; i < expenseReport.length; i++){
    for(let n=0; n < expenseReport.length; n++){
        if(expenseReport[i] + expenseReport[i + n] == 2020){
            console.log("success");
            console.log(expenseReport[i]);
            console.log(expenseReport[i + n]);
            let answer = expenseReport[i] * expenseReport[i + n]
            console.log(answer)
            break
        }

    }
}




