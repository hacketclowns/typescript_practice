// Arrow function
const sayHi = (name) => {
    console.log(`Hello ${name}`);
};


sayHi("Dear Daniel");


function sayGoodBye(name) {
    console.log(`Bye ${name}, we are almost done`);
}

sayGoodBye("Dear Daniel");




function show(name: string): number {
    console.log("HEllo!");
    return 1
}

function show2(response: {id; name; charge; number}): number {
    console.log(`Hello ${response.name} with id ${response.id}`);
    return 1
}

const response2 = {
    id: 1,
    name: "Daniel",
    charge: "Developer",
    number: 4,
}

show2(response2)


function show3({name, ...other}: {id; name; charge; number}): number {
    console.log(`Id name sent is ${name}`);
    return 1
}

const response3 = {
    id: 2,
    name: "Daniel Ticona",
    charge: "Developer",
    number: 1,
}

show3(response3);


interface ServiceCD {
    id: number,
    name: string,
    charge: string,
    number: number,
}


function show4({name, ...other}: ServiceCD): number {
    console.log(`Id name sent is ${name} from Show4`);
    console.log("Other data", other);
    
    return 1
}

const response4: ServiceCD = {
    id: 2,
    name: "Daniel Ticona",
    charge: "Developer",
    number: 1,
}

show4(response4);
export {}