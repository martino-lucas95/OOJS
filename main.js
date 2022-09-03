const person = {
    name: {
        first: 'Lucas',
        last: 'Martino',
    },
    age: 27,
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name.first}.`);
    },
};

const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;


function Person(name, age){
    this.name = name;
    this.age = age;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
      }
}
  