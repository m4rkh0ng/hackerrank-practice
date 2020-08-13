/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
    let stringArray = s.split('');

    let newString = '';

    for(let i=0; i<stringArray.length; i++) {
        if (stringArray[i] == 'a' || stringArray[i] == 'A' ||
            stringArray[i] == 'e' || stringArray[i] == 'E' ||
            stringArray[i] == 'i' || stringArray[i] == 'I' ||
            stringArray[i] == 'o' || stringArray[i] == 'O' ||
            stringArray[i] == 'u' || stringArray[i] == 'U'
        ) {
            newString += stringArray[i] + `\n`;
        }
    }
    
    for(let i=0; i<stringArray.length; i++) {
        if (stringArray[i] == 'b' || stringArray[i] == 'B' || 
            stringArray[i] == 'c' || stringArray[i] == 'C' ||
            stringArray[i] == 'd' || stringArray[i] == 'D' ||
            stringArray[i] == 'f' || stringArray[i] == 'F' ||
            stringArray[i] == 'g' || stringArray[i] == 'G' ||
            stringArray[i] == 'h' || stringArray[i] == 'H' ||
            stringArray[i] == 'j' || stringArray[i] == 'J' ||
            stringArray[i] == 'k' || stringArray[i] == 'K' ||
            stringArray[i] == 'l' || stringArray[i] == 'L' ||
            stringArray[i] == 'm' || stringArray[i] == 'M' ||
            stringArray[i] == 'n' || stringArray[i] == 'N' ||
            stringArray[i] == 'p' || stringArray[i] == 'P' ||
            stringArray[i] == 'q' || stringArray[i] == 'Q' ||
            stringArray[i] == 'r' || stringArray[i] == 'R' ||
            stringArray[i] == 's' || stringArray[i] == 'S' ||
            stringArray[i] == 't' || stringArray[i] == 'T' ||
            stringArray[i] == 'v' || stringArray[i] == 'V' ||
            stringArray[i] == 'w' || stringArray[i] == 'W' ||
            stringArray[i] == 'x' || stringArray[i] == 'X' ||
            stringArray[i] == 'y' || stringArray[i] == 'Y' ||
            stringArray[i] == 'z' || stringArray[i] == 'Z' 
        ) {
                newString += stringArray[i] + `\n`;
        }
    }

    console.log(newString.slice(0,-1));
}