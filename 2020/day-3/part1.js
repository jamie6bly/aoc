import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const pisteMap = input.split('\n')

let pisteLine
let i = 0
let newPosition
let newPisteLine
let finalPosition
let counter = 0
let startingPosition = 0

const pisteSplitter = (piste) => {
return pisteLine = piste.split('')
}

const moveAlongThree = (Position) => {
    newPosition = Position + 3
    if (newPosition == 31){
        newPosition = 0
    }
    else if (newPosition == 32){
        newPosition = 1
    }
    if (newPosition == 33){
        newPosition = 2
    }
    return newPosition
    }

const moveDownOne = (nextPisteLine, newPosition) => {
    newPisteLine = pisteSplitter(nextPisteLine)
    return newPisteLine[newPosition]
}

const makeMove = () => {
    for (i=0; i < pisteMap.length-1 ; i++) {
        newPosition = moveAlongThree(startingPosition)
        finalPosition = moveDownOne(pisteMap[i+1], newPosition)
        if (finalPosition == '#') {
            counter = counter + 1
        }
        startingPosition = startingPosition + 3
        if (startingPosition == 31){
            startingPosition = 0
        }
        else if (startingPosition == 32){
            startingPosition = 1
        }
        else if (startingPosition == 33){
            startingPosition = 2
        }
    }
    console.log(counter)
}

makeMove()
