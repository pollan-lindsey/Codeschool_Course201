"use strict";
// Javascript review!

// are there ways to check if my JS is working properly?
console.log(' I am connected');

 
function demoCode(){
// We need a way to greet our users when they open our page..
alert("WELCOME!!!")
// How are we supposed to know our user's name? Is there a way to store it?
// create a variable
let userName = prompt('What is your name');

// TRUE or FALSE: the keyword 'var' is acceptable to use when declaring variables?
// true, but to be safe we use let or const
// const locks the declaration 
// let can always be changed

// We need to make sure the first letter of their name is capitalized after they enter it.
if(userName[0] === userName[0].toUpperCase()){
console.log('lunch time')
}else{
    console.log('....')
} 
}

// call our function
demoCode();  



// if/else if/else
//bracket notation 
// strings are an array of characters

// It would help to know more about our users; How old are they, What is thier favorite thing to do on the weekend? etc...


// We might need to add quick statements in our JS file so other developers can see what we have / are working on.

// Our JS needs some spice to it..What else can we add?

