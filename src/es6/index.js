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

let name = 'Carlos';
let age = 37;

//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age};
console.log(obj2);

//Arrow functions
const names = [
    {name : 'Carlos', age: 37},
    {name : 'Yesica', age: 27}
]

//es5
let listOfNames = names.map(function (item){
    console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

let listOfNames3 = (name, age) => {
    console.log(item.name);
};

let listOfNames4 = name => {
    console.log(item.name);
};

const square = num => num * num;

//Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('OK');
        }else{
            reject('KO');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

//Class
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import {hello} from './module';
hello();

//Generator
function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);