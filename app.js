/* CHAPTER-NO=17-20 */
// Q.NO=1
// ANS=
// let array = []
// let multiArr=[[[]]]
// ======================
// Q.NO=2
// ANS=
// let arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for(i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
//     document.write(arr[i]+"<br>")
// }
// ===================================
// Q.NO=3
// ANS=
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i + '<br>')
//   }
// ================================
// Q.NO=4
// ANS=
// const tableNumber = parseInt(prompt("Enter the table number:"));
// const tableLength = parseInt(prompt("Enter the table length:"));
// if (!isNaN(tableNumber) && !isNaN(tableLength)) {
//   document.write(`Multiplication Table for ${tableNumber}:`+"<br>");
//   for (let i = 1; i <= tableLength; i++) {
//     document.write(`${tableNumber} x ${i} = ${tableNumber * i}`+"<br>");
//   }
// } else {
//   document.write("Please enter valid numbers for the table number and length.");
// }
// ===================================================================================
// Q.NO=5
// ANS=
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
//     for(i = 0; i<=fruits.length; i++) {
//         console.log(fruits[i])
//     }
// =====================================================================
// Q.NO=6
// ANS=
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
/* for (var i = 0; i<= 15; i++){
    console.log([i]);
    document.write(i + ",")
} */

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

/* for (var i = 10; i>=1; i--){
    console.log(i)
    document.write(i+",")
}
 */

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

/* for (var i=0; i<=20; i+=2){
    console.log(i)
    document.write(i+",")
} */

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

/* for (var i=1; i<=19; i+=2){
    console.log(i);
    document.write(i+",")
} */

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

/* for (var i=1; i<=10;i++){
    console.log(2*i+"k")
    document.write(2*i+"k"+",")
} */
// ===========================================================

// Q.NO=7
// ANS:
// Define the array of items
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Get user input for the item to search
// const userInput = prompt("Enter an item to search:");

// // Convert the user input to lowercase for case-insensitive matching
// const userInputLowerCase = userInput.toLowerCase();

// // Check if the item is found in the array
// let found = false;
// for (let i = 0; i < A.length; i++) {
//   const itemLowerCase = A[i].toLowerCase();
//   if (itemLowerCase === userInputLowerCase) {
//     found = true;
//     break;
//   }
// }

// // Display the result based on whether the item is found
// if (found) {
//   alert(`Yes, '${userInput}' is found in the list.`);
// } else {
//   alert(`No, '${userInput}' is not found in the list.`);
// }
// ===========================================================================

// Q.NO=8
// ANS=

// let A=[24, 53, 78, 91, 12];
// let largest =[0];
// for (let i=1; i < A.length; i++) {
//     if(A[i]>largest){
//         largest=A[i];
//     }
// }
// console.log(largest)
// document.write("The largest number is:"+largest)
// ====================================================

// Q.NO=9
// ANS=
// let A=[24, 53, 78, 91, 12];
// let smallest =A[0];
// for (let i=1; i < A.length; i++) {
//     if(A[i]<smallest){
//         smallest=A[i];
//     }
// }
// console.log(smallest)
// document.write("The smallest number is:"+smallest)
// =====================================================

// Q.NO=10
// ANS=
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//       document.write(i+",")
//     }
//   }
// =======================================================================================================================================================
// =============================================================================================================================
// ===================================================================================================
// ============================================================================
// ==================================================
// =============================
// =============
//    CHAPTER=21-25

// Q.NO=1
// ANS=
// let firstName=prompt("Put the First Name");
// let lastName=prompt("Put the Last Name")
// let fullName=firstName + " " + lastName
// alert("WellCome : " + fullName + ".")
// =============================================

// Q.NO=2
// ANS=

// let model=prompt("Put the Mobile Model")
// document.write("My favarite Phone is : " + model + " length of string " + model.length + " hai. ")
// =====================================================================================================

// Q.NO=3
// ANS=

// let word="Pakistani";
// let letterToFind="aa";
// let index=word.indexOf(letterToFind)
// if (index !== -1){
//     document.write(`Word "${word}" mein letter "${letterToFind}" ka index: ${index}`);
//     } else {
//       document.write(`Word "${word}" mein letter "${letterToFind}" nahi paya gaya.`);
//     }
// =========================================================================================
// Q.NO=4
// ANS=
// let word = "Islamabad";
// let letterToFind = "l";
// let lastIndex = word.lastIndexOf(letterToFind);

