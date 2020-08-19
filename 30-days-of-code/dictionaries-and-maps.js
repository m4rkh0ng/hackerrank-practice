function processData(input) {
    //Enter your code here
    let dataArray = input.split(`\n`);
    let numberOfPhonebookEntries = Number(dataArray[0]);
    let phonebook = {};

    // array[index].split(' ')[0] (0 for key, 1 for value since it's a two part string separated by a space for the input)
    // populate phonebook with names and numbers

    for (let i= 1; i <= numberOfPhonebookEntries ; i++) {
      let key = dataArray[i].split(` `)[0];
      let value = dataArray[i].split(` `)[1];

      phonebook[key] = value;
    }

    // console.log(phonebook);

    let answerArray = [];
    let startingPoint = Number(numberOfPhonebookEntries)+1;

    // match given name to dictionary key (else not found)
    for (let j = numberOfPhonebookEntries+1, k=dataArray.length; j < k; j++) {
      if(dataArray[j] in phonebook) {
        answerArray.push(`${dataArray[j]}=${phonebook[dataArray[j]]}`);
      } else {
        answerArray.push("Not found");
      }
    }
    // console.log(answerArray);
    
    console.log(answerArray.join(`\n`));
}