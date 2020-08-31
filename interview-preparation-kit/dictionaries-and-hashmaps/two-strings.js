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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  let s1Dict = {};
  let s2Dict = {};

  let arr1 = s1.split('');
  let arr2 = s2.split('');

  let answer = 'NO';

  for (let i=0; i<arr1.length;i++) {
    s1Dict[arr1[i]] = arr1[i];
  }

  for (let j=0; j<arr2.length;j++) {
    s2Dict[arr2[j]] = arr2[j];
  }

  arr2 = Object.keys(s2Dict);

  for (let k=0; k<arr2.length;k++) {
    
    for (let e in s1Dict) {
      // console.log(e);

      if (e == arr2[k]) {
        answer = 'YES';
        break
      }
    }

    if (answer == 'YES') {
      break
    }
  }


  return answer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
