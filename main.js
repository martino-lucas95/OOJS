const person = {
    name: ['Lucas', 'Guillermo'],
    age: 27,
    bio: () =>{
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelfe: () => {
        console.log(`Hi! I'am ${this.name[0]}.`);
    }
};
