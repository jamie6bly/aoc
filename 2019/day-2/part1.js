// if index 0 is 1 then 
// take the value at int 2 go to that index store the value
// take the value at int 3 go to that index store the value
// plus the 2 values together and store that value at index 4

// skip on 4 indexes

// if it's 2 then 
// take the value at int 2 go to that index store the value
// take the value at int 3 go to that index store the value
// times the 2 values together and store that value at index 4

// skip on 4 indexes

// if the index is 99 stop.


import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const intcode = input.split(",").map(Number)

intcode[1] = 12;
intcode[2] = 2;

const gravityAssist = () => {
    for (let i = 0; i < intcode.length; i+= 4) {
        let code = intcode[i]
        let i1 = intcode[i + 1]
        let i2 = intcode[i + 2]
        let output = intcode[i + 3]

        if (code === 1) {
            intcode[output] = intcode[i1] + intcode[i2]
        } else if (code === 2) {
            intcode[output] = intcode[i1] * intcode[i2]
        } else if (code === 99) {
            console.log("The answer is " + intcode[0])
        }
    }
}

gravityAssist()