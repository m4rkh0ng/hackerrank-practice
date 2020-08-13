/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let currentRectangle = {
        length: a,
        width: b,
        perimeter: (2*a)+(2*b),
        area: a*b 
    }

    return currentRectangle;
}