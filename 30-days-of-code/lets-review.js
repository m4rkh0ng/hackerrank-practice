function processData(input) {
    //Enter your code here
    let myStringArray = input.split('\n');
    let evenArray = [];
    let oddArray = [];
    let answer = "";

    for (let i=1; i<myStringArray.length; i++) {
        evenArray = [];
        oddArray = [];
        currentSubstring = myStringArray[i].split('');
        counter = 0;

        while (counter < currentSubstring.length) {
            if (counter % 2 == 0 || counter == 0) {
                evenArray.push(currentSubstring[counter]);
            } else {
                oddArray.push(currentSubstring[counter]);
            }
            counter++;
        }

        answer += `${evenArray.join('')} ${oddArray.join('')}`;

        if (i < myStringArray.length-1) {
            answer += `\n`;
        }
        
    }

    console.log(answer);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
