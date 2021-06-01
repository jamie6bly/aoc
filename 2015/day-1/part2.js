import { readFileSync } from 'fs';

const brackets = readFileSync(`./input.txt`, 'utf-8');
const bracketsArray = brackets.split('');

let floor = 0
let position = 0

const findTheBasement = (input) => {
    for(let i = 0; i < input.length; i++){
        if (input[i] == '(') {
            floor = floor + 1
        }
        else if (input[i] == ')') {
            floor = floor - 1
        }
        if (floor === -1){
        position = i + 1
        return position
        }
    }

}

findTheBasement(bracketsArray)
console.log(position)
let store = 0
store = position - 993

console.log(store)