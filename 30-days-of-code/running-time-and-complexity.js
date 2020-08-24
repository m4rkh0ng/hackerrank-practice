function processData(input) {
    //Enter your code here
    // 1 is not prime
    let nums = input.split(`\n`);
    nums.shift();
    let answer = ``;
    let isPrime = 0;
    let counter = 0;
    
    for (let i=0; i<nums.length; i++) {
      let sq = Math.sqrt(nums[i]);
      isPrime = 0;
  
      if (nums[i] == 1) {
        answer += `Not prime`
        if (i < nums.length-1) {
          answer += `\n`
        }
        counter++;
      }
  
      for(let j=2; j<=sq; j++) {
        if (nums[i] % j == 0) {
          answer += `Not prime`
          if (i < nums.length-1) {
            answer += `\n`
          }
          counter++;
          break;
        } 
      }
  
      if (counter < i+1) {
        answer += `Prime`
        if (i < nums.length-1) {
          answer += `\n`
        }
        counter++;
      }
          
    }
  
    console.log(answer);
    return answer;
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
  