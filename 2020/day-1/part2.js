import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const expenseReport = input.split("\n").map(Number);


const findAnswer = () => {
    for(let i = 0; i < expenseReport.length; i++){
        for(let n=0; n < expenseReport.length; n++){
            for(let n2=0; n2 < expenseReport.length; n2++){
                if(expenseReport[i] + expenseReport[i + n] + expenseReport[i + n2] == 2020){
                    console.log("success");
                    let answer = expenseReport[i] * expenseReport[i + n] * expenseReport[i + n2]
                    return answer
                }
            }
        }
    }
}

console.log(findAnswer())




