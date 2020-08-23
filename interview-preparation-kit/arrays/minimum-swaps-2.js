'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  // match numeric value to correct index
  // we know that there are consecutive integers && we know the length of the array is the max value
  // if two values are unsorted and in the corresponding indicies, that should take first priority to swap
  // otherwise, traverse from lowest to highest, swap to sort current position to correct numeric value at index
  let counter = 0;
  let tempValue = 0;
  let numberOfSwaps = 0;
  let j=1;

  for (let i =0; i< arr.length; i++) {
    counter++;

    if(arr[i] == counter) {
      //do nothing
    } else {
      while(arr[i+j] !== counter && j < arr.length+1) {
        j++;
      }

      if (arr[i+j] == counter) {
        tempValue = arr[i];
        arr[i] = arr[i+j];
        arr[i+j] = tempValue;
        numberOfSwaps++;
      }
    }
    j = 1;
  }

  return numberOfSwaps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
