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
    const n = parseInt(readLine(), 10);

    let nBinary = n.toString(2);

    let currentStreak = 0;
    let bestStreak = 0;

    nBinary = nBinary.split('');

    for (let i=0; i<nBinary.length; i++) {
      if (Number(nBinary[i]) === 1) {
        currentStreak++;
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak;
        }
      } else if (Number(nBinary[i]) === 0) { 
        currentStreak = 0;
      }
    }

    console.log(bestStreak);
}
