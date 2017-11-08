// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.
console.log('heeyy');
function max(x,y){
    // Your answer here
    if (x>y) {
        console.log(x + " is bigger than " + y);
        return x;
    } else if (x == y) {
        console.log("These numbers are equal");
    } else {
        console.log(y + " is bigger than " + x);
        return y;
    }
}
// max(5,6);
// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.
//num1 = 3, num2 = 2, num3 = 1
console.log(1 < 2 && 1 > 3);
//INPUT: 3 NUMBERS
function maxOfThree(num1, num2, num3){
    // Your answer here
    //compare num1 to num2 and num3
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    //compare num2 to num3
    if (num2 > num3 ) {
      return num2;
    } else {
      return num3;
    }
    //else return num3

    //OUTPUT: 1 NUMBER
    // return 1 number
}
console.assert(maxOfThree(3, 2, 1) === 3);
console.assert(maxOfThree(2, 4, 1) === 4);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (char === 'a' || char ==='e' || char === 'i' || char === 'o' || char === 'u'){
        console.log(char + " is a vowel");
    } else {
        console.log(char + " is not a vowel")
    }
}
// isVowel('d');
// isVowel('a');

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x,y){
    var answer = x+ y;
            console.log(answer)

    return answer;
};
// sum(2,4)


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z) {
  return (x + y + z) / 3
}



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
//INPUT: 1 STRING
 function getLength(str){

   console.log(str);
  //  OUTPUT: NUMBER
console.log(str.length);
  return str.length;
}


console.assert(getLength('you') === 3);
console.assert(getLength('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.') === 446)
getLength('Candace')
getLength('bubba')
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(x,y){
    if (x > y) {
      return true;
    } else {
      return false;
    }

}

function getAllWordsThatEqualThree(){
  const wordsThatEqualThree = [];
}

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greeting(timeofDay,firstname){
    console.log('Good'+'timeofDay'+'firstname');
}
// greeting('morning','Teddy');

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(dayoftheWeek,animal,pizza,liger){
    return "and..." + animal +"" + dayoftheWeek+ "animal" + pizza + "skipped" + pizza + "Liger" + "?";
}
