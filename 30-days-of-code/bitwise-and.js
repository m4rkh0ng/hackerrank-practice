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

function getMaxLessThanK(n,k) {
    let sequence = [];
    let maxValue = n;

    for (let i = maxValue; i>0; i--) {
      sequence.unshift(i);
    }

    let bestMatch = 0;

    for (let j = (sequence.length-1); sequence.length > 2; j--) {
      for (let m = 1; j > m; m++) {
        if (sequence[j-m]) {
          let nowComparison = sequence[j] & sequence[j-m];

          if (nowComparison > bestMatch && nowComparison < k) {
            bestMatch = nowComparison;
          }
        }
      }
      sequence.pop();
    }

    console.log(bestMatch);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        getMaxLessThanK(n, k);
    }

}
