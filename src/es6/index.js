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


let lorem = "Frase importante \n"
+ "Otra frase importante."

//es6
let lorem2 = `¡Ah! Una tercera frase importante.
Y esta es la cuarta ¡caramba!
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Carlos',
    'age': 37,
    'country': 'VE'
}

console.log(person.name, person.age);

//es6
let {name, age} = person;
console.log(name, age);

let team1 = ['Carlos', 'Eduardo', 'Juan'];
let team2 = ['Ana', 'Emilia', 'Juana'];

//sum of arrays es6
let educationTeam = ['Pepe', ...team1, ...team2];

console.log(educationTeam);

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

var a = 'a';
a = 'b';
console.log(a);

//const declaration es6
const b = 'b';
b = 'c';
console.log(b);