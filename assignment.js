// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function factorial (num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    return 1;
}
num1= 5
console.log(num);

function myfunction(num) {
return function(number){
num + number;
}

}
const num1 = myfunction(5);
console.log(num2(4));


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


let arr = {1,2,3,4,5};

function myarray(array,val) {
if (array.length === 0){
  return false;
} else if (array[0] === val){
  return true;
} else {
      return myarray(array.slice(1), val);
} }
const array = [1,2,3,4,5];
console.log(myarray(array,4));
console.log(myarray(array,8));

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


function newpara(text){
const newpara = document.createElement("p");

}
newpara ( "This is my assignment");




// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


function backgroundcolorchanger(box, color) {
box.style.backgroundcolorchanger = color;
}
const mybox = document.querySelector("class");
backgroundcolorchanger(mybox, "black");

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


function saveObjectToLocalStorage(key, obj) {
localStorage.setItem(key, JSON.stringify(obj));
}

// Example usage:
const myobj = {name: "John", age: 30};
saveObjectToLocalStorage("myKey", myobj);
console.log(myobj);


// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getObject(key) {
const obj = localStorage.getItem(key);
return JSON.parse(obj);
}

const myObject = getObject("myKey");
console.log(myObject); 

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object


function saveobj(obj) {
for( const prop in obj) {
  localStorage.setitem(prop, JSON.stringify(obj[prop]));

}
const newobj ={};
for (const prop in obj) {
  newobj[prop] = JSON.parse(localstorage.getitem(prop));
}
return newobj;
}
const myobject = { name: "aliya", age: 23};
const newobject= saveobj(myobject);
console.log(newobject);