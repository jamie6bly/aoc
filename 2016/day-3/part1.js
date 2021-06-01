import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const triangles = input.split(/\s+/).filter(item => item !== '').map(Number);

let count = 0

const validTriangle = (sideOne, sideTwo, sideThree) => {
    if (sideOne + sideTwo > sideThree){
        return count = count + 1
    }
}

const calculateTriangles = (code) => {
    for(let i = 0; i < code.length; i+=3) {
        validTriangle(code[i], code[i+1], code[i+2])
    }
    console.log(count)
}

calculateTriangles(triangles)


