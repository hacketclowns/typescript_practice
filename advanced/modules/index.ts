import { PI, generateId } from "./utils.module";
import {User as Person} from "./utils.module";
// import * as Utils from ".utils.module";
const myNumber = 10 * PI;


const myUser: Person = {id: generateId().toString(), name: "Daniel"}

console.log({
    myNumber, myUser
})