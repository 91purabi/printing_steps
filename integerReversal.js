// function reverseInteger(number) {
//     const numberString = number.toString();
//     const reversedString = numberString.split('').reverse().join('');
//     const reversedNumber = parseInt(reversedString, 10);
//     return reversedNumber;
// }

// const originalNumber = 12345;
// const reversedNumber = reverseInteger(originalNumber);

// console.log(`Original Number: ${originalNumber}`);
// console.log(`Reversed Number: ${reversedNumber}`);


 
// const originalNumber1 = 9876;
// const reversedNumber1 = reverseInteger(originalNumber1);
// console.log(`Original Number: ${originalNumber1}`);
// console.log(`Reversed Number: ${reversedNumber1}`);


// const originalNumber5 = 123456789;
// const reversedNumber5 = reverseInteger(originalNumber5);
// console.log(`Original Number: ${originalNumber5}`);
// console.log(`Reversed Number: ${reversedNumber5}`);
// console.log();


function reverseInteger(number) {
    const reversedArray = Array.from(String(number)).reverse();
    const reversedNumber = parseInt(reversedArray.join(''), 10);
    return reversedNumber;
  }
  
  const originalNumber10 = 456;
  const reversedNumber10 = reverseInteger(originalNumber10);
  console.log(`Original Number: ${originalNumber10}`);
  console.log(`Reversed Number: ${reversedNumber10}`);
  