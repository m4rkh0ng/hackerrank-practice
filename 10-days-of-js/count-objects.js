/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */


function getCount(objects) {
    let matches = 0;
    // running this in repl.it, I'm not sure why I need to declare o ahead of time for a for...in loop situation; it's working there w/o it; maybe because of 'use strict'? not exactly sure; would like clarification later at some point
    let o;
  
    for (o in objects) {
      if (objects[o].x == objects[o].y) {
        matches++;
      }
    }
  
    return matches;
}  