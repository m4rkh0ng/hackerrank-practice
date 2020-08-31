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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  let magDict = {};
  let noteCanBeWritten = '';

  // creating an object that has the magazine array indicies as keys
  for (let i = 0; i < magazine.length ; i ++ ) {
    let word = magazine[i];
    // ternary statement will help us keep track of number of unique words (with the numerical value) that we have by checking if the magDict[word] exists in the object already)
    magDict[word] = magDict[word] ? magDict[word] +1 : 1;
  }

  // time to loop through our desired note to write & compare with magazine object's words

  for (let i=0; i<note.length; i++) {
    // magDict has the word that's needed for the note at current index of note
    if (!(note[i] in magDict)) {
      noteCanBeWritten = 'No';
      break;
    } else {
      // In the magDict
      if (magDict[note[i]] < 1) {
        noteCanBeWritten = 'No';
        break;
      }
      magDict[note[i]] = magDict[note[i]] - 1;
    }
  }
  if (noteCanBeWritten === '') {noteCanBeWritten = 'Yes'}
  console.log(noteCanBeWritten);
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
