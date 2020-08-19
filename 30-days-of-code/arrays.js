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

function reversedArray(n, arr) {
    // for (i=n-1; i>-1; i++) {
        // could list each of the array elements in a new array, traversing from the end of the array to the beginning index 0
        // could also go from index 0 to last index & unshift(arr[i]) 
    // }

    console.log(arr.reverse().join(' '));
}


function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    reversedArray(n,arr);
}
