function processData(input) {
    //Enter your code here
    /* 1. If the book is returned on or before the expected return date, no fine will be charged

    2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, 
    fine = ( 15 x (number of days late) ) Hackos 
    3. If the book is returned after the expected return month but still within the same calendar year as the expected return date,
    fine = ( 500 x (number of months late) ) Hackos
    4. If the book is returned after the calendar year in which it was expected, there is a fixed fine:
    fine = 10000 Hackos

    // #4 is kind of a brtual edgecase that isn't accounted for the end of a year--- say for instance someone rents a book during the last week of December and it's due on the last day of December but it gets returned during the first week of January--- this makes it automatically hit the 10000 Hackos fixed fine for being late for a regular amount of time
    // it would've been cool if the last condition for the calendar year were able to account for this (maybe longer than 12 months instead of calendar year conditions)

    // Note: ah, this is covered by test case #3

    input line 1: date of the actual return
    input line 2: date of the expected return
    */

    let actualYear = Number(input.split(`\n`)[0].split(' ')[2]);
    let actualMonth = Number(input.split(`\n`)[0].split(' ')[1]);
    let actualDay = Number(input.split(`\n`)[0].split(' ')[0]);

    let expectedYear = Number(input.split(`\n`)[1].split(' ')[2]);
    let expectedMonth = Number(input.split(`\n`)[1].split(' ')[1]);
    let expectedDay = Number(input.split(`\n`)[1].split(' ')[0]);

    let fine = 0;

    if (actualYear - expectedYear > 0) {
      fine = 10000;
    } else if (actualMonth - expectedMonth > 0 && actualYear == expectedYear) {
      fine = (500 * (actualMonth - expectedMonth));
    } else if (actualDay - expectedDay > 0 && actualYear == expectedYear && actualMonth == expectedMonth) {
      fine = (15 * (actualDay - expectedDay));
    }

    console.log(fine);
    return fine;
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
