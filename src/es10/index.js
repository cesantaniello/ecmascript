//Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2))

//Flat map
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//trimStart
let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart());

//trimEnd
let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd());

//es5 try-catch
try {

}catch(error){
    error
}

//es10 try-catch
try {

}catch{
    error
}

//Arrays to Objects
let entries = [["name", "carlos"], ["age", 37]];
console.log(Object.fromEntries(entries));

//Symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);