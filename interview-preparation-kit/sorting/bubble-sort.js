'use strict';

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

  let numOfSwaps = 0;

// Complete the countSwaps function below.
function countSwaps(a) {
  // without comparing to an already sorted array, what's the most fundamental way to do this bubble sort?

    let n = a.length;
    let numberOfSwaps = 0;
    
    for (let i = 0; i < n;i++) {

      for (let j=0; j < n-1; j++) {
        if (a[j] > a[j+1]) {
          let tempValue = a[j];
          a[j] = a[j+1];
          a[j+1] = tempValue;

          numberOfSwaps++;
        }
      }

      if (numberOfSwaps === 0) {
        break
      }


    }
    console.log(`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[(n-1)]}`);
}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
