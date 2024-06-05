export interface Person {
    name: string,
    code: string | number,
    charge: number,
    description?: string,
    sayHello: () => string,

}


let person: Person = {
    name: "kevin",
    code: "01",
    charge: 1,
    description: "Hola",
    sayHello: () => {
        // saveToken()
        // takePicture()
        const persons = [1,2, 3, 4];
        persons.map((p) => p.toFixed(1))
        return "Hi"
    }
}

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    sayHello: () => "Hi 2",
}

secondPerson.description?.toLocaleUpperCase()

secondPerson.description = "Say hi"




