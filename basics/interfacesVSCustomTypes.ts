export interface Person {
    name: string;
    age: number;
};

export interface Employee extends Person {
    charge: string;
}

const newEmployee: Employee = {
    charge: "",
    name: "",
    age: 0
}

// If we try to use this extends with types we are not able to do it


// Union types

type User = {
    id: string;
}

type Admin = User & Employee;

const myAdmin: Admin = {
    age:  2,
    charge: "",
    name: "",
    id: "id2"
}

// types gots a little bit more specification
type ServiceResponseToken =  string | null | undefined | number;

type UserTypes = "Admin" | "superUser" | 0;

const myUser: UserTypes = "superUser"


interface Developer {
    name: string;
    stack: string[];
}

interface Developer {
    phone: string
}
const me: Developer = {
    name: "Daniel",
    stack: ["mern", "pdrp"],
    phone: "+591558515185",
};