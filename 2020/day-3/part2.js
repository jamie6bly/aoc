import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const pisteMap = input.split('\n')

let pisteLine
let newPisteLine
let pisteLength = 30
let counter = 0


const pisteSplitter = (piste) => {
return pisteLine = piste.split('')
}

const moveAlongThree = (Position, acrossValue) => {
    let newPosition = Position + acrossValue
    if (newPosition == pisteLength + 1){
        newPosition = 0
    }
    else if (newPosition == pisteLength + 2){
        newPosition = 1
    }
    else if (newPosition == pisteLength + 3){
        newPosition = 2
    }
    else if (newPosition == pisteLength + 4){
        newPosition = 3
    }
    else if (newPosition == pisteLength + 5){
        newPosition = 4
    }
    else if (newPosition == pisteLength + 6){
        newPosition = 5
    }
    else if (newPosition == pisteLength + 7){
        newPosition = 6
    }
    return newPosition
    }

const moveDownOne = (nextPisteLine, newPosition) => {
    newPisteLine = pisteSplitter(nextPisteLine)
    return newPisteLine[newPosition]
}

const makeMove = (acrossValue, downValue) => {
    let startingPosition = 0
    counter = 0

    for (let i=0; i < pisteMap.length-downValue ; i+=downValue) {
        let newPosition = moveAlongThree(startingPosition, acrossValue)
        let finalPosition = moveDownOne(pisteMap[i + downValue], newPosition)
        if (finalPosition == '#') {
            counter = counter + 1
        }
        startingPosition = startingPosition + acrossValue
        if (startingPosition == pisteLength + 1){
            startingPosition = 0
        }
        else if (startingPosition == pisteLength + 2){
            startingPosition = 1
        }
        else if (startingPosition == pisteLength + 3){
            startingPosition = 2
        }
        else if (startingPosition == pisteLength + 4){
            startingPosition = 3
        }
        else if (startingPosition == pisteLength + 5){
            startingPosition = 4
        }
        else if (startingPosition == pisteLength + 6){
            startingPosition = 5
        }
        else if (startingPosition == pisteLength + 7){
            startingPosition = 6
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

console.log(firstNumber * secondNumber * thirdNumber * forthNumber * fifthNumber)