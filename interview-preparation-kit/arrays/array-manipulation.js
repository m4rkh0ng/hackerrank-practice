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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  // console.log("n: ", n);
  // this is written poorly above where I expected n to contain n & m, but it doesn't
  // this frustrates me every time that I work on challenges on hackerrank due to inconsistency of the description of the input/output

  // console.log("queries: ", queries);
  let queryArray = queries;
  let arraySize = Number(n);


  // populate myArray to have correct amount of zeroes
  // for (let i = arraySize; i >0; i--) {
  //   myArray.push(0);
  // }

  let myArray = Array(arraySize).fill(0);
  

  // need to make this more performance friendly...
  for (let j=0; j<queryArray.length;j++) {
    // for(let k = 1; k< myArray.length;k++) {
    //   if (k >= queryArray[j][0] && k <= queryArray[j][1]) {
    //     myArray[k-1] += queryArray[j][2];
    //   }
    // }

    myArray[queryArray[j][0]-1] += queryArray[j][2];
    myArray[queryArray[j][1]] += (-1* queryArray[j][2]);  
  }

  let highestValue = 0;
  let currentValue = 0;

  for (let l = 0; l < myArray.length;l++) {
    currentValue += myArray[l];

    if (currentValue > highestValue) {
      highestValue = currentValue;
    }
  }

  return highestValue;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
