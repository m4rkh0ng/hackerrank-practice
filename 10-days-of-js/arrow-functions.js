/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const newArray = nums.map((x)=> {
        if(x%2 == 0) {
            return x*2
        } else {
            return x*3
        }
    })
    return newArray;
}