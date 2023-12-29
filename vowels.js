// Counting Vowels

// function countVowels(str) {
//     str = str.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
  
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const inputString = "Hello!";
//   const vowelCount = countVowels(inputString);
//   console.log(`Number of vowels in "${inputString}": ${vowelCount}`);
  


  //Finding Vowels

//   function findVowels(str) {
//     str = str.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const result = [];
  
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         result.push(char);
//       }
//     }
  
//     return result;
//   }
  
//   const inputString = "I am ready to go.";
//   const vowelChars = findVowels(inputString);
//   console.log(`Vowels in "${inputString}": ${vowelChars.join(', ')}`);



//Vowel Replacement

// function replaceVowels(str, replacement) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
  
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//         str = str.substring(0, i) + replacement + str.substring(i + 1);
//       }
//     }
  
//     return str;
//   }
  
//   const inputString = "Excuse me!";
//   const replacedString = replaceVowels(inputString, '$');
//   console.log(`String with vowels replaced: ${replacedString}`);



//Vowel Sorting

// function sortVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const vowelChars = str.split('').filter(char => vowels.includes(char)).sort();
  
//     return vowelChars.join('');
//   }
  
//   const inputString = "Purabi!";
//   const sortedVowels = sortVowels(inputString);
//   console.log(`Sorted vowels in "${inputString}": ${sortedVowels}`);




//Longest Vowel Substring

// function longestVowelSubstring(str) {
//     str = str.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let currentSubstring = '';
//     let longestSubstring = '';
  
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         currentSubstring += char;
//         if (currentSubstring.length > longestSubstring.length) {
//           longestSubstring = currentSubstring;
//         }
//       } else {
//         currentSubstring = '';
//       }
//     }
  
//     return longestSubstring;
//   }
  
//   const inputString = "aeiaaiooaeiou";
//   const longestSubstring = longestVowelSubstring(inputString);
//   console.log(`Longest vowel substring: "${longestSubstring}"`);
  
  
  
  //Palindrome check with vowel


  function isVowelPalindrome(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelChars = str.split('').filter(char => vowels.includes(char));
    const reversedVowels = vowelChars.slice().reverse();
  
    return vowelChars.join('') === reversedVowels.join('');
  }
  
  const inputString = "level";
  const isPalindrome = isVowelPalindrome(inputString);
  console.log(`Is "${inputString}" a vowel palindrome? ${isPalindrome}`);
  