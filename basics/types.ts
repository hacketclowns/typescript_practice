let age: string = "20";
let agmonths: number = 20;
let isSenior: boolean = true;
let person: Object = {};

let fruits: string[] = ["apple", "pear"];
let fruitsObjects: Object[] = [{}, {name: "pear"}];

let response: any = "Hola";

response = 20;
response = true;
response = ["Hi", 123]



function greeting(): void {
    console.log("Hi")
}

let response2: unknown;
response2 = true;

if (response2) {

}

let response3 = null;
let response4 = undefined;


let response5: number | null = 5;
response5?.toString();

let response6: number | undefined;
response5?.toString();

let responseProducts: string | undefined;
let responsePartners: string | undefined;


type ServiceResponseType = string | undefined;

let response7: ServiceResponseType;


let responseProducts2: ServiceResponseType;
let responsePartners2: ServiceResponseType;
responsePartners?.toString().concat("");

// type assertion 

let message: any = "";

(message as string).slice(1);
let messageUpperCase = (message as string).toUpperCase()
let messageUpperCase2 = <string> message;

messageUpperCase2.toLocaleUpperCase();

const canvas = <HTMLCanvasElement> document.getElementById("canvas");
canvas.toDataURL();


