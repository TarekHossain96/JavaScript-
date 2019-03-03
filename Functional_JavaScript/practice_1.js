
// 1. Create a function 

function sayName(name){
    return 'Hello, '+name;
}


// 2. === function can be stored in a Variable ====

// var hello = sayName;
// var fun = sayName('Tarek Hossain');

// console.log(hello);
// console.log(fun);


// 3. ==== A function can be stored an Array ===

// var arr = [1,2,3];
// arr.push(sayName)
// console.log(arr);

// 4. === A function can be stored as an object field or property ====

var person = {
    name : 'Tarek Hossain',
    fun  : sayName,
    print: function() {
        console.log('hi')
    }
}
person

console.log(person)

// 5. We can create function as needed
 var sum = 10 + (function () {return 50;})()
 sum;

// 6. we can pass function as an arguments

function funName(name, fun){
    return fun(name);
}
var result = funName('Tarek Hossain', sayName);
console.log(result);

// 7. we can return function from another function