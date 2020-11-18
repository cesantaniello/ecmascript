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