export type Person = {
    name: string;
    code: string;
    description?: string;
};

const newPerson: Person = {
    code: "H",
    name: "Daniel",
};

type ServiceResponse = string | null | number | undefined;

let response: ServiceResponse;

type UserCharge = "admin" | "normal" | "superUser"


const myUserType: UserCharge = "superUser";
