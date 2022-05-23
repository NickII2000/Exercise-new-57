'use strict';

const line = Symbol('line');

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    },
    line: line,
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'name', { writable: false });
// user.name = 'Nick'; //ошибка
Object.defineProperty(user, 'gender', { value: 'male' });
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
user.age = 25;
console.log(Object.getOwnPropertyDescriptor(user, 'age'));

Object.defineProperty(user, 'birthday', { writable: false });
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

Object.defineProperty(user, 'address', { value: 'Russia', enumerable: true, configurable: true });
console.log(Object.getOwnPropertyDescriptor(user, 'address'));

Object.defineProperty(user, 'showMyPublicData', { enumerable: false });

for (let key in user) console.log(key);

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperties(user, { name: { writable: false }, surname: { writable: false } });

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.line);

// user.birthday = '01/01/2001'; //ошибка

// writable
// enumerable
// configurable