// 7 Pattern Questions in Node.js

// let rows = 5,
//   cols = 4,
//   n = 5,
//   m = 6;

// 1. Rectangle Pattern

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

/* 

****
****
****
****
****

*/

// 2. Hollow Rectangle Pattern

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     i > 0 && i < rows - 1 && j > 0 && j < cols - 1
//       ? process.stdout.write(" ")
//       : process.stdout.write("*");
//   }
//   console.log();
// }

/*

****
*  *
*  *
*  *
****

*/

// 3. Inverted Half Pyramid

// for (let i = 0; i < n; i++) {
//   for (let j = n - i; j > 0; j--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

/*

*****
****
***
**
*

*/

// 4. Half Pyramid After 180deg Rotation

// for (let i = n - 1; i >= 0; i--) {
//   for (let j = 0; j < n; j++) {
//     if (j >= i) process.stdout.write("*");
//     else process.stdout.write(" ");
//   }
//   console.log();
// }

/*

    *
   **
  ***
 ****
*****

*/

// 5. Half Pyramid of Numbers

// for (let i = 1; i <= n; i++) {
//   for (let j = i; j > 0; j--) {
//     process.stdout.write(i.toString());
//   }
//   console.log();
// }

/*

1
22
333
4444
55555

*/

// 6. Floyd's Triangle

// let count = 1;

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count.toString()} `);
//     count++;
//   }
//   console.log();
// }

/*

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

// 7. Butterfly Pattern

// for (let i = 0; i < m; i++) {
//   for (let j = 0; j < m * 2; j++) {
//     if (j <= i || j >= m * 2 - i - 1) process.stdout.write("*");
//     else process.stdout.write(" ");
//   }
//   console.log();
// }

// for (let i = m - 1; i >= 0; i--) {
//   for (let j = 0; j < m * 2; j++) {
//     if (j <= i || j >= m * 2 - i - 1) process.stdout.write("*");
//     else process.stdout.write(" ");
//   }
//   console.log();
// }

/*

*      *
**    **
***  ***
********
********
***  ***
**    **
*      *

*/
