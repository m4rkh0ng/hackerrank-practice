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

function weirdOrNot(n) {
    switch (n>0) {
        case (n % 2 !== 0):
            console.log("Weird");
            break;
            return "Weird"
        case (n % 2 == 0 && n < 5):
            console.log("Not Weird");
            break;
            return "Not Weird"
        case (n % 2 == 0 && n >= 6 && n <= 20):
            console.log("Weird");
            break;
            return "Weird"
        case (n % 2 == 0 && n > 20):
            console.log("Not Weird");
            break;
            return "Not Weird"
    }
}

function main() {
    const N = parseInt(readLine(), 10);
    weirdOrNot(N);
}
