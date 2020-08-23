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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    // Any person in the queue can bribe the person directly in front of them to swap positions. 
  // If two people swap positions, they still wear the same sticker denoting their original places in line. (value is consistent with starting position) 
  // One person can bribe at most two others. 
  let numberOfBribes = 0;

  for (let i = 0; i < q.length; i++) {
    let bribes = q[i] - (i+1);
    let bribeLimit = q[i] - 2 > 0 ? q[i] - 2 : 0;

    if (bribes > 2) {
      console.log(`Too chaotic`);
      return
    }

    for (let j = bribeLimit; j<i;j++) {
      if (q[j]>q[i]) { 
        numberOfBribes++
      }
    }
  }
  console.log(numberOfBribes);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
