/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function

    // sort numerical array (including possible duplicate entries)
    let sortedNums = nums.sort(function(a,b) {
            return a-b;
    });

    // loop through array, removing previous duplicate entries until last entry in array
    for(let i=1; i<sortedNums.length; i++) {
        if (sortedNums[i] == sortedNums[i-1]) {
            sortedNums.splice(i-1, 1);
        }
    };

    return sortedNums[sortedNums.length-2];
}