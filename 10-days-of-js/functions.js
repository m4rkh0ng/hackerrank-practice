/*
 * Create the function factorial here
 */
function factorial(n) {
    let previousN = 1;
    let currentN = 1;

    for (let i=1; n>0; n--) {
        if(i>0) {
            currentN = n*previousN;
            previousN = n-1;
            i--;
        } else {
            currentN *= previousN;
            previousN = n-1;
        }
    }   

    return currentN;
}