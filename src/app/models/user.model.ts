export enum Role {
    Visitor = "Visitor",
    Moderator = "Moderator",
    Admin = "Admin"
}

export class User {

    constructor(public userName: string, public uid: string, public role: Role) {}
    
}