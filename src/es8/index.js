const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(`Object has: `, entries.length, ` elements.`);

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'caso';
console.log(string.padStart(5,'o'));
console.log(string.padEnd(6,'ta'));

//Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 1000)
        : reject(new Error('Test error'))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction();