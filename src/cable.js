/* 
You are given three numbers:

currentLength - The length of cable that is already possessed by the company
requiredLength - The total length of cable needed for the task
saleLength - The length of a single piece of cable that can be bought
Calculate the minimum number of lengths of cable that need to be purchased

The following assumptions hold true:

currentLength, requiredLength and saleLength are integers in the range 1 to 1,000,000,000
currentlength is less than or equal to requiredLength
 */

/* 
function cable1
   // accepts: currentLength - an integer between 1 and 1,000,000,000
   //          requireLength - an integer between 1 and 1,000,000,000
   //          saleLength - an integer between 1 and 1,000,000,000

   declare a variable named count and set it equal to 0
   declare a variable named i and set it equal to currentLength
   while i is less than requiredLength do
       Add saleLength to i
       increment count
   return count
*/
/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(currentLength, requireLength, saleLength) {
  let count = 0;
  for (let i = currentLength; i < requireLength; i += saleLength) {
    count += 1;
  }
  return count;
}

/* 
function cable2
   // accepts: currentLength - an integer between 1 and 1,000,000,000
   //          requireLength - an integer between 1 and 1,000,000,000
   //          saleLength - an integer between 1 and 1,000,000,000

   declare a variable named distance, assign it to the difference betwen requiredLength and currentlength
   declare a vaiable named total, 
   Divide distance by saleLength and round up to the nearest integer, assign this value to total
   return total
*/
/**
 The cable problem
 Implement algorithm 2 here
*/
function cable2(currentLength, requireLength, saleLength) {
  const distance = requireLength - currentLength;
  const total = Math.ceil(distance / saleLength);
  return total;
}

module.exports = { cable1, cable2 };
