import { readFileSync } from 'fs';

const masses = readFileSync(`./input.txt`, 'utf-8');
const massByLine = masses.split("\n");

let totalFuel = 0;

const fuelRequired  = (masses) => {
    return (Math.floor(masses / 3))- 2;
    }


const fuelRequiredAfterwards  = () => {
    for(let i = 0; i < massByLine.length; i++){
        let currentFuel = (fuelRequired(massByLine[i]));
        totalFuel = currentFuel + totalFuel;
    }
    console.log("The fuel required for the first puzzle is " + totalFuel);
    return totalFuel;
    }

fuelRequiredAfterwards()

