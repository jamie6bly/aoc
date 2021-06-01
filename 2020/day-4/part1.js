import { readFileSync } from 'fs';

const input = readFileSync(`./input.txt`, 'utf-8');
const passports = input.split('/\n\s*\n/');

console.log(passports)
