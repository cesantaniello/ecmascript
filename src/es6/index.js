function newFunction (name, age, country){
    var name = name || 'Carlos';
    var age = age || 37;
    var country = country || 'VE';
    console.log(name, age, country);
}

//es6
function newFunction2 (name = 'Carlos', age = 37, country = "VE"){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
