//
// Object Destructuring
//

// const person = {
//     name: 'Parth',
//     age: 21,
//     location: {
//         city: 'Junagadh',
//         temp: 91
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperatue } = person.location;
// if(city && temperatue) {
//     console.log(`It's ${temperatue} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher; 

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);