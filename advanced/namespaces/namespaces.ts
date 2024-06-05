namespace DataBaseEntity {
    export class User {
        constructor(public name: string) {}
    }

    const myUser: User = new User("Daniel")
    console.log(myUser);
    
}

const myOtherUser = new DataBaseEntity.User("Daniel 2")
console.log(myOtherUser);
