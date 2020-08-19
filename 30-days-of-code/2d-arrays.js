'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    // have a counter range from index 1, 2, 3, 4 (gets top center value)
    // then map for arrays 0, 1, 2, 3 (top row of hourglass)

    // arr[1][0] until arr[4][3]

    let currentSum = 0;
    let bestSum = 0;
    let counter = 0;
    let j = 1;

    while (counter < 4 ) {
      if (j < 5) {
        currentSum = arr[counter][j] + arr[counter][j-1] + arr[counter][j+1] + arr[counter+1][j] + arr[counter+2][j] + arr[counter+2][j-1] + arr[counter+2][j+1];
        if (currentSum > bestSum || counter === 0 && j === 1) {
          bestSum = currentSum;
        }
        j++; 
      } else if (j === 5) {
        counter++;
        j = 1;
      }
    }
    
    console.log(bestSum);
    return bestSum;
}