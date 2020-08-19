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

function firstTenMultiples(n) {
    let maxMultiple = 10;
    let answerString = "";

    for(let i=1; i<=maxMultiple; i++) {
        answerString += `${n} x ${i} = ${n*i}`;
        if (i<maxMultiple) {
            answerString += `\n`;
        }
    }

    console.log(answerString);
}


function main() {
    const n = parseInt(readLine(), 10);
    firstTenMultiples(n);
}
