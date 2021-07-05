import { readFileSync } from 'fs';

//current users
const users = readFileSync(`./fullusers.txt`, 'utf-8')
const usersArray = users.split('\n')

//csv of people that voted
const inputcsv = readFileSync(`./input.csv`, 'utf-8');
const votedcsv = inputcsv.split(/\s+/).join(',').split('-').join(',').split(';').join(',').split(',');

let usersDidntVote = []


const didTheyVote = (user) => {
    if (votedcsv.some(item => item == user) == false) {
        usersDidntVote.push(user)
    }
}

usersArray.forEach(item => didTheyVote(item))

console.log('all the users that didnt vote are:', usersDidntVote)
console.log('total users:', usersArray.length)
console.log('didnt vote:', usersDidntVote.length)


