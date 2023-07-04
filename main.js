// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Doubles every other digit of the array, starting from the left of the check digit
// const generateDoubledArray = digits => {
//     const startingPoint = digits.length - 2; // starting point is right-most digit after the check digit ✅
//     for (let i = startingPoint; i >= 0; i = i -2) {
//         console.log(digits[i]); // should print every other digit from right to left ✅
//     }
// }




// Returns true when an array contains digits of a valid credit card number and false when it's invalid
const validateCred = digits => {
    const checkDigit = digits[digits.length - 1]
    console.log('the check digit is: ', checkDigit);

    // Remove the last element
    let transformedDigits = digits.slice(0, digits.length -1);
    console.log(transformedDigits); 

    // Reverse the new array so we can iterate from right to left
    transformedDigits.reverse();
    console.log('reversed array')
    console.log(transformedDigits);

    // Double every other element
    transformedDigits = transformedDigits.map((digit, index) => {
        // console.log('value: ', digit);
        // console.log('index: ', index);
        return index % 2 === 0 ? digit * 2 : digit
    })

    console.log('double every other');
    console.log(transformedDigits);

     // Subtract 9 from any digit that is greater than 9
     transformedDigits = transformedDigits.map(digit => {
        if (digit > 9) {
            console.log(digit + ' is greater than 9')
            return (digit - 9);
        } else {
            return digit;
        }
    })

    console.log('subtract 9')
    console.log(transformedDigits);

    // Sum all digits
    const sumOfTransformedDigits = transformedDigits.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log('sum: ', sumOfTransformedDigits);

    // Sum including check digit
    const sumOfDigits = sumOfTransformedDigits + checkDigit;
    console.log('total sum: ', sumOfDigits);

    // Is it valid? (Is it divisible by 10?)
    return sumOfDigits % 10 === 0;
}

console.log(validateCred(valid1));
