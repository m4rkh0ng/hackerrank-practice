// where is it stated to name this function "getMaxLessThanK" ? it's unfortunate that I wasn't able to see that information until running the code & then getting the error message to see what was expected.

function getMaxLessThanK(n,k) {
    let sequence = [];

    for (let i = n; i>0; i--) {
        sequence.unshift(i);
    }

    let bestMatch = 0;

    // doing only a single loop while comparing adjacent values will not get the comparisons that exist for numbers in the rest of the sequence
    // proposal: start from the highest number of the sequence and loop through the sequence to evaluate bestMatch
    // then remove the last index of the sequence and re-evaluate with the next "last" entry until sequence.length < 2
    
    for(let j = (sequence.length-1); sequence.length > 2; j-- ) {
      for (let m = 1; j > m; m++) {
        if (sequence[j-m]) {
          let nowComparison = sequence[j] & sequence[j-m];

          if (nowComparison > bestMatch && nowComparison < k) {
            bestMatch = nowComparison;
          }
        }
      }
      // as said in earlier comment, we remove the last index to shorten the sequence array until we get down to sequence.length == 1 which stops the loop at the point where there's nothing left to compare— if we wanted to preserve the original array sequence, I'd assign this to a copied array for non-destructive mutablility
      sequence.pop();
    }

    return bestMatch;
};