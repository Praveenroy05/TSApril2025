// Data type - Which defines what kind of data a variable is storing
// 2 types of Data Type
// 1. Primitive Data Type - Only one value
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. any
// 7. union
// 2. Non-Primitive Data Type - 
// - Array
// - Object - {key : value}
// - Function
// 1. Primitive Data Type - Only one value
// 1. number - number repesents both integer(-123, 123) and floating point value (180.0987676)
// Keyword(var/let/const) variableName : datatype (optional) = value
var data1 = 10.545;
data1 = 10;
// Type Annotation
var data2 = 10.545;
//data2 = "TS"
// Type Inference
var data3 = "10.545";
//data3 = 10
// 2. string - Combination of characters - Hello
/*
1. Single  Quote ('') - String Literal
2. Double Quote ("") - String Literal
3. backtick (``) - Template Literal - Wehen ever we try to use a variable inside another string -     ${variable}
*/
var singleQuote = 'This is a single quote string';
console.log(typeof singleQuote);
var doubleQuote = "This is a double quote string";
var templateLiteral = "This is a string";
var age = 40;
var greet = "You are of age : ".concat(age);
console.log(greet);
// 3. boolean - true -1/false -0
var isAdmin = true;
console.log(isAdmin);
var bool = 10 > 50;
console.log(bool);
// 4. null  - No value
var data4 = null;
// if(obj ==null){
//     new obj()
// }
// 5. undefined - No value - No assignment - No initialization
var data5;
console.log(data5); // undefined
// 6. any (Special datatype)
var data6 = 10;
data6 = "10";
data6 = true;
data6 = null;
data6 = undefined;
// 7. union - Allows a variavle to holds multiple data types 
var data7 = 10;
data7 = "10";
//data7 = true
