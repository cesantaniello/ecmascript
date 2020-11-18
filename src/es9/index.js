const person = {
    'name': 'Carlos',
    'age': 37,
    'country': 'VE'
};

let {country, ...all} = person;
console.log(all);

const person = {
    'name': 'Carlos',
    'age': 37,
};

const country = {
    ...person,
    'country': 'VE'
}

console.log(country);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('OK'), 1000)
            : reject(new Error('KO'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Done'))

//RegEx
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-11-18');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
