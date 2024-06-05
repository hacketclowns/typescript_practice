import { isMemberName } from "typescript";

export interface PersonInterface {
    name: string,
    code: string | number,
    charge: number,
    description?: string,
    sayHello: () => string,

}

class PersonClass {
    sayHello() {
        console.log("Grr");
        
    }
}


const person1: PersonInterface = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

const person2: PersonClass = new PersonClass();

person2.sayHello();

interface PetInterface {
    sayHello: () => string;
}


class PetClass {
    sayHello() {
        return "Hello"
    }
}

class Dog implements PetInterface {
    sayHello () {
        return "Hi from Dog";
    };
}

class Cat extends PetClass{
    
}