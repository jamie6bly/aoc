import { readFileSync } from 'fs';

const brackets = readFileSync(`./input.txt`, 'utf-8');
const bracketsArray = brackets.split('');


const allUp = bracketsArray.filter(item => item !== ')')
const totalUp = allUp.length

const allDown = bracketsArray.filter(item => item !== '(')
const totalDown = allDown.length

const floor = totalUp - totalDown


console.log(floor)
