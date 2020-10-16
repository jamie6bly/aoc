
let startingNum = 134792;
let endingNum = 675810;
let count = 0

for (startingNum; startingNum < endingNum; startingNum += 1) {
    let digits = startingNum.toString().split('');
    let splitDigits = digits.map(Number)
        if (splitDigits[0] <= splitDigits[1] && splitDigits[1] <= splitDigits[2] &&
            splitDigits[2] <= splitDigits[3] && splitDigits[3] <= splitDigits[4] &&
            splitDigits[4] <= splitDigits[5]) {
                if (splitDigits[0] === splitDigits[1] || splitDigits[1] === splitDigits[2] ||
                    splitDigits[2] === splitDigits[3] || splitDigits[3] === splitDigits[4] ||
                    splitDigits[4] === splitDigits[5]) {
                                count = count + 1
    
                    }
                        
                }
        }
    console.log(count)
}

// if 11145
// if 1 = 1 AND 1 doesnt eql 1 OR
// if 1 = 1 AND 1 doesn't eql 4