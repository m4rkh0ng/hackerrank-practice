'use strict';

const fs = require('fs');

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let currentSum = 0;
  let bestSum = 0;
  let counter = 1;

  for (let i=0; i<4; i++){
    // values 1,2,3,4 (exclude 0, 5) across
    // values 0,1,2,3 (exclude 4,5) down
    while (counter < 5) {
      currentSum = arr[i][counter] + arr[i][counter-1] + arr[i][counter+1] + arr[i+1][counter] + arr[i+2][counter] + arr[i+2][counter-1] + arr[i+2][counter+1];
      if (currentSum > bestSum || i == 0 && counter == 1) {
        bestSum = currentSum;
      }

      counter++;
    }

    counter = 1;
  }

  return bestSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
