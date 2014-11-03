//console.log outputs to console

//console.log ("Hello, this is my first JavaScript project. How cool is that?");

//var is variable
var name = prompt("What is your name?");

alert("Hi, " + name + ". Wanna see my FixBuzz? It's in the console ..." );

//console.log("The user's name is " + name);


/* Fizz Buzz
==========================

Write a program that loops through the numbers 1 through 100. Each number should be printed to the console, using console.log(). However, if the number is a multiple of 3, don't print the number, instead print the word "fizz". If the number is a multiple of 5, print "buzz" instead of the number. If it is a multiple of 3 and a multiple of 5, print "fizzbuzz" instead of the number.

Hint. Use loops and if/else statments. In javascript the % is the modulo, or remainder operator. a % b evaluates to the remainder of a divided by b. 11 % 3 is equal to 2.
========================= */


console.log("Hey, " + name + ", check this out.");

console.log("Begin count-down from 100: ");

for(var counter=100; counter; counter=counter-1){
  if(counter%15){
    if(counter%5){
      if(counter%3){
        console.log("Still counting ... ",counter);
      }else{
        console.log("Fizz! (",counter,")");
      }
    }else{
      console.log("Buzz! (",counter,")");
    }
  }else{
    console.log("FizzBuzz! (",counter,")");
  }
}

console.log("Hey, " + name + ", Just for the record, I did not look up the answer before I wrote this! I totally figured it out on my own!");

