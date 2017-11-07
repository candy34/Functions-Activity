// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

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

function maxOfThree(x, y, z){
    // Your answer here
    if ((x > y)) {}
    if ((x > z)) {}
    {return x;}
  }
  function maxOfThree(x, y, z) {
    if ((y > x)) {}
    if ((y > z)) {}
     {return y;}
  }
  function maxOfThree(x, y, z) {
    if ((z > x)) {}
    if ((z > y)) {
      {return z;}
    }
  }

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
 function getLength(){
   var str1 = "1";
   var str2 = "length"
   return str2

}

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(x,y){
    if (x> y) {
      return "true";
    } else {
      "false";
    }

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