// if (lastIndex !== -1) {
//   document.write(`Word "${word}" mein letter "${letterToFind}" ka last index: ${lastIndex}`);
// } else {
//   document.write(`Word "${word}" mein letter "${letterToFind}" nahi paya gaya.`);
// }
// ================================================================================================
// Q.NO=5
// ANS=
// let word = "Pakistani";
// let indexToFind = 3;

// if (indexToFind >= 0 && indexToFind < word.length) {
//   let character = word.charAt(indexToFind);
//   document.write(`"${word}" Character at index ${indexToFind}:${character}`);
// } 
// ==============================================================================
// Q.NO=6
// ANS=
// let firstName = prompt("Put The First Name:");
// let lastName = prompt("Put The Last Name:");

// let fullName = firstName.concat(" ", lastName);

// alert("WellCome : " + fullName + ".");
// =================================================
// Q.NO=7
// ANS=
// let cityName = "Hyederabad"
// let changeName = cityName.replace("Hyeder","Islam");
// document.write(`City:${cityName}<br>After Replacement:${changeName}`)
// =====================================================================
// Q.NO=8
// ANS=
// let word = "Ali and Sami are best friends. They play cricket and football together.";
// let AfterReplacement = word.replace("and", "&");
// document.write(`Original Message: ${word}<br>After Replacement: ${AfterReplacement}`);
// ======================================================================================
// Q.No=9
// ANS=
// let strNumber = "472";
// let numValue = parseInt(strNumber);

// document.write(`Original String: ${strNumber}<br>Converted Number: ${numValue}<br>Type of Original String:
//  ${typeof strNumber}<br>Type of Converted Number: ${typeof numValue}`);
// ==========================================================================================================
// Q.NO=10
// ANS=
// var name = prompt("Put Your Name")
// var captial = name.toUpperCase();
// document.write("Orignal name: " + name + "<br>"+"Captial name : " +captial)
// ===========================================================================
// Q.NO=11
// ANS=
// var name = prompt("Put Your Name");
// var tital = toTitleCase(name);
// document.write("Orignal name: "+ name + "<br>"+"Title name :" + tital)
// function toTitleCase(input) {
//       return input.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
//         return match.toUpperCase();
//       });
//     }
// =========================================================================
// Q.NO=12
// ANS=
// var num = 35.36
// var number =num.toString();
// var modify = number.replace(".", "");
// document.write(`Original Number: ${num}<br>Modified String: ${modify}`);
// ========================================================================
// Q.NO=13
// ANS=

// let username = prompt("Enter your username:");
// function containsSpecialSymbols(username) {
//   let specialSymbols = ['@', '.', '!', ','];
//   for (let i = 0; i < username.length; i++) {
//     if (specialSymbols.includes(username[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// if (containsSpecialSymbols(username)) {
//   alert("Please enter a valid username without special symbols [@, ., !, ,]");
// } else {
//   alert(`Welcome, ${username}!`);
// }
// ==============================================================================
// Q.NO=14
// ANS=

// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Enter an item to search:");
// function isItemInArray(item, array) {
//   const lowerCaseItem = item.toLowerCase();
//   return array.some((element) => element.toLowerCase() === lowerCaseItem);
// }
// if (isItemInArray(userInput, A)) {
//   alert(`Yes, '${userInput}' is found in the list.`);
// } else {
//   alert(`No, '${userInput}' is not found in the list.`);
// }
// ==========================================================================
// Q.NO=15
// ANS=
// let password = prompt("Enter a password:");
// function validatePassword(password) {
//   let containsAlphabets = /[a-zA-Z]/.test(password);
//   let containsNumbers = /[0-9]/.test(password);
//   let doesNotStartWithNumber = /^[^0-9]/.test(password);
//   let isAtLeastSixCharactersLong = password.length >= 6;
//   return containsAlphabets && containsNumbers && doesNotStartWithNumber && isAtLeastSixCharactersLong;
// }
// if (validatePassword(password)) {
//   alert("Password is valid.");
// } else {
//   alert("Please enter a valid password that meets the specified requirements.");
// }
// =======================================================================================================
// Q.NO=16
// ANS=
// let university = "University of Karachi";
// let universityArr = university.split(" ");
// for (i = 0; i < universityArr.length; i++) {
//     document.write("Elements " + [i] + ":" +universityArr[i] +"<br>")
// }
// =====================================================================
// Q.NO=17
// ANS=
// let userInput=prompt("Put Your Input")
// let lastCharacter = userInput.charAt(userInput.length - 1);
// document.write("The Last Character is : "+ lastCharacter);
// ===========================================================
