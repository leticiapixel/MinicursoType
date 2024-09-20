"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number
let x = 10;
x = 25;
console.log(x);
// inferencia x annotation
let y = 12; // por inferencia
// y = 'teste 
let z = 12; // por annotation
// tipos básicos
let firstName = 'Mateus';
let age = 30;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = 'Joao';
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
// object literals -> {prop: value}
const user = {
    name: 'Pedro',
    age: 18
};
console.log(user);
console.log(user.name);
// any - aceita qualquer tipo de dado
let a = 0;
a = 'teste';
a = true;
a = [];
// union type
let id = '10';
id = 200;
const userId = 10;
const productId = '0001';
const shirId = 123;
// enum
// tamanho de roupas(size:Medio, size:Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'camisa gola V',
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
//teste = 'outrovalor'
teste = 'autenticado';
teste = null;
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Leticia'));
function logger(msg) {
    console.log(msg);
}
logger('teste');
function greeting(name, greet) {
    if (greet) {
        console.log(`Ola ${greet} ${name}`);
        return;
    }
    console.log(`Ola ${name}`);
}
greeting("Jose");
greeting("Jose", 'ok');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Nao foi passado um numero`);
}
doSomething(5);
doSomething(true);
// generics
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItens(a1);
showArraysItens(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuario e: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Role do usuario e: ${this.role}`);
            return;
        }
        console.log(`Info restrita`);
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// heranca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// Decorators
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
