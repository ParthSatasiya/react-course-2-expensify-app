const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Parth',
            age: 21
        });
        // reject('something went wrong!');
    }, 5000);
});

console.log('Before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise!');
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('After');