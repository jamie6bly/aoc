import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const pisteMap = input.split('\n')

let pisteLine
let i = 0
let newPosition
let newPisteLine
let finalPosition
let counter = 0

const pisteSplitter = (piste) => {
return pisteLine = piste.split('')
}

const moveAlongThree = (Position, acrossValue) => {
    newPosition = Position + acrossValue
    if (newPosition == 31){
        newPosition = 0
    }
    else if (newPosition == 32){
        newPosition = 1
    }
    else if (newPosition == 33){
        newPosition = 2
    }
    else if (newPosition == 34){
        newPosition = 3
    }
    else if (newPosition == 35){
        newPosition = 4
    }
    else if (newPosition == 36){
        newPosition = 5
    }
    else if (newPosition == 37){
        newPosition = 6
    }
    else if (newPosition == 38){
        newPosition = 7
    }
    else if (newPosition == 39){
        newPosition = 8
    }
    return newPosition
    }

const moveDownOne = (nextPisteLine, newPosition) => {
    newPisteLine = pisteSplitter(nextPisteLine)
    return newPisteLine[newPosition]
}

const makeMove = (acrossValue, downValue) => {
    let startingPosition = 0
    if (counter !== 0) {
        counter = 0
    }
    for (i=0; i < pisteMap.length-downValue ; i++) {
        newPosition = moveAlongThree(startingPosition, acrossValue)
        finalPosition = moveDownOne(pisteMap[i+downValue], newPosition)
        if (finalPosition == '#') {
            counter = counter + 1
        }
        startingPosition = startingPosition + acrossValue
        if (startingPosition == 31){
            startingPosition = 0
        }
        else if (startingPosition == 32){
            startingPosition = 1
        }
        else if (startingPosition == 33){
            startingPosition = 2
        }
        else if (startingPosition == 34){
            startingPosition = 3
        }
        else if (startingPosition == 35){
            startingPosition = 4
        }
        else if (startingPosition == 36){
            startingPosition = 5
        }
        else if (startingPosition == 37){
            startingPosition = 6
        }
        else if (startingPosition == 38){
            startingPosition = 7
        }
        else if (startingPosition == 39){
            startingPosition = 8
        }
    }
    return counter
}

makeMove(1, 1)
let firstNumber = counter
makeMove(3, 1)
let secondNumber = counter
makeMove(5, 1)
let thirdNumber = counter
makeMove(7, 1)
let forthNumber = counter
makeMove(1, 2)
let fifthNumber = counter



console.log(firstNumber)
console.log(secondNumber)
console.log(thirdNumber)
console.log(forthNumber)
console.log(fifthNumber)

console.log(firstNumber * secondNumber * thirdNumber * forthNumber * fifthNumber)