class Animal {
    name: string = "generic Animal";
    private age: number = 10;
    protected identity: string = "111"

    constructor() {}

    sayHi() {
        console.log("Grrr", this.age);
    }
}


class Dog extends Animal {
    type: string = "German";
    
    constructor() {
        super();
        console.log("registered dog.");
    }

    sayHi(): void {
        console.log(this.identity)
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();


const myDog: Dog = new Dog();
console.log(myDog.type)