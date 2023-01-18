var firstName; //undefined
firstName = 'Julian';
console.log(firstName);

var lastName = "David"; //declarar / asignar
lastName = 'Ana'; //reasignar
console.log(lastName);

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // reasignando
console.log(secondName);

// let Una variable declarada con let puede ser reasignada, pero no redeclarada.
let fruit = 'Apple' //declarar / asignar
fruit = 'kiwi'; // reasignar
console.log(fruit);

//const:Una variable declarada con const no puede ser redeclarada, ni reasignada. 
const animal = 'Perro'; //declarar / asignar
//animal = 'Gato'; // reasignar
console.log(animal);

const vehiculos = [];
vehiculos.push("twingo");
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos);