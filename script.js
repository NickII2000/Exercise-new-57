'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
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

// user.birthday = '01/01/2001'; //ошибка

// writable
// enumerable
// configurable