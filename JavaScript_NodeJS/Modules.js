// import Circle from './geometry/circle.js';

//  import { PI, TAU } from './geometry/constants.js';

//  import { magnitude as hypotenuse } from './vectors/utils.js';

// Os valores dentro de um módulo JavaScript são privados e não podem ser importados para outros módulos, a menos que tenham sido exportados explicitamente.

export const TAU = 2 * Math.PI;

 export function magnitude(x,y) { 
    return Math.sqrt(x*x + y*y); 
 }

 export default class Circle { 
    /* codigo da classe */ 
 }